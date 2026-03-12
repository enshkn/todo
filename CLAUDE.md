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
```
<type>(<scope>): <short description>

Types: feat, fix, docs, style, refactor, test, chore
Examples:
  feat(auth): add JWT refresh token support
  fix(api): handle null response from user endpoint
  refactor(db): extract query builder into separate module
```

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
