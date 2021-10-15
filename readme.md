 docker build . -t node-web-app
 docker images
 docker run --name expressapp -p 47561:8080 -d node-web-app
 
