# Shared Development Workspace

This directory is the authoritative working copy for the Siddhavetha website:

`D:\Siddhavetha\.run\siddha-shop`

All website source, content, asset, schema, build, and configuration changes must be made in this directory. Do not modify or treat another Siddhavetha checkout as the active source unless the user explicitly changes this rule.

## Change identification

- Codex-authored work uses the identifier `[CODEX]`.
- Claude-authored work uses the identifier `[CLAUDE]`.
- Record each meaningful group of changes in `AI-CHANGELOG.md` under the appropriate identifier.
- When creating a Git commit, begin the commit subject with the same identifier, for example: `[CODEX] Update pillar carousel images`.
- Do not add new authorship comments inside application source files unless a technical explanation is independently necessary.
- The `Claude (Anthropic)` authorship comments already committed in baseline commit `a624dc5` are historical markers. Preserve them during normal edits, but do not copy them into new files or add equivalent Codex markers.
- Contributor identity for all work after the baseline belongs in Git commit subjects and `AI-CHANGELOG.md`, not in production source comments.

## Collaboration safeguards

- Inspect `git status` and `AI-CHANGELOG.md` before editing.
- Preserve uncommitted work from the other contributor.
- Keep changelog entries concise and include the date, affected files or area, and validation performed.
- Build and test from this directory before reporting completion.
