// Library exports
import {registerRootComponent} from 'expo';
import PhonePickerInput from './PhonePickerInput';
export {default} from './PhonePickerInput';
export * from './phonePickerUtils';
export type {Country, CustomStyles} from './types/types';

// Only register as root component if running in Expo environment
if (typeof __DEV__ !== 'undefined' && __DEV__) {
  registerRootComponent(PhonePickerInput);
}
