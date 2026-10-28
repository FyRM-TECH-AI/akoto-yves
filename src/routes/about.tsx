import { createFileRoute } from "@tanstack/react-router";
import { certificates, education, profile } from "@/lib/profile";
import { PageHeader } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yves Akoto" },
      { name: "description", content: "Education and certificates of Yves Akoto: Hugging Face, IBM, Aspire and more." },
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
      <PageHeader n="02" kicker="About" title={<>About<span className="text-orange">.</span></>} />
      <p className="display max-w-5xl text-4xl md:text-6xl">
        I'm {profile.fullName.split(" ").slice(1, 2)} — a curious builder from Benin who moved from{" "}
        <span className="text-muted-foreground">maths olympiad nerd</span> to AI engineer.
      </p>

      <section className="mt-24">
        <p className="meta text-muted-foreground">Education</p>
        <div className="mt-6 divide-y border-y">
          {education.map((e) => (
            <div key={e.school} className="grid gap-4 py-8 md:grid-cols-[1fr_2fr_auto]">
              <p className="meta text-muted-foreground">{e.period}</p>
              <div>
                <h2 className="display text-4xl md:text-5xl">{e.school}</h2>
                <p className="mt-2 text-lg">{e.degree}</p>
                {e.notes.length > 0 && (
                  <div className="mt-3 flex gap-2">
                    {e.notes.map((n) => (
                      <span key={n} className="meta rounded-full bg-yellow px-3 py-1">{n}</span>
                    ))}
                  </div>
                )}
              </div>
              <p className="meta">{e.place}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <div className="flex items-end justify-between">
          <h2 className="display text-6xl md:text-8xl">Certificates</h2>
          <p className="meta text-muted-foreground">{certificates.length} earned</p>
        </div>
      </section>
      <div className="-mx-5 mt-10 overflow-hidden md:-ml-32 md:-mr-12">
        <div className="animate-marquee flex w-max gap-6 py-4">
          {loop.map((c, i) => (
            <figure key={i} className="w-80 shrink-0 overflow-hidden rounded-2xl bg-card shadow-sm md:w-[26rem]" aria-hidden={i >= certificates.length}>
              <div className="aspect-[1.414] overflow-hidden bg-muted">
                <img src={c.img} alt={`${c.title} certificate`} className="h-full w-full scale-[1.32] object-cover" loading="lazy" />
              </div>
              <figcaption className="p-5">
                <p className="meta text-muted-foreground">{c.issuer} · {c.date}</p>
                <p className="mt-1 text-xl font-semibold">{c.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
