import { createFileRoute } from "@tanstack/react-router";
import { experiences } from "@/lib/profile";
import { PageHeader } from "@/components/SiteShell";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Yves Akoto" },
      { name: "description", content: "AI and web development internships at WAOUH MONDE and HOMINTEC." },
      { property: "og:title", content: "Experiences — Yves Akoto" },
      { property: "og:description", content: "AI and web development internships." },
    ],
  }),
  component: Experiences,
});

function Experiences() {
  return (
    <>
      <PageHeader n="03" kicker="Experiences" title={<>Work<span className="text-orange">.</span></>} />
      <div className="space-y-6">
        {experiences.map((x) => (
          <article key={x.company} className={`rounded-3xl p-8 md:p-12 ${x.color}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="meta">{x.period}</p>
              <p className="meta">{x.place}</p>
            </div>
            <h2 className="display mt-6 text-5xl md:text-8xl">{x.company}</h2>
            <p className="mt-2 text-xl font-medium">{x.role}</p>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {x.points.map((p) => (
                <li key={p} className="border-t border-current/30 pt-4 leading-relaxed">{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
