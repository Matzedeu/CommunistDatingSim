# ☭ Communist Dating Sim

A narrative dating sim set in 1924 Soviet Russia.  
Sign your papers, meet the comrades, shape the revolution.

**Built by Heard Island Productions © 2025**

---

## 📁 Repository Structure

```
/
├── index.html          ← Main game file
├── 404.html            ← GitHub Pages redirect
├── _config.yml         ← GitHub Pages config
├── README.md
└── images/
    ├── settingsicon.png
    ├── charactericon.png
    ├── timelineicon.png
    ├── achivmentsicon.png
    └── statsicon.png
```

---

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository (public).
2. Upload all files keeping the folder structure above — **`images/` folder must be at the root**.
3. Go to **Settings → Pages**.
4. Under **Source**, select `Deploy from a branch`.
5. Choose `main` branch, `/ (root)` folder. Click **Save**.
6. Your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```

> **Custom domain?** Add a `CNAME` file at the root containing just your domain name, e.g. `communistdatingsim.com`, then point your DNS to GitHub's servers.

---

## 🖼️ Image Files

Place these files inside the `images/` folder — **exact lowercase filenames**:

| File | Used for |
|---|---|
| `settingsicon.png` | Settings button (top bar) |
| `statsicon.png` | Stats button (top bar + hub nav) |
| `charactericon.png` | Characters hub nav button |
| `timelineicon.png` | Timeline hub nav button |
| `achivmentsicon.png` | Achievements hub nav button |

---

## 🎮 Features

- Document sign-in screen with stamp animation
- Hub menu with animated star particles
- Character viewer with affection tracking
- Branching dialogue with personality stat system
- Achievement system (16 achievements)
- Historical timeline
- Lo-fi procedural background music
- Full settings (music, SFX, speed, particles)
