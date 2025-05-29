import {ScrollView, View, StyleSheet} from 'react-native';
import {PhonePickerInputMain} from './components/PhonePickerInputMain';
import {PhonePickerInputProps} from './types/types';

/**
 * A React component that combines a phone number input with a country picker modal.
 *
 * @remarks
 * - Wraps the main component in either a ScrollView or View based on `disableWrapperScrollView`
 * - Provides keyboard handling out of the box
 *
 * @param {PhonePickerInputProps} props - Component props
 * @param {boolean} [props.disableWrapperScrollView] - If true, uses View instead of ScrollView
 * @param {StyleProp<ViewStyle>} [props.customWrapperScrollViewStyle] - Style for ScrollView wrapper
 * @param {KeyboardPersistBehavior} [props.wrapperScrollViewKeyboardPersists='handled'] - Keyboard persistence behavior
 * @param {StyleProp<ViewStyle>} [props.customWrapperViewStyle] - Style for View wrapper
 *
 *
 * @example
 * <PhonePickerInput
 *   phoneValue={phone}
 *   onPhoneNumberValueChange={setPhone}
 *   customWrapperScrollViewStyle={{justifyContent: 'center',alignItems: 'center'}}
 *   onSelectCountry={(country) => {
 *   setSelectedCountry(country); // parent state setter . Value of @type {Country} from types.
 *   }}
 *   customStyles={{
 *   phoneTextInputStyle: {backgroundColor: 'white',fontSize:18,marginBottom: 10},
 *   flagStyle: {fontSize: 18, padding:15},
 *   countryListContainer: {justifyContent: 'space-between'},
 *   }}
 * />
 *
 *
 * @returns {React.JSX.Element} Phone number input with country picker
 */
const PhonePickerInput = (props: PhonePickerInputProps): React.JSX.Element => {
  const {
    // When true, replaces ScrollView wrapper with a simple View
    // Useful when ScrollView causes issues with parent scrollable components
    disableWrapperScrollView,

    // Custom styles for the ScrollView container
    // Applied only when disableWrapperScrollView is false
    customWrapperScrollViewStyle,

    // Controls keyboard behavior when tapping outside input
    // Defaults to 'handled' which provides best UX for forms
    wrapperScrollViewKeyboardPersists = 'handled',

    // Custom styles for the View container
    // Applied only when disableWrapperScrollView is true
    customWrapperViewStyle,
  } = props;

  // Simple View wrapper when ScrollView is disabled
  if (disableWrapperScrollView) {
    return (
      <View style={[styles.mainView, customWrapperViewStyle]}>
        <PhonePickerInputMain {...props} />
      </View>
    );
  }

  // Default ScrollView wrapper (better for forms with multiple inputs)
  return (
    <ScrollView
      // Prevents keyboard from dismissing immediately on tap
      keyboardShouldPersistTaps={wrapperScrollViewKeyboardPersists}
      // Container style with optional custom overrides
      contentContainerStyle={[
        styles.mainScrollView,
        customWrapperScrollViewStyle,
      ]}>
      <PhonePickerInputMain {...props} />
    </ScrollView>
  );
};
export default PhonePickerInput;

/**
 * Default styles for the component
 */
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  mainScrollView: {
    flexGrow: 1,
  },
});
