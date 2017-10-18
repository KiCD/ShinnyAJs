docker build . -t angular-nginx:dev --no-cache
docker run --name angular-nginx -p 8080:80 -d angular-nginx:dev