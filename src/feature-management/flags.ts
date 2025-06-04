import { Flag, RoxString, RoxNumber } from 'rox-browser'

type IFeatureFlags = typeof flags

export interface IFeatureFlagsState extends IFeatureFlags {
  loading: boolean
}

export const flags = {
  namespace: {
    namespacedFlag: new Flag(),
  },
  // Boolean - should the message be shown?
  showMessage: new Flag(),
  // String (with options) - the color of the message text.
  fontColor: new RoxString('Black', ['Red', 'Green', 'Blue', 'Black']),
  // Number (with options) - the size of the message text.
  fontSize: new RoxNumber(12, [12, 16, 24]),
}