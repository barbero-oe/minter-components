import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/main.ts',
  plugins: [typescript()],
  output: {
    file: 'dist/bundle.js',
    sourcemap: true,
    format: 'es'
  }
};
