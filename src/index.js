const atheneumInfo = require('../package.json');
const colors = require('./tailwind/colors/index');
const variants = require('./tailwind/variants/index');
const fontFamily = require('./tailwind/font/index');

const main = () => {
  console.log();
  console.log(
    '\x1b[36m%s\x1b[0m',
    '📓 @theneum components',
    '\x1b[0m',
    atheneumInfo.homepage
  );
  console.group();
};

module.exports = require('tailwindcss/plugin')(main, {
  theme: { colors, fontFamily },
  variants: { variants },
});
