#!/bin/sh
# One-time on each computer that pushes this repo: makes git run the checks before every push.
cp tools/pre-push .git/hooks/pre-push && chmod +x .git/hooks/pre-push && echo "pre-push check installed"
