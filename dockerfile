FROM nginx:latest

RUN apt-get update && apt-get install -y python-certbot-nginx
COPY dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN certbot --nginx
