FROM node:12 AS build
# 工作目录
WORKDIR /app
# 复制npm安装的出来
COPY package.json /app/package.json
# 如果package.json没有进行改变,就不安装了,直接跳过
RUN #npm config set registry https://mirrors.cloud.tencent.com/npm/
RUN npm install
# 复制整个项目,进行打包
COPY . /app

RUN npm run build

# 复制配置文件和项目运行文件,然后开启端口
FROM nginx
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY --from=build /app/dist/ /usr/share/nginx/html/
#用本地的 default.conf 配置来替换nginx镜像里的默认配置
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
