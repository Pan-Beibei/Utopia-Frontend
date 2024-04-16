# 使用 Node.js 作为基础镜像
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY ./beibei-lexical-editor-0.0.2.tgz ./beibei-lexical-editor-0.0.2.tgz
RUN npm install
COPY . .
RUN npm run build