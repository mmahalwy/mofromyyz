---
title: "Twitter auth with Rails api + Nextjs"
date: "2020-06-28"
description: "A guide to Twitter authentication on Rails API and Nextjs"
readTime: "7 min read"
category: "Code"
---

This guide addresses the challenge of integrating a Rails API backend with a Next.js frontend for Twitter authentication.

## What This Guide Covers

- Setting up Devise, Devise-JWT, and OmniAuth for Twitter
- API-side code for client authentication
- Client-side code for initiating auth and storing JWT tokens

## Backend Setup: Rails API

### Libraries Required

```ruby
gem "rack-cors"
gem "devise"
gem "devise-jwt", "~> 0.6.0"
gem "omniauth"
gem "omniauth-twitter"
gem "omniauth-google-oauth2"
```

### Configure devise.rb

```ruby
config.omniauth :twitter, Rails.application.credentials.dig(:twitter, :api_key),
                Rails.application.credentials.dig(:twitter, :api_secret)
config.omniauth :google_oauth2, Rails.application.credentials.dig(:google, :api_key),
                Rails.application.credentials.dig(:google, :api_secret)

config.jwt do |jwt|
  jwt.secret = Rails.application.credentials.dig(:jwt_key)
  jwt.dispatch_requests = [
      ["POST", %r{^/login$}],
      ["GET", %r{^/auth/twitter/callback$}],
      ["GET", %r{^/auth/google_oauth2/callback$}]
    ]
  jwt.revocation_requests = [
    ["DELETE", %r{^/logout$}]
  ]
  jwt.expiration_time = 2.weeks.to_i
end
```

### Update User Model

```ruby
devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable, :omniauthable,
         :jwt_authenticatable, jwt_revocation_strategy: self,
         omniauth_providers: %i[twitter google_oauth2]
```

### OmniAuth Callbacks Controller

```ruby
class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def passthru
  end

  def twitter
    resource = User.from_omniauth(request.env["omniauth.auth"],
                                  request.env["omniauth.params"].dig("user_id"))
    sign_in(resource_name, resource)
    redirect_to "#{redirect_url}/auth?jwt=#{request.env["warden-jwt_auth.token"]}"
  end

  def google_oauth2
    resource = User.from_omniauth(request.env["omniauth.auth"],
                                  request.env["omniauth.params"].dig("user_id"))
    sign_in(resource_name, resource)
    redirect_to "#{redirect_url}/auth?jwt=#{request.env["warden-jwt_auth.token"]}"
  end

  private
    def redirect_url
      request.env["omniauth.params"].dig("source_url") || (
        Rails.env.production? ? "https://YOUR_WEBSITE_HERE.com" : "http://localhost:8000")
    end
end
```

### Routes

```ruby
devise_for :users,
  path: "",
  path_names: {
    sign_in: "login",
    sign_out: "logout",
    registration: "signup"
  },
  controllers: {
    sessions: "sessions",
    registrations: "registrations",
    omniauth_callbacks: "omniauth_callbacks"
  }
```

### Configure Session Middleware

Add to `application.rb`:

```ruby
config.session_store :cookie_store, key: "_shepherd_session"
config.middleware.use ActionDispatch::Cookies
config.middleware.use ActionDispatch::Session::CookieStore, config.session_options
```

### How the Backend Flow Works

- Requests to `/auth/twitter` trigger OmniAuth's OAuth dance
- Successful authentication redirects to `/auth/twitter/callback`
- The controller creates/updates user records, signs them in, and redirects to the client with JWT token attached as query parameter

## Frontend Implementation: Next.js

### Twitter Auth Button Component

```typescript
import React, { ReactNode } from 'react';
import queryString from 'query-string';
import Button from './dls/Button';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { authenticate } from '../utils/authentication';
import { API_URL } from '../constants';
import { useRouter } from 'next/router';
import useToasts from '../hooks/useToasts';

type TwitterAuthButtonProps = {
  block?: boolean;
  userId?: number;
  children?: ReactNode;
};

const TwitterAuthButton = ({
  block,
  userId,
  children = 'Sign in with Twitter',
}: TwitterAuthButtonProps) => {
  const { push } = useRouter();
  const { addSuccessToast } = useToasts();

  const handleAuth = () => {
    const q = queryString.stringify({
      source_url: window.location.origin,
      user_id: userId,
    });

    authenticate({
      provider: 'twitter',
      url: `${API_URL}/auth/twitter?${q}`,
      cb: () => {
        addSuccessToast('Logged in successfully');
        push('/');
      },
    });
  };

  return (
    <Button onClick={handleAuth} block={block}>
      <Twitter size={20} /> {children}
    </Button>
  );
};

export default TwitterAuthButton;
```

### Authentication Utility

```typescript
export const authenticate = ({
  provider,
  url,
  tab = false,
  cb,
}: AuthenticateArg) => {
  let name = tab ? '_blank' : provider;
  openPopup(provider, url, name);

  function receiveMessage(event) {
    if (event.origin !== window.location.origin) {
      return;
    }

    if (event.data.jwt && event.data.success) {
      cb();
    }
  }

  window.addEventListener('message', receiveMessage, false);
};
```

### Popup Window Management

```typescript
var settings = 'scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no';

function getPopupOffset({ width, height }) {
  var wLeft = window.screenLeft ? window.screenLeft : window.screenX;
  var wTop = window.screenTop ? window.screenTop : window.screenY;
  var left = wLeft + window.innerWidth / 2 - width / 2;
  var top = wTop + window.innerHeight / 2 - height / 2;
  return { top, left };
}

function getPopupSize(provider) {
  switch (provider) {
    case 'twitter':
      return { width: 495, height: 645 };
    default:
      return { width: 1020, height: 618 };
  }
}

function getPopupDimensions(provider) {
  let { width, height } = getPopupSize(provider);
  let { top, left } = getPopupOffset({ width, height });
  return `width=${width},height=${height},top=${top},left=${left}`;
}

export default function openPopup(provider, url, name) {
  return window.open(url, name, `${settings},${getPopupDimensions(provider)}`);
}
```

### Auth Callback Page

```typescript
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import queryString from 'query-string';
import { Title1 } from '../components/dls/Title';

const Auth = () => {
  const router = useRouter();
  const [, setCookie] = useCookies();
  const {
    query: { jwt },
  } = queryString.parseUrl(router.asPath);

  useEffect(() => {
    if (jwt) {
      setCookie('jwt', jwt);
      window.opener.postMessage(
        {
          jwt,
          success: true,
        },
        '*'
      );
      window.close();
    }
  }, []);

  return (
    <div>
      {jwt ? (
        <Title1>Loading...</Title1>
      ) : (
        <Title1>Authentication failed</Title1>
      )}
    </div>
  );
};

export default Auth;
```

### Client-Side Flow

1. User clicks the Twitter auth button
2. A popup window opens, directing to the API's `/auth/twitter` endpoint
3. After successful authentication, the API redirects to `/auth?jwt=TOKEN`
4. The auth page stores the JWT in cookies and notifies the opener window via `postMessage`
5. The popup closes and the original window triggers a callback, redirecting to the homepage
