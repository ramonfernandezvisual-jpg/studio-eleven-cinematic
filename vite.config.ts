// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // On Netlify the site ships as purely static HTML (published from dist/client), so the
  // nitro deploy bundle isn't needed. Nitro would auto-detect the Netlify preset and emit
  // into .netlify/functions-internal, leaving the prerenderer without dist/server/server.js.
  // Disabling it there lets TanStack Start emit its own SSR bundle for prerendering.
  // Lovable builds keep the default nitro behaviour.
  nitro: process.env.NETLIFY || process.env.GITHUB_ACTIONS ? false : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Web 100 % estática: cada página se genera como HTML durante la construcción.
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
