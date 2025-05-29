"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const PhonePickerInputMain_1 = require("./components/PhonePickerInputMain");
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
const PhonePickerInput = (props) => {
    const { 
    // When true, replaces ScrollView wrapper with a simple View.
    // Useful when ScrollView causes issues with parent scrollable components.
    disableWrapperScrollView, 
    // Custom styles for the wrapper container.
    customStyles, 
    // Controls keyboard behavior when tapping outside input.
    // Defaults to 'handled' which provides best UX for forms.
    wrapperScrollViewKeyboardPersists = 'handled', } = props;
    // Simple View wrapper when ScrollView is disabled.
    if (disableWrapperScrollView) {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.mainView, customStyles === null || customStyles === void 0 ? void 0 : customStyles.wrapperViewStyle], children: (0, jsx_runtime_1.jsx)(PhonePickerInputMain_1.PhonePickerInputMain, Object.assign({}, props)) }));
    }
    // Default ScrollView wrapper (better for forms with multiple inputs).
    // It was used to dismiss the keyboard when tapping outside the input.
    return ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView
    // Prevents keyboard from dismissing immediately on tap
    , { 
        // Prevents keyboard from dismissing immediately on tap
        keyboardShouldPersistTaps: wrapperScrollViewKeyboardPersists, 
        // Container style with optional custom overrides
        contentContainerStyle: [
            styles.mainScrollView,
            customStyles === null || customStyles === void 0 ? void 0 : customStyles.wrapperScrollViewStyle,
        ], children: (0, jsx_runtime_1.jsx)(PhonePickerInputMain_1.PhonePickerInputMain, Object.assign({}, props)) }));
};
exports.default = PhonePickerInput;
/**
 * Default styles for the component
 */
const styles = react_native_1.StyleSheet.create({
    mainView: {
        flex: 1,
    },
    mainScrollView: {
        flexGrow: 1,
    },
});
