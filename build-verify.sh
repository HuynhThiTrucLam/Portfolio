#!/bin/bash

echo "🔍 Build Verification Script"
echo "=========================="

# Check if we're in the right directory
echo "📁 Current directory: $(pwd)"
echo "📁 Contents:"
ls -la

# Check if package.json exists
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json not found"
    exit 1
fi

# Check if bun is available
if command -v bun &> /dev/null; then
    echo "✅ Bun is available: $(bun --version)"
else
    echo "❌ Bun is not available"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
bun install --frozen-lockfile

# Run build
echo "🔨 Running build..."
bun run build

# Check if dist directory was created
if [ -d "dist" ]; then
    echo "✅ dist directory created"
    echo "📁 dist contents:"
    ls -la dist/
    
    # Check if index.html exists
    if [ -f "dist/index.html" ]; then
        echo "✅ index.html found in dist"
    else
        echo "❌ index.html not found in dist"
        exit 1
    fi
else
    echo "❌ dist directory not created"
    exit 1
fi

echo "🎉 Build verification completed successfully!" 