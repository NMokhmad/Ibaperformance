import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    appId:"ryf7sq0265vmlq50i2qe7dox",
    projectId: '3v6uwgf2',
    dataset: 'production',
    cdn: 'false', // `false` if you want to ensure fresh data
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
