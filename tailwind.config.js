/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#070102',
        surface: {
          50: '#2a070c',
          100: '#1e0509',
          200: '#160407',
          300: '#100204',
          800: '#0a0203',
          900: '#070102',
        },
        primary: {
          DEFAULT: '#ef4444', // Crimson red
          hover: '#dc2626',
          glow: 'rgba(239, 68, 68, 0.45)',
        },
        accent: {
          red: '#ef4444',
          rose: '#f43f5e',
          amber: '#f59e0b',
          gold: '#fbbf24',
          darkRed: '#991b1b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 30px -5px rgba(239, 68, 68, 0.5)',
        'glow-rose': '0 0 30px -5px rgba(244, 63, 94, 0.5)',
        'glow-gold': '0 0 45px 10px rgba(245, 158, 11, 0.45)',
        'card-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        'spin-reverse': 'spinReverse 28s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'badge-pulse': 'badgePulse 2s ease-in-out infinite',
        'flow-dash': 'flowDash 1.5s linear infinite',
        'orbit-1': 'orbit1 18s linear infinite',
        'orbit-2': 'orbit2 22s linear infinite',
        'orbit-3': 'orbit3 26s linear infinite',
        'float-skill-1': 'floatSkill 4s ease-in-out infinite',
        'float-skill-2': 'floatSkill 4.8s ease-in-out 0.6s infinite',
        'float-skill-3': 'floatSkill 5.2s ease-in-out 1.2s infinite',
        'float-skill-4': 'floatSkill 4.4s ease-in-out 1.8s infinite',
        'float-skill-5': 'floatSkill 5s ease-in-out 2.4s infinite',
        'float-skill-6': 'floatSkill 4.6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        floatSkill: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-12px) scale(1.04)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        badgePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.7' },
        },
        flowDash: {
          'to': { strokeDashoffset: '-20' },
        }
      }
    },
  },
  plugins: [],
}
