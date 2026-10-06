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

## Project architecture

- Keep the mobile experience self-contained in `public/app.html`; this preserves the requested direct-run, single-file deliverable.
- Register the generated offline worker only through `src/lib/register-sw.ts`; one guarded entry prevents stale preview caches.
- Build photo groups from each person's matching filename prefix in `public/A_profiles` and `public/Non_A_profiles`; shuffle each pool separately and interleave proportionally to preserve identities without clusters.
