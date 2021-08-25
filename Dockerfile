# The base Docker image which is used as a foundation
FROM node:12-alpine

# The default working directory for the image
WORKDIR /app
ARG REACT_APP_BUILD_ARG
ENV REACT_APP_BUILD_ARG $REACT_APP_BUILD_ARG
# Copy the package.json and package-lock.json into the image
COPY package*.json ./

# Install node dependencies
RUN npm install

# Copies everything over to Docker environment
COPY . .
RUN npm run-script build
RUN npm i -g serve

# The default command to use when running this image
CMD ["serve", "build"]
