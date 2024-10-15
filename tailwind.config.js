/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '100dvh': '100dvh', // Adiciona a classe min-h-100dvh
      },
    },
  },
  plugins: [],
}
