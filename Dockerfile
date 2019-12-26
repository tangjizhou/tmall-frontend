FROM daocloud.io/nginx:1.16.0
ADD ./tmall /usr/share/nginx/html/tmall
EXPOSE 80
RUN nginx
CMD ["nginx", "-g", "daemon off;"]
