import {defineConfig} from 'vite'
import nodeExternals from 'vite-plugin-node-externals'
import packageJson from './package.json'

export default defineConfig({
  plugins: [nodeExternals()],
  build: {
    target: 'ESNext',
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: Object.keys(packageJson.dependencies),
      output: {
        globals: {},
      },
    },
  },
})
