import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import { PageHeader } from "@/components/SiteShell";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Yves Akoto" },
      { name: "description", content: "Notes and write-ups on AI agents, ML and software by Yves Akoto." },
      { property: "og:title", content: "Blog — Yves Akoto" },
      { property: "og:description", content: "Notes on AI agents, ML and software." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHeader n="06" kicker="Blog" title={<>Journal<span className="text-orange">.</span></>} />
      {posts.length === 0 && <p className="text-muted-foreground">No posts yet.</p>}
      <div className="divide-y border-y">
        {posts.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group grid gap-4 py-10 md:grid-cols-[1fr_3fr_auto] md:items-center">
            <p className="meta text-muted-foreground">{p.meta.date}</p>
            <div>
              <h2 className="display text-4xl transition-colors group-hover:text-orange md:text-6xl">{p.meta.title}</h2>
              {p.meta.summary && <p className="mt-3 text-lg">{p.meta.summary}</p>}
            </div>
            <span className="display text-5xl transition-transform group-hover:translate-x-2">→</span>
          </Link>
        ))}
      </div>
    </>
  );
}
