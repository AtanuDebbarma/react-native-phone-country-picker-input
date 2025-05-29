import { PhonePickerInputProps } from '../types/types';
/**
 * Core component for phone number input with country picker functionality.
 *
 * @section Props
 * @param {PhonePickerInputProps} props - Component props.
 * @param {string} props.phoneValue - Current phone number value.
 * @param {(value: string) => void} props.onPhoneNumberValueChange - Phone number change handler.
 * @param {KeyboardTypeOptions} props.keyboardType - Keyboard type for input.
 * @param {boolean} props.disableTextInput - Disables the text input if true.
 * @param {string} props.defaultplaceholder - Input placeholder text.
 * @param {TextInputProps} props.customTextInputProps - Additional TextInput props.
 *
 * @section Country Picker
 * @param {boolean} props.openCountryModal - Programmatically control modal visibility.
 * @param {string} [props.defaultFlag='🇺🇸'] - Default flag emoji.
 * @param {string} [props.defaultCountryCode='+1'] - Default country dial code.
 * @param {(country: Country) => void} props.onSelectCountry - Country selection callback.
 *
 * @section Modal
 * @param {boolean} [props.customModal=false] - Use custom modal component if true.
 * @param {React.ReactNode} [props.customModalComponent] - Custom modal component.
 *
 * @returns {React.JSX.Element} Phone input with country picker controls.
 */
export declare const PhonePickerInputMain: ({ phoneValue, onPhoneNumberValueChange, keyboardType, disableTextInput, defaultplaceholder, customTextInputProps, openCountryModal, defaultFlag, defaultCountryCode, onSelectCountry, customArrowIconComponent, customModalComponent, countrySearchPlaceholder, otherCountrySearchTextInputProps, searchIcon, otherFlatListProps, customStyles, }: PhonePickerInputProps) => React.JSX.Element;
