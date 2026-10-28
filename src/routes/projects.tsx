import { createFileRoute } from "@tanstack/react-router";
import { profile, projects } from "@/lib/profile";
import { PageHeader } from "@/components/SiteShell";
import { LinkPreview } from "@/components/LinkPreview";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Yves Akoto" },
      { name: "description", content: "Selected projects: a VRP optimization system and a machine-learning library from scratch." },
      { property: "og:title", content: "Projects — Yves Akoto" },
      { property: "og:description", content: "Optimization systems and ML from scratch." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader n="04" kicker="Projects" title={<>Projects<span className="text-orange">.</span></>} />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.name} className={`flex min-h-[28rem] flex-col justify-between rounded-3xl p-8 ${p.color}`}>
            <div className="flex justify-between">
              <span className="meta">0{i + 1}</span>
              <span className="meta">{p.period}</span>
            </div>
            <div>
              <h2 className="display text-5xl md:text-7xl">{p.name}</h2>
              <p className="mt-4 max-w-md leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="meta rounded-full border border-current px-3 py-1">{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-12 text-lg">
        More on{" "}
        <LinkPreview href={profile.github} className="underline decoration-orange underline-offset-4">my GitHub ↗</LinkPreview>
      </p>
    </>
  );
}
