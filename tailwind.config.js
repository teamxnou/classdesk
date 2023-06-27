/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        mono: ['Space\\ Mono', 'monospace']
      }
    }
  },
  plugins: [require('@tailwindcss/container-queries')]
}
