import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime: string;
  category?: string;
  draft?: boolean;
};

export function getAllPosts(): PostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        readTime: data.readTime || "3 min read",
        category: data.category,
        draft: data.draft || false,
      } as PostMeta;
    });

  const isProduction = process.env.NODE_ENV === "production";
  const filtered = isProduction ? posts.filter((p) => !p.draft) : posts;

  return filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = result.toString();

  const isDraft = data.draft || false;
  if (isDraft && process.env.NODE_ENV === "production") {
    throw new Error("Post not found");
  }

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    readTime: (data.readTime as string) || "3 min read",
    category: data.category as string | undefined,
    image: (data.image as string) || null,
    draft: isDraft,
    contentHtml,
  };
}
