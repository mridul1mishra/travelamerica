#!/usr/bin/env bash
# Pre-commit hook: block accidental commits of API keys / secrets.
# Installed automatically via `npm run prepare` (copies to .git/hooks/pre-commit).
#
# Patterns match the key formats currently used in this repo.
# Add more patterns as new services are integrated.

set -e

FORBIDDEN_PATTERNS=(
  # Generic long hex tokens (32+ chars) — matches Travelpayouts format
  '[0-9a-f]{32,}'
  # RapidAPI keys: hex+alphanumeric with embedded "jsn"
  '[0-9a-zA-Z]{10,}jsn[0-9a-zA-Z]{10,}'
  # Generic secret-like assignments with real values (not empty/placeholder)
  'RAPIDAPI_KEY=[^$\n][^\n]{8,}'
  'TRAVELPAYOUTS_TOKEN=[^$\n][^\n]{8,}'
  'API_KEY=[^$\n][^\n]{8,}'
  'SECRET=[^$\n][^\n]{8,}'
)

STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM 2>/dev/null)

if [ -z "$STAGED_FILES" ]; then
  exit 0
fi

FOUND=0

for PATTERN in "${FORBIDDEN_PATTERNS[@]}"; do
  while IFS= read -r file; do
    CONTENT=$(git show ":0:$file" 2>/dev/null || true)
    if echo "$CONTENT" | grep -qE "$PATTERN"; then
      echo ""
      echo "❌ Pre-commit blocked: possible secret detected in $file"
      echo "   Pattern: $PATTERN"
      echo ""
      echo "   Rotate the key if it was real, then:"
      echo "   - Remove the value from the file"
      echo "   - Use: git commit --no-verify  (only if confirmed false positive)"
      echo ""
      FOUND=1
    fi
  done <<< "$STAGED_FILES"
done

# Explicitly block .env.local from being staged
if echo "$STAGED_FILES" | grep -qE '(^|/)\.env\.local$'; then
  echo "❌ Pre-commit blocked: .env.local is staged for commit."
  echo "   Run: git rm --cached .env.local"
  echo ""
  FOUND=1
fi

exit $FOUND
