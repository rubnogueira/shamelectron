Before running the development server (`bun run dev:no-update` for quick spin up without updating the apps), you are **required** to spin up a quick redis container

```bash
docker run -d -p 6379:6379 redis:alpine 2>&1
```

Make sure to kill it when you finish work, add this to your TODOs if needed.
