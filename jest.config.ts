import type { Config } from "@jest/types";

export default {
  // 继承 ts-jest 预定义配置
  preset: "ts-jest",
  // 测试代码运行环境
  testEnvironment: "node",
  // 测试文件查找匹配
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
} as Config.InitialOptions;
