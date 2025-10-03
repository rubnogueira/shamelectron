# Shamelectron2

A Next.js static website deployed to GitHub Pages.

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Deployment Schedule
- **Automatic builds**: Twice daily at 6 AM and 6 PM UTC
- **Manual builds**: Triggered on push to main branch or via workflow dispatch
- **Build environment**: Ubuntu latest runner with Bun 1.0.0+ and lzfse support

### Build Process
1. Install dependencies using `bun install --frozen-lockfile`
2. Build the static export using `bun run build`
3. Deploy the `./out` directory to GitHub Pages

### Live Site
🌐 **Live URL**: https://avarayr.github.io/shamelectron2/

## 🛠️ Local Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## 📁 Project Structure

- `app/` - Next.js app directory
- `components/` - React components
- `lib/` - Utility functions and app configurations
- `.github/workflows/` - GitHub Actions CI/CD configuration

## 🔧 Configuration

- **Static Export**: Configured in `next.config.mjs` with `output: 'export'`
- **Base Path**: Set to `/shamelectron2` for GitHub Pages compatibility
- **Images**: Unoptimized for static export compatibility
