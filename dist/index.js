"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const expo_1 = require("expo");
const PhonePickerInput_1 = __importDefault(require("./src/PhonePickerInput"));
// Library exports
var PhonePickerInput_2 = require("./src/PhonePickerInput");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(PhonePickerInput_2).default; } });
__exportStar(require("./src/phonePickerUtils"), exports);
// Only register as root component if running in Expo environment
if (typeof __DEV__ !== 'undefined' && __DEV__) {
    (0, expo_1.registerRootComponent)(PhonePickerInput_1.default);
}
