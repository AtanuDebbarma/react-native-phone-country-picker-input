import { PhonePickerInputProps } from './types/types';
/**
 * A React component that combines a phone number input with a country picker modal.
 *
 * @remarks
 * - Wraps the main component in either a ScrollView or View based on `disableWrapperScrollView`.
 * - Provides keyboard handling out of the box.
 *
 * @param {PhonePickerInputProps} props - Component props.
 * @param {boolean} [props.disableWrapperScrollView] - If true, uses View instead of ScrollView.
 * @param {StyleProp<ViewStyle>} [props.customWrapperScrollViewStyle] - Style for ScrollView wrapper.
 * @param {KeyboardPersistBehavior} [props.wrapperScrollViewKeyboardPersists='handled'] - Keyboard persistence behavior.
 * @param {StyleProp<ViewStyle>} [props.customWrapperViewStyle] - Style for View wrapper.
 *
 *
 * @example
 * <PhonePickerInput
 *   phoneValue={phone}
 *   onPhoneNumberValueChange={setPhone}
 *   onSelectCountry={(country) => {
 *   setSelectedCountry(country); // parent state setter . Value of @type {Country} from types.
 *   }}
 *   customStyles={{
 *   wrapperScrollViewStyle={justifyContent: 'center',alignItems: 'center'}
 *   phoneTextInputStyle: {backgroundColor: 'white',fontSize:18,marginBottom: 10},
 *   flagStyle: {fontSize: 18, padding:15},
 *   countryListContainer: {justifyContent: 'space-between'},
 *   }}
 * />
 *
 *
 * @returns {React.JSX.Element} Phone number input with country picker.
 */
declare const PhonePickerInput: (props: PhonePickerInputProps) => React.JSX.Element;
export default PhonePickerInput;
