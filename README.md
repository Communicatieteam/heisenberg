# Heisenberg - Zeek Starter Theme

This is the Zeek Starter theme, based on [Underscores](http://underscores.me/) and [Foundation for Sites](http://foundation.zurb.com/sites/docs/), version ^6.4.1.

## Prerequisites
* Node.js ^7.x.x and npm ^5.x.x

## How to get started
1. Clone or [download](https://github.com/ZeekInteractive/heisenberg/archive/master.zip) the project onto your `themes` directory `(./wp-content/themes)`
2. cd into your theme
3. `npm install` or `yarn`
4. (Optional) Run a find for the string/slug `heisenberg` throughout the theme and replace it with your project name.
5. `npm run watch`

## Webpack
Webpack will handle Sass compiling, vendor-prefixing, CSS/JS minification and browser reloading. It will watch your Sass, JS and PHP files and will compile when a change is made, inject new CSS after compilation and will reload the browser when your PHP and JS files change.

### NPM Commands:
1. `npm run watch`: watches all over your files and reloads/injects assets
2. `npm run build`: one-time build without minification
3. `npm run production`: - one-time build with minification

## History

This project is based off of Automattic's `_s` project, based on the distribution zip
generated off of commit [`f6ddaaa21ef562fe85881f7e3cc5bdd1e592bb0e`](https://github.com/Automattic/_s/tree/f6ddaaa21ef562fe85881f7e3cc5bdd1e592bb0e).
