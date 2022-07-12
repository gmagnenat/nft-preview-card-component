/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'soft-blue': 'hsl(215, 51%, 70%)',
			cyan: 'hsl(178, 100%, 50%)',
			'main-bg': 'hsl(217, 54%, 11%)',
			'card-bg': 'hsl(216, 50%, 16%)',
			'dark-blue': 'hsl(215, 32%, 27%)',
			white: 'hsl(0, 0%, 100%)',
		},
		extend: {},
	},
	plugins: [],
};
