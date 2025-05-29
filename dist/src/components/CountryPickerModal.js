"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryPickerModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const CountryList_1 = require("../data/CountryList");
const CountryCommonNames_1 = require("../data/CountryCommonNames");
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
const CountryPickerModal = ({ 
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
 }) => {
    // Current search query state
    const [searchText, setSearchText] = (0, react_1.useState)('');
    // Gets alternative names for countries (e.g., "USA" for "United States")
    function getCommonNames(country) {
        return CountryCommonNames_1.COUNTRY_COMMON_NAMES[country.iso2] || [];
    }
    // Memoized filtered country list based on search
    const filteredCountries = (0, react_1.useMemo)(() => {
        if (!searchText.trim())
            return CountryList_1.Countries;
        const searchLower = searchText.toLowerCase();
        return CountryList_1.Countries.filter(country => {
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
                country.dialCode.includes(searchText));
        });
    }, [searchText]);
    /**
     * Handles country selection, updating the selected country state, closing the
     * modal, and clearing the search filter.
     *
     * @param {Country} country - Country object from the country list.
     */
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setModalVisible(false);
        setSearchText(''); // Clear the search filter
        react_native_1.Keyboard.dismiss();
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { transparent: true, visible: modalVisible, accessible: true, accessibilityLabel: "Country picker modal", animationType: "slide", onRequestClose: () => setModalVisible(false), children: (0, jsx_runtime_1.jsx)(react_native_1.Pressable, { style: { flex: 1 }, onPress: () => setModalVisible(false), children: (0, jsx_runtime_1.jsx)(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : undefined, style: { flex: 1 }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.modalOverlay, customStyles === null || customStyles === void 0 ? void 0 : customStyles.modalOverlay], children: (0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { onPress: e => {
                            e.stopPropagation();
                            react_native_1.Keyboard.dismiss();
                        }, style: [styles.modalContent, customStyles === null || customStyles === void 0 ? void 0 : customStyles.modalContent], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.modalTitle, customStyles === null || customStyles === void 0 ? void 0 : customStyles.modalTitle], children: "Select a country" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
                                    styles.searchContainer,
                                    customStyles === null || customStyles === void 0 ? void 0 : customStyles.modalSearchContainer,
                                ], children: [typeof searchIcon === 'string' ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.searchIcon, customStyles === null || customStyles === void 0 ? void 0 : customStyles.modalSearchIcon], children: searchIcon })) : (searchIcon), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, Object.assign({ value: searchText, onChangeText: setSearchText, placeholder: countrySearchPlaceholder }, otherCountrySearchTextInputProps, { style: [
                                            styles.modalSearchInput,
                                            customStyles === null || customStyles === void 0 ? void 0 : customStyles.modalSearchInput,
                                        ] }))] }), (0, jsx_runtime_1.jsx)(react_native_1.FlatList, Object.assign({ nestedScrollEnabled: true, keyboardShouldPersistTaps: "handled" // Better keyboard handling
                                , data: filteredCountries, keyExtractor: item => item.iso2 }, otherFlatListProps, { renderItem: ({ item }) => ((0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { onPress: () => handleCountrySelect(item), style: ({ pressed }) => [
                                        styles.countryListContainer,
                                        customStyles === null || customStyles === void 0 ? void 0 : customStyles.countryListContainer,
                                        pressed && { opacity: 0.7 }, // Visual feedback on press
                                    ], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [
                                                styles.countryListFlag,
                                                customStyles === null || customStyles === void 0 ? void 0 : customStyles.countryListFlag,
                                            ], children: item.flag }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.countryName, customStyles === null || customStyles === void 0 ? void 0 : customStyles.countryName], children: item.name }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: [
                                                styles.countryListDialCode,
                                                customStyles === null || customStyles === void 0 ? void 0 : customStyles.countryListDialCode,
                                            ], children: ["(", item.dialCode, ")"] })] })) }))] }) }) }) }) }));
};
exports.CountryPickerModal = CountryPickerModal;
/**
 * Default styles for the component
 */
const styles = react_native_1.StyleSheet.create({
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
        shadowOffset: { width: 1.5, height: 1.5 },
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
