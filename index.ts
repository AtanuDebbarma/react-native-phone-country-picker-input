import {registerRootComponent} from 'expo';
import PhonePickerInput from './src/PhonePickerInput';

// Library exports
export {default} from './src/PhonePickerInput';
export * from './src/phonePickerUtils';
export type {Country, CustomStyles} from './src/types/types';

// Only register as root component if running in Expo environment
if (typeof __DEV__ !== 'undefined' && __DEV__) {
  registerRootComponent(PhonePickerInput);
}
