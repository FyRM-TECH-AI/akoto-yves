import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Home, User, Briefcase, FolderKanban, Wrench, PenLine } from "lucide-react";
import { profile } from "@/lib/profile";
import { LinkPreview } from "./LinkPreview";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/experiences", label: "Experiences", icon: Briefcase },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/skills", label: "Skills", icon: Wrench },
  { to: "/blog", label: "Blog", icon: PenLine },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Left dock (desktop) */}
      <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 md:flex">
        <Link to="/" className="display mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-base text-background">
          YA
        </Link>
        {nav.slice(1).map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-subtle text-muted-foreground transition-all hover:scale-105 hover:bg-foreground hover:text-background"
            activeProps={{ className: "!bg-blue !text-on-color" }}
          >
            <item.icon size={18} strokeWidth={1.75} />
            <span className="meta pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-background opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </Link>
        ))}
      </aside>

      {/* Top-right contact */}
      <a
        href={`mailto:${profile.email}`}
        className="fixed right-4 top-4 z-40 hidden rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-on-color transition-transform hover:scale-105 md:block"
      >
        Get in touch
      </a>

      {/* Mobile bar */}
      <header className="sticky top-0 z-40 flex items-center gap-5 overflow-x-auto border-b bg-background/90 px-4 py-3 backdrop-blur md:hidden">
        <Link to="/" className="display text-lg">YA</Link>
        {nav.slice(1).map((item) => (
          <Link key={item.to} to={item.to} className="meta whitespace-nowrap" activeProps={{ className: "text-blue" }}>
            {item.label}
          </Link>
        ))}
      </header>

      <main className="px-5 md:pl-28 md:pr-12">{children}</main>

      <footer className="mt-24 bg-foreground px-5 py-14 text-background md:pl-28 md:pr-12">
        <p className="display text-4xl md:text-6xl">Let's work together<span className="text-green">.</span></p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={`mailto:${profile.email}`} className="underline decoration-blue underline-offset-4">{profile.email}</a>
          <LinkPreview href={profile.github} className="meta rounded-full border border-background/30 px-4 py-2 hover:bg-background hover:text-foreground">GitHub ↗</LinkPreview>
          <LinkPreview href={profile.linkedin} className="meta rounded-full border border-background/30 px-4 py-2 hover:bg-background hover:text-foreground">LinkedIn ↗</LinkPreview>
        </div>
        <p className="meta mt-10 opacity-60">© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
      </footer>
    </div>
  );
}

export function PageHeader({ title, kicker }: { title: ReactNode; kicker?: string }) {
  return (
    <header className="pb-10 pt-14 md:pt-20">
      <p className="meta text-muted-foreground">{kicker}</p>
      <h1 className="display mt-3 text-5xl md:text-7xl">{title}</h1>
    </header>
  );
}
