import type { ComponentType } from "react";

export type PostMeta = { title: string; date: string; summary?: string; tags?: string[] };
type Mod = { default: ComponentType; meta?: PostMeta };

// Every .mdx file dropped into src/content/blog becomes a post (slug = file name).
const modules = import.meta.glob<Mod>("../content/blog/*.mdx", { eager: true });

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(/\.mdx$/, "");
    return { slug, Component: mod.default, meta: mod.meta ?? { title: slug, date: "" } };
  })
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
