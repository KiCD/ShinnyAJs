docker build . -t test-nginx:dev --no-cache
docker run --name test-nginx -d -p 8080:80 test-nginx:dev