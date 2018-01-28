FROM node:carbon
MAINTAINER Andrew Torski <andrew.torski@gmail.com>

workdir /user/src/app
copy . .
RUN npm install

expose 8888
cmd ["npm", "start"]

