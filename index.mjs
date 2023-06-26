import { dirname, join } from 'node:path'
import { setTimeout } from 'node:timers/promises'
import { fileURLToPath } from 'node:url'
import Metalsmith from 'metalsmith'

const { NODE_ENV = 'production' } = process.env
const basePath = dirname(fileURLToPath(import.meta.url))

Metalsmith(basePath)
  .source(join(basePath, 'src'))
  .destination(join(basePath, 'dist'))

  .watch(NODE_ENV === 'development')
  .clean(NODE_ENV === 'production')

  // Run slow async plugin
  .use(() => setTimeout(1000))

  // Callback not logged due to slow async plugin
  .build(() => console.log('Build complete'))
