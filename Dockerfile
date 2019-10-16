FROM ruby:2.6-alpine
WORKDIR /app
ADD . /app/
RUN set -uex; \
    bundle install
EXPOSE 4000
CMD ["bundle", "exec", "jekyll", "serve"]
