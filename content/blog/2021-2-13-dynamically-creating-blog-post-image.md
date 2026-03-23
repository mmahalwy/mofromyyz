---
title: "Dynamically creating blog post image"
date: "2021-02-13"
description: "API response for making dynamic images for your blog post"
readTime: "1 min read"
category: "Code Bites"
---

Rather than manually designing graphics for each post, I developed an API that generates images dynamically using the post title and randomized background colors.

The implementation uses two primary libraries:
- **Jimp** for image manipulation
- **randomcolor** for generating colors

The API endpoint accepts a blog slug as a query parameter, retrieves the post metadata, and generates a 1200x630px JPEG image with centered, white text displaying the post title against a dark-toned random background color.

```typescript
import Jimp from 'jimp';
import randomcolor from 'randomcolor';
import { getFileBySlug } from '../../../utils/mdx';

export default async (req, res) => {
  const post = await getFileBySlug('blog', req.query.slug);

  const buffer = await new Promise((resolve) => {
    new Jimp(
      1200,
      630,
      randomcolor({ luminosity: 'dark', seed: req.query.slug }),
      async (err, image) => {
        const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);

        await image.print(
          font,
          0,
          0,
          {
            text: post.frontMatter.title,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
          },
          1200,
          630
        );

        const b = await image.getBufferAsync(Jimp.MIME_JPEG);
        resolve(b);
      }
    );
  });

  res.writeHead(200, { 'Content-Type': Jimp.MIME_JPEG });
  res.end(buffer, 'binary');
};
```

Key features:

- Deterministic color generation using the slug as a seed ensures consistent colors per post
- Centered text with proper vertical and horizontal alignment
- HTTP response returns JPEG binary data directly
- Eliminates manual image creation workflow
