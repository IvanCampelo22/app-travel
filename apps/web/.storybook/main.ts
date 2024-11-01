import { rootMain } from '../../../.storybook/main'

import type { Options, StorybookConfig } from '@storybook/core-common'
import path from 'path'

const config: StorybookConfig = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootMain.stories,
    '../../../libs/web/**/*.stories.tsx',
    '../../../libs/web/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    ...(rootMain.addons || []),
    '@nrwl/react/plugins/storybook',

    'storybook-addon-swc',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    }
  ],
  webpackFinal: async (config, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType } as Options)
    }

    // add your own webpack tweaks if needed

    return config
  }
}

module.exports = config
