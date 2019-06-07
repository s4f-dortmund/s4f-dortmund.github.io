# homepage

Small Info page for the local s4f group in Dortmund


## Contributing

Please open a Pull Request if you want to change something or add a post.


### Running locally

We are using [jekyll](https://jekyllrb.com/) for this webpage, as
this is directly supported by github pages.

To test this locally, install `ruby` and the `bundler` gem.

#### Ubuntu
```
$ sudo apt install ruby-dev nodejs libxml2-dev libxslt-dev
$ sudo gem install bundler
```

#### Arch

```
$ sudo pacman -S ruby nodejs libxml2 libxslt
$ gem install bundler
```

#### Fedora
```
$ sudo dnf install ruby ruby-devel nodejs libxml2 libxslt
$ gem install bundler
```

#### macOS
```
$ brew install ruby node
$ gem install bundler
```


Then run

```
$ bundle install --path vendor/bundle
```
to install the dependencies
and

```
$ bundle exec jekyll serve
```
to serve the website on `localhost:4000`
