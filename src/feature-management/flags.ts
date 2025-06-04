import { Flag, RoxString } from 'rox-browser'

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
  // String - the message to show.
  message: new RoxString(
    'This is the default message; try changing some flag values!'
  ),
  // String (with options) - the color of the message text.
  fontColor: new RoxString('Black', ['Red', 'Green', 'Blue', 'Black'])
}