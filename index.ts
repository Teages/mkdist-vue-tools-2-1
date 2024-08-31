import { mkdist } from 'mkdist'
import { resolve } from 'node:path'

const rootDir = resolve("fixture")

const { writtenFiles } = await mkdist({
  rootDir,
  srcDir: resolve(rootDir, '.'),
  distDir: resolve(rootDir, 'dist'),
  loaders: ['js', 'vue'],
  declaration: true,
  cleanDist: true,
})

console.log(writtenFiles)
