import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'index.js',
      format: 'cjs',
    },
    {
      file: 'index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
  ]
};
