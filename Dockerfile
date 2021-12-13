FROM node:15
ARG FONTAWESOME_AUTH_TOKEN
WORKDIR /code

COPY ./package.json ./
COPY ./yarn.lock ./

# Needed for fontawesome pro, but not part of git repo
COPY .npmrc ./

RUN yarn install

COPY . .
RUN yarn build
RUN rm .npmrc

EXPOSE 3000

HEALTHCHECK CMD curl --fail http://localhost:3000/ || exit 1
CMD ["yarn", "start", "-H", "0.0.0.0"]

