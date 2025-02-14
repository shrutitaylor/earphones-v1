/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange : '#FF6000',
        yellow:"#e3f542",
        blackMe:"#171717"
      },
      fontFamily: {
        pressStart: ['pressStart', 'sans-serif'],
        aoMono: ['aoMono', 'sans-serif'],
        spaceGro: ['Space', "sans-serif"],
        outfit: ['outfit', "sans-serif"],
        
      },
      animation: {
        'pulsate-fwd': 'pulsate-fwd 2.5s ease-in-out infinite both',
        'pop-up': 'pop-fwd 0.3s ease-in-out both',
        'text-pop-up-top': 'text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'card-pop-up': 'card-pop-up 0.3s ease-in-out both',
        'carousel': 'carousel 60s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'fade-out' :'slide-out-fwd-center 3s ease-out both'
      },
      keyframes: {
        'pulsate-fwd': {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(0.8)' },
        },
        'pop-fwd': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'text-pop-up-top': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'card-pop-up': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
          '100%': { transform: 'scale(1.05)', boxShadow: '0 8px 8px rgba(255, 217, 0, 0.49)' },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-500%)' }, 
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
      backgroundImage: {
        'landingImg': "url('./images/landing.png')",
        'paperBg': "url('./images/paper.jpg')",
        'cryptoCoins': "url('./images/crypto-coins.jpg')",
        "radial-gradient": "radial-gradient(farthest-corner at 70% 30%, #ffffff 4%, #61bdda 12% 24%, #4791b2 50% 65%, #61bdda 75%)",
        "linear-gradient-handle": "linear-gradient(to right, #1f1f1f, #161616, #1f1f1f 45% 55%, #161616, #1f1f1f)",
        "linear-gradient-base": "linear-gradient(to bottom, #444444, #222222)",
        "linear-gradient-active": "linear-gradient(to bottom, #00cfb6, #00a5bf)",
      },
      boxShadow: {
        hard: '4px 4px 0px 0px black',
        hardbutton: '3px 3px 0px 0px black',
        "inner-knob": "inset 0 0 8px 2px rgba(255, 255, 255, 0.4)",
        "inner-bar": "inset 0 1em 0.25em rgba(0, 0, 0, 0.4)",
        "outer-base": "0 -0.25em 0.5em #fff, 0 0.25em 0.5em #d7d7d7",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      }
    },
  },
  plugins: [],
};
