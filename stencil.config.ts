import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'flipdiv3d',
  outputTargets: [
    {
      type: 'docs-readme'
    },
    {
      type: 'dist'
    },
  ],
  bundles: [{ components: ['flip-div', 'card-item'] }],
  plugins: [
    sass()
  ]
};
