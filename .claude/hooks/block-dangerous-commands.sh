#!/bin/bash
# Blocks dangerous shell commands before they execute.
# Exit 2 = block, Exit 0 = allow.

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

DANGEROUS_PATTERNS=(
  "rm -rf /"
  "rm -rf ~"
  "git push --force origin main"
  "git push --force origin master"
  "git push -f origin main"
  "git push -f origin master"
  "git reset --hard"
  "DROP TABLE"
  "DROP DATABASE"
  "> /dev/sda"
  "chmod -R 777 /"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -qF "$pattern"; then
    echo "Blocked: '$pattern' is a dangerous operation. Confirm with the user before proceeding." >&2
    exit 2
  fi
done

exit 0
