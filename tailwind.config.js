// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 扫描 src/app 下的所有路由文件
    "./src/app/**/*.{js,ts,jsx,tsx}",
    // 如果你有其他组件目录，也要加上
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // 如果你在根目录下还有入口文件（如 index.tsx）
    "./index.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 自定义颜色示例
        brand: {
          DEFAULT: "#1E40AF", // 主色
          light: "#3B82F6",
          dark: "#1E3A8A",
        },
      },
      fontFamily: {
        // 自定义字体示例
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),       // 表单样式优化
    require("@tailwindcss/typography"),  // 富文本排版
    require("@tailwindcss/aspect-ratio") // 宽高比工具
  ],
};
