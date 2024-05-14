FROM node:20 AS build

WORKDIR /app

RUN npm install

COPY package.json ./
COPY package-lock.json ./

COPY . ./
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=build /app/dist /usr/share/nginx/html

RUN docker run -d -p 5000:80 -v appdata:/usr/share/nginx/html sveltepress1