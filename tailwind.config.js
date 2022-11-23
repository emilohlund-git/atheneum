module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: 'media',
  plugins: [require('./src')],
};
