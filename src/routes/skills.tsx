import { createFileRoute } from "@tanstack/react-router";
import { skills } from "@/lib/profile";
import { PageHeader } from "@/components/SiteShell";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Yves Akoto" },
      { name: "description", content: "Python, PyTorch, LangChain, FastAPI, Next.js, Docker and more." },
      { property: "og:title", content: "Skills — Yves Akoto" },
      { property: "og:description", content: "The tools Yves Akoto works with." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHeader kicker="Skills" title={<>Toolkit<span className="text-blue">.</span></>} />
      <div className="divide-y border-y">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-3 py-7 md:grid-cols-[1fr_3fr]">
            <p className="meta text-muted-foreground">{g.group}</p>
            <p className="display text-2xl leading-snug md:text-4xl">
              {g.items.map((s, i) => (
                <span key={s} className="transition-colors hover:text-blue">
                  {s}{i < g.items.length - 1 && <span className="text-muted-foreground"> / </span>}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
