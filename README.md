# Portfolio website

Use Node.js 24 LTS and npm 11. Run `npm ci` for a reproducible installation.

- `npm start`: development server at http://localhost:3000.
- `npm test`: run the existing content, navigation and scroll regression tests once.
- `npm run test:watch`: interactive test runner.
- `npm run build`: generate the production site in `build/`.
- `npm run preview`: preview that production build locally.

The frontend uses React 19 with Vite and Vitest. These replace the unsupported Create React App dependency graph. CSS, content, assets and navigation behavior are preserved; component filenames use `.jsx`. Unused CRA testing, analytics and Tailwind dependencies were removed (styles are plain CSS).

Deploy `build/` at the domain root. Production source maps are disabled. `vercel.json` explicitly selects Vite, the build command and output directory, preserves the existing admin and Next.js proxy rewrites, and serves the SPA entry for `/projects`, `/mission` and `/about`. If project settings override repository configuration, use `npm run build` and output directory `build`. Other static hosts need the same SPA fallback. No API or external service deployment is part of this change.

GitHub Actions performs a clean installation, regression tests, build and security audit with read-only repository permissions. Dependabot checks npm and Actions weekly. Update normal dependencies and refresh the lockfile regularly.
