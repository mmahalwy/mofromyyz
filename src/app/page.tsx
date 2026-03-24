import { Container, Title, Text, Anchor, Stack, Group } from "@mantine/core";

export default function Home() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="lg">
        <Title order={1} fz={48}>
          Hi, I&apos;m Mo
        </Title>
        <Text fz="lg" lh={1.8}>
          I&apos;m a cofounder of an insurtech startup. Previously, I was a
          software engineer at Airbnb where I worked on an internal CMS tool.
        </Text>
        <Text fz="lg" lh={1.8}>
          Outside of work, I enjoy playing padel and pickleball, eating out, hanging out with
          friends, and building side projects.
        </Text>
        <Group gap="md">
          <Anchor
            href="https://twitter.com/mofromyyz"
            target="_blank"
            fz="lg"
          >
            Twitter
          </Anchor>
          <Anchor
            href="https://github.com/mmahalwy"
            target="_blank"
            fz="lg"
          >
            GitHub
          </Anchor>
          <Anchor
            href="https://instagram.com/mofromyyz"
            target="_blank"
            fz="lg"
          >
            Instagram
          </Anchor>
        </Group>
      </Stack>
    </Container>
  );
}
