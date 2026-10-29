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
      <PageHeader kicker="Experiences" title={<>Work<span className="text-blue">.</span></>} />
      <div className="space-y-5">
        {experiences.map((x) => (
          <article key={x.company} className={`rounded-2xl p-7 md:p-10 ${x.color}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="meta opacity-70">{x.period}</p>
              <p className="meta opacity-70">{x.place}</p>
            </div>
            <h2 className="display mt-4 text-3xl md:text-5xl">{x.company}</h2>
            <p className="mt-1.5 font-medium opacity-90">{x.role}</p>
            <ul className="mt-7 grid gap-5 md:grid-cols-3">
              {x.points.map((p) => (
                <li key={p} className="border-t border-current pt-3 text-sm leading-relaxed opacity-90">{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
