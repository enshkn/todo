# Fix Bug

Fix the following bug: $ARGUMENTS

## Steps

1. **Reproduce** — understand the bug before touching any code
2. **Locate** — find the root cause; read affected files first
3. **Fix** — make the minimal change needed to resolve the issue
4. **Test** — verify the fix and confirm no regressions
5. **Commit** — one atomic commit with a `fix(<scope>):` message

## Checklist

- [ ] Root cause identified, not just the symptom
- [ ] Fix is minimal — no unrelated changes
- [ ] Edge case that caused the bug is covered by a test
- [ ] Commit message: `fix(<scope>): <short description>`
- [ ] Branch named `fix/<short-description>`
