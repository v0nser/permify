import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/rbac-sdk.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/rbac-sdk.esm.js',
      format: 'esm',
    },
  ],
  plugins: [resolve(), typescript()],
};
