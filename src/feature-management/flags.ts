import { Flag, RoxString, RoxNumber } from 'rox-browser'

type IFeatureFlags = typeof namespaceFlags

export interface IFeatureFlagsState extends IFeatureFlags {
  loading: boolean
}

export const namespaceFlags = {
  namespace: {
    namespacedFlag: new Flag(),
  },
  routes: {
    home: new Flag(true),
    about: new Flag(false),
  }
}