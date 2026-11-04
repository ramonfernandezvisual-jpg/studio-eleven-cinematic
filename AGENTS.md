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

- Keep the site a statically prerendered single page with anchor navigation; no server data is needed.
- Store all interface copy in src/i18n/translations.ts and resolve browser/storage locale after hydration to keep static HTML consistent.
- Drive the mixed-format gallery from src/data/projects.ts; use an accessible Radix modal and defer YouTube embeds until a visitor opens a video.
