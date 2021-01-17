# katuma-landing-page

This is the source code  of [Katuma](http://katuma.org/)'s landing page. It's just a single HTML file, a CSS and a tiny bit of JS.

## Contributing

Please see [CONTRIBUTING.md](https://github.com/coopdevs/katuma-landing-page/blob/master/CONTRIBUTING.md)

## Development

This website is implemented with [Jekyllrb](https://jekyllrb.com/). After installing all dependencies with `bundle install` run the development server executing:

```shell
$ bundle exec jekyll serve
```
The project has [Guard LiveReload](https://github.com/guard/guard-livereload) configured. If you want to use it, once you got the development
server running, open a new consol terminal in the project root directory and execute:

```shell
$ bundle exec guard
```

If you want to develop using Docker instead, install [Docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) and run:
```shell
docker-compose up
```

Now navigate to `http://127.0.0.1:4000/` to see the site.

Keep in mind that any change in the `Gemfile` will require rebuilding the image running the command `docker-compose up --build`.
