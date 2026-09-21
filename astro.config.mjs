import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const owner = repositoryOwner || 'Squidward317';
const isUserSite = repositoryName === `${owner}.github.io`;
const base = repositoryName && !isUserSite ? `/${repositoryName}` : '';

export default defineConfig({
  site: `https://${owner}.github.io${base}`,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
