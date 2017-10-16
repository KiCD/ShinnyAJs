docker build . -t angular-nginx:dev --no-cache
docker run --name angular-nginx -d -p 8080:80 angular-nginx:dev