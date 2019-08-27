FROM node:11-slim

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && npm install

COPY . /app

EXPOSE 5000

CMD ["npm", "run", "start"]