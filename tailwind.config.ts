import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          black: '#0B0D0F',
          gradientEnd: '#1A0F0C',
          orange: '#FF6A00',
          glow: '#FF8C1A',
          bronze: '#7A3E1C',
          gold: '#C87B2A',
          text: '#F5EDE6',
          muted: '#C2A58D',
          subtle: '#8A6B58',
        },
      },
      boxShadow: {
        ember: '0 0 25px rgba(255,106,0,0.25)',
        'ember-strong': '0 0 35px rgba(255,106,0,0.35)',
      },
      backdropBlur: {
        ember: '10px',
      },
    },
  },
  plugins: [],
};

export default config;
