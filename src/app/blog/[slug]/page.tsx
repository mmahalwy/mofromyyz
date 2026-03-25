import { Container, Title, Text, Anchor, Badge, Group } from "@mantine/core";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const metadata: Metadata = {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Mohamed El Mahallawy"],
      url: `https://mofromyyz.com/blog/${slug}`,
      siteName: "Mo from YYZ",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@mofromyyz",
    },
  };

  if (post.image) {
    const imageUrl = `https://mofromyyz.com${post.image}`;
    metadata.openGraph!.images = [{ url: imageUrl, width: 1200, height: 630 }];
    metadata.twitter!.images = [imageUrl];
  }

  return metadata;
}

function BlogJsonLd({ post }: { post: { title: string; description: string; date: string; slug: string } }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Mohamed El Mahallawy",
      url: "https://mofromyyz.com",
    },
    publisher: {
      "@type": "Person",
      name: "Mohamed El Mahallawy",
    },
    url: `https://mofromyyz.com/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mofromyyz.com/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <>
      <BlogJsonLd post={post} />
      <Container size="sm" py="xl">
        <Anchor href="/blog" c="dimmed" fz="sm" mb="md" display="block">
          &larr; Back to blog
        </Anchor>
        <Group gap="sm" mb="xs" align="center">
          <Title order={1}>
            {post.title}
          </Title>
          {post.draft && (
            <Badge size="lg" variant="light" color="yellow">
              Draft
            </Badge>
          )}
        </Group>
        <Text c="dimmed" fz="sm" mb="xl">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          &middot; {post.readTime}
        </Text>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </Container>
    </>
  );
}
