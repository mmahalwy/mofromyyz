"use client";

import { Container, Group, Anchor } from "@mantine/core";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
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
