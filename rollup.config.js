import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
// import ts from 'rollup-plugin-typescript';
 import typescript  from 'rollup-plugin-typescript2';
// import typescript from 'typescript'
export default {
  input: './ts/main.ts',
  output: { file: './Dist/bundle.js' },
  plugins: [typescript(),
    nodeResolve({ browser: true }),
    terser(),
  ],
};
