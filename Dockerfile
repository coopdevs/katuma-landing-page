FROM ruby:2.6-alpine
RUN apk update \
    && apk upgrade \
    && apk add --update --no-cache \
      g++ \
      musl-dev \
      make \
      libstdc++ \
      yarn
WORKDIR /app
ADD . /app/
RUN set -uex; \
    bundle install; \
    yarn install
EXPOSE 4000
CMD ["bundle", "exec", "jekyll", "serve"]
