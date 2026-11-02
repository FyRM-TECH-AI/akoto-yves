import { createFileRoute, Link } from "@tanstack/react-router";
import { profile } from "@/lib/profile";
import { LinkPreview } from "@/components/LinkPreview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yves Akoto — AI Engineer & Developer" },
      {
        name: "description",
        content: "Yves Akoto builds AI agents, automation workflows and web apps from Benin.",
      },
      { property: "og:title", content: "Yves Akoto — AI Engineer & Developer" },
      {
        property: "og:description",
        content: "AI agents, automation and web apps, built from Benin.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="flex min-h-[92vh] flex-col justify-center py-16">
      <p className="meta">
        <span className="inline-flex items-center gap-2 rounded-full bg-green/25 px-3 py-1 text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          Available for internships · AI Engineer &amp; Research
        </span>
      </p>
      <h1 className="display mt-5 text-6xl md:text-8xl lg:text-9xl">
        Yves Akoto<span className="text-blue">.</span>
      </h1>
      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <p className="display text-3xl text-muted-foreground md:text-4xl">
          AI &amp; ML Engineer <span className="text-foreground">I am building the tomorrow&apos;s AI for Africa.</span>
        </p>
        <div className="space-y-6">
          <p className="leading-relaxed">
            I am final-year undergraduate student in computer science at the University of Abomey-Calavi, specializing in AI. I build AI and AI tools to automate repetitive tasks. I am building my career towards becoming a FDE (Forward Deployed Engineer) while exploring Research in emergent Autonomous Self-Learning AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-blue px-6 py-2.5 text-sm font-medium text-on-color transition-transform hover:scale-105"
            >
              See my work
            </Link>
            <LinkPreview
              href={profile.github}
              className="block rounded-full border border-foreground/20 px-6 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
            >
              GitHub
            </LinkPreview>
            <LinkPreview
              href={profile.linkedin}
              className="block rounded-full border border-foreground/20 px-6 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
            >
              LinkedIn
            </LinkPreview>
          </div>
        </div>
      </div>
    </section>
  );
}
