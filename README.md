# Back-End Project with Firebase Admin SDK

This repo contains the back-end for our application, using Firebase Admin SDK to manage Firestore and Authentication.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm or yarn
- A Firebase project with generated `serviceAccountKey.json`
- Git

## 🚀 Setup Steps

### 1. Clone the repository

```bash
git clone https://github.com/amoswijaya/back-end.git
cd back-end
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Add Firebase Service Account

Generate serviceAccountKey.json from Firebase Console → Project Settings → Service accounts → Generate new private key

Save the file under src/ or /config depending on your structure.

Ensure it’s added to .gitignore:

```bash
echo serviceAccountKey.json >> .gitignore
```

### 4. Run in Development Mode

```bash
npm run dev
# or
yarn dev
```
