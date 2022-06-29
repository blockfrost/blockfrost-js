FROM node:14.16.0
WORKDIR /app
COPY .env ./
COPY . ./
RUN yarn install
RUN yarn run build

EXPOSE 3000
CMD yarn run start
