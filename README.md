# Bunny Boilerplate <small>Webpack, Redux, React &amp; friends</small>

Boilerplate for getting frontend projects up off the ground, with my preferred tools & file structure.

Example is a classic todo app: [http://bunny-boilerplate.surge.sh/][5]

## Details

### Structure

```shell
bunny-boilerplate
├── public                  # build output
└── src
	├── lib/                # utils
	├── models/             # redux ducks
	├── components/         # all components
	├── styles/             # shared css
	└── bootstrap.js        # mount app container
	└── store.js            # configure redux store
```

### Tools

* babel
* webpack
* eslint
* css modules

### Packages

* react
* redux
* lodash
* core-decorators

### Particulars

* webpack configured almost entirely with [hjs-webpack][3]
  * hot module replacement
  * css modules for all css loading
  * module aliases for all main src directories
* eslint is using [standardjs][1] (with react/jsx)
* files in `models` follow [ducks][2]
* redux middleware:
  * redux-thunk
  * require flux standard action (see `redux-utils` file)

## Build

**Development Server**

> _Note: Visit [http://localhost:3000/stats.html][4] for webpack bundle statistics._

```shell
PORT=3000 npm start
```

**Run 'Tests'**

```shell
npm run test
```

**Production Build**

```shell
npm run build
```

## Changelog

- 1.0.0 - initial release

### Special Thanks <3

Thanks to the army of people that made the tools and packages. <3

## License

Copyright, or something (c) 2016 Lochlan Bunn  
Licensed under the MIT license.

[1]: http://standardjs.com/
[2]: https://github.com/erikras/ducks-modular-redux
[3]: https://github.com/HenrikJoreteg/hjs-webpack
[4]: http://localhost:3000/stats.html
[5]: http://bunny-boilerplate.surge.sh/
