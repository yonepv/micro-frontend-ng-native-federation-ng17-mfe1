FROM node:alpine

WORKDIR /app
COPY ./src ./src
COPY package*.json ./
COPY tsconfig*.json ./
COPY angular.json ./
COPY federation.config.js ./

RUN npm install pnpm -g
RUN pnpm install

EXPOSE 4218
CMD ["pnpm", "start"]
