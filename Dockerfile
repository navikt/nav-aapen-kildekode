FROM node:9.11.1-alpine as build

WORKDIR /app

ADD . .

RUN yarn --production=false

RUN yarn lint

RUN yarn test

RUN yarn build

FROM node:9.11.1-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn --production=true

COPY --from=build /app/.next /app/.next

COPY --from=build /app/.server-dist /app/.server-dist

COPY static /app/static

EXPOSE 3000

CMD ["yarn", "start"]
