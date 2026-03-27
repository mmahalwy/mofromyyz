import { Container, Title, Text, Stack, Anchor, Group, Badge } from "@mantine/core";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata = {
  title: "Blog | Mo from YYZ",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="xl">
        Blog
      </Title>
      <Stack gap="xl">
        {posts.map((post) => (
          <Anchor
            key={post.slug}
            href={`/blog/${post.slug}`}
            underline="never"
            c="inherit"
          >
            <Stack gap={4}>
              <Title order={3}>
                {post.title}
              </Title>
              <Group gap="xs">
                {post.draft && (
                  <Badge size="sm" variant="light" color="yellow">
                    Draft
                  </Badge>
                )}
                {post.category && (
                  <Badge size="sm" variant="light">
                    {post.category}
                  </Badge>
                )}
              </Group>
              <Text c="dimmed">{post.description}</Text>
              <Text c="dimmed" fz="sm">
                {formatDate(post.date)} &middot; {post.readTime}
              </Text>
            </Stack>
          </Anchor>
        ))}
      </Stack>
    </Container>
  );
}
