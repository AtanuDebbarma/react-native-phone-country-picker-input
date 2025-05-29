// phonePickerUtils.ts

import {Countries} from './data/CountryList';
import {Country} from './types/types';

/**
 * Get ISO code by dial code
 * @param dialCode Country dial code (e.g., '+1')
 * @returns {string | undefined } - ISO2 code (e.g., 'US') or undefined if not found
 */
export const getIsoCode = (dialCode: string): string | undefined => {
  return Countries.find((country: Country) => country.dialCode === dialCode)
    ?.iso2;
};

/**
 * Get dial code by ISO code
 * @param isoCode Country ISO2 code (e.g., 'US')
 * @returns {string | undefined} - Dial code (e.g., '+1') or undefined if not found
 */
export const getDialCode = (isoCode: string): string | undefined => {
  return Countries.find((country: Country) => country.iso2 === isoCode)
    ?.dialCode;
};

/**
 * Get country flag by dial code or ISO code
 * @param identifier Country dial code (e.g., '+1') or ISO2 code (e.g., 'US')
 * @returns {string | undefined} - Flag emoji (e.g., '🇺🇸') or undefined if not found
 */
export const getCountryFlag = (identifier: string): string | undefined => {
  return Countries.find(
    (country: Country) =>
      country.dialCode === identifier ||
      country.iso2.toLowerCase() === identifier.toLowerCase(),
  )?.flag;
};

/**
 * Get country name by dial code or ISO code
 * @param identifier Country dial code (e.g., '+1') or ISO code (e.g., 'US')
 * @returns {string | undefined} - Country name (e.g., 'United States') or undefined if not found
 */
export const getCountryName = (identifier: string): string | undefined => {
  return Countries.find(
    (country: Country) =>
      country.dialCode === identifier ||
      country.iso2.toLowerCase() === identifier.toLowerCase(),
  )?.name;
};

/**
 * Get country object by dial code or ISO code
 * @param identifier Country dial code (e.g., '+1') or ISO code (e.g., 'US')
 * @returns {Country | undefined} -  Country object or undefined if not found
 */
export const getCountryObject = (identifier: string): Country | undefined => {
  return Countries.find(
    (country: Country) =>
      country.dialCode === identifier ||
      country.iso2.toLowerCase() === identifier.toLowerCase(),
  );
};

/**
 * Returns an array of all countries in the world
 * @returns {Country[]} - Array of country objects
 */
export const getAllCountries = (): Country[] | undefined => {
  return Countries;
};
