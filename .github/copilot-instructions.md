## Quick context

- This is an Expo + React Native app using TypeScript and expo-router for file-based routing.
- Key files:
  - `package.json` (scripts: `start`, `android`, `ios`, `web` — all call `expo start`)
  - `main` points to `expo-router/entry` so routing/entry is handled by expo-router and the `src/app` folder.
  - `src/app/index.tsx` is the root `/` route (see example below).
  - `App.tsx` exists but the router entry is used as app entry-point.
  - `tsconfig.json` extends `expo/tsconfig.base` and sets `strict: true`.

## What to know to be productive

- Routing: expo-router is used. Routes are defined by files under `src/app` (e.g. `src/app/index.tsx` => `/`). Keep pages as default-exported React components.
- Components: shared UI components live in `src/components/` (currently empty). Prefer small presentational components and keep route/page logic in `src/app`.
- Assets: static assets are in `assets/`.
- TypeScript: project is TypeScript-first. Type checks are expected — use `npx tsc --noEmit` locally to validate types.
- Expo: use the `expo` CLI to run the app. Scripts are available in `package.json`:
  - `npm run start` (launch Expo dev tools)
  - `npm run ios` / `npm run android` / `npm run web`

## Examples (copyable patterns found in this repo)

- Home route (already present):
  - `src/app/index.tsx`
    - export default function HomeScreen() { return <Text>Welcome to the Home Screen</Text>; }

- Add a new route `/about`:
  - create `src/app/about.tsx` with a default export React component — it will be available at `/about` automatically.

## Project-specific notes & gotchas

- Entry point: because `main` is `expo-router/entry`, the conventional `App` export in `App.tsx` may not be the runtime entry used by expo-router. When adding global layout or providers, prefer `src/app/_layout.tsx` (expo-router conventions) rather than editing `App.tsx`.
- macOS artifacts: the folder listing contains files starting with `._` (e.g. `._index.tsx`) — these are macOS AppleDouble metadata files and should be ignored or removed; they are not valid source files for the bundler.
- No tests or CI configs were detected in the repository root. Expect manual/local testing via Expo.

## Common tasks and how I expect you to act

- When changing app structure, update or add routes under `src/app/` and verify via `npm run start` → open the route in the simulator or web.
- Run type checks before PRs: `npx tsc --noEmit`.
- Keep changes small and buildable with `expo start` — avoid adding native modules without updating Expo SDK compatibility.

## Files to reference when writing code or making changes

- `package.json` — verify scripts and SDK versions (expo ~54, react 19, react-native 0.81)
- `tsconfig.json` — strict TypeScript is enabled
- `src/app/index.tsx` — example route
- `src/components/` — place for reusable UI components

If anything in this file is unclear or you'd like the instructions to cover specific workflows (e.g., adding native modules, CI templates, testing setup), tell me which workflows to expand and I'll iterate.
