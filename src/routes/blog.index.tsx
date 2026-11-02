import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import { PageHeader } from "@/components/SiteShell";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Yves Akoto" },
      {
        name: "description",
        content: "Notes and write-ups on AI agents, ML and software by Yves Akoto.",
      },
      { property: "og:title", content: "Blog — Yves Akoto" },
      { property: "og:description", content: "Notes on AI agents, ML and software." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHeader
        kicker="Blog"
        title={
          <>
            Journal<span className="text-blue">.</span>
          </>
        }
      />
      {posts.length === 0 && <p className="text-muted-foreground">No posts yet.</p>}
      <div className="divide-y border-y">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group grid gap-3 py-7 md:grid-cols-[1fr_3fr_auto] md:items-center"
          >
            <p className="meta text-muted-foreground">{p.meta.date}</p>
            <div>
              <h2 className="display text-2xl transition-colors group-hover:text-blue md:text-3xl">
                {p.meta.title}
              </h2>
              {p.meta.summary && (
                <p className="mt-2 text-sm text-muted-foreground">{p.meta.summary}</p>
              )}
            </div>
            <span className="text-2xl text-muted-foreground transition-transform group-hover:translate-x-1.5 group-hover:text-blue">
              →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
