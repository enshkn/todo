# Code Review

Review the following: $ARGUMENTS

If no argument given, review all uncommitted changes in the working tree.

## What to Check

### Code Quality
- [ ] Functions follow single responsibility
- [ ] No duplicated logic (DRY)
- [ ] Naming matches conventions (kebab-case files, camelCase JS/TS, snake_case Python)
- [ ] No over-engineering or unnecessary abstractions

### Security
- [ ] User input is validated at boundaries
- [ ] No SQL injection, XSS, or command injection risk
- [ ] No hardcoded secrets or credentials

### Git
- [ ] Commit messages follow Conventional Commits format
- [ ] No `.env` or secret files staged
- [ ] Branch name matches convention

### Functionality
- [ ] Happy path works
- [ ] Edge cases handled
- [ ] Error states handled

## Output Format

List issues grouped by severity:

**Critical** — must fix before merge
**Minor** — should fix
**Suggestion** — optional improvement

For each issue: `file:line — description`
