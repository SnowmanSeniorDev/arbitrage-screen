#syntax:docker/dockerfile:1
FROM node:16.14.2-alpine as base
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]

FROM base as dev
ENV NODE_ENV=development
RUN yarn install --frozen-lockfile
COPY . .
CMD ["yarn", "start:dev"]

FROM dev as test
ENV NODE_ENV=test
CMD ["yarn", "test"]