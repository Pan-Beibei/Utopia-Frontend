# 使用 Node.js 作为基础镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制其他源代码文件到工作目录
COPY . .

# 打包项目
RUN npm run build

# 将打包后的文件复制到一个新的目录，这个目录可以在你的 Nginx 配置中使用
RUN mkdir -p /dist && cp -r dist/* /dist/