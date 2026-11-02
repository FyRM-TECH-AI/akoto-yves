import { createFileRoute } from "@tanstack/react-router";
import { profile, projects } from "@/lib/profile";
import { PageHeader } from "@/components/SiteShell";
import { LinkPreview } from "@/components/LinkPreview";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Yves Akoto" },
      {
        name: "description",
        content:
          "Selected projects: a VRP optimization system and a machine-learning library from scratch.",
      },
      { property: "og:title", content: "Projects — Yves Akoto" },
      { property: "og:description", content: "Optimization systems and ML from scratch." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        kicker="Projects"
        title={
          <>
            Projects<span className="text-blue">.</span>
          </>
        }
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`flex min-h-80 flex-col justify-between rounded-2xl p-7 ${p.color}`}
          >
            <p className="meta opacity-70">{p.period}</p>
            <div className="mt-16">
              <h2 className="display text-3xl md:text-4xl">{p.name}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed opacity-90">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="meta rounded-full border border-current px-3 py-1 opacity-80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-10">
        More on{" "}
        <LinkPreview href={profile.github} className="underline decoration-blue underline-offset-4">
          my GitHub ↗
        </LinkPreview>
      </p>
    </>
  );
}
