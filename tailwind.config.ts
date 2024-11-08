import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				main: 'rgba(var(--main-color))',
				'color-1': 'rgba(var(--color-1))',
				'color-2': 'rgba(var(--color-2))',
				'color-3': 'rgba(var(--color-3))',
				'color-4': 'rgba(var(--color-4))'
			}
		}
	},

	plugins: []
} satisfies Config;
