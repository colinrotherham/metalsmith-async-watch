# Metalsmith watch issue

Metalsmith experimental [`.watch()`](https://metalsmith.io/api/#Metalsmith+watch) with async plugins causes the [`.build()`](https://metalsmith.io/api/#Metalsmith+build) callback not to fire

Appears to be some sort of race condition that [`{ ignoreInitial: false }`](https://github.com/metalsmith/metalsmith/blob/ba18d85a787915de3b41f213570b409ebe883dfc/lib/index.js#L527) might fix since subsequent chokidar events will run the callback (e.g. saving a source file again)

## Project setup

Install Node.js dependencies

```shell
npm ci
```

## Examples

Run build only (callback runs)

```shell
npm run build
```

Run build in watch mode (callback does not run)

```shell
npm run dev
```
