// metro.config.js  （Expo SDK 54 正确写法）
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// 忽略 macOS 生成的“._*”文件
//config.resolver.ignorePattern = /\/\._.*$/;
// 彻底阻止 Metro 读取 "._*" 文件
config.resolver.blockList = [
  /\/\._.*$/   // 例如 app/._index.tsx
];


module.exports = config;
