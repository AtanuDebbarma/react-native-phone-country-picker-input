# 📱 react-native-phone-picker

A customizable and lightweight phone number input with country picker for **React Native**, featuring flag emojis, dial codes, and search modal support. No third party dependencies used.

## ✨ Features

- 🌍 Built-in list of countries with flag, name, ISO code, and dial code
- 📞 Phone number input with country selector
- 🔍 Searchable modal for selecting countries
- 🎨 Full style customization support
- 🧩 Custom modal support
- ⚛️ Fully typed with TypeScript

## 📦 Installation

Zero third-party dependencies — no need to install anything else!

```bash
npm install react-native-phone-picker
# or
yarn add react-native-phone-picker
```

## 🧠 Usage

```tsx
import React from 'react';
import {PhonePickerInput} from 'react-native-phone-picker';

export default function App() {
  return (
    <PhonePickerInput
      phoneValue="+123456789"
      onPhoneNumberValueChange={text => console.log('Phone:', text)}
      onSelectCountry={country => console.log('Selected Country:', country)}
    />
  );
}
```

## ⚙️ Props

### PhonePickerInputProps

| Prop                                | Type                                          | Description                                      |
| ----------------------------------- | --------------------------------------------- | ------------------------------------------------ |
| `phoneValue`                        | `string`                                      | The current phone number value.                  |
| `onPhoneNumberValueChange`          | `(text: string) => void`                      | Callback for when the phone input changes.       |
| `disableTextInput`                  | `boolean`                                     | Disables the phone number input.                 |
| `keyboardType`                      | `KeyboardTypeOptions`                         | Input keyboard type. Defaults to `phone-pad`.    |
| `defaultplaceholder`                | `string`                                      | Placeholder for the phone input field.           |
| `defaultFlag`                       | `string`                                      | Initial flag emoji shown before selecting.       |
| `defaultCountryCode`                | `string`                                      | Initial dial code (e.g., `+1`).                  |
| `onSelectCountry`                   | `(country: Country) => void`                  | Called when a country is selected.               |
| `openCountryModal`                  | `boolean`                                     | Opens the country picker modal programmatically. |
| `customModal`                       | `boolean`                                     | If true, renders a custom modal.                 |
| `customModalComponent`              | `ReactNode`                                   | Your custom modal content.                       |
| `countrySearchPlaceholder`          | `string`                                      | Search bar placeholder inside modal.             |
| `otherCountrySearchTextInputProps`  | `TextInputProps`                              | Props for customizing search input.              |
| `searchIcon`                        | `string \| ReactNode`                         | Emoji or icon for the search bar.                |
| `otherFlatListProps`                | `FlatListProps<any>`                          | Extra props for the country list.                |
| `customStyles`                      | `CustomStyles`                                | Custom styles for all components.                |
| `customTextInputProps`              | `TextInputProps`                              | Extra props for the phone TextInput.             |
| `disableWrapperScrollView`          | `boolean`                                     | Use View instead of ScrollView if true.          |
| `customWrapperScrollViewStyle`      | `StyleProp<ViewStyle>`                        | Styles for ScrollView wrapper.                   |
| `wrapperScrollViewKeyboardPersists` | `'handled' \| 'always' \| 'never' \| boolean` | Keyboard tap behavior.                           |
| `customWrapperViewStyle`            | `StyleProp<ViewStyle>`                        | Styles for fallback View wrapper.                |

## 🌐 Utility Functions

Available from `phonePickerUtils`:

```ts
import {
  getIsoCode,
  getCountryFlag,
  getCountryName,
  getCountryObject,
  getAllCountries,
} from 'react-native-phone-picker/utils';
```

### Functions

| Function                               | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| `getIsoCode(dialCode: string)`         | Get ISO2 country code from dial code              |
| `getCountryFlag(identifier: string)`   | Get flag emoji from ISO or dial code              |
| `getCountryName(identifier: string)`   | Get country name from ISO or dial code            |
| `getCountryObject(identifier: string)` | Get full country object                           |
| `getAllCountries()`                    | Returns an array of all supported country objects |

## 🧩 Types

### Country

```ts
type Country = {
  name: string;
  iso2: string;
  dialCode: string;
  flag: string;
};
```

### CustomStyles

Define styles for all customizable components like flags, inputs, modals, lists, etc.

## 📸 Screenshots

<!-- Add screenshots or gifs here to showcase modal, flag picker, etc. -->

## 🛠 Roadmap

- [ ] Support for country code detection via geolocation
- [ ] Locale-aware default country
- [ ] Accessibility improvements

## 💬 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

MIT

## 🙌 Credits

Inspired by mobile UI patterns for international phone number input. Uses emoji flags and dial code data.
