import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import {CountryPickerModal} from './CountryPickerModal';
import {Country, PhonePickerInputProps} from '../types/types';

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
export const PhonePickerInputMain = ({
  // Core Input
  phoneValue, // Controlled phone number value
  onPhoneNumberValueChange, // Handler for phone number changes
  keyboardType = 'phone-pad', // Optimized for phone number input
  disableTextInput = false, // Toggles phone input visibility. if true disables the phone number text input.
  defaultplaceholder = 'Enter phone number', // Fallback placeholder text
  customTextInputProps, // Extended TextInput configuration

  // Country Picker
  openCountryModal, // External modal control trigger
  defaultFlag = '🇺🇸', // Fallback flag when no country selected
  defaultCountryCode = '+1', // Initial dial code before selection
  onSelectCountry, // Parent notification when country changes

  customArrowIconComponent, // React node to render as a custom component. e.g. react-native-vector-icons.

  // Modal Configuration
  customModalComponent, // Replacement modal component. User can pass custom modal component.
  /** Use getAllCountries to get the array of countries then make your own modal component.*/

  // Search Customization
  countrySearchPlaceholder, // Overrides default search placeholder
  otherCountrySearchTextInputProps, // Extended search input props
  searchIcon, // Custom search icon (string or component)
  otherFlatListProps, // Custom FlatList behavior props

  // Styling
  customStyles, // Style overrides for all subcomponents
}: PhonePickerInputProps): React.JSX.Element => {
  // Modal visibility state (can be controlled externally via openCountryModal)
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Currently selected country with defaults
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: '',
    iso2: '',
    dialCode: defaultCountryCode,
    flag: defaultFlag,
  });

  // Sync modal state with external control. If user want to open modal programmatically from parent using prop.
  useEffect(() => {
    if (openCountryModal !== undefined) {
      setModalVisible(openCountryModal);
    }
  }, [openCountryModal]);

  // Toggle modal visibility
  const handleModal = () => setModalVisible(prev => !prev);

  // Update selected country and notify parent. Sends selected country as callback.
  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    onSelectCountry?.(country);
  };

  return (
    <View style={customStyles?.mainInputContainer ?? styles.mainInputContainer}>
      {/* Country selector button */}
      <Pressable
        style={({pressed}) => [
          customStyles?.flagPickerContainer ?? styles.flagPickerContainer,
          pressed && (customStyles?.customPressedStyle ?? styles.pressed),
        ]}
        onPress={handleModal}
        accessible={true}
        accessibilityLabel={`Selected country: ${selectedCountry.name}. Tap to change country`}>
        <Text style={customStyles?.flagStyle ?? styles.flagStyle}>
          {selectedCountry.flag}
        </Text>
        {/**
         * - Conditionally render an Image or custom component
         * - Reason for using image was to avoid any package or dependancy to keep it light.
         * - Must customize for more dynamic icon.
         */}

        {!customArrowIconComponent ? (
          <Image
            source={require('./caretdown.png')}
            style={customStyles?.downArrowIcon ?? styles.downArrowIcon}
          />
        ) : (
          customArrowIconComponent
        )}

        <Text style={customStyles?.countryCodeText ?? styles.countryCodeText}>
          {selectedCountry.dialCode}
        </Text>
      </Pressable>

      {/* Conditionally render phone input */}
      {!disableTextInput && (
        <TextInput
          style={customStyles?.phoneTextInputStyle ?? styles.phoneTextInput}
          keyboardType={keyboardType}
          placeholder={defaultplaceholder}
          value={phoneValue}
          onChangeText={onPhoneNumberValueChange}
          {...customTextInputProps}
        />
      )}

      {/* Modal selection - either default or custom */}
      {!customModalComponent ? (
        <CountryPickerModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          openCountryModal={openCountryModal}
          customStyles={customStyles}
          otherFlatListProps={otherFlatListProps}
          searchIcon={searchIcon}
          countrySearchPlaceholder={countrySearchPlaceholder}
          otherCountrySearchTextInputProps={otherCountrySearchTextInputProps}
          setSelectedCountry={handleSelectCountry}
        />
      ) : (
        customModalComponent
      )}
    </View>
  );
};

/**
 * Default styles for the component
 */
const styles = StyleSheet.create({
  mainInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flagPickerContainer: {
    marginVertical: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgb(156, 156, 156)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(221, 221, 221)',
    shadowColor: 'rgba(18, 18, 19, 1)',
    shadowOffset: {width: 1.5, height: 1.5},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  flagStyle: {
    fontSize: 20,
    fontWeight: '400',
  },
  countryCodeText: {
    fontSize: 20,
    fontWeight: '400',
  },
  phoneTextInput: {
    width: '60%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgb(156, 156, 156)',
    marginVertical: '5%',
    paddingVertical: 12,
    paddingHorizontal: 15,
    paddingLeft: 16,
    backgroundColor: 'rgb(221, 221, 221)',
    fontSize: 20,
    fontWeight: 400,
    shadowColor: 'rgba(18, 18, 19, 1)',
    shadowOffset: {width: 1.5, height: 1.5},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  downArrowIcon: {
    objectFit: 'contain',
    width: 30,
    height: 30,
    padding: 0,
    margin: 0,
  },
  pressed: {
    opacity: 0.7,
  },
});
