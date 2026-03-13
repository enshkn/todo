# Ship Feature (Full Pipeline)

Run the full agent pipeline for: $ARGUMENTS

## Pipeline

```
PM Agent → Full Stack Agent → QA Agent → Done
```

### Step 1 — PM Agent
- Analyze the request
- Break into tasks with acceptance criteria
- Assign priorities (P0 / P1 / P2)

### Step 2 — Full Stack Agent
- Receive PM's task plan
- Create branch: `feature/<short-description>`
- Implement backend + frontend
- Commit with Conventional Commits format

### Step 3 — QA Agent
- Review code quality, security, naming
- Run existing tests
- Check all acceptance criteria
- Report: `✅ QA PASSED` or `❌ QA FAILED`

### Step 4 — Orchestrator Decision
- **PASSED** → summarize and present to user
- **FAILED** → send back to Full Stack (max 2 retries), then escalate to user

## Rules

- Agents run sequentially — each depends on the previous output
- Pass full context between agents, do not summarize for them
- Stop and ask the user if ambiguous requirements are found in Step 1
