#!/bin/bash
# Logs every Bash command Claude runs to ~/.claude/command-log.jsonl

INPUT=$(cat)
LOG_FILE="$HOME/.claude/command-log.jsonl"

echo "$INPUT" | jq -c '{
  timestamp: (now | todate),
  session_id: .session_id,
  cwd: .cwd,
  command: .tool_input.command
}' >> "$LOG_FILE" 2>/dev/null

exit 0
