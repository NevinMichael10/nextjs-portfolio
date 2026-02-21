# Next.js Portfolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It's a flexible personal portfolio template designed to highlight your skills, projects, timeline, certificates, and contact information with easy customization options.

## 📑 Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Customizing Project Contents](#customizing-project-contents)

---

## Getting Started

This project uses the following versions:

- **Bun** (latest recommended version)
- **Node.js** version: `v22.22.0` (Optional)

### Install Bun & Node.js (if not already installed)

👉 **Install Bun**:

macOS / Linux

```bash
curl -fsSL https://bun.sh/install | bash
```

Windows (PowerShell)

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

👉 **Install Node.js (Optional)** (Recommended version: `v22.22.0`):
You can download it directly from [https://nodejs.org](https://nodejs.org).

**OR**

Use **nvm (Node Version Manager)**:
➤ [Install nvm for macOS/Linux](https://github.com/nvm-sh/nvm)
➤ [Install nvm for Windows](https://github.com/coreybutler/nvm-windows)

Once installed, use:

```bash
nvm install 22.22.0
```

```bash
nvm use 22.22.0
```

✅ **Check versions to confirm:**

```bash
bun -v
```

```bash
node -v
```

## Installation

To get started, clone the repository and install the necessary packages using bun.

### Clone the repository

```bash
git clone https://github.com/NevinMichael10/nextjs-portfolio.git
```

### Navigate to the project directory

```bash
cd nextjs-portfolio
```

### Install dependencies

```bash
bun install
```

---

## Environment Variables

This project uses environment variables to manage sensitive configuration such as API keys and integration credentials. Create a .env file at the root of your project and define the following variables:

```plaintext
# Google Search Console site verification key
GOOGLE_SITE_VERIFICATION=your-google-site-verification-key-here

# WakaTime API Key for tracking coding activity
WAKATIME_API_KEY=your-wakatime-api-key-here

# Toggle security headers (set to "true" to enable)
ENABLE_SECURITY_HEADERS=true
```

> **Note**  
> Set ENABLE_SECURITY_HEADERS to "true" to enable security headers. Any other value (including false, empty, or undefined) will disable them.  
> Ensure that all variables are correctly defined in your .env file. When deploying to a production server (e.g., Vercel, DigitalOcean, etc.), make sure to set these environment variables in the deployment environment configuration panel.

---

## Usage

To start the development server, run:

```bash
bun run dev
```

This command will start the application by default on [`http://localhost:3000`](http://localhost:3000).

### Build for Production

To build the project for production, use:

```bash
bun run build
```

Once built, you can start the server:

```bash
bun run start
```

---

## 🚀 Available Scripts

| Action          | Command             | Description                           |
| :-------------- | :------------------ | :------------------------------------ |
| **Development** | `bun run dev`       | Start development server with HMR     |
| **Build**       | `bun run build`     | Build the application for production  |
| **Production**  | `bun run start`     | Start the production server           |
| **Lint**        | `bun run lint`      | Run ESLint to check for code issues   |
| **Lint & Fix**  | `bun run lint:fix`  | Auto-fix repairable ESLint issues     |
| **Clean**       | `bun run clean`     | Remove `.next` and `.turbo` folders   |
| **Hard Reset**  | `bun run clean:all` | Remove build files and `node_modules` |

---

## Customizing Project Contents

To personalize this project, you only need to edit the values inside [`lib/constants.ts`](./lib/constants.ts).

This file contains **all the content values** used throughout the website, such as:

- **Homepage**: Bio, intro text, and personal description
- **About Page**: Personal details, skills/tools, "Why me?" section, site info
- **Projects Page**: Project categories and labels
- **Tech Page**: Tech stack and tag definitions
- **Certificates Page**: Platform names and badge info
- **Journey Page**: Timeline content
- **Links Page**: External links and CTA buttons
- **Contact Section**: Email, location, social links
- **Images**: Paths for profile image, favicons, social previews, and more
- **SEO Metadata**: Titles, descriptions, Open Graph tags, etc..
- _And many more..._

### How to Customize

1. Open the [`lib/constants.ts`](./lib/constants.ts) file.
2. Replace the default placeholder values with your own content.
   - For example, update your **bio** or **intro text** under the homepage section.
   - Modify the **skills/tools** and other details on the **About Page**.
3. Ensure that all content values are tailored to your preferences, such as:
   - Changing profile images, favicons, and other images.
   - Modifying SEO metadata like titles and descriptions for each page.

Each section in the constants file is clearly commented. Simply replace the default values with your own to fully customize the content of each page.

Happy customizing! 🎨✨

---

## 🧰 Tech Stack

- **Next.js** 16 (App Router)
- **React 19**
- **Bun** (Runtime & Package Manager)
- **TypeScript**
- **Tailwind CSS**
- **Motion** – for fluid animations.
- **Radix UI** – for accessible UI primitives.
- **Geist Font** – optimized using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

## 📚 Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js 15/16 features and the App Router.
- [Bun Documentation](https://bun.sh/docs) – Explore the Bun runtime, package manager, and test runner.
- [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta) – Discover the latest features of the utility-first CSS framework.
- [Motion (formerly Framer Motion)](https://motion.dev/) – Documentation for the animations used in this portfolio.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) – The official source code for Next.js.

---

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?filter=next.js).

Check out the [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying) for more info.
