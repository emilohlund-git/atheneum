module.exports = {
  config: {
    theme: {
      fontFamily: {
        default: ['Assistant', 'sans-serif'],
      },
      fill: {
        primary: {
          default: '#FE7063',
          content: '#FBFBFF',
          focus: '#E01300',
        },
        secondary: {
          default: '#93A4E1',
          content: '#FBFBFF',
          focus: '#4060C9',
        },
        accent: {
          default: '#F3BC55',
          content: '#0D0106',
          focus: '#D68F0A',
        },
        dark: {
          default: '#0D0106',
          content: '#FBFBFF',
          focus: '#0B0002',
        },
        light: {
          default: '#FBFBFF',
          content: '#0D0106',
          focus: '#ECECEC',
        },
        success: {
          default: '#139A43',
          content: '#FBFBFF',
          focus: '#107F37',
        },
        error: {
          default: '#D00000',
          content: '#FBFBFF',
          focus: '#B80000',
        },
      },
      colors: {
        primary: {
          default: '#FF331F',
          content: '#FBFBFF',
          focus: '#E01300',
        },
        secondary: {
          default: '#657ED4',
          content: '#FBFBFF',
          focus: '#4060C9',
        },
        accent: {
          default: '#EFA00B',
          content: '#0D0106',
          focus: '#D68F0A',
        },
        dark: {
          default: '#0D0106',
          content: '#FBFBFF',
          focus: '#0B0002',
        },
        light: {
          default: '#FBFBFF',
          content: '#0D0106',
          focus: '#ECECEC',
        },
        success: {
          default: '#139A43',
          content: '#FBFBFF',
          focus: '#107F37',
        },
        error: {
          default: '#D00000',
          content: '#FBFBFF',
          focus: '#B80000',
        },
      },
    },
    variants: {
      extend: {
        scale: ['active'],
        'transition-[clip-path]': ['motion-safe'],
        'duration-200': ['motion-safe'],
        'clip-path:inset': ['hover'],
      },
    },
  },
  handler: function() {},
};
