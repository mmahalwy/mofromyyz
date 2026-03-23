import { Container, Title, Text, Stack, Anchor, Group, Badge } from "@mantine/core";
import { getAllPosts } from "@/lib/blog";

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
              <Group gap="sm">
                <Title order={3} c="white">
                  {post.title}
                </Title>
                {post.category && (
                  <Badge size="sm" variant="light">
                    {post.category}
                  </Badge>
                )}
              </Group>
              <Text c="dimmed" fz="sm">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                &middot; {post.readTime}
              </Text>
              <Text c="dimmed">{post.description}</Text>
            </Stack>
          </Anchor>
        ))}
      </Stack>
    </Container>
  );
}
