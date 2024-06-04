# FROM node:20 AS build

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . ./
# RUN npm run build

# FROM nginx:1.19-alpine
# COPY --from=build /app/dist /usr/share/nginx/html

# FROM node:latest AS build

# WORKDIR /app


# COPY package.json ./
# RUN npm install

# COPY . .

# # RUN npm install
# # EXPOSE 80
# CMD ["npm", "run", "dev"]

FROM node:latest AS build

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .

EXPOSE 5173
# EXPOSE 24678

CMD ["npm", "run", "dev", "--","--host", "0.0.0.0"]