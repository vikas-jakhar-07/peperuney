/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1340px",
      },

      fontSize: {
        'custom-2xl': "28px",
        'custom-3xl': "32px",
        'custom-4xl': "40px",
        'custom-5xl': "52px",
        'custom-6xl': "54px",
        'custom-8xl': "80px",
      },

      fontFamily: {
        'luckiest': "'luckiest guy', sans-serif",
        'schoolbell': "'schoolbell', sans-serif",
      },

      lineHeight: {
        'custom-4xl': "43.2px",
        'custom-5xl': "44.56px",
        'custom-6xl': "52px",
        'custom-7xl': "54px",
        'custom-8xl': "80px",
      },

      colors: {
        'ink-black': "#0D0D0D",
        'charcoal-black': "#0E0E0E",
        'red': "#F83628",
        'jet-black': "#141313",
        'green': "#067A52",
        'transparent-brown': "#3030304D",
        'crimson-red': "#DA291C",
        'burnt-orange': "#893101",
        'gray': "#8b8581",
      },

      backgroundImage: {
        'hero': "url('./assets/images/webp/hero-bg.webp')",
        'icon': "url('./assets/images/webp/icon-bg.webp')",
        'meet': "url('./assets/images/webp/meet-bg.webp')",
        'meet-vector': "url('./assets/images/webp/meet-vector.webp')",
        'buy-bg': "url('./assets/images/webp/buy-bg.webp')",
        'meet-small': "url('./assets/images/webp/meet-small-bg.webp')",
        'click-bg': "url('./assets/images/webp/click-bg.webp')",
        'how-bg': "url('./assets/images/webp/how-bg-image.webp')",
        'menu-bg': "url('./assets/images/webp/menu-bg-image.webp')",
        'pizza-box': "url('./assets/images/webp/pizza-box-bg.webp')",
        'pizzanomics-bg': "url('./assets/images/webp/pizzanomics-bg.webp')",
        'casino-bg': "url('./assets/images/webp/casino-bg.webp')",
        'click-small': "url('./assets/images/webp/click-small-screen.webp')",
        'our-partners': "url('./assets/images/webp/our-partners-bg.webp')",
        'faq-bg': "url('./assets/images/webp/faq-bg.webp')",
        'join-bg': "url('./assets/images/webp/join-bg.webp')",
        'pizzanomics-card': "url('./assets/images/webp/pizzanomics-card-bg.webp')",
        'mobile-view': "url('./assets/images/webp/mobile-view.webp')",
        'mobile-menu': "url('./assets/images/webp/mobile-menu-bg.webp')",
        'join-mobile': "url('./assets/images/webp/join-mobile-bg.webp')",
        'room-layer': "url('./assets/images/webp/living-room-tv.webp')",
        'room-mobile': "url('./assets/images/webp/earn-and-arcade.webp')",
        'card-pizzanomics': "url('./assets/images/webp/cards-pizzanomics-bg.webp')",
        'hero-mobile-view': "url('./assets/images/webp/hero-mobile-bg.webp')",
        'peperuney-meme': "url('./assets/images/webp/peperuney-meme-bg.webp')",
        'mobile-meme': "url('./assets/images/webp/meme-mobile-bg.webp')",

      },

      boxShadow: {
        'custom3xl': "0px_4px_4px_0px_#00000040",
        'custom4xl': "4px_4px_0px_0px_#000000",
      },

      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 5px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

