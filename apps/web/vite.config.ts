import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['bits-ui'] // Buộc Vite pre-bundle package này
	},
	ssr: {
		noExternal: ['bits-ui'] // Biên dịch package này cho SSR
	},
	server: {
		fs: {
			allow: ['../../']
		}
	}
});
