![phaser3-parceljs-template](https://user-images.githubusercontent.com/2236153/71606463-37a0da80-2b2e-11ea-9b5f-5d26ccc84f91.png)

# Phaser3 + Parcel Template
> For people who want to spend time making games instead of configuring build tools.

![License](https://img.shields.io/badge/license-MIT-green)

## Prerequisites

You'll need [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [Parcel](https://parceljs.org/) installed.

It is highly recommended to use [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) to install Node.js and npm.

For Windows users there is [Node Version Manager for Windows](https://github.com/coreybutler/nvm-windows).

Install Node.js and `npm` with `nvm`:

```bash
nvm install node

nvm use node
```

Replace 'node' with 'latest' for `nvm-windows`.

Then install Parcel:

```bash
npm install -g parcel-bundler
```

## Getting Started

Clone this repository to your local machine:

```bash
git clone https://github.com/ourcade/phaser3-parcel-template.git
```

This will create a folder named `phaser3-parcel-template`. You can specify a different folder name like this:

```bash
git clone https://github.com/ourcade/phaser3-parcel-template.git my-folder-name
```

Go into your new project folder and install dependencies:

```bash
cd phaser3-parcel-template # or 'my-folder-name'
npm install
```

Start development server:

```
npm run start
```

To create a production build:

```
npm run build
```

Production files will be placed in the `dist` folder. Then upload those files to a web server. 🎉

## Project Structure

```
    .
    ├── dist
    ├── node_modules
    ├── public
    ├── src
    │   ├── scenes
    │   │   ├── HelloWorldScene.js
    │   ├── index.html
    │   ├── main.js
    ├── package.json
```

The contents of this template is the basic [Phaser3 getting started example](http://phaser.io/tutorials/getting-started-phaser3/part5).

This template assumes you will want to organize your code into multiple files and use modern JavaScript (or TypeScript).

JavaScript files are intended for the `src` folder. `main.js` is the entry point referenced by `index.html`.

Other than that there is no opinion on how you should structure your project. There is a `scenes` folder in `src` where the `HelloWorldScene.js` lives but you can do whatever you want.

## Static Assets

Any static assets like images or audio files should be placed in the `public` folder. It'll then be served at http://localhost:8000/images/my-image.png

Example `public` structure:

```
    public
    ├── images
    │   ├── my-image.png
    ├── music
    │   ├── ...
    ├── sfx
    │   ├── ...
```

They can then be loaded by Phaser with `this.image.load('my-image', 'images/my-image.png')`.

## Class Properties Support

If you want to use the modern ES6 class properties feature then you'll need to add a `.babelrc` file at the project root with the `@babel/plugin-proposal-class-properties` plugin.

```
{
	"presets": [
		"env"
	],
	"plugins": [
		"@babel/plugin-proposal-class-properties"
	]
}
```

Parcel should automatically install the necessary dependencies.

If you run into an error about mismatched major versions then go into `package.json` to see what the major versions for `@babel/core` and `@babel/plugin-proposal-class-properties` are.

Reinstall one or the other manually to make the versions match 😉

## TypeScript

It just works. (Thanks to Parcel)

You can rename all the `.js` files to `.ts` and start using TypeScript.

You may also want to add a `tsconfig.json` file to the project root like this:

```
{
	"compilerOptions": {
		"target": "es2016",
		"module": "es6",
		"strict": true,
		"noImplicitAny": false,
		"noEmit": true,
		"allowJs": true,
		"jsx": "preserve",
		"importHelpers": true,
		"moduleResolution": "node",
		"experimentalDecorators": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"sourceMap": true,
		"baseUrl": "./src",
		"paths": {
		  "~/*": ["./*"]
		},
		"typeRoots": [
			"node_modules/@types",
			"node_module/phaser/types"
		],
		"types": [
			"phaser"
		]
	},
	"include": [
		"src/**/*"
	]
}
```

[More information on `tsconfig.json` options here.](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[Note on how Parcel handles `baseUrl` and `paths`.](https://gist.github.com/croaky/e3394e78d419475efc79c1e418c243ed)

## Flow

It just works. (Thanks to Parcel)

Just put `// @flow` at the top of your `.js` files. Parcel will handle the rest.

[Go here for more information on how to use Flow](https://flow.org/).

## Dev Server Port

You can change the dev server's port number by modifying the `start` script in `package.json`. We use Parcel's `-p` option to specify the port number.

The script looks like this:

```
parcel src/index.html -p 8000
```

Change 8000 to whatever you want.

## Other Notes

[parcel-plugin-clean-easy](https://github.com/lifuzhao100/parcel-plugin-clean-easy) is used to ensure only the latest files are in the `dist` folder. You can modify this behavior by changing `parcelCleanPaths` in `package.json`.

[parcel-plugin-static-files](https://github.com/elwin013/parcel-plugin-static-files-copy#readme) is used to copy static files from `public` into the output directory and serve it. You can add additional paths by modifying `staticFiles` in `package.json`.

## License

[MIT License](https://github.com/ourcade/phaser3-parcel-template/blob/master/LICENSE)
