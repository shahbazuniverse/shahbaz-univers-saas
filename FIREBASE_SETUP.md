# Setup Guide for Firebase Deployment

## 🚀 GitHub Secrets Setup

Aapko GitHub Secrets میں یہ values add کرنی ہیں:

### 1. Firebase Credentials (Public Keys)

Firebase Console → Settings → Project Settings → Your apps

```
FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN=shahbaz-universe-ec729.firebaseapp.com
FIREBASE_PROJECT_ID=shahbaz-universe-ec729
FIREBASE_STORAGE_BUCKET=shahbaz-universe-ec729.appspot.com
FIREBASE_MESSAGING_SENDER_ID
FIREBASE_APP_ID
FIREBASE_MEASUREMENT_ID
```

### 2. Firebase Service Account (Secret)

Firebase Console → Settings → Service Accounts → Generate New Private Key

**Poora JSON paste کریں:**
```
FIREBASE_SERVICE_ACCOUNT_JSON
```

## 📝 Step by Step

1. GitHub Repo → Settings → Secrets and variables → Actions
2. "New repository secret" click کریں
3. Name اور Value add کریں
4. Save کریں

## ✅ After Setup

- Main branch میں push کریں
- GitHub Actions automatically deploy کرے گا
- Live URL: https://shahbaz-universe-ec729.web.app

## 🔒 Security Notes

- Service Account JSON کو **کبھی public نہ کریں**
- GitHub Secrets میں safely stored ہے
- صرف repo owner/admins دیکھ سکتے ہیں
