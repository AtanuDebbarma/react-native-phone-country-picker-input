import {useMemo, useState} from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Country, CountryPickerModalProps} from '../types/types';
import {Countries} from '../data/CountryList';
import {COUNTRY_COMMON_NAMES} from '../data/CountryCommonNames';

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
export const CountryPickerModal = ({
  // Modal Control
  modalVisible, // Tracks if modal is currently visible
  setModalVisible, // Controls modal visibility state
  customStyles, // Allows complete style customization

  // List Configuration
  otherFlatListProps, // Extended FlatList customization

  // Search Configuration
  searchIcon = '🔍', // Defaults to magnifier emoji (supports custom components)
  countrySearchPlaceholder = 'Search countries', // Search input placeholder text
  otherCountrySearchTextInputProps, // Additional search input props

  // Selection Handling
  setSelectedCountry, // Callback when country is selected
}: CountryPickerModalProps): React.JSX.Element => {
  // Current search query state
  const [searchText, setSearchText] = useState<string>('');

  // Gets alternative names for countries (e.g., "USA" for "United States")
  function getCommonNames(country: Country): string[] {
    return COUNTRY_COMMON_NAMES[country.iso2] || [];
  }

  // Memoized filtered country list based on search
  const filteredCountries = useMemo(() => {
    if (!searchText.trim()) return Countries;

    const searchLower = searchText.toLowerCase();
    return Countries.filter(country => {
      const nameLower = country.name.toLowerCase();
      const iso2Lower = country.iso2.toLowerCase();
      const commonNames = getCommonNames(country);

      // Multi-criteria search:
      return (
        // Exact matches
        nameLower === searchLower ||
        iso2Lower === searchLower ||
        // Partial matches
        nameLower.includes(searchLower) ||
        iso2Lower.includes(searchLower) ||
        // Common name matches
        commonNames.some(n => n.toLowerCase().includes(searchLower)) ||
        // Dial code matches (e.g., "+1")
        country.dialCode.includes(searchText)
      );
    });
  }, [searchText]);

  return (
    <Modal
      transparent
      visible={modalVisible}
      accessible={true}
      accessibilityLabel="Country picker modal"
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}>
      {/* Backdrop that closes modal when clicked */}
      <Pressable style={{flex: 1}} onPress={() => setModalVisible(false)}>
        {/* KeyboardAvoidingView to prevent keyboard from covering content */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <View style={[styles.modalOverlay, customStyles?.modalOverlay]}>
            {/* Modal content area (won't close when clicked inside) */}
            <Pressable
              onPress={e => {
                e.stopPropagation();
                Keyboard.dismiss();
              }}
              style={[styles.modalContent, customStyles?.modalContent]}>
              {/* Modal header */}
              <Text style={[styles.modalTitle, customStyles?.modalTitle]}>
                Select a country
              </Text>

              {/* Search bar */}
              <View
                style={[
                  styles.searchContainer,
                  customStyles?.modalSearchContainer,
                ]}>
                {typeof searchIcon === 'string' ? (
                  <Text
                    style={[styles.searchIcon, customStyles?.modalSearchIcon]}>
                    {searchIcon}
                  </Text>
                ) : (
                  searchIcon
                )}
                <TextInput
                  value={searchText}
                  onChangeText={setSearchText}
                  placeholder={countrySearchPlaceholder}
                  {...otherCountrySearchTextInputProps}
                  style={[
                    styles.modalSearchInput,
                    customStyles?.modalSearchInput,
                  ]}
                />
              </View>

              {/* Country list with scroll */}
              <FlatList
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps="handled" // Better keyboard handling
                data={filteredCountries}
                keyExtractor={item => item.iso2}
                {...otherFlatListProps}
                renderItem={({item}) => (
                  <Pressable
                    onPress={() => {
                      setSelectedCountry(item);
                      setModalVisible(false);
                    }}
                    style={({pressed}) => [
                      styles.countryListContainer,
                      customStyles?.countryListContainer,
                      pressed && {opacity: 0.7}, // Visual feedback on press
                    ]}>
                    <Text
                      style={[
                        styles.countryListFlag,
                        customStyles?.countryListFlag,
                      ]}>
                      {item.flag}
                    </Text>
                    <Text
                      style={[styles.countryName, customStyles?.countryName]}>
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        styles.countryListDialCode,
                        customStyles?.countryListDialCode,
                      ]}>
                      ({item.dialCode})
                    </Text>
                  </Pressable>
                )}
              />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
};

/**
 * Default styles for the component
 */
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '50%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: '5%',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'rgb(156, 156, 156)',
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(221, 221, 221)',
    shadowColor: 'rgba(18, 18, 19, 1)',
    shadowOffset: {width: 1.5, height: 1.5},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  searchIcon: {
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: 5,
  },

  modalSearchInput: {
    width: '90%',
    fontSize: 18,
    fontWeight: '400',
    borderRadius: 50,
  },
  countryListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(221, 221, 221)',
    borderRadius: 6,
    marginBottom: '2%',
  },

  countryListFlag: {
    fontSize: 20,
    fontWeight: '400',
  },
  countryName: {
    fontSize: 20,
    fontWeight: '400',
    marginLeft: '5%',
  },
  countryListDialCode: {
    fontSize: 20,
    fontWeight: '400',
    marginLeft: '2%',
  },
});
