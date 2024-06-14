# Vite MUI React Starter

This is TAP's Frontend internal starter project for building React applications using Vite, Material-UI (MUI), and Yarn.

## Prerequisites

* **Node.js** : Ensure you have Node.js installed. The recommended version is`>=14.0.0`.
* **Yarn** : This project uses Yarn for package management. The recommended version is`>=1.22.0`.

## Getting Started

### Cloning the Repository

To get started, first clone the repository:

<pre><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sh">git <span class="hljs-built_in">clone</span> https://github.com/your-username/your-repo-name.git
<span class="hljs-built_in">cd</span> your-repo-name
</code></div></div></pre>

### Setting Upstream to a New Repository

If you want to set this repository as the upstream for a new repository, follow these steps:

1. Create a new repository on GitHub (or any other Git hosting service).
2. Set the new repository as the upstream:

<pre><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sh">git remote set-url origin https://github.com/your-username/new-repo-name.git
git push -u origin main
</code></div></div></pre>

### Installing Dependencies

Install the required dependencies using Yarn:

<pre><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sh">yarn install
</code></div></div></pre>

### Running the Development Server

Start the development server with:

<pre><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sh">yarn dev
</code></div></div></pre>

This will start the Vite development server and you can view your application at `http://localhost:3000`.

## Folder Structure

Here's a brief overview of the folder structure:

<pre><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">├── .husky             # Husky configuration for Git hooks
├── .husky             # Husky configuration for Git hooks
│   ├── _              # Husky scripts
│   ├── pre-commit     # Pre-commit hook
│   └── pre-push       # Pre-push hook
├── public             # Public assets
├── src                # Source code
│   ├── api            # API calls and services
│   │   └── index.js
│   ├── assets         # Static assets (images, fonts, etc.)
│   │   └── react.svg
│   ├── components     # Reusable components
│   │   ├── FallbackSpinner
│   │   └── Page
│   ├── config         # Configuration files
│   │   ├── auth.js
│   │   ├── baseUrl.js
│   │   └── theme.js
│   ├── contexts       # Context providers
│   │   ├── AuthContext.jsx   # Authentication context
│   │   └── SettingsContext.jsx # Settings context
│   ├── hooks          # Custom hooks
│   │   ├── index.js
│   │   ├── useAuth.js   # Hook for authentication context
│   │   └── useSettings.js # Hook for settings context
│   ├── layouts        # Layout components
│   │   └── index.jsx
│   ├── libs           # Utility libraries
│   │   └── hex-to-rgba.js
│   ├── pages          # Page components
│   │   ├── Auth
│   │   ├── Dashboard
│   │   └── Home
│   ├── router         # Routing configuration
│   │   └── index.jsx
│   ├── styles/libs    # Styles and third-party libraries
│   │   └── react-hot-toast
│   │       └── index.js
│   ├── theme          # MUI theme and override configuration
│   │   ├── breakpoints
│   │   ├── overrides
│   │   ├── palette
│   │   ├── shadows
│   │   ├── spacing
│   │   ├── typography
│   │   └── globalStyles.js
│   │   ├── ThemeComponent.jsx
│   │   └── ThemeOptions.js
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Entry point of the application
├── .gitignore         # Git ignore file
├── index.html         # HTML template
├── jsconfig.json      # JavaScript configuration
├── package.json       # Project configuration and dependencies
├── .commitlintrc.js   # Commit lint configuration
├── .eslintrc.cjs      # ESLint configuration
├── .prettierrc        # Prettier configuration
├── README.md          # Project documentation
├── vite.config.js     # Vite configuration
└── yarn.lock          # Yarn lock file
</code></div></div></pre>

### Contexts

* **AuthContext** : Provides authentication state and actions.
* **SettingsContext** : Manages application settings and preferences.

### Hooks

* **useAuth** : Custom hook to use the authentication context.
* **useSettings** : Custom hook to use the settings context.

## Theme

The MUI theme configuration and overrides can be found in the `src/theme` folder. This includes custom styling and theming options for the application.

---

