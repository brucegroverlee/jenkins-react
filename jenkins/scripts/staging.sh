#!/usr/bin/env sh

echo "Build staging";
npm run staging

# npm install -g firebase-tools

echo "Deploy staging";
firebase deploy -P staging --token "$FIREBASE_DEPLOY_TOKEN"