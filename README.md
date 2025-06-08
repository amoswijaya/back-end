## 🔐 Firebase Admin Setup

To enable Firebase Admin SDK for backend use (e.g. Firestore, Auth), follow these steps:

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Select your project → **Project settings** → **Service accounts** tab.
3. Click **"Generate new private key"** → Download the `serviceAccountKey.json` file.
4. Place the file in your project (e.g. `/config/serviceAccountKey.json`).
5. Make sure to add it to `.gitignore`:

   ```bash
   echo serviceAccountKey.json >> .gitignore
   ```
