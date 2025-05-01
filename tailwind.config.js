/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#EACB52',
          dark: '#B39129',
        },
        // Background colors
        background: {
          DEFAULT: '#0A0A0A', // Rich black
          light: '#121212',
          lighter: '#1A1A1A',
        },
        // Text colors
        text: {
          DEFAULT: '#FFFFFF', // White
          muted: '#B3B3B3', // Light gray
          dark: '#555555', // Dark gray
        },
        // Accent colors
        accent: {
          DEFAULT: '#2D1B4E', // Deep purple
          light: '#4B2D81',
          dark: '#1A0F2E',
        },
        // State colors
        success: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        warning: {
          DEFAULT: '#FF9800',
          light: '#FFB74D',
          dark: '#F57C00',
        },
        error: {
          DEFAULT: '#F44336',
          light: '#E57373',
          dark: '#D32F2F',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};