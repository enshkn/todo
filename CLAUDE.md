# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

<!-- Describe what this project does -->

## Commands

<!-- Add build, test, lint, and run commands here. Example:
```
npm install       # install dependencies
npm run dev       # start dev server
npm test          # run all tests
npm test -- foo   # run a single test matching "foo"
npm run lint      # lint
```
-->

## Architecture

<!-- Describe the high-level structure: key directories, data flow, important abstractions -->

## Code Standards

### Naming Conventions
- **Files and directories:** kebab-case (`user-profile.ts`, `auth-utils/`)
- **Variables and functions:** snake_case for Python, camelCase for JS/TS
- **Constants:** UPPER_SNAKE_CASE
- **Classes/types:** PascalCase

### Commit Messages (Conventional Commits)

Format: `<type>(<scope>): <short description>`

**Types:**
| Type | When to use |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no logic change |
| `refactor` | Code restructure, no behavior change |
| `test` | Adding or updating tests |
| `chore` | Build, deps, tooling |
| `perf` | Performance improvement |
| `ci` | CI/CD configuration |

**Rules:**
- Subject line: max 72 characters, imperative mood ("add", not "added")
- No period at the end of the subject line
- Use body (blank line after subject) to explain *why*, not *what*
- Reference issues with `Closes #123` or `Refs #123` in the body

**Examples:**
```
feat(auth): add JWT refresh token support

Tokens now auto-refresh 60s before expiry to prevent session drops.
Closes #42

fix(api): handle null response from user endpoint

refactor(db): extract query builder into separate module

docs(readme): update setup instructions for macOS
```

### Git Workflow

**Branch Naming:**
```
feature/<short-description>     # new features
fix/<short-description>         # bug fixes
chore/<short-description>       # maintenance
docs/<short-description>        # documentation
```

**General Rules:**
- Never commit directly to `main` / `master`
- Always branch from the latest `main`
- Keep branches short-lived and focused on one thing
- Rebase onto `main` before merging to keep history linear
- Delete branches after merging

**Commit Hygiene:**
- Each commit should be atomic — one logical change per commit
- Never commit secrets, credentials, or `.env` files
- Don't commit generated files or build artifacts (add to `.gitignore`)
- Don't use `--no-verify` to skip hooks unless explicitly necessary
- Prefer `git commit --amend` for fixing the last unpushed commit only

**Pull Requests:**
- PR title follows the same Conventional Commits format
- Keep PRs small and reviewable (ideally < 400 lines changed)
- Link related issues in the PR description
- Squash trivial fixup commits before merging

### Function Design
- Single responsibility: one function does one thing
- Max ~30 lines per function — extract if longer
- Name functions after what they do, not how they do it

### Core Principles
- **DRY** — don't repeat yourself; extract shared logic
- **YAGNI** — don't build what isn't needed yet
- **KISS** — prefer the simple solution over the clever one

### Testing
- Write tests alongside new features, not after
- Cover the happy path and at least one edge/error case
- Tests should be readable as documentation
