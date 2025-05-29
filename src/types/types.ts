import {
  KeyboardTypeOptions,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  FlatListProps,
} from 'react-native';

/**
 * Represents a country with its name, ISO 2-letter code, dial code, and flag.
 *
 * @property {string} name - The country's name.
 * @property {string} iso2 - The country's ISO 2-letter code.
 * @property {string} dialCode - The country's dial code.
 * @property {string} flag - The country's flag (emoji).
 */
export type Country = {
  name: string;
  iso2: string;
  dialCode: string;
  flag: string;
};

/**
 * Keyboard persistence behavior options for ScrollView.
 * Matches React Native's `keyboardShouldPersistTaps` behavior.
 */
export type KeybordShouldPersists =
  | boolean
  | 'handled'
  | 'always'
  | 'never'
  | undefined;

/**
 * Props for the top-level PhonePickerInput wrapper component.
 * Handles scroll behavior, keyboard persistence, and input customization.
 */
export type PhonePickerInputProps = {
  // 1. Wrapper Options

  /** If true, uses a View instead of a ScrollView wrapper. Useful in nested scrollable layouts. */
  disableWrapperScrollView?: boolean;

  /** Optional styles for the ScrollView container */
  customWrapperScrollViewStyle?: StyleProp<ViewStyle>;

  /** Determines keyboard tap behavior in ScrollView. Defaults to `'handled'`. */
  wrapperScrollViewKeyboardPersists?: KeybordShouldPersists;

  /** Optional styles for the View container (used if ScrollView is disabled) */
  customWrapperViewStyle?: StyleProp<ViewStyle>;

  // 2. Core Phone Input

  /** Controlled phone number value */
  phoneValue?: string;

  /** Callback triggered when phone number changes */
  onPhoneNumberValueChange?: (text: string) => void;

  /** Keyboard type for the input field. Defaults to `'phone-pad'`. */
  keyboardType?: KeyboardTypeOptions;

  /** If true, disables the phone number input field */
  disableTextInput?: boolean;

  /** Placeholder text shown in the input field */
  defaultplaceholder?: string;

  // 3. Country Picker Behavior

  /** Programmatic control of country picker modal visibility */
  openCountryModal?: boolean;

  /** Default flag emoji to show before a country is selected */
  defaultFlag?: string;

  /** Default dial code to show initially */
  defaultCountryCode?: string;

  /** Callback triggered when a country is selected in the modal */
  onSelectCountry?: (country: Country) => void;

  // 4. Custom Modal Support

  /** If true, renders a user-supplied modal instead of the built-in one */
  customModal?: boolean;

  /** React node to render as a custom modal when `customModal` is true */
  customModalComponent?: React.ReactNode;

  // 5. Search and List Customization

  /** Placeholder text for the country search bar in the modal */
  countrySearchPlaceholder?: string;

  /** Props to customize the search bar input in the modal */
  otherCountrySearchTextInputProps?: TextInputProps;

  /** Search icon inside the search bar. Can be a string emoji or a React component */
  searchIcon?: string | React.ReactNode;

  /** Additional props for customizing the FlatList behavior */
  otherFlatListProps?: FlatListProps<any>;

  // 6. Custom Styling

  /** Custom styles for all child components */
  customStyles?: CustomStyles;

  /** Additional props for the main phone number TextInput */
  customTextInputProps?: TextInputProps;
};

/**
 * Style overrides for all customizable parts of the phone picker input and modal components.
 */
export type CustomStyles = {
  /** Wrapper style for the main input container */
  mainInputContainer?: StyleProp<ViewStyle>;

  /** Style for the flag and code picker button container */
  flagPickerContainer?: StyleProp<ViewStyle>;

  /** Style applied when the flag picker is pressed (Pressable component)*/
  customPressedStyle?: StyleProp<ViewStyle>;

  /** Text style for the country flag emoji */
  flagStyle?: StyleProp<TextStyle>;

  /** Text style for the country code (e.g., +1) */
  countryCodeText?: StyleProp<TextStyle>;

  /** Style for the phone number input field */
  phoneTextInputStyle?: StyleProp<TextStyle>;

  /** Style for the modal background overlay */
  modalOverlay?: StyleProp<ViewStyle>;

  /** Style for the modal content container */
  modalContent?: StyleProp<ViewStyle>;

  /** Text style for the modal header title */
  modalTitle?: StyleProp<TextStyle>;

  /** Style for the search bar container in the modal */
  modalSearchContainer?: StyleProp<ViewStyle>;

  /** Style for the search icon inside the modal */
  modalSearchIcon?: StyleProp<TextStyle>;

  /** Text input style for the search input */
  modalSearchInput?: StyleProp<TextStyle>;

  /** Container style for each country item in the list */
  countryListContainer?: StyleProp<ViewStyle>;

  /** Text style for the country flag in the list */
  countryListFlag?: StyleProp<TextStyle>;

  /** Text style for the country name in the list */
  countryName?: StyleProp<TextStyle>;

  /** Text style for the dial code in the list (e.g., +91) */
  countryListDialCode?: StyleProp<TextStyle>;
};

/**
 * Props for the default country picker modal with search functionality.
 */
export type CountryPickerModalProps = {
  /** Whether the modal is currently visible */
  modalVisible: boolean;

  /** State setter to control the modal visibility */
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;

  /** Allows programmatic opening of the modal */
  openCountryModal?: boolean;

  /** Custom styles for modal layout and content */
  customStyles?: CustomStyles;

  /** Additional props for customizing the country list FlatList */
  otherFlatListProps?: FlatListProps<any>;

  /** Icon to show in the search bar. Can be a string (emoji) or a React node */
  searchIcon?: string | React.ReactNode;

  /** Placeholder text for the search input */
  countrySearchPlaceholder?: string;

  /** Extra TextInput props for the search input */
  otherCountrySearchTextInputProps?: TextInputProps;

  /** Callback to set the selected country when a list item is tapped */
  setSelectedCountry: (country: Country) => void;
};
