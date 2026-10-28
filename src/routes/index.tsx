import { createFileRoute, Link } from "@tanstack/react-router";
import { profile } from "@/lib/profile";
import { LinkPreview } from "@/components/LinkPreview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yves Akoto — AI Engineer & Developer" },
      { name: "description", content: "Yves Akoto builds AI agents, automation workflows and web apps from Benin." },
      { property: "og:title", content: "Yves Akoto — AI Engineer & Developer" },
      { property: "og:description", content: "AI agents, automation and web apps, built from Benin." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="flex min-h-[92vh] flex-col justify-center py-16">
      <p className="meta text-muted-foreground">01 — {profile.location} · Available for internships</p>
      <h1 className="display mt-6 text-[22vw] md:text-[13rem] lg:text-[16rem]">
        Yves<br />Akoto<span className="text-orange">©</span>
      </h1>
      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <p className="display text-4xl text-muted-foreground md:text-6xl">
          AI engineer building <span className="text-foreground">agents</span>, automations &{" "}
          <span className="text-foreground">things that learn.</span>
        </p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Computer Science student at the University of Abomey-Calavi specializing in AI. I turn LLMs,
            data and code into tools that save people real time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="rounded-full bg-foreground px-6 py-3 font-medium text-background transition-transform hover:scale-105">
              See my work
            </Link>
            <LinkPreview href={profile.github} className="block rounded-full border-2 border-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-background">
              GitHub
            </LinkPreview>
            <LinkPreview href={profile.linkedin} className="block rounded-full border-2 border-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-background">
              LinkedIn
            </LinkPreview>
          </div>
        </div>
      </div>
    </section>
  );
}
