/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'japan-red': '#8b0000',
                'dark-bg': '#050505',
                'paper': '#f4e4bc',
            },
            fontFamily: {
                serif: ['"Noto Serif SC"', '"Noto Serif JP"', '"Playfair Display"', 'serif'],
                display: ['"Cinzel"', 'serif'],
            },
        },
    },
    plugins: [],
}
