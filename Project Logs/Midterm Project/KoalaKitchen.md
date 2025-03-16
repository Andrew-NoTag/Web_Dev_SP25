---
layout: default
title: KoalaKitchen Log
---

# KoalaKitchen

## March 15, 2025

### Design

Ask my friend Lim to make a logo.
<img src="koalakitchen.png" alt="logo" style="width:30%; height:auto;">

Find a good [template](https://www.figma.com/community/file/1077384985779045508) on Figma Community.
Modify base on the template. Here is a [link](https://www.figma.com/design/rRASUlkOFE9ZfSy6c7Wwjr/Koala-Kitchen?node-id=1-2&t=Nh3uRBLWCjXMyMSR-1) to my figma project.

### Coding

Since I have already installed Node.js, I created a new React app. I used [this link](https://medium.com/@adityasrivast/reactjs-understanding-package-json-e8cdf408a3df) as a reference to update my `package.json` file

```bash
npx create-react-app koala-kitchen
npm install react-scripts
```

```json
{
  "name": "koala-kitchen",
  "version": "0.1.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

Update compile instruction to `README.md`

