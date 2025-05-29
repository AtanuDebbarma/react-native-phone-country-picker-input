import { CountryPickerModalProps } from '../types/types';
/**
 * Default country selection modal with search functionality.
 *
 * @param {CountryPickerModalProps} props - Modal props
 * @param {boolean} props.modalVisible - Controls modal visibility
 * @param {(visible: boolean) => void} props.setModalVisible - Modal visibility setter
 * @param {CountryPickerModalStyles} props.customStyles - Custom style overrides
 * @param {FlatListProps<Country>} props.otherFlatListProps - Additional FlatList props
 * @param {string|React.ReactNode} props.searchIcon - Search icon (emoji or component)
 * @param {string} props.countrySearchPlaceholder - Search input placeholder
 * @param {TextInputProps} props.otherCountrySearchTextInputProps - Additional search input props
 * @param {(country: Country) => void} props.setSelectedCountry - Country selection handler
 *
 * @featured
 * - Smart country search (name, code, dial code, common aliases)
 * - Customizable appearance
 * - Accessibility support
 *
 * @returns {React.JSX.Element} Country selection modal
 */
export declare const CountryPickerModal: ({ modalVisible, setModalVisible, customStyles, otherFlatListProps, searchIcon, countrySearchPlaceholder, otherCountrySearchTextInputProps, setSelectedCountry, }: CountryPickerModalProps) => React.JSX.Element;
