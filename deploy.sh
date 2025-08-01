#!/bin/bash

# Deploy script for Bun-based portfolio
echo "🚀 Starting deployment with Bun..."

# Install dependencies
echo "📦 Installing dependencies..."
bun install --frozen-lockfile

# Build the project
echo "🔨 Building project..."
bun run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output is in the 'dist' directory"
    echo "🌐 Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi 