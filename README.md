# ![arctichare][hareimg]

_**Super Quick Boilerplate for Webpack, React & friends.**_

> 
Avoid configuration.  
Use common packages.  
Have lovely developer experience.

Get your projects up _super quickly_ with this boilerplate  for Webpack, React & friends..

**Why? :rabbit:**

Bootstrapping frontend projects is time consuming, and providing consistent developer experience is hard.

The solution is simple... Take choices away. Reduce cognitive overload. Delay fatigue.

In this boilerplate, you aren't given any immediate choices to make. Just run `npm start` and write code. Wow, quick.

## Details

### Included Packages

* react
* react-dom
* redux
* react-redux
* flux-standard-action
* core-decorators
* lodash

### Tooling

* babel
* webpack
* standard
* css-modules

### Particulars

#### Webpack

Configured almost entirely with `hjs-webpack`. Includes:

* hot module replacement
* css modules
* import aliases for src directories
* bundle size visualiser (see [Build](#build))
* see [hjs-webpack][hjs] for details

##### Aliases

Module aliases have been setup for `lib`, `models`, `components`, `styles`.

```javascript
// Example. Always resolves to 'src/models/todos.js'.
import todos from 'models/todos'
```

#### Linting
ESLint is using [standardjs][standard], with react plugin.

#### Babel
Babel is using `es2015` and `stage-0` presets, as well `transform-decorators-legacy` and `react-hmre` plugins.

#### Redux
The files in `src/models` adhere to [ducks][ducks]. If you're going to use redux selectors, it is also good to define them in the models.

Enabled middlewares:
* `redux-thunk`
* require flux standard actions (see `redux-utils.js`)
* add your own in `store.js`

Redux DevTools [extension][devtools] is supported. 

### Project Structure

```shell
bunny-boilerplate
├── public                  # build output
└── src
	├── lib/                # utils
	├── models/             # redux ducks
	├── components/         # all components
	├── styles/             # shared css
	└── bootstrap.js        # app container
	└── store.js            # redux store
```

## Build

**Development**

```shell
PORT=3000 npm start
```

> _Note: Visit [localhost:3000/stats][webpackstats] for webpack bundle statistics._

**Run 'Tests'**

```shell
npm run test
```

**Production Build**

```shell
npm run build
```

### Deploy

Deploying with [surge.sh][surge] is quick and easy.

See _[bunny-boilerplate.surge.sh][demo]_ for the demo.

```shell
npm install -g surge

npm run build && \
surge --project ./public
```

## Changelog

- v1.0.0 - initial release

### Special Thanks

Thanks to the army of people that made the tools and packages. <3

## License

Licensed under the MIT license, (c) 2016 Lochlan Bunn.

--

_Bunny is agile and majestic._



[hareimg]: https://cdn.rawgit.com/loklaan/bd7ae7b672971689fe58f80890329338/raw/cb8833029d5c7fd9b400683bdcaa156161b43c93/arctichare.png
[standard]: http://standardjs.com/
[ducks]: https://github.com/erikras/ducks-modular-redux
[hjs]: https://github.com/HenrikJoreteg/hjs-webpack
[webpackstats]: http://localhost:3000/stats.html
[demo]: https://bunny-boilerplate.surge.sh/
[surge]: https://surge.sh/
[devtools]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
