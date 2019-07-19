#!/usr/bin/env sh

echo "Build production";
npm run build

echo "Deploy production";
firebase deploy -P production --token "$FIREBASE_DEPLOY_TOKEN"