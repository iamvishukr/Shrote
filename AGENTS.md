# Agent Rules for Shrote Technology Project

## ⚠️ CRITICAL RULE: NO POWERSHELL COMMANDS

**Main agent kabhi bhi PowerShell commands nahi chalayega.**

- Koi bhi command (npm install, next build, etc.) seedha run nahi karni.
- Agar koi command chalani ho, to usse USER ko dena hai — wo khud run karke output dega.
- Reason: User ka system slow hai (AMD Ryzen 3), aur commands user approval ke bina nahi chalani.

## How to Handle Commands

1. Command likhke USER ko dena:
   ```
   Ye command run karo:
   npm run dev
   ```
2. USER output dega, tab aage kaam karna.
3. Kabhi bhi `run_command` tool use nahi karna unless USER explicitly bolein.

## Project Info

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- DB: Firebase Firestore
- Email: Web3Forms
- Location: `e:\f drive data\Shrote`

## Development Guidelines

- Framer Motion available hai animations ke liye
- Lucide React icons use karo
- Firebase Firestore + Web3Forms dono jagah form data save karna
- Dark theme preferred (inspired by Tulip Technologies style)
- Premium, modern UI banana
