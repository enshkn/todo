#!/bin/bash
# Sends a macOS desktop notification when Claude needs attention.

INPUT=$(cat)
MESSAGE=$(echo "$INPUT" | jq -r '.message // "Claude Code needs your attention"')

osascript -e "display notification \"$MESSAGE\" with title \"Claude Code\"" 2>/dev/null

exit 0
