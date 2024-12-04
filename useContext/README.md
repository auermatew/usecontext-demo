# React Vite TS Tailwind - useContext Demo

This project is a demo application built using React, Vite, TypeScript, and Tailwind CSS to showcase the power and flexibility of React's useContext hook. The app demonstrates multi-context management for authentication, language selection, and theme toggling.

## Features

### Authentication Context
- Simulates login/logout functionality with roles (user, admin).
- Role-based permissions for accessing restricted components (e.g., Admin Dashboard).

### Language Context
- Multi-language support (English and Spanish).
- Dynamic translations for UI components.

### Theme Context
- Dark and Light mode support with smooth transitions.
- Persistent theme storage using localStorage.

## Tech Stack
- **React** (Functional Components with Hooks)
- **Vite** (Fast build tool and development server)
- **TypeScript** (Static type checking)
- **Tailwind CSS** (Utility-first CSS framework)
- **Lucide Icons** (For theme toggler icons)

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn

### Installation

Clone the repository:
```bash
git clone https://github.com/auermatew/usecontext-demo.git
cd usecontext-demo
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

## Folder Structure
```plaintext
src/
├── components/            # UI components
│   ├── Dashboard.tsx      # Admin Dashboard component
│   ├── LanguageSelector.tsx # Language selector component
│   ├── ThemeToggler.tsx   # Dark/Light mode toggler
│   └── UserProfile.tsx    # User profile and login/logout
├── contexts/              # Context files
│   ├── AuthContext.tsx    # Authentication context
│   ├── LanguageContext.tsx # Language context
│   └── ThemeContext.tsx   # Theme context
├── types/                 # TypeScript type definitions
│   ├── auth.ts            # Types for AuthContext
│   ├── language.ts        # Types for LanguageContext
│   └── theme.ts           # Types for ThemeContext
├── App.tsx                # Main App 
├── index.css              # Tailwind CSS
└── main.tsx               # App entry point
```

## Key Concepts

### Authentication Context
Manages user roles and permissions:
- **Admin**: Can manage users and access the dashboard.
- **User**: Limited access.
- Provides login, logout, and permissions.

### Language Context
Provides multilingual support:
- Dynamically changes UI text based on selected language (en, es).
- Stores translations for:
  - Welcome message.
  - Button labels (Login, Logout, etc.).
  - Theme mode labels (Dark Mode, Light Mode).

### Theme Context
Handles dark and light mode:
- Detects system preference for initial theme.
- Persists user choice in localStorage.
- Applies the dark class to `<html>` for styling.

