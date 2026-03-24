import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import {
  MantineProvider,
  ColorSchemeScript,
  Container,
  Group,
  Anchor,
  createTheme,
} from "@mantine/core";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const theme = createTheme({
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#1A1A1A",
      "#111111",
      "#000000",
      "#000000",
    ],
  },
});

export const metadata: Metadata = {
  title: {
    default: "Mo from YYZ",
    template: "%s | Mo from YYZ",
  },
  description:
    "Mohamed El Mahallawy — software engineer, startup founder, and writer.",
  metadataBase: new URL("https://mofromyyz.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mofromyyz.com",
    siteName: "Mo from YYZ",
    title: "Mo from YYZ",
    description:
      "Mohamed El Mahallawy — software engineer, startup founder, and writer.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mofromyyz",
    creator: "@mofromyyz",
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

function Header() {
  return (
    <Container size="sm" py="md">
      <Group justify="flex-end" gap="md" wrap="wrap">
        <Anchor component={Link} href="/" c="dimmed" underline="never" fz="sm">
          Home
        </Anchor>
        <Anchor component={Link} href="/blog" c="dimmed" underline="never" fz="sm">
          Blog
        </Anchor>
        <Anchor
          href="https://twitter.com/mofromyyz"
          c="dimmed"
          underline="never"
          fz="sm"
          target="_blank"
        >
          Twitter
        </Anchor>
        <Anchor
          href="https://github.com/mmahalwy"
          c="dimmed"
          underline="never"
          fz="sm"
          target="_blank"
        >
          GitHub
        </Anchor>
        <Anchor
          href="https://instagram.com/mofromyyz"
          c="dimmed"
          underline="never"
          fz="sm"
          target="_blank"
        >
          Instagram
        </Anchor>
        <ThemeToggle />
      </Group>
    </Container>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-mantine-color-scheme="dark" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto" theme={theme}>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
