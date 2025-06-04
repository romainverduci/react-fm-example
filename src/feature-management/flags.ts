import { Flag, RoxNumber } from 'rox-browser';

type IFeatureFlags = typeof flags;

export interface IFeatureFlagsState extends IFeatureFlags {
  loading: boolean;
}

export const flags = {
  namespace: {
    namespacedFlag: new Flag(),
  },
  // Boolean - should the message be shown?
  showMessage: new Flag(),
  // String - the message to show.
  message: 'This is the default message; try changing some flag values!',
  // Number (with options) - the size of the message text.
  fontSize: new RoxNumber(12, [12, 16, 24]),
};