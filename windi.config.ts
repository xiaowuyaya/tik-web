import { defineConfig } from 'vite-plugin-windicss';
import colors from 'windicss/colors'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx,ts,js}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      fontFamily: {
        pingfang: ["PingFangSC", 'Myriad Pro', 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', 'sans-serif'],
        youshe: ["YouShe"]
      },
      colors: {
        tik: {
          bg: '#FCFCFC',
          primary: '#366eba',
          primaryhover: '#5191d9',
          text: '#172b4d',
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('@windicss/plugin-question-mark'),
  ],
});