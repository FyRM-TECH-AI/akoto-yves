import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { slug: post.slug, meta: post.meta };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.meta.title} — Yves Akoto` },
          { name: "description", content: loaderData.meta.summary ?? loaderData.meta.title },
          { property: "og:title", content: loaderData.meta.title },
          { property: "og:description", content: loaderData.meta.summary ?? loaderData.meta.title },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Post not found" }, { name: "robots", content: "noindex" }],
  }),
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useLoaderData();
  const post = getPost(slug)!;
  const { Component, meta } = post;
  return (
    <article className="mx-auto max-w-3xl pt-16 md:pt-24">
      <Link to="/blog" className="meta text-muted-foreground hover:text-foreground">
        ← All posts
      </Link>
      <p className="meta mt-10 text-muted-foreground">{meta.date}</p>
      <h1 className="display mt-3 text-4xl md:text-5xl">{meta.title}</h1>
      {meta.tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {meta.tags.map((t) => (
            <span key={t} className="meta rounded-full bg-subtle px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="prose-post mt-12">
        <Component />
      </div>
    </article>
  );
}
