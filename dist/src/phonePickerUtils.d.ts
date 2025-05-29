import { Country } from './types/types';
/**
 * Get ISO code by dial code
 * @param dialCode Country dial code (e.g., '+1')
 * @returns {string | undefined } - ISO2 code (e.g., 'US') or undefined if not found
 */
export declare const getIsoCode: (dialCode: string) => string | undefined;
/**
 * Get dial code by ISO code
 * @param isoCode Country ISO2 code (e.g., 'US')
 * @returns {string | undefined} - Dial code (e.g., '+1') or undefined if not found
 */
export declare const getDialCode: (isoCode: string) => string | undefined;
/**
 * Get country flag by dial code or ISO code
 * @param identifier Country dial code (e.g., '+1') or ISO2 code (e.g., 'US')
 * @returns {string | undefined} - Flag emoji (e.g., '🇺🇸') or undefined if not found
 */
export declare const getCountryFlag: (identifier: string) => string | undefined;
/**
 * Get country name by dial code or ISO code
 * @param identifier Country dial code (e.g., '+1') or ISO code (e.g., 'US')
 * @returns {string | undefined} - Country name (e.g., 'United States') or undefined if not found
 */
export declare const getCountryName: (identifier: string) => string | undefined;
/**
 * Get country object by dial code or ISO code
 * @param identifier Country dial code (e.g., '+1') or ISO code (e.g., 'US')
 * @returns {Country | undefined} -  Country object or undefined if not found
 */
export declare const getCountryObject: (identifier: string) => Country | undefined;
/**
 * Returns an array of all countries in the world
 * @returns {Country[]} - Array of country objects
 */
export declare const getAllCountries: () => Country[] | undefined;
