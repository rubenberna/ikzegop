FROM node:11-alpine

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]