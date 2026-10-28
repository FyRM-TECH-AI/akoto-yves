import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { profile } from "@/lib/profile";
import { LinkPreview } from "./LinkPreview";

const nav = [
  { to: "/", label: "Home", n: "01" },
  { to: "/about", label: "About", n: "02" },
  { to: "/experiences", label: "Experiences", n: "03" },
  { to: "/projects", label: "Projects", n: "04" },
  { to: "/skills", label: "Skills", n: "05" },
  { to: "/blog", label: "Blog", n: "06" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Left dock (desktop) */}
      <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        <Link to="/" className="display mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-2xl text-background">
          YA<span className="text-orange">©</span>
        </Link>
        {nav.slice(1).map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-subtle transition-colors hover:bg-foreground hover:text-background"
            activeProps={{ className: "!bg-orange" }}
          >
            <span className="meta">{item.n}</span>
            <span className="meta pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-background opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </Link>
        ))}
      </aside>

      {/* Top-right contact */}
      <a
        href={`mailto:${profile.email}`}
        className="fixed right-4 top-4 z-40 hidden rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-105 md:block"
      >
        Get in touch
      </a>

      {/* Mobile bar */}
      <header className="sticky top-0 z-40 flex items-center gap-4 overflow-x-auto border-b bg-background/90 px-4 py-3 backdrop-blur md:hidden">
        <Link to="/" className="display text-xl">YA<span className="text-orange">©</span></Link>
        {nav.slice(1).map((item) => (
          <Link key={item.to} to={item.to} className="meta whitespace-nowrap" activeProps={{ className: "text-orange" }}>
            {item.label}
          </Link>
        ))}
      </header>

      <main className="px-5 md:pl-32 md:pr-12">{children}</main>

      <footer className="mt-32 bg-foreground px-5 py-16 text-background md:pl-32 md:pr-12">
        <p className="display text-6xl md:text-9xl">Let's build<span className="text-orange">.</span></p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href={`mailto:${profile.email}`} className="text-lg underline decoration-orange underline-offset-4">{profile.email}</a>
          <LinkPreview href={profile.github} className="meta rounded-full border border-background/30 px-4 py-2 hover:bg-background hover:text-foreground">GitHub ↗</LinkPreview>
          <LinkPreview href={profile.linkedin} className="meta rounded-full border border-background/30 px-4 py-2 hover:bg-background hover:text-foreground">LinkedIn ↗</LinkPreview>
        </div>
        <p className="meta mt-12 opacity-60">© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
      </footer>
    </div>
  );
}

export function PageHeader({ n, title, kicker }: { n: string; title: ReactNode; kicker?: string }) {
  return (
    <header className="pb-12 pt-16 md:pt-24">
      <p className="meta text-muted-foreground">{n} — {kicker}</p>
      <h1 className="display mt-4 text-7xl md:text-[10rem]">{title}</h1>
    </header>
  );
}
