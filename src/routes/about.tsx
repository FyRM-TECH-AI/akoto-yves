import { createFileRoute } from "@tanstack/react-router";
import { certificates, education } from "@/lib/profile";
import { PageHeader } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yves Akoto" },
      {
        name: "description",
        content: "Education and certificates of Yves Akoto: Hugging Face, IBM, Aspire and more.",
      },
      { property: "og:title", content: "About — Yves Akoto" },
      { property: "og:description", content: "Education and certificates of Yves Akoto." },
    ],
  }),
  component: About,
});

function About() {
  const loop = [...certificates, ...certificates];
  return (
    <>
      <PageHeader
        kicker="About"
        title={
          <>
            About<span className="text-blue">.</span>
          </>
        }
      />
      <p className="display max-w-3xl text-2xl md:text-3xl">
        I'm AKOTO Yves, a curious builder from passionate by AI, building AI tools and bridging the gap between the potential of AI and its integration in daily life
      </p>

      <section className="mt-16">
        <p className="meta text-muted-foreground">Education</p>
        <div className="mt-5 divide-y border-y">
          {education.map((e) => (
            <div key={e.school} className="grid gap-3 py-6 md:grid-cols-[1fr_2fr_auto]">
              <p className="meta text-muted-foreground">{e.period}</p>
              <div>
                <h2 className="display text-2xl md:text-3xl">{e.school}</h2>
                <p className="mt-1.5">{e.degree}</p>
                {e.notes.length > 0 && (
                  <div className="mt-3 flex gap-2">
                    {e.notes.map((n) => (
                      <span key={n} className="meta rounded-full bg-green/25 px-3 py-1">
                        {n}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <p className="meta text-muted-foreground">{e.place}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between">
          <h2 className="display text-4xl md:text-5xl">Certificates</h2>
          <p className="meta text-muted-foreground">{certificates.length} earned</p>
        </div>
      </section>
      <div className="group -mx-5 mt-8 overflow-hidden md:-ml-28 md:-mr-12">
        <div className="animate-marquee flex w-max gap-3 py-4 group-hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <figure
              key={i}
              className="w-56 shrink-0 overflow-hidden rounded-xl border bg-card shadow-sm md:w-72"
              aria-hidden={i >= certificates.length}
            >
              <div className="aspect-[1.414] overflow-hidden bg-muted">
                <img
                  src={c.img}
                  alt={`${c.title} certificate`}
                  className="h-full w-full scale-[1.32] object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-3">
                <p className="meta text-muted-foreground">
                  {c.issuer} · {c.date}
                </p>
                <p className="mt-1 text-sm font-semibold">{c.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
