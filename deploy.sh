#!/bin/bash

# Firebase Deployment Script
# Usage: ./deploy.sh

echo "🚀 Starting Firebase Deployment..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "📦 Installing Firebase CLI..."
    npm install -g firebase-tools
fi

# Build the project
echo "🔨 Building Next.js project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to Firebase
echo "🚀 Deploying to Firebase Hosting..."
firebase deploy --project shahbaz-universe-ec729

echo "✅ Deployment complete!"
echo "🌐 Your app is live at: https://shahbaz-universe-ec729.web.app"
