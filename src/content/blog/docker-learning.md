---
title: 'Docker 学习笔记：从镜像到可重复部署'
description: '用一个小型服务理解镜像层、容器网络、环境变量和 CI 构建缓存。'
date: 2026-08-22
tags: ['Docker', 'DevOps', 'CI/CD']
draft: false
---

## 镜像是构建产物

Dockerfile 应该描述可重复的构建过程，而不是记录某台机器上的手工步骤。锁定基础镜像、分离依赖安装和源码复制，可以让缓存更有效，也让发布结果更容易复现。

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
```

## 运行时配置

环境变量适合传递部署环境差异，不适合存放需要进入版本控制的应用默认值。生产镜像应该尽量只包含运行所需的文件。
