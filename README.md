# Vite MUI React Starter

This is TAP's Frontend internal starter project for building React applications using Vite, Material-UI (MUI), and Yarn.

## Prerequisites

* **Node.js** : Ensure you have Node.js installed. The recommended version is`>=14.0.0`.
* **Yarn** : This project uses Yarn for package management. The recommended version is`>=1.22.0`.

## Getting Started

### Cloning the Repository

To get started, first clone the repository:

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>sh</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sh">git <span class="hljs-built_in">clone</span> https://github.com/your-username/your-repo-name.git
<span class="hljs-built_in">cd</span> your-repo-name
</code></div></div></pre>

### Setting Upstream to a New Repository

If you want to set this repository as the upstream for a new repository, follow these steps:

1. Create a new repository on GitHub (or any other Git hosting service).
2. Set the new repository as the upstream:

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>sh</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sh">git remote set-url origin https://github.com/your-username/new-repo-name.git
git push -u origin main
</code></div></div></pre>

### Installing Dependencies

Install the required dependencies using Yarn:

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>sh</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sh">yarn install
</code></div></div></pre>

### Running the Development Server

Start the development server with:

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>sh</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sh">yarn dev
</code></div></div></pre>

This will start the Vite development server and you can view your application at `http://localhost:3000`.

## Folder Structure

Here's a brief overview of the folder structure:

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>plaintext</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">├── .husky             # Husky configuration for Git hooks
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

