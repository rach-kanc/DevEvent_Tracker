# Contributing to DevEvent Tracker 🚀

Thank you for your interest in contributing to **DevEvent Tracker**!

DevEvent Tracker is a community-driven platform that helps developers discover and track hackathons, conferences, workshops, meetups, open-source programs, and other opportunities they shouldn't miss.

Whether you're fixing bugs, improving the UI, adding features, enhancing accessibility, or improving documentation, your contributions are highly appreciated.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contribution Areas](#contribution-areas)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Good First Contributions](#good-first-contributions)
- [Need Help?](#need-help)

---

# Code of Conduct

By participating in this project, you agree to:

- Be respectful and inclusive.
- Welcome contributors of all experience levels.
- Provide constructive feedback.
- Collaborate professionally and positively.

---

# Getting Started

## 1. Fork the Repository

Click the **Fork** button on GitHub.

## 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/DevEvent_Tracker.git
cd DevEvent_Tracker
```

## 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/niharika-mente/DevEvent_Tracker.git
```

Verify remotes:

```bash
git remote -v
```

Expected output:

```text
origin    https://github.com/YOUR_USERNAME/DevEvent_Tracker.git
upstream  https://github.com/niharika-mente/DevEvent_Tracker.git
```

## 4. Keep Your Fork Updated

Before starting new work:

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

---

# Development Setup

## Prerequisites

| Tool | Version |
|--------|----------|
| Node.js | 18+ |
| npm | Latest |
| Git | Latest |

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Alternatively:

```bash
yarn dev
```

or

```bash
pnpm dev
```

or

```bash
bun dev
```

Open:

```text
http://localhost:3000
```

The page automatically reloads whenever you make changes.

---

# Project Structure

Typical Next.js App Router structure:

```text
DevEvent_Tracker/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── ...
│
├── public/
│
├── components/
│
├── styles/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

> Structure may evolve as the project grows.

---

# Contribution Areas

We welcome contributions in:

### Frontend

- UI/UX improvements
- Responsive design
- Accessibility enhancements
- Component optimization
- Dark mode support

### Event Features

- Event filtering
- Event categorization
- Search improvements
- Event bookmarking
- Calendar integrations

### Performance

- Next.js optimization
- Lazy loading
- Image optimization
- SEO improvements

### Documentation

- README improvements
- Setup guides
- Contribution guides
- Code documentation

---

# Branch Naming Conventions

Never commit directly to `main`.

Create a dedicated branch:

```bash
git checkout -b feature/your-feature-name
```

Examples:

```text
feature/event-search

feature/calendar-integration

feature/dark-mode

bugfix/mobile-layout

bugfix/navbar-overflow

docs/update-readme

style/homepage-redesign

refactor/event-card-component
```

---

# Coding Standards

### TypeScript

- Use TypeScript whenever possible.
- Prefer explicit types.
- Avoid unnecessary use of `any`.

### React & Next.js

- Use functional components.
- Keep components reusable.
- Follow Next.js App Router conventions.
- Avoid duplicate logic.

### Styling

- Maintain consistent spacing and layout.
- Ensure responsiveness across devices.
- Keep UI clean and accessible.

---

# Commit Message Guidelines

Use Conventional Commits:

```text
type(scope): short description
```

Examples:

```text
feat(events): add category filtering

feat(ui): implement dark mode

fix(navbar): resolve mobile menu issue

docs(readme): improve setup instructions

refactor(cards): simplify event card rendering
```

---

# Pull Request Process

## Before Submitting

Ensure:

- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No linting issues
- [ ] UI works on desktop and mobile
- [ ] Documentation updated if needed
- [ ] Changes are tested locally

---

## Push Your Changes

```bash
git push origin your-branch-name
```

---

## Open a Pull Request

Open a Pull Request against the `main` branch.

Include:

- What changed
- Why it changed
- Screenshots (for UI updates)
- Related issue number

Example:

```text
feat(events): add advanced search filters

Fixes #25
```

---

# Pull Request Checklist

Before submitting:

- [ ] Code follows project standards
- [ ] No console errors
- [ ] Responsive design verified
- [ ] No unused dependencies added
- [ ] Documentation updated
- [ ] Related issue linked

---

# Reporting Issues

When reporting bugs, please include:

- Clear title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser information
- Screenshots (if applicable)
- Console errors (if available)

---

# Feature Requests

Please include:

- Problem statement
- Proposed solution
- Benefits to users
- Alternative approaches considered

---

# Good First Contributions

New contributors can start with:

- Documentation improvements
- UI polish
- Accessibility enhancements
- Responsive design fixes
- Bug fixes
- Error handling improvements
- Event card improvements
- Navigation enhancements

---

# Need Help?

If you have questions:

- Check existing issues first.
- Read the project documentation.
- Open a discussion or issue.
- Ask maintainers for clarification before large changes.

---

# Maintainer

**Niharika Mente**

Project Vision:

- Helping developers discover opportunities
- Centralizing important developer events
- Improving accessibility to hackathons and programs
- Building a useful resource for the developer community

---

Thank you for contributing to **DevEvent Tracker**! 🎉

Every contribution helps developers discover opportunities, learn new skills, and connect with the broader tech community.

Happy Coding! 🚀