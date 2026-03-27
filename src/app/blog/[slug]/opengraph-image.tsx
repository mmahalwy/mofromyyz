import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Blog post cover image";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "#111111",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {post.category && (
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                color: "#60a5fa",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 600,
              }}
            >
              {post.category}
            </div>
          )}
          <div
            style={{
              fontSize: post.title.length > 60 ? "48px" : "56px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              display: "flex",
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#a0a0a0",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            {post.description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            paddingTop: "40px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "#666",
              display: "flex",
            }}
          >
            {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            &middot; {post.readTime}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#888",
              fontWeight: 600,
              display: "flex",
            }}
          >
            mofromyyz.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
