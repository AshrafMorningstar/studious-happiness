/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

# Professional Showcase & Stats Generator

![Project Banner](https://img.shields.io/badge/Status-Premium%20Edition-gold?style=for-the-badge) ![GitHub Actions](https://img.shields.io/badge/Automation-Active-2ea44f?style=for-the-badge)

**Welcome to the Ultimate GitHub Professional Showcase.**

This project is an automated, high-fidelity visual generator designed to create stunning, cinematic statistical showcases for your GitHub profile. It leverages **Remotion** for programmatic video generation and **GitHub Actions** for zero-touch automation.

## ✨ Features

- **Cinematic Design**: Deep space aesthetics with subtle gold/cyan nebula effects and glassmorphism 3.0.
- **Automated Workflow**: Runs daily at midnight via GitHub Actions to fetch your latest stats and regenerate the visuals.
- **Premium Stats Cards**: Visualizes your Commits, PRs, Stars, and Contributions in a high-frame-rate, smooth animation.
- **Zero Maintenance**: Once deployed, it runs itself.

## 🚀 How It Works

1. **Data Collection**: The workflow fetches your latest GitHub stats using the `AshrafMorningstar/stats-action`.
2. **Injection**: A custom script injects this live data into the video generation engine.
3. **Rendering**: Remotion renders high-quality GIFs/Videos of your stats.
4. **Publication**: The outputs are automatically committed to the `output/` folder in this repository.

## 📂 Output

All generated assets are stored in the [output/](./output/) directory.

- `stats.gif` - General Statistics
- `languages.gif` - Top Languages
- `commit-streak.gif` - Contribution Streak
- `stats.json` - Raw data used for generation

## 🛠️ Local Development

If you want to run this on your machine:

1. **Install Dependencies**:
   ```bash
   cd Professional-Showcase
   npm install
   ```
2. **Inject Data** (Optional, creates dummy data if skipped):
   ```bash
   # You need a stats JSON file
   node inject-stats.js path/to/stats.json
   ```
3. **Start Preview Studio**:
   ```bash
   npm start
   ```

## 🤖 Automation

The project is controlled by `.github/workflows/deploy.yml`.
It is scheduled to run **Daily**. You can also trigger it manually from the "Actions" tab.

---

_Created by [AshrafMorningstar](https://github.com/AshrafMorningstar) - The Best of Best._


---

## 📜 Copyright & License

© 2026 Ashraf Morningstar. All Rights Reserved.

**Educational Disclaimer:** This is a personal recreation of an existing project concept, developed for learning and skill development purposes. The original project concept remains the intellectual property of its respective creator(s).

**License:** MIT License - See [LICENSE](./LICENSE) file for details.

**Developer:** [Ashraf Morningstar](https://github.com/AshrafMorningstar)

**Portfolio:** Explore more projects at [github.com/AshrafMorningstar](https://github.com/AshrafMorningstar)

---

### 🤝 Connect & Contribute

Found this helpful? Give it a ⭐️ on GitHub!

- 💼 Company: MORNINGSTARCONSTRUCTION
- 📍 Location: India
- 🐦 Twitter: [@AMS_Morningstar](https://twitter.com/AMS_Morningstar)
- 📧 Email: ashrafmorningstar@gmail.com
