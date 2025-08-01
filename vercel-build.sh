#!/bin/bash

# Vercel Build Script for Bun
set -e

echo "🚀 Starting Vercel build with Bun..."

# Ensure we're in the right directory
cd "$VERCEL_BUILD_DIR" || exit 1

# Install dependencies
echo "📦 Installing dependencies..."
bun install --frozen-lockfile

# Run the build
echo "🔨 Building project..."
bun run build

# Verify the build output
if [ ! -d "dist" ]; then
    echo "❌ dist directory not found after build"
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    echo "❌ index.html not found in dist directory"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build output:"
ls -la dist/

echo "🎉 Ready for deployment!" 