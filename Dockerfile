FROM node:20 AS build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=build /app/dist /usr/share/nginx/html
