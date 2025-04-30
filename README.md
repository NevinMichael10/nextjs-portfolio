# Next.js Portfolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📑 Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

## Getting Started

This project uses the following versions:

- **Node.js** version: `v22.14.0`
- **pnpm** version: `10.5.2`

### Install Node.js & pnpm (if not already installed)

👉 **Install Node.js** (Recommended version: `v22.14.0`):
You can download it directly from [https://nodejs.org](https://nodejs.org).

**OR**

Use **nvm (Node Version Manager)**:
➤ [Install nvm for macOS/Linux](https://github.com/nvm-sh/nvm)
➤ [Install nvm for Windows](https://github.com/coreybutler/nvm-windows)

Once installed, use:

```bash
nvm install 22.14.0
```

```bash
nvm use 22.14.0
```

👉 **Install pnpm globally (Recommended version: `10.5.2`)**:

```bash
npm install -g pnpm@10.5.2
```

✅ **Check versions to confirm:**

```bash
node -v
```

```bash
pnpm -v
```

## Installation

To get started, clone the repository and install the necessary packages using pnpm.

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
pnpm install
```

## Environment Variables

This project uses environment variables to manage sensitive configuration such as API keys and integration credentials. Create a .env file at the root of your project and define the following variables:

```plaintext
# Google Search Console site verification key
GOOGLE_SITE_VERIFICATION=your-google-site-verification-key-here

# WakaTime API Key for tracking coding activity
WAKATIME_API_KEY=your-wakatime-api-key-here
```

> **Note**  
> Ensure that all variables are correctly defined in your local .env file. When deploying to a production server (e.g., Vercel, DigitalOcean, etc.), make sure to set these environment variables in the deployment environment configuration panel.

## Usage

To start the development server, run:

```bash
pnpm dev
```

This command will start the application by default on [http://localhost:3000](http://localhost:3000).

### Build for Production

To build the project for production, use:

```bash
pnpm build
```

Once built, you can start the server:

```bash
pnpm start
```

---

## 🧰 Tech Stack

- **Next.js** 15
- **React** 19
- **TypeScript**
- **Tailwind CSS**
- **Zustand** – for global state management
- **Geist Font** – optimized using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

## 📚 Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) – Interactive tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?filter=next.js).

Check out the [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying) for more info.
