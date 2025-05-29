"use strict";
// phonePickerUtils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = exports.getCountryObject = exports.getCountryName = exports.getCountryFlag = exports.getDialCode = exports.getIsoCode = void 0;
const CountryList_1 = require("./data/CountryList");
/**
 * Get ISO code by dial code
 * @param dialCode Country dial code (e.g., '+1')
 * @returns {string | undefined } - ISO2 code (e.g., 'US') or undefined if not found
 */
const getIsoCode = (dialCode) => {
    var _a;
    return (_a = CountryList_1.Countries.find((country) => country.dialCode === dialCode)) === null || _a === void 0 ? void 0 : _a.iso2;
};
exports.getIsoCode = getIsoCode;
/**
 * Get dial code by ISO code
 * @param isoCode Country ISO2 code (e.g., 'US')
 * @returns {string | undefined} - Dial code (e.g., '+1') or undefined if not found
 */
const getDialCode = (isoCode) => {
    var _a;
    return (_a = CountryList_1.Countries.find((country) => country.iso2 === isoCode)) === null || _a === void 0 ? void 0 : _a.dialCode;
};
exports.getDialCode = getDialCode;
/**
 * Get country flag by dial code or ISO code
 * @param identifier Country dial code (e.g., '+1') or ISO2 code (e.g., 'US')
 * @returns {string | undefined} - Flag emoji (e.g., '🇺🇸') or undefined if not found
 */
const getCountryFlag = (identifier) => {
    var _a;
    return (_a = CountryList_1.Countries.find((country) => country.dialCode === identifier ||
        country.iso2.toLowerCase() === identifier.toLowerCase())) === null || _a === void 0 ? void 0 : _a.flag;
};
exports.getCountryFlag = getCountryFlag;
/**
 * Get country name by dial code or ISO code
 * @param identifier Country dial code (e.g., '+1') or ISO code (e.g., 'US')
 * @returns {string | undefined} - Country name (e.g., 'United States') or undefined if not found
 */
const getCountryName = (identifier) => {
    var _a;
    return (_a = CountryList_1.Countries.find((country) => country.dialCode === identifier ||
        country.iso2.toLowerCase() === identifier.toLowerCase())) === null || _a === void 0 ? void 0 : _a.name;
};
exports.getCountryName = getCountryName;
/**
 * Get country object by dial code or ISO code
 * @param identifier Country dial code (e.g., '+1') or ISO code (e.g., 'US')
 * @returns {Country | undefined} -  Country object or undefined if not found
 */
const getCountryObject = (identifier) => {
    return CountryList_1.Countries.find((country) => country.dialCode === identifier ||
        country.iso2.toLowerCase() === identifier.toLowerCase());
};
exports.getCountryObject = getCountryObject;
/**
 * Returns an array of all countries in the world
 * @returns {Country[]} - Array of country objects
 */
const getAllCountries = () => {
    return CountryList_1.Countries;
};
exports.getAllCountries = getAllCountries;
