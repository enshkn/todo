#!/bin/bash
# Blocks edits to sensitive files.
# Exit 2 = block, Exit 0 = allow.

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

PROTECTED_PATTERNS=(
  ".env"
  ".env.local"
  ".env.production"
  "*.pem"
  "*.key"
  "id_rsa"
  "credentials.json"
  "secrets.json"
)

for pattern in "${PROTECTED_PATTERNS[@]}"; do
  # shellcheck disable=SC2254
  case "$FILE_PATH" in
    *$pattern*)
      echo "Blocked: '$FILE_PATH' is a sensitive file. Edit manually if needed." >&2
      exit 2
      ;;
  esac
done

exit 0
