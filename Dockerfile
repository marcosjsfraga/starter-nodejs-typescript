FROM node:14-slim
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm install pm2 -g
ENTRYPOINT [ "src/config/entrypoint.sh" ]
