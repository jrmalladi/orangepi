# use our prepared Raspberry Pi compatible Docker base image with Node.js
FROM node:10

# make the src folder available in the docker image
ADD . /src
WORKDIR /src

# install the dependencies from the package.json file
RUN npm install -g express
RUN npm install 

# make port 3000 available outside of the image
EXPOSE 3000

# start node with the index.js file of our hello-world application
CMD ["node", "index.js"]
