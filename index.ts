import {registerRootComponent} from 'expo';

import PhonePickerInput from './src/PhonePickerInput';
export * from './src/phonePickerUtils';
export type {Country, CustomStyles} from '@/src/types/types';

registerRootComponent(PhonePickerInput);
