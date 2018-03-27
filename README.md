# katuma-landing-page

This is the source code  of [Katuma](http://katuma.org/)'s landing page. It's just a single HTML file, a CSS and a tiny bit of JS.

## Contributing

Please see [CONTRIBUTING.md](https://github.com/coopdevs/katuma-landing-page/blob/master/CONTRIBUTING.md)

## Development

If it wasn't for the dynamic translations implemented with [I18next](https://www.i18next.com/), you could develop this static website directly opening the index.html from your browser (as we used to do decades ago).

However, in order for the browser to allow the cross origin requests it's easier to boot up an HTTP server. If you have Ruby installed in your machine (which you will if you're running on Mac OS X), you can type the following from the terminal:

```shell
$ ruby -run -e httpd . -p 8080
```

And you'll see output like:

```
[2018-03-03 09:17:21] INFO  WEBrick 1.3.1
[2018-03-03 09:17:21] INFO  ruby 2.3.3 (2016-11-21) [universal.x86_64-darwin17]
[2018-03-03 09:17:21] INFO  WEBrick::HTTPServer#start: pid=1739 port=8080
```

Head over to your browser, navigate to `http://0.0.0.0:8080/` and you'll be done :tada:! make your changes and refresh :recycle:

If you don't have Ruby installed but you happen to have Python. You can rather run:

```shell
$ python -m SimpleHTTPServer
```

In that case the output will be:

```
Serving HTTP on 0.0.0.0 port 8000 ...
```

Just do as it says and navigate to `http://0.0.0.0:8000/` instead.
