FROM node:10.16.3-alpine as build-stage
WORKDIR ./tmall-frontend
COPY package*.json ./
RUN npm install cnpm -g --registry=https://registry.npm.taobao.org
RUN cnpm install
COPY . .
RUN npm run build

FROM nginx:1.16.0
COPY --from=build-stage ./tmall-frontend/tmall /usr/share/nginx/html/tmall
EXPOSE 80
RUN nginx
CMD ["nginx", "-g", "daemon off;"]
