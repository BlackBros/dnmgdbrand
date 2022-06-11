/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'public/*.html',
  ],
  theme: {
    extend: {},
    fontFamily:
    {
      vcr: "'VCR OSD Mono', sans-serif"
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
