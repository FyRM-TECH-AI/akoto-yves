<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Blog posts are .mdx files in src/content/blog exporting `meta`; loaded via import.meta.glob in src/lib/posts.ts (no backend needed).
- Portfolio content lives in src/lib/profile.ts so pages stay presentational.
