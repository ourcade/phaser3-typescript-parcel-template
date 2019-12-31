![phaser3-parceljs-template](https://user-images.githubusercontent.com/2236153/71606463-37a0da80-2b2e-11ea-9b5f-5d26ccc84f91.png)

# Phaser3 + Parcel Template
> For people who want to spend time making games instead of configuring build tools.

![License](https://img.shields.io/badge/license-MIT-green)

## Prerequisites

You'll need [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [Parcel](https://parceljs.org/) installed.

It is highly recommended to use [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) to install Node.js and npm.

For Windows users there is [Node Version Manager for Windows](https://github.com/coreybutler/nvm-windows).

Install Node.js and `npm` with `nvm`:

```
$ nvm install node

$ nvm use node
```

Replace 'node' with 'latest' for `nvm-windows`.

Then install Parcel:

```
$ npm install -g parcel-bundler
```

## Getting Started

Clone this repository to your local machine:

```
$ git clone https://github.com/ourcade/phaser3-parcel-template.git
```

Then install dependencies:

```
$ npm install
```

Start development server:

```
$ npm run start
```

To create a production build:

```
$ npm run build
```

Production files will be placed in the `dist` folder. Then upload those files to a web server. 🎉

## Project Structure

```
    .
    ├── dist
    ├── node_modules
    ├── public
    │   ├── index.html
    ├── src
    │   ├── scenes
    │   │   ├── HelloWorldScene.js
    │   ├── main.js
    ├── package.json
```

The contents of this template is the basic [Phaser3 getting started example](http://phaser.io/tutorials/getting-started-phaser3/part5).

This template assumes you will want to organize your code into multiple files and use modern JavaScript (or TypeScript).

JavaScript files are intended for the `src` folder. An `index.html` exists in the `public` folder. `main.js` is the entry point.

Other than that there is no opinion on how you should structure your project. There is a `scenes` folder in `src` where the `HelloWorldScene.js` lives but you can do whatever you want.

## TypeScript

It just works. (Thanks to Parcel)

You can rename all the `.js` files to `.ts` and start using TypeScript.

You may also want to add a `tsconfig.json` file to the project root like this:

```
{
	"compilerOptions": {
		"target": "esnext",
		"module": "esnext",
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
		"sourceMap": true
	}
}
```

[More information on `tsconfig.json` options here.](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Flow

It just works. (Thanks to Parcel)

Just put `// @flow` at the top of your `.js` files. Parcel will handle the rest.

[Go here for more information on how to use Flow](https://flow.org/).

## Dev Server Port

You can change the dev server's port number by modifying the `start` script in `package.json`. We use Parcel's `-p` option to specify the port number.

This script looks like this:

```
parcel public/index.html -p 8000
```

Change 8000 to whatever you want.

## Other Notes

This template uses [parcel-plugin-clean-easy](https://github.com/lifuzhao100/parcel-plugin-clean-easy) to ensure only the latest files are in the `dist` folder. You can modify this behavior by changing `parcelCleanPaths` in `package.json`.

## License

[MIT License](https://github.com/ourcade/phaser3-parcel-template/blob/master/LICENSE)
