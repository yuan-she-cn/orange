import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default defineConfig([
  {
    // 打包入口文件
    input: "src/index.ts",
    // 打包输出文件配置
    output: {
      // 模块规范
      format: "cjs",
      // 打包输出文件
      file: "dist/index.cjs.js",
      // 生成源码映射文件(.js.map)，解决 typescript 不会生成源码映射文件
      sourcemap: true,
    },
    // 扩展插件配置
    plugins: [
      // 直接处理 TypeScript 插件，无需编译成 JavaScript
      typescript({
        // 扩展或覆盖 tsconfig.json 的 compilerOptions 选项
        compilerOptions: {
          // 类型声明文件和类型映射文件的输出目录
          declarationDir: "dist/types",
        },
      }),
      // 代码压缩和混淆插件
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "dist/index.esm.js",
    },
    plugins: [terser()],
  },
]);
