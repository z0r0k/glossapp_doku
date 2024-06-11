FROM node:latest AS build

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--","--host", "0.0.0.0"]