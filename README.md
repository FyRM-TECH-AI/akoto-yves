# Orbiting Career Story

Personal portfolio of Yves Akoto, AI engineer and developer.

- **Home** — introduction
- **About** — education and certificates (infinite-scrolling gallery)
- **Experiences**
- **Projects**
- **Skills**
- **Blog** — posts written as `.mdx` files

Hovering the GitHub / LinkedIn links shows a live screenshot preview of the target page.

## Development

Requires [Bun](https://bun.sh); the repo ships `bun.lock`.

```sh
bun install
bun run dev      # http://localhost:8080
```

| Command           | What it does                                           |
| ----------------- | ------------------------------------------------------ |
| `bun run dev`     | Vite dev server                                        |
| `bun run build`   | Production build — client + Nitro server in `.output/` |
| `bun run start`   | Run the built server (`.output/server/index.mjs`)      |
| `bun run preview` | Preview the production build                           |
| `bun run lint`    | ESLint (includes Prettier checks)                      |
| `bun run format`  | Prettier write                                         |
| `bun run test`    | Vitest                                                 |

Typecheck: `bunx tsc --noEmit`.

## Content

- Portfolio data: `src/lib/profile.ts`
- Blog posts: `src/content/blog/*.mdx`, each exporting `meta` (`title`, `date`, `summary?`, `tags?`); the filename is the URL slug.
- Certificate images: `public/certs/`.
