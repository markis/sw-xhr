import typescript from 'rollup-plugin-typescript';

export default [
  {
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
  },
  {
    input: './test/index.ts',
    output: [
      {
        file: 'test.js',
        format: 'cjs',
      }
    ],
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
    ]
  }
];
