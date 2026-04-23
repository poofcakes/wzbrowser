(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wz"] = factory();
	else
		root["wz"] = factory();
})((function (_this) {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof __webpack_modules__ === 'undefined') {
    if (typeof global !== "undefined") return global;
  }
  if (typeof window !== "undefined") return window;
  if (typeof self !== "undefined") return self;
  var g;
  g = (function () { return this; })();
  try {
    g = g || new Function("return this")();
  } catch (_) {}
  return g || _this || {};
})(this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WzPropertyType; });
/**
 * @public
 */
var WzPropertyType;
(function (WzPropertyType) {
    // #region Regular
    WzPropertyType[WzPropertyType["Null"] = 0] = "Null";
    WzPropertyType[WzPropertyType["Short"] = 1] = "Short";
    WzPropertyType[WzPropertyType["Int"] = 2] = "Int";
    WzPropertyType[WzPropertyType["Long"] = 3] = "Long";
    WzPropertyType[WzPropertyType["Float"] = 4] = "Float";
    WzPropertyType[WzPropertyType["Double"] = 5] = "Double";
    WzPropertyType[WzPropertyType["String"] = 6] = "String";
    // #endregion
    // #region Extended
    WzPropertyType[WzPropertyType["SubProperty"] = 7] = "SubProperty";
    WzPropertyType[WzPropertyType["Canvas"] = 8] = "Canvas";
    WzPropertyType[WzPropertyType["Vector"] = 9] = "Vector";
    WzPropertyType[WzPropertyType["Convex"] = 10] = "Convex";
    WzPropertyType[WzPropertyType["Sound"] = 11] = "Sound";
    WzPropertyType[WzPropertyType["UOL"] = 12] = "UOL";
    WzPropertyType[WzPropertyType["Lua"] = 13] = "Lua";
    // #endregion
    // #region Png
    WzPropertyType[WzPropertyType["PNG"] = 14] = "PNG";
    // #endregion
})(WzPropertyType || (WzPropertyType = {}));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WzImageProperty; });
/* harmony import */ var _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _WzImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _WzObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _WzObjectType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);




/**
 * @public
 */
class WzImageProperty extends _WzObject_js__WEBPACK_IMPORTED_MODULE_2__[/* WzObject */ "a"] {
    /**
     * @virtual
     */
    get wzProperties() {
        return null;
    }
    /**
     * @virtual
     */
    getFromPath(_path) {
        return null;
    }
    /**
     * @virtual
     */
    at(_name) {
        return null;
    }
    /**
     * @virtual
     */
    set(_name, _value) {
        throw new _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_0__[/* NotImplementedError */ "a"]('[WzImageProperty#set]');
    }
    get objectType() {
        return _WzObjectType_js__WEBPACK_IMPORTED_MODULE_3__[/* WzObjectType */ "a"].Property;
    }
    get parentImage() {
        let parent = this.parent;
        while (parent != null) {
            if (parent instanceof _WzImage_js__WEBPACK_IMPORTED_MODULE_1__[/* WzImage */ "a"])
                return parent;
            else
                parent = parent.parent;
        }
        return null;
    }
    get wzFileParent() {
        if (this.parentImage != null) {
            return this.parentImage.wzFileParent;
        }
        return null;
    }
    static async parseLuaProperty(_offset, reader, parent, _parentImg) {
        // 28 71 4F EF 1B 65 F9 1F A7 48 8D 11 73 E7 F0 27 55 09 DD 3C 07 32 D7 38 21 57 84 70 C1 79 9A 3F 49 F7 79 03 41 F4 9D B9 1B 5F CF 26 80 3D EC 25 5F 9C
        // [compressed int] [bytes]
        const length = await reader.readWzInt();
        const rawEncBytes = await reader.read(length);
        const WzLuaProperty = __webpack_require__(19).WzLuaProperty;
        const lua = new WzLuaProperty('Script', rawEncBytes);
        lua.parent = parent;
        return lua;
    }
    static async parsePropertyList(offset, reader, parent, parentImg) {
        const entryCount = await reader.readWzInt();
        const properties = new Set( /* entryCount */);
        for (let i = 0; i < entryCount; i++) {
            const name = await reader.readStringBlock(offset);
            const ptype = await reader.readUInt8();
            switch (ptype) {
                case 0: {
                    const WzNullProperty = __webpack_require__(20).WzNullProperty;
                    const p = new WzNullProperty(name);
                    p.parent = parent;
                    properties.add(p);
                    break;
                }
                case 11:
                case 2: {
                    const WzShortProperty = __webpack_require__(21).WzShortProperty;
                    const p = new WzShortProperty(name, await reader.readInt16LE());
                    p.parent = parent;
                    properties.add(p);
                    break;
                }
                case 3:
                case 19: {
                    const WzIntProperty = __webpack_require__(13).WzIntProperty;
                    const p = new WzIntProperty(name, await reader.readWzInt());
                    p.parent = parent;
                    properties.add(p);
                    break;
                }
                case 20: {
                    const WzLongProperty = __webpack_require__(22).WzLongProperty;
                    const p = new WzLongProperty(name, await reader.readWzLong());
                    p.parent = parent;
                    properties.add(p);
                    break;
                }
                case 4: {
                    const WzFloatProperty = __webpack_require__(23).WzFloatProperty;
                    const type = await reader.readUInt8();
                    let p;
                    if (type === 0x80) {
                        p = new WzFloatProperty(name, await reader.readFloatLE());
                        p.parent = parent;
                        properties.add(p);
                    }
                    else if (type === 0) {
                        p = new WzFloatProperty(name, 0);
                        p.parent = parent;
                        properties.add(p);
                    }
                    break;
                }
                case 5: {
                    const WzDoubleProperty = __webpack_require__(24).WzDoubleProperty;
                    const p = new WzDoubleProperty(name, await reader.readDoubleLE());
                    p.parent = parent;
                    properties.add(p);
                    break;
                }
                case 8: {
                    const WzStringProperty = __webpack_require__(25).WzStringProperty;
                    const p = new WzStringProperty(name, await reader.readStringBlock(offset));
                    p.parent = parent;
                    properties.add(p);
                    break;
                }
                case 9: {
                    const eob = (await reader.readUInt32LE()) + reader.pos;
                    const exProp = await WzImageProperty.parseExtendedProp(reader, offset, eob, name, parent, parentImg);
                    properties.add(exProp);
                    if (reader.pos !== eob) {
                        reader.pos = eob;
                    }
                    break;
                }
                default:
                    throw new Error(`Unknown property type at ParsePropertyList, ptype = ${ptype}`);
            }
        }
        return properties;
    }
    static async parseExtendedProp(reader, offset, endOfBlock, name, parent, imgParent) {
        const type = await reader.readUInt8();
        switch (type) {
            case 0x01:
            case 0x1B:
                return await WzImageProperty.extractMore(reader, offset, endOfBlock, name, await reader.readWzStringAtOffset(offset + await reader.readInt32LE()), parent, imgParent);
            case 0x00:
            case 0x73:
                return await WzImageProperty.extractMore(reader, offset, endOfBlock, name, '', parent, imgParent);
            default:
                throw new Error('Invalid byte read at ParseExtendedProp');
        }
    }
    static async extractMore(reader, offset, _eob, name, iname, parent, imgParent) {
        if (iname === '') {
            iname = await reader.readWzString();
        }
        switch (iname) {
            case 'Property': {
                const WzSubProperty = __webpack_require__(26).WzSubProperty;
                const subProp = new WzSubProperty(name);
                subProp.parent = parent;
                reader.pos += 2; // Reserved?
                subProp.addProperties(await WzImageProperty.parsePropertyList(offset, reader, subProp, imgParent));
                return subProp;
            }
            case 'Canvas': {
                const WzCanvasProperty = __webpack_require__(27).WzCanvasProperty;
                const canvasProp = new WzCanvasProperty(name);
                reader.pos++;
                const b = await reader.readUInt8();
                if (b === 1) {
                    reader.pos += 2;
                    canvasProp.addProperties(await WzImageProperty.parsePropertyList(offset, reader, canvasProp, imgParent));
                }
                const WzPngProperty = __webpack_require__(31).WzPngProperty;
                canvasProp.pngProperty = await WzPngProperty.create(reader /* , imgParent.parseEverything */);
                canvasProp.pngProperty.parent = canvasProp;
                return canvasProp;
            }
            case 'Shape2D#Vector2D': {
                const WzVectorProperty = __webpack_require__(28).WzVectorProperty;
                const WzIntProperty = __webpack_require__(13).WzIntProperty;
                const vecProp = new WzVectorProperty(name);
                vecProp.parent = parent;
                vecProp.x = new WzIntProperty('x', await reader.readWzInt());
                vecProp.x.parent = vecProp;
                vecProp.y = new WzIntProperty('y', await reader.readWzInt());
                vecProp.y.parent = vecProp;
                return vecProp;
            }
            case 'Shape2D#Convex2D': {
                const WzConvexProperty = __webpack_require__(29).WzConvexProperty;
                const convexProp = new WzConvexProperty(name);
                convexProp.parent = parent;
                const convexEntryCount = await reader.readWzInt();
                // convexProp.wzProperties.capacity = convexEntryCount
                for (let i = 0; i < convexEntryCount; i++) {
                    convexProp.addProperty(await WzImageProperty.parseExtendedProp(reader, offset, 0, name, convexProp, imgParent));
                }
                return convexProp;
            }
            case 'Sound_DX8': {
                const WzBinaryProperty = __webpack_require__(30).WzBinaryProperty;
                const soundProp = await WzBinaryProperty.create(name, reader, imgParent.parseEverything);
                soundProp.parent = parent;
                return soundProp;
            }
            case 'UOL': {
                const WzUOLProperty = __webpack_require__(16).WzUOLProperty;
                reader.pos++;
                const t = await reader.readUInt8();
                switch (t) {
                    case 0: {
                        const p = new WzUOLProperty(name, await reader.readWzString());
                        p.parent = parent;
                        return p;
                    }
                    case 1: {
                        const p = new WzUOLProperty(name, await reader.readWzStringAtOffset(offset + await reader.readInt32LE()));
                        p.parent = parent;
                        return p;
                    }
                }
                throw new Error('Unsupported UOL type');
            }
            default:
                throw new Error('Unknown iname: ' + iname);
        }
    }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _Buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return os; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return zlib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return crypto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return asciiTextDecoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return utf16leTextDecoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jimp; });
/* harmony import */ var _tybys_native_require__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _wz_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _wz_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wz_js__WEBPACK_IMPORTED_MODULE_1__);


const _require = Object(_tybys_native_require__WEBPACK_IMPORTED_MODULE_0__["tryGetRequireFunction"])();
function throwError() {
    throw new Error('Node.js API is not supported');
}
const fs = (function () {
    try {
        return _require('fs');
    }
    catch (_) {
        return {
            mkdirSync() { throwError(); },
            writeFileSync() { throwError(); },
            openSync() { throwError(); },
            writeSync() { throwError(); },
            closeSync() { throwError(); }
        };
    }
})();
const path = (function () {
    try {
        return _require('path');
    }
    catch (_) {
        return {
            dirname() { throwError(); },
            join() { throwError(); }
        };
    }
})();
const _Buffer = (function () {
    try {
        return _require('buffer').Buffer;
    }
    catch (_) {
        return null;
    }
})();
const os = (function () {
    try {
        return _require('os');
    }
    catch (_) {
        return {
            // eslint-disable-next-line @typescript-eslint/prefer-includes
            EOL: window.navigator.userAgent.toLowerCase().indexOf('win') !== -1 ? '\r\n' : '\n'
        };
    }
})();
const zlib = (function () {
    try {
        return _require('zlib');
    }
    catch (_) {
        return null;
    }
})();
const crypto = (function () {
    try {
        return _require('crypto');
    }
    catch (_) {
        return {
            createCipheriv(_a, key, _iv) {
                return {
                    update(content) {
                        return _wz_js__WEBPACK_IMPORTED_MODULE_1__["mod"].aesEnc(content, key);
                    },
                    setAutoPadding() { }
                };
            }
        };
    }
})();
const asciiTextDecoder = (function () {
    try {
        return new TextDecoder('ascii');
    }
    catch (_) {
        return {
            decode(buf) {
                return _Buffer.from(buf).toString('ascii');
            }
        };
    }
})();
const utf16leTextDecoder = (function () {
    try {
        return new TextDecoder('utf-16le');
    }
    catch (_) {
        return {
            decode(buf) {
                return _Buffer.from(buf).toString('utf16le');
            }
        };
    }
})();
const Jimp = (function () {
    try {
        return _require('jimp');
    }
    catch (_) {
        return null;
    }
})();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WzError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ErrorLogger; });
/* harmony import */ var _util_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _NotImplementedError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


const EOL = _util_node_js__WEBPACK_IMPORTED_MODULE_0__[/* os */ "f"].EOL;
/** @public */
var ErrorLevel;
(function (ErrorLevel) {
    ErrorLevel[ErrorLevel["MissingFeature"] = 0] = "MissingFeature";
    ErrorLevel[ErrorLevel["IncorrectStructure"] = 1] = "IncorrectStructure";
    ErrorLevel[ErrorLevel["Critical"] = 2] = "Critical";
    ErrorLevel[ErrorLevel["Crash"] = 3] = "Crash";
})(ErrorLevel || (ErrorLevel = {}));
/** @public */
class WzError extends Error {
    constructor(level, message) {
        super(message);
        this.level = level;
    }
}
/** @public */
class ErrorLogger {
    static log(level, message) {
        this._errorList.add(new WzError(level, message));
    }
    static errorsPresent() {
        return this._errorList.size > 0;
    }
    static clearErrors() {
        return this._errorList.clear();
    }
    static saveToFile(file) {
        if (typeof window !== 'undefined') {
            throw new _NotImplementedError_js__WEBPACK_IMPORTED_MODULE_1__[/* NotImplementedError */ "a"]('Can not save to file in browser');
        }
        try {
            _util_node_js__WEBPACK_IMPORTED_MODULE_0__[/* fs */ "e"].mkdirSync(_util_node_js__WEBPACK_IMPORTED_MODULE_0__[/* path */ "g"].dirname(file), { recursive: true });
        }
        catch (_) { }
        const fd = _util_node_js__WEBPACK_IMPORTED_MODULE_0__[/* fs */ "e"].openSync(file, 'w');
        _util_node_js__WEBPACK_IMPORTED_MODULE_0__[/* fs */ "e"].writeSync(fd, `Starting error log on ${new Date().toLocaleString()}${EOL}`);
        for (const err of this._errorList) {
            _util_node_js__WEBPACK_IMPORTED_MODULE_0__[/* fs */ "e"].writeSync(fd, `[${ErrorLevel[err.level]}] ${err.message}${EOL}`);
        }
        _util_node_js__WEBPACK_IMPORTED_MODULE_0__[/* fs */ "e"].closeSync(fd);
    }
}
ErrorLogger._errorList = new Set();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotImplementedError; });
/**
 * @public
 */
class NotImplementedError extends Error {
    constructor(where) {
        super(`${typeof where === 'string' ? (where + ' ') : ''}Not implemented`);
    }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WzExtended; });
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * @public
 */
class WzExtended extends _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* WzImageProperty */ "a"] {
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WzImage; });
/* harmony import */ var _util_ErrorLogger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _WzObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _WzObjectType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);




/**
 * @public
 */
class WzImage extends _WzObject_js__WEBPACK_IMPORTED_MODULE_2__[/* WzObject */ "a"] {
    constructor(name, reader, checksum = 0) {
        super();
        this.parent = null;
        this.name = '';
        this.blockSize = 0;
        this.checksum = 0;
        this.offset = 0;
        this.tempFileStart = BigInt(0);
        this.tempFileEnd = BigInt(0);
        this.changed = false;
        this.parseEverything = false;
        this.parsed = false;
        this.properties = new Set();
        this.name = name;
        this.reader = reader;
        this.blockStart = reader.pos;
        this.checksum = checksum;
    }
    get isLuaImage() {
        return this.name.endsWith('.lua');
    }
    get wzProperties() {
        if (!this.parsed)
            throw new Error('Image has not been parsed yet');
        return this.properties;
    }
    get objectType() {
        // if (!this.parsed) this.parseImage()
        return _WzObjectType_js__WEBPACK_IMPORTED_MODULE_3__[/* WzObjectType */ "a"].Image;
    }
    addProperty(prop) {
        if (this.reader != null && !this.parsed)
            throw new Error('Image has not been parsed yet');
        prop.parent = this;
        this.properties.add(prop);
    }
    removeProperty(prop) {
        if (!this.parsed)
            throw new Error('Image has not been parsed yet');
        prop.parent = null;
        this.properties.delete(prop);
    }
    addProperties(props) {
        for (const prop of props) {
            this.addProperty(prop);
        }
    }
    clearProperties() {
        for (const prop of this.properties) {
            prop.parent = null;
        }
        this.properties.clear();
    }
    set(name, value) {
        if (value != null) {
            value.name = name;
            this.addProperty(value);
        }
    }
    dispose() {
        if (this._disposed)
            return;
        for (const prop of this.properties) {
            prop.dispose();
        }
        this.properties.clear();
        this._disposed = true;
    }
    at(name) {
        if (!this.parsed)
            throw new Error('Image has not been parsed yet');
        const nameLower = name.toLowerCase();
        for (const prop of this.properties) {
            if (prop.name.toLowerCase() === nameLower)
                return prop;
        }
        return null;
    }
    get wzFileParent() {
        if (this.parent != null) {
            return this.parent.wzFileParent;
        }
        return null;
    }
    getFromPath(path) {
        if (!this.parsed)
            throw new Error('Image has not been parsed yet');
        const segments = path.split('/');
        if (segments[0] === '..')
            return null;
        let ret = null;
        for (let x = 0; x < segments.length; x++) {
            let foundChild = false;
            const list = (ret == null ? this.properties : ret.wzProperties);
            if (list != null) {
                const l = list;
                for (const iwp of l) {
                    if (iwp.name === segments[x]) {
                        ret = iwp;
                        foundChild = true;
                        break;
                    }
                }
            }
            if (!foundChild) {
                return null;
            }
        }
        return ret;
    }
    calculateAndSetImageChecksum(bytes) {
        this.checksum = 0;
        for (let i = 0; i < bytes.length; i++) {
            this.checksum += bytes[i];
        }
    }
    async parseImage(forceReadFromData = false) {
        if (!forceReadFromData) { // only check if parsed or changed if its not false read
            if (this.parsed) {
                return true;
            }
            else if (this.changed) {
                this.parsed = true;
                return true;
            }
        }
        const reader = this.reader;
        // const originalPos = reader.pos
        reader.pos = this.offset;
        const b = await reader.readUInt8();
        switch (b) {
            case 0x1: {
                if (this.isLuaImage) {
                    const lua = await _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* WzImageProperty */ "a"].parseLuaProperty(this.offset, reader, this, this);
                    this.properties.add(lua);
                    this.parsed = true;
                    return true;
                }
                return false;
            }
            case 0x73: {
                const prop = await reader.readWzString();
                const val = await reader.readUInt16LE();
                if (prop !== 'Property' || val !== 0) {
                    return false;
                }
                break;
            }
            default: {
                _util_ErrorLogger_js__WEBPACK_IMPORTED_MODULE_0__[/* ErrorLogger */ "b"].log(_util_ErrorLogger_js__WEBPACK_IMPORTED_MODULE_0__[/* ErrorLevel */ "a"].MissingFeature, `[WzImage] New Wz image header found. b = ${b}`);
                return false;
            }
        }
        const images = await _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* WzImageProperty */ "a"].parsePropertyList(this.offset, reader, this, this);
        for (const img of images) {
            this.properties.add(img);
        }
        this.parsed = true;
        return true;
    }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WzObjectType; });
/**
 * @public
 */
var WzObjectType;
(function (WzObjectType) {
    WzObjectType[WzObjectType["File"] = 0] = "File";
    WzObjectType[WzObjectType["Image"] = 1] = "Image";
    WzObjectType[WzObjectType["Directory"] = 2] = "Directory";
    WzObjectType[WzObjectType["Property"] = 3] = "Property";
    WzObjectType[WzObjectType["List"] = 4] = "List";
})(WzObjectType || (WzObjectType = {}));


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * @public
 */
class Canvas {
    constructor(width, height) {
        if (typeof window === 'undefined') {
            this._canvas = new _node_js__WEBPACK_IMPORTED_MODULE_0__[/* Jimp */ "a"](width, height);
        }
        else {
            this._canvas = window.document.createElement('canvas');
            this._canvas.width = width;
            this._canvas.height = height;
        }
    }
    static rgbaToInt(r, g, b, a) {
        if (typeof window === 'undefined') {
            return _node_js__WEBPACK_IMPORTED_MODULE_0__[/* Jimp */ "a"].rgbaToInt(r, g, b, a);
        }
        if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number' || typeof a !== 'number') {
            throw new TypeError('r, g, b and a must be numbers');
        }
        if (r < 0 || r > 255) {
            throw new RangeError('r must be between 0 and 255');
        }
        if (g < 0 || g > 255) {
            throw new RangeError('g must be between 0 and 255');
        }
        if (b < 0 || b > 255) {
            throw new RangeError('b must be between 0 and 255');
        }
        if (a < 0 || a > 255) {
            throw new RangeError('a must be between 0 and 255');
        }
        r = Math.round(r);
        b = Math.round(b);
        g = Math.round(g);
        a = Math.round(a);
        const i = r * Math.pow(256, 3) + g * Math.pow(256, 2) + b * Math.pow(256, 1) + a * Math.pow(256, 0);
        return i;
    }
    setPixelColor(rgba, x, y) {
        if (typeof window === 'undefined') {
            this._canvas.setPixelColor(rgba, x, y);
            return this;
        }
        const context = this._canvas.getContext('2d');
        const imageData = context.createImageData(1, 1);
        imageData.data[0] = rgba >>> 24;
        imageData.data[1] = (rgba >>> 16) & 0xff;
        imageData.data[2] = (rgba >>> 8) & 0xff;
        imageData.data[3] = rgba & 0xff;
        context.putImageData(imageData, x, y);
        return this;
    }
    getWidth() {
        if (typeof window === 'undefined') {
            return this._canvas.getWidth();
        }
        return this._canvas.width;
    }
    getBufferAsync(mime) {
        if (typeof window === 'undefined') {
            return new Promise((resolve, reject) => {
                toBlob(this._canvas, mime).then(blob => {
                    if (blob == null) {
                        reject(new Error('getBufferAsync() failed'));
                        return;
                    }
                    const fr = new FileReader();
                    fr.addEventListener('error', () => { reject(fr.error); });
                    fr.addEventListener('load', () => {
                        const readBuffer = new Uint8Array(fr.result);
                        resolve(readBuffer);
                    });
                    fr.readAsArrayBuffer(blob);
                }).catch(reject);
            });
        }
        else {
            return this._canvas.getBufferAsync(mime);
        }
    }
    async writeAsync(file) {
        if (typeof window === 'undefined') {
            await this._canvas.writeAsync(file);
            return this;
        }
        const blob = await toBlob(this._canvas);
        if (blob == null) {
            throw new Error('Write image failed');
        }
        const a = window.document.createElement('a');
        a.download = file;
        a.href = URL.createObjectURL(blob);
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        a.dispatchEvent(event);
        a.remove();
        return this;
    }
    dispose() {
        this._canvas = null;
    }
}
function toBlob(canvas, type = 'image/png') {
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            resolve(blob);
        }, type);
    });
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ BinaryReader_BinaryReader; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ AsyncBinaryReader_AsyncBinaryReader; });

// UNUSED EXPORTS: Reader

// NAMESPACE OBJECT: ./node_modules/@tybys/binreader/lib/esm-modern/buffer.js
var buffer_namespaceObject = {};
__webpack_require__.r(buffer_namespaceObject);
__webpack_require__.d(buffer_namespaceObject, "validateBigInt", function() { return validateBigInt; });
__webpack_require__.d(buffer_namespaceObject, "readBigUInt64LE", function() { return readBigUInt64LE; });
__webpack_require__.d(buffer_namespaceObject, "readBigUInt64BE", function() { return readBigUInt64BE; });
__webpack_require__.d(buffer_namespaceObject, "readBigInt64LE", function() { return readBigInt64LE; });
__webpack_require__.d(buffer_namespaceObject, "readBigInt64BE", function() { return readBigInt64BE; });
__webpack_require__.d(buffer_namespaceObject, "readUInt32LE", function() { return readUInt32LE; });
__webpack_require__.d(buffer_namespaceObject, "readUInt16LE", function() { return readUInt16LE; });
__webpack_require__.d(buffer_namespaceObject, "readUInt8", function() { return readUInt8; });
__webpack_require__.d(buffer_namespaceObject, "readUInt32BE", function() { return readUInt32BE; });
__webpack_require__.d(buffer_namespaceObject, "readUInt16BE", function() { return readUInt16BE; });
__webpack_require__.d(buffer_namespaceObject, "readInt32LE", function() { return readInt32LE; });
__webpack_require__.d(buffer_namespaceObject, "readInt16LE", function() { return readInt16LE; });
__webpack_require__.d(buffer_namespaceObject, "readInt8", function() { return readInt8; });
__webpack_require__.d(buffer_namespaceObject, "readInt32BE", function() { return readInt32BE; });
__webpack_require__.d(buffer_namespaceObject, "readInt16BE", function() { return readInt16BE; });
__webpack_require__.d(buffer_namespaceObject, "readFloatBackwards", function() { return readFloatBackwards; });
__webpack_require__.d(buffer_namespaceObject, "readFloatForwards", function() { return readFloatForwards; });
__webpack_require__.d(buffer_namespaceObject, "readFloatLE", function() { return readFloatLE; });
__webpack_require__.d(buffer_namespaceObject, "readFloatBE", function() { return readFloatBE; });
__webpack_require__.d(buffer_namespaceObject, "readDoubleLE", function() { return readDoubleLE; });
__webpack_require__.d(buffer_namespaceObject, "readDoubleBE", function() { return readDoubleBE; });
__webpack_require__.d(buffer_namespaceObject, "copy", function() { return copy; });
__webpack_require__.d(buffer_namespaceObject, "bufferToString", function() { return bufferToString; });
__webpack_require__.d(buffer_namespaceObject, "methods", function() { return methods; });

// CONCATENATED MODULE: ./node_modules/@tybys/binreader/lib/esm-modern/Reader.js
/** @public */
class Reader {
    constructor(size = 0) {
        /**
         * Throws RangeError if position is out of range when set this to `true`
         */
        this.strictRangeChecking = false;
        size = size < 0 ? 0 : size;
        this._size = size;
        let pos = 0;
        Object.defineProperty(this, 'pos', {
            configurable: true,
            enumerable: true,
            get: () => pos,
            set: (v) => {
                if (typeof v !== 'number' || Number.isNaN(v)) {
                    throw new TypeError('Invalid position');
                }
                let message;
                if (v < 0) {
                    message = `Position out of range: ${v} < 0`;
                    if (!this.strictRangeChecking) {
                        console.warn(`${message}, set position to 0`);
                        pos = 0;
                        return;
                    }
                    throw new RangeError(message);
                }
                if (v > this._size) {
                    message = `Position out of range: ${v} > ${this._size}`;
                    if (!this.strictRangeChecking) {
                        console.warn(`${message}, set position to the end`);
                        pos = this._size;
                        return;
                    }
                    throw new RangeError(message);
                }
                pos = v;
            }
        });
    }
    /**
     * Set current position.
     * @param pos - Target position
     */
    seek(pos) {
        this.pos = pos;
    }
    /**
     * Get current position
     */
    tell() {
        return this.pos;
    }
    /**
     * Destructor.
     * @virtual
     */
    dispose() {
        this.close();
    }
}

// EXTERNAL MODULE: ./node_modules/@tybys/native-require/index.esm.js
var index_esm = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/@tybys/binreader/lib/esm-modern/node.js

const _require = Object(index_esm["tryGetRequireFunction"])();
const fs = (function () {
    try {
        return _require('fs');
    }
    catch (_) {
        const message = 'Node.js API is not supported';
        return {
            readSync() { throw new Error(message); },
            statSync() { throw new Error(message); },
            openSync() { throw new Error(message); },
            closeSync() { },
            read(_fd, ...args) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                Promise.resolve().then(() => {
                    let callback = null;
                    for (let i = 0; i < args.length; i++) {
                        if (typeof args[i] === 'function') {
                            callback = args[i];
                            break;
                        }
                    }
                    if (callback !== null) {
                        callback(new Error(message));
                    }
                });
            },
            promises: {
                read() {
                    return Promise.reject(new Error(message));
                }
            }
        };
    }
})();
const _Buffer = (function () {
    try {
        return _require('buffer').Buffer;
    }
    catch (_) {
        return null;
    }
})();

// CONCATENATED MODULE: ./node_modules/@tybys/binreader/lib/esm-modern/buffer.js
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

const float32Array = new Float32Array(1);
const uInt8Float32Array = new Uint8Array(float32Array.buffer);
const float64Array = new Float64Array(1);
const uInt8Float64Array = new Uint8Array(float64Array.buffer);
float32Array[0] = -1; // 0xBF800000
const bigEndian = uInt8Float32Array[3] === 0;
function validateBigInt() {
    if (typeof BigInt !== 'function')
        throw new Error('BigInt is not available');
}
function validateNumber(value, name) {
    if (typeof value !== 'number') {
        throw new TypeError(`${name || 'offset'} should be a number`);
    }
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new RangeError(`${type || 'offset'} should be an integer`);
    }
    if (length < 0) {
        throw new RangeError('Attempt to access memory outside buffer bounds');
    }
    throw new RangeError(`${type || 'offset'} should be >= ${type ? 1 : 0} and <= ${length}`);
}
function readBigUInt64LE(buf, offset = 0) {
    validateBigInt();
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
    }
    const lo = first +
        buf[++offset] * 2 ** 8 +
        buf[++offset] * 2 ** 16 +
        buf[++offset] * 2 ** 24;
    const hi = buf[++offset] +
        buf[++offset] * 2 ** 8 +
        buf[++offset] * 2 ** 16 +
        last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
}
function readBigUInt64BE(buf, offset = 0) {
    validateBigInt();
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
    }
    const hi = first * 2 ** 24 +
        buf[++offset] * 2 ** 16 +
        buf[++offset] * 2 ** 8 +
        buf[++offset];
    const lo = buf[++offset] * 2 ** 24 +
        buf[++offset] * 2 ** 16 +
        buf[++offset] * 2 ** 8 +
        last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
}
function readBigInt64LE(buf, offset = 0) {
    validateBigInt();
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
    }
    const val = buf[offset + 4] +
        buf[offset + 5] * 2 ** 8 +
        buf[offset + 6] * 2 ** 16 +
        (last << 24); // Overflow
    return (BigInt(val) << BigInt(32)) +
        BigInt(first +
            buf[++offset] * 2 ** 8 +
            buf[++offset] * 2 ** 16 +
            buf[++offset] * 2 ** 24);
}
function readBigInt64BE(buf, offset = 0) {
    validateBigInt();
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
    }
    const val = (first << 24) + // Overflow
        buf[++offset] * 2 ** 16 +
        buf[++offset] * 2 ** 8 +
        buf[++offset];
    return (BigInt(val) << BigInt(32)) +
        BigInt(buf[++offset] * 2 ** 24 +
            buf[++offset] * 2 ** 16 +
            buf[++offset] * 2 ** 8 +
            last);
}
function readUInt32LE(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 4);
    }
    return first +
        buf[++offset] * 2 ** 8 +
        buf[++offset] * 2 ** 16 +
        last * 2 ** 24;
}
function readUInt16LE(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 1];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 2);
    }
    return first + last * 2 ** 8;
}
function readUInt8(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const val = buf[offset];
    if (val === undefined) {
        boundsError(offset, buf.length - 1);
    }
    return val;
}
function readUInt32BE(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 4);
    }
    return first * 2 ** 24 +
        buf[++offset] * 2 ** 16 +
        buf[++offset] * 2 ** 8 +
        last;
}
function readUInt16BE(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 1];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 2);
    }
    return first * 2 ** 8 + last;
}
function readInt32LE(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 4);
    }
    return first +
        buf[++offset] * 2 ** 8 +
        buf[++offset] * 2 ** 16 +
        (last << 24); // Overflow
}
function readInt16LE(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 1];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 2);
    }
    const val = first + last * 2 ** 8;
    return val | (val & 2 ** 15) * 0x1fffe;
}
function readInt8(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const val = buf[offset];
    if (val === undefined) {
        boundsError(offset, buf.length - 1);
    }
    return val | (val & 2 ** 7) * 0x1fffffe;
}
function readInt32BE(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 4);
    }
    return (first << 24) + // Overflow
        buf[++offset] * 2 ** 16 +
        buf[++offset] * 2 ** 8 +
        last;
}
function readInt16BE(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 1];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 2);
    }
    const val = first * 2 ** 8 + last;
    return val | (val & 2 ** 15) * 0x1fffe;
}
// Read floats
function readFloatBackwards(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 4);
    }
    uInt8Float32Array[3] = first;
    uInt8Float32Array[2] = buf[++offset];
    uInt8Float32Array[1] = buf[++offset];
    uInt8Float32Array[0] = last;
    return float32Array[0];
}
function readFloatForwards(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 4);
    }
    uInt8Float32Array[0] = first;
    uInt8Float32Array[1] = buf[++offset];
    uInt8Float32Array[2] = buf[++offset];
    uInt8Float32Array[3] = last;
    return float32Array[0];
}
function readDoubleBackwards(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
    }
    uInt8Float64Array[7] = first;
    uInt8Float64Array[6] = buf[++offset];
    uInt8Float64Array[5] = buf[++offset];
    uInt8Float64Array[4] = buf[++offset];
    uInt8Float64Array[3] = buf[++offset];
    uInt8Float64Array[2] = buf[++offset];
    uInt8Float64Array[1] = buf[++offset];
    uInt8Float64Array[0] = last;
    return float64Array[0];
}
function readDoubleForwards(buf, offset = 0) {
    validateNumber(offset, 'offset');
    const first = buf[offset];
    const last = buf[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 8);
    }
    uInt8Float64Array[0] = first;
    uInt8Float64Array[1] = buf[++offset];
    uInt8Float64Array[2] = buf[++offset];
    uInt8Float64Array[3] = buf[++offset];
    uInt8Float64Array[4] = buf[++offset];
    uInt8Float64Array[5] = buf[++offset];
    uInt8Float64Array[6] = buf[++offset];
    uInt8Float64Array[7] = last;
    return float64Array[0];
}
const readFloatLE = bigEndian ? readFloatBackwards : readFloatForwards;
const readFloatBE = bigEndian ? readFloatForwards : readFloatBackwards;
const readDoubleLE = bigEndian ? readDoubleBackwards : readDoubleForwards;
const readDoubleBE = bigEndian ? readDoubleForwards : readDoubleBackwards;
function copy(source, target, targetStart = 0, sourceStart = 0, sourceEnd = source.length) {
    if (!(source instanceof Uint8Array)) {
        throw new TypeError('source shoule be a Uint8Array');
    }
    if (!(target instanceof Uint8Array)) {
        throw new TypeError('target shoule be a Uint8Array');
    }
    if (targetStart === undefined) {
        targetStart = 0;
    }
    else {
        targetStart = toInteger(targetStart, 0);
        if (targetStart < 0) {
            throw new RangeError('targetStart should be >= 0');
        }
    }
    if (sourceStart === undefined) {
        sourceStart = 0;
    }
    else {
        sourceStart = toInteger(sourceStart, 0);
        if (sourceStart < 0) {
            throw new RangeError('sourceStart should be >= 0');
        }
    }
    if (sourceEnd === undefined) {
        sourceEnd = source.length;
    }
    else {
        sourceEnd = toInteger(sourceEnd, 0);
        if (sourceEnd < 0) {
            throw new RangeError('sourceEnd should be >= 0');
        }
    }
    if (targetStart >= target.length || sourceStart >= sourceEnd) {
        return 0;
    }
    if (sourceStart > source.length) {
        throw new RangeError(`sourceStart should be <= ${source.length}`);
    }
    return _copyActual(source, target, targetStart, sourceStart, sourceEnd);
}
function _copyActual(source, target, targetStart, sourceStart, sourceEnd) {
    if (sourceEnd - sourceStart > target.length - targetStart) {
        sourceEnd = sourceStart + target.length - targetStart;
    }
    let nb = sourceEnd - sourceStart;
    const targetLen = target.length - targetStart;
    const sourceLen = source.length - sourceStart;
    if (nb > targetLen) {
        nb = targetLen;
    }
    if (nb > sourceLen) {
        nb = sourceLen;
    }
    if (sourceStart !== 0 || sourceEnd < source.length) {
        source = new Uint8Array(source.buffer, source.byteOffset + sourceStart, nb);
    }
    target.set(source, targetStart);
    return nb;
}
function toInteger(n, defaultVal) {
    n = +n;
    if (!Number.isNaN(n) &&
        n >= Number.MIN_SAFE_INTEGER &&
        n <= Number.MAX_SAFE_INTEGER) {
        return ((n % 1) === 0 ? n : Math.floor(n));
    }
    return defaultVal;
}
function bufferToString(buf, encoding, start, end) {
    if (_Buffer !== null) {
        return _Buffer.from(buf).toString(encoding, start, end);
    }
    if (arguments.length === 0) {
        const decoder = new TextDecoder('utf-8');
        return decoder.decode(buf.subarray(0, buf.length));
    }
    const len = buf.length;
    if (start <= 0) {
        start = 0;
    }
    else if (start >= len) {
        return '';
    }
    else {
        start |= 0;
    }
    if (end === undefined || end > len) {
        end = len;
    }
    else {
        end |= 0;
    }
    if (end <= start) {
        return '';
    }
    if (encoding === undefined) {
        const decoder = new TextDecoder('utf-8');
        return decoder.decode(buf.subarray(start, end));
    }
    const decoder = new TextDecoder(encoding);
    return decoder.decode(buf.subarray(start, end));
}
const methods = {
    readInt8: 1,
    readUInt8: 1,
    readInt16LE: 2,
    readUInt16LE: 2,
    readInt16BE: 2,
    readUInt16BE: 2,
    readInt32LE: 4,
    readUInt32LE: 4,
    readInt32BE: 4,
    readUInt32BE: 4,
    readBigInt64LE: 8,
    readBigUInt64LE: 8,
    readBigInt64BE: 8,
    readBigUInt64BE: 8,
    readFloatLE: 4,
    readFloatBE: 4,
    readDoubleLE: 8,
    readDoubleBE: 8
};

// CONCATENATED MODULE: ./node_modules/@tybys/binreader/lib/esm-modern/BinaryReader.js



const BinaryReader_methods = methods;
function readNumber(reader, method) {
    if (method === 'readBigInt64BE' || method === 'readBigInt64LE' || method === 'readBigUInt64BE' || method === 'readBigUInt64LE') {
        validateBigInt();
    }
    const buf = new Uint8Array(BinaryReader_methods[method]);
    let readLength;
    if (reader.type === 0 /* FILE */) {
        readLength = fs.readSync(reader._file, buf, 0, BinaryReader_methods[method], reader.pos);
    }
    else {
        readLength = copy(reader._buffer, buf, 0, reader.pos, reader.pos + BinaryReader_methods[method]);
    }
    reader.pos += readLength;
    return buffer_namespaceObject[method](buf, 0);
}
/**
 * @public
 */
class BinaryReader_BinaryReader extends Reader {
    constructor(buffer) {
        if (typeof buffer === 'string') {
            super(fs.statSync(buffer).size);
            Object.defineProperty(this, 'type', { configurable: true, enumerable: true, writable: false, value: 0 /* FILE */ });
            this._file = fs.openSync(buffer, 'r');
            this._path = buffer;
            this._buffer = null;
        }
        else if (buffer instanceof Uint8Array) {
            super(buffer.length);
            this._file = null;
            this._path = '';
            this._buffer = buffer;
        }
        else {
            throw new TypeError('[BinaryReader] Contructor parameter type error');
        }
        this._opened = true;
    }
    close() {
        if (this._opened) {
            if (this.type === 0 /* FILE */) {
                if (typeof this._file === 'number') {
                    fs.closeSync(this._file);
                }
                this._file = null;
            }
            else {
                this._buffer = null;
            }
            this._opened = false;
        }
    }
    read(len = 1) {
        if (len === 0) {
            return new Uint8Array(0);
        }
        if (this.pos + len > this._size) {
            len = this._size - this.pos;
        }
        const buf = new Uint8Array(len);
        let readLength;
        if (this.type === 0 /* FILE */) {
            readLength = fs.readSync(this._file, buf, 0, len, this.pos);
        }
        else {
            readLength = copy(this._buffer, buf, 0, this.pos, this.pos + len);
        }
        this.pos += readLength;
        return buf;
    }
    readToBuffer(buf, bufStart = 0, len = 1) {
        if (len === 0) {
            return 0;
        }
        if (this.pos + len > this._size) {
            len = this._size - this.pos;
        }
        let readLength;
        if (this.type === 0 /* FILE */) {
            readLength = fs.readSync(this._file, buf, bufStart, len, this.pos);
        }
        else {
            readLength = copy(this._buffer, buf, bufStart, this.pos, this.pos + len);
        }
        this.pos += readLength;
        return readLength;
    }
    readString(encoding = 'ascii', length = -1) {
        if (length === 0) {
            return '';
        }
        if (length === -1) {
            let l = 0;
            const buf = new Uint8Array(1);
            do {
                let readLength;
                if (this.type === 0 /* FILE */) {
                    readLength = fs.readSync(this._file, buf, 0, 1, this.pos + l);
                }
                else {
                    readLength = copy(this._buffer, buf, 0, this.pos + l, this.pos + l + 1);
                }
                if (readLength === 0)
                    break;
                l += readLength;
            } while (buf[0] !== 0);
            const r = new Uint8Array(l - 1);
            if (this.type === 0 /* FILE */) {
                fs.readSync(this._file, r, 0, l - 1, this.pos);
            }
            else {
                copy(this._buffer, r, 0, this.pos, this.pos + l - 1);
            }
            this.pos += l;
            return bufferToString(r, encoding);
        }
        return bufferToString(this.read(length), encoding);
    }
    readBoolean() {
        return this.readUInt8() !== 0;
    }
    readInt8() {
        return readNumber(this, 'readInt8');
    }
    readUInt8() {
        return readNumber(this, 'readUInt8');
    }
    readInt16LE() {
        return readNumber(this, 'readInt16LE');
    }
    readUInt16LE() {
        return readNumber(this, 'readUInt16LE');
    }
    readInt16BE() {
        return readNumber(this, 'readInt16BE');
    }
    readUInt16BE() {
        return readNumber(this, 'readUInt16BE');
    }
    readInt32LE() {
        return readNumber(this, 'readInt32LE');
    }
    readUInt32LE() {
        return readNumber(this, 'readUInt32LE');
    }
    readInt32BE() {
        return readNumber(this, 'readInt32BE');
    }
    readUInt32BE() {
        return readNumber(this, 'readUInt32BE');
    }
    readBigInt64LE() {
        return readNumber(this, 'readBigInt64LE');
    }
    readBigUInt64LE() {
        return readNumber(this, 'readBigUInt64LE');
    }
    readBigInt64BE() {
        return readNumber(this, 'readBigInt64BE');
    }
    readBigUInt64BE() {
        return readNumber(this, 'readBigUInt64BE');
    }
    readFloatLE() {
        return readNumber(this, 'readFloatLE');
    }
    readFloatBE() {
        return readNumber(this, 'readFloatBE');
    }
    readDoubleLE() {
        return readNumber(this, 'readDoubleLE');
    }
    readDoubleBE() {
        return readNumber(this, 'readDoubleBE');
    }
}

// CONCATENATED MODULE: ./node_modules/@tybys/binreader/lib/esm-modern/AsyncBinaryReader.js



let onceSupported = false;
try {
    var options = Object.defineProperty({}, 'once', {
        get: function () {
            onceSupported = true;
        }
    });
    window.addEventListener('test', null, options);
}
catch (err) { }
const listenerOpts = onceSupported ? { once: true } : false;
function fsRead(reader, buf, bufStart, len, pos) {
    return new Promise((resolve, reject) => {
        const file = reader._file;
        if (typeof file === 'number') {
            try {
                resolve(fs.readSync(file, buf, bufStart, len, pos));
            }
            catch (err) {
                reject(err);
            }
        }
        else {
            const fr = new FileReader();
            let onError;
            // eslint-disable-next-line prefer-const
            let onLoad;
            // eslint-disable-next-line prefer-const
            onError = () => {
                if (!onceSupported) {
                    fr.removeEventListener('error', onError);
                    fr.removeEventListener('load', onLoad);
                }
                reject(fr.error);
            };
            // eslint-disable-next-line prefer-const
            onLoad = () => {
                if (!onceSupported) {
                    fr.removeEventListener('error', onError);
                    fr.removeEventListener('load', onLoad);
                }
                const readBuffer = new Uint8Array(fr.result);
                const copied = copy(readBuffer, buf, bufStart, 0, readBuffer.length);
                resolve(copied);
            };
            fr.addEventListener('error', onError, listenerOpts);
            fr.addEventListener('load', onLoad, listenerOpts);
            fr.readAsArrayBuffer(file.slice(pos, pos + len));
        }
    });
}
const AsyncBinaryReader_methods = methods;
function AsyncBinaryReader_readNumber(reader, method) {
    const promise = new Promise((resolve, reject) => {
        if (method === 'readBigInt64BE' || method === 'readBigInt64LE' || method === 'readBigUInt64BE' || method === 'readBigUInt64LE') {
            try {
                validateBigInt();
            }
            catch (error) {
                reject(error);
                return;
            }
        }
        const buf = new Uint8Array(AsyncBinaryReader_methods[method]);
        if (reader.type === 0 /* FILE */) {
            fsRead(reader, buf, 0, AsyncBinaryReader_methods[method], reader.pos).then(readLength => {
                reader.pos += readLength;
                resolve(buffer_namespaceObject[method](buf, 0));
            }).catch(reject);
        }
        else {
            const readLength = copy(reader._buffer, buf, 0, reader.pos, reader.pos + AsyncBinaryReader_methods[method]);
            reader.pos += readLength;
            resolve(buffer_namespaceObject[method](buf, 0));
        }
    });
    return promise;
}
/**
 * @public
 */
class AsyncBinaryReader_AsyncBinaryReader extends Reader {
    constructor(fileOrBuffer) {
        if (fileOrBuffer instanceof Uint8Array) {
            super(fileOrBuffer.length);
            Object.defineProperty(this, 'type', { configurable: true, enumerable: true, writable: false, value: 1 /* BUFFER */ });
            this._path = '';
            this._file = null;
            this._buffer = fileOrBuffer;
        }
        else if (typeof fileOrBuffer === 'string') {
            super(fs.statSync(fileOrBuffer).size);
            Object.defineProperty(this, 'type', { configurable: true, enumerable: true, writable: false, value: 0 /* FILE */ });
            this._file = fs.openSync(fileOrBuffer, 'r');
            this._path = fileOrBuffer;
            this._buffer = null;
        }
        else {
            super(fileOrBuffer.size);
            Object.defineProperty(this, 'type', { configurable: true, enumerable: true, writable: false, value: 0 /* FILE */ });
            this._file = fileOrBuffer;
            this._path = fileOrBuffer.webkitRelativePath || '';
            this._buffer = null;
        }
        this._opened = true;
    }
    close() {
        if (this._opened) {
            if (this.type === 0 /* FILE */) {
                if (typeof this._file === 'number') {
                    fs.closeSync(this._file);
                }
                this._file = null;
            }
            else {
                this._buffer = null;
            }
            this._opened = false;
        }
    }
    read(len = 1) {
        const promise = new Promise((resolve, reject) => {
            if (len === 0) {
                resolve(new Uint8Array(0));
                return;
            }
            if (this.pos + len > this._size) {
                len = this._size - this.pos;
            }
            const buf = new Uint8Array(len);
            if (this.type === 0 /* FILE */) {
                fsRead(this, buf, 0, len, this.pos).then(readLength => {
                    this.pos += readLength;
                    resolve(buf);
                }).catch(reject);
            }
            else {
                const readLength = copy(this._buffer, buf, 0, this.pos, this.pos + len);
                this.pos += readLength;
                resolve(buf);
            }
        });
        return promise;
    }
    readToBuffer(buf, bufStart = 0, len = 1) {
        const promise = new Promise((resolve, reject) => {
            if (len === 0) {
                resolve(0);
                return;
            }
            if (this.pos + len > this._size) {
                len = this._size - this.pos;
            }
            if (this.type === 0 /* FILE */) {
                fsRead(this, buf, bufStart, len, this.pos).then(readLength => {
                    this.pos += readLength;
                    resolve(readLength);
                }).catch(reject);
            }
            else {
                const readLength = copy(this._buffer, buf, bufStart, this.pos, this.pos + len);
                this.pos += readLength;
                resolve(readLength);
            }
        });
        return promise;
    }
    async readString(encoding = 'ascii', length = -1) {
        if (length === 0) {
            return '';
        }
        if (length === -1) {
            let l = 0;
            const buf = new Uint8Array(1);
            do {
                let readLength;
                if (this.type === 0 /* FILE */) {
                    readLength = await fsRead(this, buf, 0, 1, this.pos + l);
                }
                else {
                    readLength = copy(this._buffer, buf, 0, this.pos + l, this.pos + l + 1);
                }
                if (readLength === 0)
                    break;
                l += readLength;
            } while (buf[0] !== 0);
            const r = new Uint8Array(l - 1);
            if (this.type === 0 /* FILE */) {
                await fsRead(this, r, 0, l - 1, this.pos);
            }
            else {
                copy(this._buffer, r, 0, this.pos, this.pos + l - 1);
            }
            this.pos += l;
            return bufferToString(r, encoding);
        }
        return bufferToString(await this.read(length), encoding);
    }
    readBoolean() {
        return this.readUInt8().then(u8 => (u8 !== 0));
    }
    readInt8() {
        return AsyncBinaryReader_readNumber(this, 'readInt8');
    }
    readUInt8() {
        return AsyncBinaryReader_readNumber(this, 'readUInt8');
    }
    readInt16LE() {
        return AsyncBinaryReader_readNumber(this, 'readInt16LE');
    }
    readUInt16LE() {
        return AsyncBinaryReader_readNumber(this, 'readUInt16LE');
    }
    readInt16BE() {
        return AsyncBinaryReader_readNumber(this, 'readInt16BE');
    }
    readUInt16BE() {
        return AsyncBinaryReader_readNumber(this, 'readUInt16BE');
    }
    readInt32LE() {
        return AsyncBinaryReader_readNumber(this, 'readInt32LE');
    }
    readUInt32LE() {
        return AsyncBinaryReader_readNumber(this, 'readUInt32LE');
    }
    readInt32BE() {
        return AsyncBinaryReader_readNumber(this, 'readInt32BE');
    }
    readUInt32BE() {
        return AsyncBinaryReader_readNumber(this, 'readUInt32BE');
    }
    readBigInt64LE() {
        return AsyncBinaryReader_readNumber(this, 'readBigInt64LE');
    }
    readBigUInt64LE() {
        return AsyncBinaryReader_readNumber(this, 'readBigUInt64LE');
    }
    readBigInt64BE() {
        return AsyncBinaryReader_readNumber(this, 'readBigInt64BE');
    }
    readBigUInt64BE() {
        return AsyncBinaryReader_readNumber(this, 'readBigUInt64BE');
    }
    readFloatLE() {
        return AsyncBinaryReader_readNumber(this, 'readFloatLE');
    }
    readFloatBE() {
        return AsyncBinaryReader_readNumber(this, 'readFloatBE');
    }
    readDoubleLE() {
        return AsyncBinaryReader_readNumber(this, 'readDoubleLE');
    }
    readDoubleBE() {
        return AsyncBinaryReader_readNumber(this, 'readDoubleBE');
    }
}

// CONCATENATED MODULE: ./node_modules/@tybys/binreader/lib/esm-modern/index.js
/**
 * Binary reader for Node.js and browser.
 *
 * @packageDocumentation
 */





/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WzObject; });
/* harmony import */ var _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

/**
 * @public
 */
class WzObject {
    constructor() {
        // public hcTag: any = null
        // public hcTag_spine: any = null
        // public msTag: any = null
        // public msTag_spine: any = null
        // public tag3: any = null
        this._disposed = false;
        // public abstract remove (): void
    }
    /**
     * @virtual
     */
    get wzValue() {
        return null;
    }
    /**
     * @virtual
     */
    getBitmap() {
        throw new _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_0__[/* NotImplementedError */ "a"]('[WzObject#getBitmap]');
    }
    getTopMostWzDirectory() {
        let parent = this.parent;
        if (parent == null) {
            return this;
        }
        while (parent.parent != null) {
            parent = parent.parent;
        }
        return parent;
    }
    get fullPath() {
        let result = this.name;
        let currObj = this;
        while (currObj.parent != null) {
            currObj = currObj.parent;
            result = currObj.name + '\\' + result;
        }
        return result;
    }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WzDirectory; });
/* harmony import */ var _WzImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _WzObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _WzObjectType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



/**
 * @public
 */
class WzDirectory extends _WzObject_js__WEBPACK_IMPORTED_MODULE_1__[/* WzObject */ "a"] {
    constructor(reader, name, hash, wzIv, wzFile) {
        super();
        this.images = new Set();
        this.subDirs = new Set();
        this.offset = 0;
        this.blockSize = 0;
        this.checksum = 0;
        this.parent = null;
        this.parsed = false;
        this.reader = reader;
        this.name = name;
        this.hash = hash;
        this.wzIv = wzIv;
        this.wzFile = wzFile;
    }
    dispose() {
        if (this._disposed)
            return;
        this._clearAllChildren();
        this._disposed = true;
    }
    _clearAllChildren() {
        for (const img of this.images) {
            img.dispose();
        }
        for (const dir of this.subDirs) {
            dir.dispose();
        }
        this.images.clear();
        this.subDirs.clear();
    }
    get objectType() {
        return _WzObjectType_js__WEBPACK_IMPORTED_MODULE_2__[/* WzObjectType */ "a"].Directory;
    }
    get wzFileParent() {
        return this.wzFile;
    }
    get wzImages() {
        if (!this.parsed)
            throw new Error('Directory has not been parsed yet');
        return this.images;
    }
    get wzDirectories() {
        if (!this.parsed)
            throw new Error('Directory has not been parsed yet');
        return this.subDirs;
    }
    at(name) {
        if (!this.parsed)
            throw new Error('Directory has not been parsed yet');
        const nameLower = name.toLowerCase();
        for (const img of this.images) {
            if (img.name.toLowerCase() === nameLower)
                return img;
        }
        for (const dir of this.subDirs) {
            if (dir.name.toLowerCase() === nameLower)
                return dir;
        }
        return null;
    }
    set(name, value) {
        if (value != null) {
            value.name = name;
            if (value instanceof WzDirectory) {
                this.addDirectory(value);
            }
            else if (value instanceof _WzImage_js__WEBPACK_IMPORTED_MODULE_0__[/* WzImage */ "a"]) {
                this.addImage(value);
            }
            else {
                throw new TypeError('Value must be a Directory or Image');
            }
        }
    }
    addDirectory(dir) {
        this.subDirs.add(dir);
        dir.wzFile = this.wzFile;
        dir.parent = this;
    }
    addImage(img) {
        this.images.add(img);
        img.parent = this;
    }
    clearDirectories() {
        for (const dir of this.subDirs) {
            dir.parent = null;
        }
        this.subDirs.clear();
    }
    clearImages() {
        for (const img of this.images) {
            img.parent = null;
        }
        this.images.clear();
    }
    getImageByName(name) {
        if (!this.parsed)
            throw new Error('Directory has not been parsed yet');
        const nameLower = name.toLowerCase();
        for (const img of this.images) {
            if (img.name.toLowerCase() === nameLower)
                return img;
        }
        return null;
    }
    getDirectoryByName(name) {
        if (!this.parsed)
            throw new Error('Directory has not been parsed yet');
        const nameLower = name.toLowerCase();
        for (const dir of this.subDirs) {
            if (dir.name.toLowerCase() === nameLower)
                return dir;
        }
        return null;
    }
    getChildImages() {
        if (!this.parsed)
            throw new Error('Directory has not been parsed yet');
        const imgFiles = new Set();
        for (const img of this.images) {
            imgFiles.add(img);
        }
        for (const subDir of this.subDirs) {
            const list = subDir.getChildImages();
            for (const img of list) {
                imgFiles.add(img);
            }
        }
        return imgFiles;
    }
    setVersionHash(newHash) {
        if (!this.parsed)
            throw new Error('Directory has not been parsed yet');
        this.hash = newHash;
        for (const dir of this.subDirs) {
            dir.setVersionHash(newHash);
        }
    }
    async parseImages() {
        if (!this.parsed)
            throw new Error('Directory has not been parsed yet');
        for (const img of this.images) {
            if (this.reader.pos !== img.offset) {
                this.reader.pos = img.offset;
            }
            await img.parseImage();
        }
        for (const subdir of this.subDirs) {
            if (this.reader.pos !== subdir.offset) {
                this.reader.pos = subdir.offset;
            }
            await subdir.parseImages();
        }
    }
    async parseDirectory(lazyParse = false) {
        if (this.parsed)
            return;
        this._clearAllChildren();
        if (this.reader.pos !== this.offset) {
            this.reader.pos = this.offset;
        }
        const reader = this.reader;
        const entryCount = await reader.readWzInt();
        if (entryCount < 0 || entryCount > 100000)
            throw new Error('Invalid wz version used for decryption, try parsing other version numbers.');
        for (let i = 0; i < entryCount; i++) {
            let type = await reader.readUInt8();
            let fname = '';
            var fsize;
            var checksum;
            var offset;
            let rememberPos = 0;
            switch (type) {
                case 1: {
                    /* const unknown =  */ await reader.readInt32LE();
                    await reader.readInt16LE();
                    /* const offs =  */ await reader.readWzOffset();
                    continue;
                }
                case 2: {
                    const stringOffset = await reader.readInt32LE();
                    rememberPos = reader.pos;
                    reader.pos = reader.header.fstart + stringOffset;
                    type = await reader.readUInt8();
                    fname = await reader.readWzString();
                    break;
                }
                case 3:
                case 4: {
                    fname = await reader.readWzString();
                    rememberPos = reader.pos;
                    break;
                }
                default: break;
            }
            reader.pos = rememberPos;
            fsize = await reader.readWzInt();
            checksum = await reader.readWzInt();
            offset = await reader.readWzOffset();
            if (type === 3) {
                const subDir = new WzDirectory(reader, fname, this.hash, this.wzIv, this.wzFile);
                subDir.blockSize = fsize;
                subDir.checksum = checksum;
                subDir.offset = offset;
                subDir.parent = this;
                this.subDirs.add(subDir);
                // if (lazyParse) break
            }
            else {
                const img = new _WzImage_js__WEBPACK_IMPORTED_MODULE_0__[/* WzImage */ "a"](fname, reader, checksum);
                img.blockSize = fsize;
                img.offset = offset;
                img.parent = this;
                this.images.add(img);
                // if (lazyParse) break
            }
        }
        this.parsed = true;
        if (!lazyParse) {
            for (const subdir of this.subDirs) {
                // reader.pos = subdir.offset
                await subdir.parseDirectory(lazyParse);
            }
        }
    }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapleCryptoConstants; });
class MapleCryptoConstants {
    static getTrimmedUserKey() {
        const key = new Uint8Array(32);
        for (let i = 0; i < 128; i += 16) {
            key[i / 4] = MapleCryptoConstants.userKey[i];
        }
        return key;
    }
}
MapleCryptoConstants.userKey = new Uint8Array([
    0x13, 0x00, 0x00, 0x00, 0x52, 0x00, 0x00, 0x00, 0x2A, 0x00, 0x00, 0x00, 0x5B, 0x00, 0x00, 0x00,
    0x08, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x60, 0x00, 0x00, 0x00,
    0x06, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x43, 0x00, 0x00, 0x00, 0x0F, 0x00, 0x00, 0x00,
    0xB4, 0x00, 0x00, 0x00, 0x4B, 0x00, 0x00, 0x00, 0x35, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00,
    0x1B, 0x00, 0x00, 0x00, 0x0A, 0x00, 0x00, 0x00, 0x5F, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00,
    0x0F, 0x00, 0x00, 0x00, 0x50, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x1B, 0x00, 0x00, 0x00,
    0x33, 0x00, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00,
    0x52, 0x00, 0x00, 0x00, 0xDE, 0x00, 0x00, 0x00, 0xC7, 0x00, 0x00, 0x00, 0x1E, 0x00, 0x00, 0x00
]);
MapleCryptoConstants.bShuffle = new Uint8Array([
    0xEC, 0x3F, 0x77, 0xA4, 0x45, 0xD0, 0x71, 0xBF, 0xB7, 0x98, 0x20, 0xFC, 0x4B, 0xE9, 0xB3, 0xE1,
    0x5C, 0x22, 0xF7, 0x0C, 0x44, 0x1B, 0x81, 0xBD, 0x63, 0x8D, 0xD4, 0xC3, 0xF2, 0x10, 0x19, 0xE0,
    0xFB, 0xA1, 0x6E, 0x66, 0xEA, 0xAE, 0xD6, 0xCE, 0x06, 0x18, 0x4E, 0xEB, 0x78, 0x95, 0xDB, 0xBA,
    0xB6, 0x42, 0x7A, 0x2A, 0x83, 0x0B, 0x54, 0x67, 0x6D, 0xE8, 0x65, 0xE7, 0x2F, 0x07, 0xF3, 0xAA,
    0x27, 0x7B, 0x85, 0xB0, 0x26, 0xFD, 0x8B, 0xA9, 0xFA, 0xBE, 0xA8, 0xD7, 0xCB, 0xCC, 0x92, 0xDA,
    0xF9, 0x93, 0x60, 0x2D, 0xDD, 0xD2, 0xA2, 0x9B, 0x39, 0x5F, 0x82, 0x21, 0x4C, 0x69, 0xF8, 0x31,
    0x87, 0xEE, 0x8E, 0xAD, 0x8C, 0x6A, 0xBC, 0xB5, 0x6B, 0x59, 0x13, 0xF1, 0x04, 0x00, 0xF6, 0x5A,
    0x35, 0x79, 0x48, 0x8F, 0x15, 0xCD, 0x97, 0x57, 0x12, 0x3E, 0x37, 0xFF, 0x9D, 0x4F, 0x51, 0xF5,
    0xA3, 0x70, 0xBB, 0x14, 0x75, 0xC2, 0xB8, 0x72, 0xC0, 0xED, 0x7D, 0x68, 0xC9, 0x2E, 0x0D, 0x62,
    0x46, 0x17, 0x11, 0x4D, 0x6C, 0xC4, 0x7E, 0x53, 0xC1, 0x25, 0xC7, 0x9A, 0x1C, 0x88, 0x58, 0x2C,
    0x89, 0xDC, 0x02, 0x64, 0x40, 0x01, 0x5D, 0x38, 0xA5, 0xE2, 0xAF, 0x55, 0xD5, 0xEF, 0x1A, 0x7C,
    0xA7, 0x5B, 0xA6, 0x6F, 0x86, 0x9F, 0x73, 0xE6, 0x0A, 0xDE, 0x2B, 0x99, 0x4A, 0x47, 0x9C, 0xDF,
    0x09, 0x76, 0x9E, 0x30, 0x0E, 0xE4, 0xB2, 0x94, 0xA0, 0x3B, 0x34, 0x1D, 0x28, 0x0F, 0x36, 0xE3,
    0x23, 0xB4, 0x03, 0xD8, 0x90, 0xC8, 0x3C, 0xFE, 0x5E, 0x32, 0x24, 0x50, 0x1F, 0x3A, 0x43, 0x8A,
    0x96, 0x41, 0x74, 0xAC, 0x52, 0x33, 0xF0, 0xD9, 0x29, 0x80, 0xB1, 0x16, 0xD3, 0xAB, 0x91, 0xB9,
    0x84, 0x7F, 0x61, 0x1E, 0xCF, 0xC5, 0xD1, 0x56, 0x3D, 0xCA, 0xF4, 0x05, 0xC6, 0xE5, 0x08, 0x49
]);
MapleCryptoConstants.bDefaultAESKeyValue = new Uint8Array([
    0xC6, 0x50, 0x53, 0xF2, 0xA8, 0x42, 0x9D, 0x7F, 0x77, 0x09, 0x1D, 0x26, 0x42, 0x53, 0x88, 0x7C
]);
MapleCryptoConstants.WZ_GMSIV = new Uint8Array([0x4D, 0x23, 0xC7, 0x2B]);
MapleCryptoConstants.WZ_MSEAIV = new Uint8Array([0xB9, 0x7D, 0x63, 0xE9]);
MapleCryptoConstants.WZ_OffsetConstant = 0x581C3F6D;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzIntProperty", function() { return WzIntProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/**
 * @public
 */
class WzIntProperty extends _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* WzImageProperty */ "a"] {
    constructor(name = '', val = 0) {
        super();
        this.name = name;
        this.val = val;
        this.parent = null;
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].Int;
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
    }
    get value() {
        return this.val;
    }
    get wzValue() {
        return this.val;
    }
    setValue(value) {
        this.val = value;
    }
    toString() {
        return this.val.toString();
    }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable */
(function (root, factory) {
    function makeESModule(m) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            try {
                Object.defineProperty(m, Symbol.toStringTag, { value: 'Module' });
            }
            catch (_) { }
        }
        try {
            Object.defineProperty(m, '__esModule', { value: true });
        }
        catch (_) {
            m.__esModule = true;
        }
        try {
            Object.defineProperty(m, 'default', { enumerable: true, value: m });
        }
        catch (_) {
            m['default'] = m;
        }
        return m;
    }
    var name = 'wzWasm';
    if (true) {
        module.exports = makeESModule(factory(__webpack_require__(17).tryGetRequireFunction()));
    }
    else {}
})((function (defaultValue) {
    var g;
    g = (function () { return this; })();
    try {
        g = g || new Function('return this')();
    }
    catch (_) {
        if (typeof globalThis !== 'undefined')
            return globalThis;
        if (false) {}
        if (typeof window !== 'undefined')
            return window;
        if (typeof self !== 'undefined')
            return self;
    }
    return g || defaultValue;
})(this), function (require) {
    var Module = typeof Module !== "undefined" ? Module : {};
    var moduleOverrides = {};
    var key;
    for (key in Module) {
        if (Module.hasOwnProperty(key)) {
            moduleOverrides[key] = Module[key];
        }
    }
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = function (status, toThrow) { throw toThrow; };
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    var scriptDirectory = "";
    function locateFile(path) { if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
    } return scriptDirectory + path; }
    var read_, readAsync, readBinary, setWindowTitle;
    var nodeFS;
    var nodePath;
    if (ENVIRONMENT_IS_NODE) {
        if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = require("path").dirname(scriptDirectory) + "/";
        }
        else {
            scriptDirectory = __dirname + "/";
        }
        read_ = function shell_read(filename, binary) { if (!nodeFS)
            nodeFS = require("fs"); if (!nodePath)
            nodePath = require("path"); filename = nodePath["normalize"](filename); return nodeFS["readFileSync"](filename, binary ? null : "utf8"); };
        readBinary = function readBinary(filename) { var ret = read_(filename, true); if (!ret.buffer) {
            ret = new Uint8Array(ret);
        } assert(ret.buffer); return ret; };
        if (process["argv"].length > 1) {
            thisProgram = process["argv"][1].replace(/\\/g, "/");
        }
        arguments_ = process["argv"].slice(2);
        if (true) {
            module["exports"] = Module;
        }
        process["on"]("uncaughtException", function (ex) { if (!(ex instanceof ExitStatus)) {
            throw ex;
        } });
        process["on"]("unhandledRejection", abort);
        quit_ = function (status) { process["exit"](status); };
        Module["inspect"] = function () { return "[Emscripten Module object]"; };
    }
    else if (ENVIRONMENT_IS_SHELL) {
        if (typeof read != "undefined") {
            read_ = function shell_read(f) { return read(f); };
        }
        readBinary = function readBinary(f) { var data; if (typeof readbuffer === "function") {
            return new Uint8Array(readbuffer(f));
        } data = read(f, "binary"); assert(typeof data === "object"); return data; };
        if (typeof scriptArgs != "undefined") {
            arguments_ = scriptArgs;
        }
        else if (typeof arguments != "undefined") {
            arguments_ = arguments;
        }
        if (typeof quit === "function") {
            quit_ = function (status) { quit(status); };
        }
        if (typeof print !== "undefined") {
            if (typeof console === "undefined")
                console = {};
            console.log = print;
            console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
        }
    }
    else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
        if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
        }
        else if (document.currentScript) {
            scriptDirectory = document.currentScript.src;
        }
        if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
        }
        else {
            scriptDirectory = "";
        }
        {
            read_ = function shell_read(url) { var xhr = new XMLHttpRequest; xhr.open("GET", url, false); xhr.send(null); return xhr.responseText; };
            if (ENVIRONMENT_IS_WORKER) {
                readBinary = function readBinary(url) { var xhr = new XMLHttpRequest; xhr.open("GET", url, false); xhr.responseType = "arraybuffer"; xhr.send(null); return new Uint8Array(xhr.response); };
            }
            readAsync = function readAsync(url, onload, onerror) { var xhr = new XMLHttpRequest; xhr.open("GET", url, true); xhr.responseType = "arraybuffer"; xhr.onload = function xhr_onload() { if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                onload(xhr.response);
                return;
            } onerror(); }; xhr.onerror = onerror; xhr.send(null); };
        }
        setWindowTitle = function (title) { document.title = title; };
    }
    else { }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    for (key in moduleOverrides) {
        if (moduleOverrides.hasOwnProperty(key)) {
            Module[key] = moduleOverrides[key];
        }
    }
    moduleOverrides = null;
    if (Module["arguments"])
        arguments_ = Module["arguments"];
    if (Module["thisProgram"])
        thisProgram = Module["thisProgram"];
    if (Module["quit"])
        quit_ = Module["quit"];
    var STACK_ALIGN = 16;
    function warnOnce(text) { if (!warnOnce.shown)
        warnOnce.shown = {}; if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
    } }
    function convertJsFunctionToWasm(func, sig) { if (typeof WebAssembly.Function === "function") {
        var typeNames = { "i": "i32", "j": "i64", "f": "f32", "d": "f64" };
        var type = { parameters: [], results: sig[0] == "v" ? [] : [typeNames[sig[0]]] };
        for (var i = 1; i < sig.length; ++i) {
            type.parameters.push(typeNames[sig[i]]);
        }
        return new WebAssembly.Function(type, func);
    } var typeSection = [1, 0, 1, 96]; var sigRet = sig.slice(0, 1); var sigParam = sig.slice(1); var typeCodes = { "i": 127, "j": 126, "f": 125, "d": 124 }; typeSection.push(sigParam.length); for (var i = 0; i < sigParam.length; ++i) {
        typeSection.push(typeCodes[sigParam[i]]);
    } if (sigRet == "v") {
        typeSection.push(0);
    }
    else {
        typeSection = typeSection.concat([1, typeCodes[sigRet]]);
    } typeSection[1] = typeSection.length - 2; var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])); var module = new WebAssembly.Module(bytes); var instance = new WebAssembly.Instance(module, { "e": { "f": func } }); var wrappedFunc = instance.exports["f"]; return wrappedFunc; }
    var freeTableIndexes = [];
    var functionsInTableMap;
    function addFunctionWasm(func, sig) { var table = wasmTable; if (!functionsInTableMap) {
        functionsInTableMap = new WeakMap;
        for (var i = 0; i < table.length; i++) {
            var item = table.get(i);
            if (item) {
                functionsInTableMap.set(item, i);
            }
        }
    } if (functionsInTableMap.has(func)) {
        return functionsInTableMap.get(func);
    } var ret; if (freeTableIndexes.length) {
        ret = freeTableIndexes.pop();
    }
    else {
        ret = table.length;
        try {
            table.grow(1);
        }
        catch (err) {
            if (!(err instanceof RangeError)) {
                throw err;
            }
            throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
        }
    } try {
        table.set(ret, func);
    }
    catch (err) {
        if (!(err instanceof TypeError)) {
            throw err;
        }
        var wrapped = convertJsFunctionToWasm(func, sig);
        table.set(ret, wrapped);
    } functionsInTableMap.set(func, ret); return ret; }
    function removeFunctionWasm(index) { functionsInTableMap.delete(wasmTable.get(index)); freeTableIndexes.push(index); }
    var tempRet0 = 0;
    var setTempRet0 = function (value) { tempRet0 = value; };
    var getTempRet0 = function () { return tempRet0; };
    var wasmBinary;
    if (Module["wasmBinary"])
        wasmBinary = Module["wasmBinary"];
    var noExitRuntime;
    if (Module["noExitRuntime"])
        noExitRuntime = Module["noExitRuntime"];
    if (typeof WebAssembly !== "object") {
        abort("no native wasm support detected");
    }
    var wasmMemory;
    var wasmTable;
    var ABORT = false;
    var EXITSTATUS = 0;
    function assert(condition, text) { if (!condition) {
        abort("Assertion failed: " + text);
    } }
    function getCFunc(ident) { var func = Module["_" + ident]; assert(func, "Cannot call unknown function " + ident + ", make sure it is exported"); return func; }
    function ccall(ident, returnType, argTypes, args, opts) { var toC = { "string": function (str) { var ret = 0; if (str !== null && str !== undefined && str !== 0) {
            var len = (str.length << 2) + 1;
            ret = stackAlloc(len);
            stringToUTF8(str, ret, len);
        } return ret; }, "array": function (arr) { var ret = stackAlloc(arr.length); writeArrayToMemory(arr, ret); return ret; } }; function convertReturnValue(ret) { if (returnType === "string")
        return UTF8ToString(ret); if (returnType === "boolean")
        return Boolean(ret); return ret; } var func = getCFunc(ident); var cArgs = []; var stack = 0; if (args) {
        for (var i = 0; i < args.length; i++) {
            var converter = toC[argTypes[i]];
            if (converter) {
                if (stack === 0)
                    stack = stackSave();
                cArgs[i] = converter(args[i]);
            }
            else {
                cArgs[i] = args[i];
            }
        }
    } var ret = func.apply(null, cArgs); ret = convertReturnValue(ret); if (stack !== 0)
        stackRestore(stack); return ret; }
    var ALLOC_STACK = 1;
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
    function UTF8ArrayToString(heap, idx, maxBytesToRead) { var endIdx = idx + maxBytesToRead; var endPtr = idx; while (heap[endPtr] && !(endPtr >= endIdx))
        ++endPtr; if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(heap.subarray(idx, endPtr));
    }
    else {
        var str = "";
        while (idx < endPtr) {
            var u0 = heap[idx++];
            if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
            }
            var u1 = heap[idx++] & 63;
            if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
            }
            var u2 = heap[idx++] & 63;
            if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            }
            else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
            }
            if (u0 < 65536) {
                str += String.fromCharCode(u0);
            }
            else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
        }
    } return str; }
    function UTF8ToString(ptr, maxBytesToRead) { return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""; }
    function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) { if (!(maxBytesToWrite > 0))
        return 0; var startIdx = outIdx; var endIdx = outIdx + maxBytesToWrite - 1; for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
            var u1 = str.charCodeAt(++i);
            u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
            if (outIdx >= endIdx)
                break;
            heap[outIdx++] = u;
        }
        else if (u <= 2047) {
            if (outIdx + 1 >= endIdx)
                break;
            heap[outIdx++] = 192 | u >> 6;
            heap[outIdx++] = 128 | u & 63;
        }
        else if (u <= 65535) {
            if (outIdx + 2 >= endIdx)
                break;
            heap[outIdx++] = 224 | u >> 12;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63;
        }
        else {
            if (outIdx + 3 >= endIdx)
                break;
            heap[outIdx++] = 240 | u >> 18;
            heap[outIdx++] = 128 | u >> 12 & 63;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63;
        }
    } heap[outIdx] = 0; return outIdx - startIdx; }
    function stringToUTF8(str, outPtr, maxBytesToWrite) { return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite); }
    function lengthBytesUTF8(str) { var len = 0; for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
            u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127)
            ++len;
        else if (u <= 2047)
            len += 2;
        else if (u <= 65535)
            len += 3;
        else
            len += 4;
    } return len; }
    var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
    function UTF16ToString(ptr, maxBytesToRead) { var endPtr = ptr; var idx = endPtr >> 1; var maxIdx = idx + maxBytesToRead / 2; while (!(idx >= maxIdx) && HEAPU16[idx])
        ++idx; endPtr = idx << 1; if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
    }
    else {
        var i = 0;
        var str = "";
        while (1) {
            var codeUnit = HEAP16[ptr + i * 2 >> 1];
            if (codeUnit == 0 || i == maxBytesToRead / 2)
                return str;
            ++i;
            str += String.fromCharCode(codeUnit);
        }
    } }
    function stringToUTF16(str, outPtr, maxBytesToWrite) { if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647;
    } if (maxBytesToWrite < 2)
        return 0; maxBytesToWrite -= 2; var startPtr = outPtr; var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length; for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
    } HEAP16[outPtr >> 1] = 0; return outPtr - startPtr; }
    function lengthBytesUTF16(str) { return str.length * 2; }
    function UTF32ToString(ptr, maxBytesToRead) { var i = 0; var str = ""; while (!(i >= maxBytesToRead / 4)) {
        var utf32 = HEAP32[ptr + i * 4 >> 2];
        if (utf32 == 0)
            break;
        ++i;
        if (utf32 >= 65536) {
            var ch = utf32 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
        else {
            str += String.fromCharCode(utf32);
        }
    } return str; }
    function stringToUTF32(str, outPtr, maxBytesToWrite) { if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647;
    } if (maxBytesToWrite < 4)
        return 0; var startPtr = outPtr; var endPtr = startPtr + maxBytesToWrite - 4; for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
            var trailSurrogate = str.charCodeAt(++i);
            codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
        }
        HEAP32[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr)
            break;
    } HEAP32[outPtr >> 2] = 0; return outPtr - startPtr; }
    function lengthBytesUTF32(str) { var len = 0; for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343)
            ++i;
        len += 4;
    } return len; }
    function writeArrayToMemory(array, buffer) { HEAP8.set(array, buffer); }
    function writeAsciiToMemory(str, buffer, dontAddNull) { for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++ >> 0] = str.charCodeAt(i);
    } if (!dontAddNull)
        HEAP8[buffer >> 0] = 0; }
    var WASM_PAGE_SIZE = 65536;
    function alignUp(x, multiple) { if (x % multiple > 0) {
        x += multiple - x % multiple;
    } return x; }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) { buffer = buf; Module["HEAP8"] = HEAP8 = new Int8Array(buf); Module["HEAP16"] = HEAP16 = new Int16Array(buf); Module["HEAP32"] = HEAP32 = new Int32Array(buf); Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf); Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf); Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf); Module["HEAPF32"] = HEAPF32 = new Float32Array(buf); Module["HEAPF64"] = HEAPF64 = new Float64Array(buf); }
    var STACK_BASE = 5258544;
    var INITIAL_INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    if (Module["wasmMemory"]) {
        wasmMemory = Module["wasmMemory"];
    }
    else {
        wasmMemory = new WebAssembly.Memory({ "initial": INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE, "maximum": 2147483648 / WASM_PAGE_SIZE });
    }
    if (wasmMemory) {
        buffer = wasmMemory.buffer;
    }
    INITIAL_INITIAL_MEMORY = buffer.byteLength;
    updateGlobalBufferAndViews(buffer);
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    function preRun() { if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
            Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
            addOnPreRun(Module["preRun"].shift());
        }
    } callRuntimeCallbacks(__ATPRERUN__); }
    function initRuntime() { runtimeInitialized = true; callRuntimeCallbacks(__ATINIT__); }
    function preMain() { callRuntimeCallbacks(__ATMAIN__); }
    function exitRuntime() { runtimeExited = true; }
    function postRun() { if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
            Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
            addOnPostRun(Module["postRun"].shift());
        }
    } callRuntimeCallbacks(__ATPOSTRUN__); }
    function addOnPreRun(cb) { __ATPRERUN__.unshift(cb); }
    function addOnPostRun(cb) { __ATPOSTRUN__.unshift(cb); }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function addRunDependency(id) { runDependencies++; if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
    } }
    function removeRunDependency(id) { runDependencies--; if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
    } if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
            var callback = dependenciesFulfilled;
            dependenciesFulfilled = null;
            callback();
        }
    } }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    function abort(what) { if (Module["onAbort"]) {
        Module["onAbort"](what);
    } what += ""; err(what); ABORT = true; EXITSTATUS = 1; what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info."; var e = new WebAssembly.RuntimeError(what); throw e; }
    function hasPrefix(str, prefix) { return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0; }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) { return hasPrefix(filename, dataURIPrefix); }
    var fileURIPrefix = "file://";
    function isFileURI(filename) { return hasPrefix(filename, fileURIPrefix); }
    var wasmBinaryFile = "wz.wasm";
    if (!isDataURI(wasmBinaryFile)) {
        wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinary() { try {
        if (wasmBinary) {
            return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
            return readBinary(wasmBinaryFile);
        }
        else {
            throw "both async and sync fetching of the wasm failed";
        }
    }
    catch (err) {
        abort(err);
    } }
    function getBinaryPromise() { if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {
        return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function (response) { if (!response["ok"]) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        } return response["arrayBuffer"](); }).catch(function () { return getBinary(); });
    } return Promise.resolve().then(getBinary); }
    function createWasm() { var info = { "env": asmLibraryArg, "wasi_snapshot_preview1": asmLibraryArg }; function receiveInstance(instance, module) { var exports = instance.exports; Module["asm"] = exports; wasmTable = Module["asm"]["__indirect_function_table"]; removeRunDependency("wasm-instantiate"); } addRunDependency("wasm-instantiate"); function receiveInstantiatedSource(output) { receiveInstance(output["instance"]); } function instantiateArrayBuffer(receiver) { return getBinaryPromise().then(function (binary) { return WebAssembly.instantiate(binary, info); }).then(receiver, function (reason) { err("failed to asynchronously prepare wasm: " + reason); abort(reason); }); } function instantiateAsync() { if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch === "function") {
        fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function (response) { var result = WebAssembly.instantiateStreaming(response, info); return result.then(receiveInstantiatedSource, function (reason) { err("wasm streaming compile failed: " + reason); err("falling back to ArrayBuffer instantiation"); return instantiateArrayBuffer(receiveInstantiatedSource); }); });
    }
    else {
        return instantiateArrayBuffer(receiveInstantiatedSource);
    } } if (Module["instantiateWasm"]) {
        try {
            var exports = Module["instantiateWasm"](info, receiveInstance);
            return exports;
        }
        catch (e) {
            err("Module.instantiateWasm callback failed with error: " + e);
            return false;
        }
    } instantiateAsync(); return {}; }
    var tempDouble;
    var tempI64;
    function callRuntimeCallbacks(callbacks) { while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
            callback(Module);
            continue;
        }
        var func = callback.func;
        if (typeof func === "number") {
            if (callback.arg === undefined) {
                wasmTable.get(func)();
            }
            else {
                wasmTable.get(func)(callback.arg);
            }
        }
        else {
            func(callback.arg === undefined ? null : callback.arg);
        }
    } }
    function demangle(func) { return func; }
    function demangleAll(text) { var regex = /\b_Z[\w\d_]+/g; return text.replace(regex, function (x) { var y = demangle(x); return x === y ? x : y + " [" + x + "]"; }); }
    function dynCallLegacy(sig, ptr, args) { if (args && args.length) {
        return Module["dynCall_" + sig].apply(null, [ptr].concat(args));
    } return Module["dynCall_" + sig].call(null, ptr); }
    function dynCall(sig, ptr, args) { if (sig.indexOf("j") != -1) {
        return dynCallLegacy(sig, ptr, args);
    } return wasmTable.get(ptr).apply(null, args); }
    function jsStackTrace() { var error = new Error; if (!error.stack) {
        try {
            throw new Error;
        }
        catch (e) {
            error = e;
        }
        if (!error.stack) {
            return "(no stack trace available)";
        }
    } return error.stack.toString(); }
    var ExceptionInfoAttrs = { DESTRUCTOR_OFFSET: 0, REFCOUNT_OFFSET: 4, TYPE_OFFSET: 8, CAUGHT_OFFSET: 12, RETHROWN_OFFSET: 13, SIZE: 16 };
    function ___cxa_allocate_exception(size) { return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE; }
    function ExceptionInfo(excPtr) { this.excPtr = excPtr; this.ptr = excPtr - ExceptionInfoAttrs.SIZE; this.set_type = function (type) { HEAP32[this.ptr + ExceptionInfoAttrs.TYPE_OFFSET >> 2] = type; }; this.get_type = function () { return HEAP32[this.ptr + ExceptionInfoAttrs.TYPE_OFFSET >> 2]; }; this.set_destructor = function (destructor) { HEAP32[this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET >> 2] = destructor; }; this.get_destructor = function () { return HEAP32[this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET >> 2]; }; this.set_refcount = function (refcount) { HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = refcount; }; this.set_caught = function (caught) { caught = caught ? 1 : 0; HEAP8[this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET >> 0] = caught; }; this.get_caught = function () { return HEAP8[this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET >> 0] != 0; }; this.set_rethrown = function (rethrown) { rethrown = rethrown ? 1 : 0; HEAP8[this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET >> 0] = rethrown; }; this.get_rethrown = function () { return HEAP8[this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET >> 0] != 0; }; this.init = function (type, destructor) { this.set_type(type); this.set_destructor(destructor); this.set_refcount(0); this.set_caught(false); this.set_rethrown(false); }; this.add_ref = function () { var value = HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2]; HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = value + 1; }; this.release_ref = function () { var prev = HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2]; HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = prev - 1; return prev === 1; }; }
    function CatchInfo(ptr) { this.free = function () { _free(this.ptr); this.ptr = 0; }; this.set_base_ptr = function (basePtr) { HEAP32[this.ptr >> 2] = basePtr; }; this.get_base_ptr = function () { return HEAP32[this.ptr >> 2]; }; this.set_adjusted_ptr = function (adjustedPtr) { var ptrSize = 4; HEAP32[this.ptr + ptrSize >> 2] = adjustedPtr; }; this.get_adjusted_ptr = function () { var ptrSize = 4; return HEAP32[this.ptr + ptrSize >> 2]; }; this.get_exception_ptr = function () { var isPointer = ___cxa_is_pointer_type(this.get_exception_info().get_type()); if (isPointer) {
        return HEAP32[this.get_base_ptr() >> 2];
    } var adjusted = this.get_adjusted_ptr(); if (adjusted !== 0)
        return adjusted; return this.get_base_ptr(); }; this.get_exception_info = function () { return new ExceptionInfo(this.get_base_ptr()); }; if (ptr === undefined) {
        this.ptr = _malloc(8);
        this.set_adjusted_ptr(0);
    }
    else {
        this.ptr = ptr;
    } }
    var exceptionCaught = [];
    function exception_addRef(info) { info.add_ref(); }
    function ___cxa_begin_catch(ptr) { var catchInfo = new CatchInfo(ptr); var info = catchInfo.get_exception_info(); if (!info.get_caught()) {
        info.set_caught(true);
        __ZSt18uncaught_exceptionv.uncaught_exceptions--;
    } info.set_rethrown(false); exceptionCaught.push(catchInfo); exception_addRef(info); return catchInfo.get_exception_ptr(); }
    var exceptionLast = 0;
    function ___resumeException(catchInfoPtr) { var catchInfo = new CatchInfo(catchInfoPtr); var ptr = catchInfo.get_base_ptr(); if (!exceptionLast) {
        exceptionLast = ptr;
    } catchInfo.free(); throw ptr; }
    function ___cxa_find_matching_catch_2() { var thrown = exceptionLast; if (!thrown) {
        return (setTempRet0(0), 0) | 0;
    } var info = new ExceptionInfo(thrown); var thrownType = info.get_type(); var catchInfo = new CatchInfo; catchInfo.set_base_ptr(thrown); if (!thrownType) {
        return (setTempRet0(0), catchInfo.ptr) | 0;
    } var typeArray = Array.prototype.slice.call(arguments); var stackTop = stackSave(); var exceptionThrowBuf = stackAlloc(4); HEAP32[exceptionThrowBuf >> 2] = thrown; for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break;
        }
        if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
            var adjusted = HEAP32[exceptionThrowBuf >> 2];
            if (thrown !== adjusted) {
                catchInfo.set_adjusted_ptr(adjusted);
            }
            return (setTempRet0(caughtType), catchInfo.ptr) | 0;
        }
    } stackRestore(stackTop); return (setTempRet0(thrownType), catchInfo.ptr) | 0; }
    function ___cxa_find_matching_catch_3() { var thrown = exceptionLast; if (!thrown) {
        return (setTempRet0(0), 0) | 0;
    } var info = new ExceptionInfo(thrown); var thrownType = info.get_type(); var catchInfo = new CatchInfo; catchInfo.set_base_ptr(thrown); if (!thrownType) {
        return (setTempRet0(0), catchInfo.ptr) | 0;
    } var typeArray = Array.prototype.slice.call(arguments); var stackTop = stackSave(); var exceptionThrowBuf = stackAlloc(4); HEAP32[exceptionThrowBuf >> 2] = thrown; for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
            break;
        }
        if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
            var adjusted = HEAP32[exceptionThrowBuf >> 2];
            if (thrown !== adjusted) {
                catchInfo.set_adjusted_ptr(adjusted);
            }
            return (setTempRet0(caughtType), catchInfo.ptr) | 0;
        }
    } stackRestore(stackTop); return (setTempRet0(thrownType), catchInfo.ptr) | 0; }
    function ___cxa_free_exception(ptr) { return _free(new ExceptionInfo(ptr).ptr); }
    function ___cxa_throw(ptr, type, destructor) { var info = new ExceptionInfo(ptr); info.init(type, destructor); exceptionLast = ptr; if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exceptions = 1;
    }
    else {
        __ZSt18uncaught_exceptionv.uncaught_exceptions++;
    } throw ptr; }
    function getShiftFromSize(size) { switch (size) {
        case 1: return 0;
        case 2: return 1;
        case 4: return 2;
        case 8: return 3;
        default: throw new TypeError("Unknown type size: " + size);
    } }
    function embind_init_charCodes() { var codes = new Array(256); for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
    } embind_charCodes = codes; }
    var embind_charCodes = undefined;
    function readLatin1String(ptr) { var ret = ""; var c = ptr; while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
    } return ret; }
    var awaitingDependencies = {};
    var registeredTypes = {};
    var typeDependencies = {};
    var char_0 = 48;
    var char_9 = 57;
    function makeLegalFunctionName(name) { if (undefined === name) {
        return "_unknown";
    } name = name.replace(/[^a-zA-Z0-9_]/g, "$"); var f = name.charCodeAt(0); if (f >= char_0 && f <= char_9) {
        return "_" + name;
    }
    else {
        return name;
    } }
    function createNamedFunction(name, body) { name = makeLegalFunctionName(name); return new Function("body", "return function " + name + "() {\n" + '    "use strict";' + "    return body.apply(this, arguments);\n" + "};\n")(body); }
    function extendError(baseErrorType, errorName) { var errorClass = createNamedFunction(errorName, function (message) { this.name = errorName; this.message = message; var stack = new Error(message).stack; if (stack !== undefined) {
        this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
    } }); errorClass.prototype = Object.create(baseErrorType.prototype); errorClass.prototype.constructor = errorClass; errorClass.prototype.toString = function () { if (this.message === undefined) {
        return this.name;
    }
    else {
        return this.name + ": " + this.message;
    } }; return errorClass; }
    var BindingError = undefined;
    function throwBindingError(message) { throw new BindingError(message); }
    var InternalError = undefined;
    function throwInternalError(message) { throw new InternalError(message); }
    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) { myTypes.forEach(function (type) { typeDependencies[type] = dependentTypes; }); function onComplete(typeConverters) { var myTypeConverters = getTypeConverters(typeConverters); if (myTypeConverters.length !== myTypes.length) {
        throwInternalError("Mismatched type converter count");
    } for (var i = 0; i < myTypes.length; ++i) {
        registerType(myTypes[i], myTypeConverters[i]);
    } } var typeConverters = new Array(dependentTypes.length); var unregisteredTypes = []; var registered = 0; dependentTypes.forEach(function (dt, i) { if (registeredTypes.hasOwnProperty(dt)) {
        typeConverters[i] = registeredTypes[dt];
    }
    else {
        unregisteredTypes.push(dt);
        if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
        }
        awaitingDependencies[dt].push(function () { typeConverters[i] = registeredTypes[dt]; ++registered; if (registered === unregisteredTypes.length) {
            onComplete(typeConverters);
        } });
    } }); if (0 === unregisteredTypes.length) {
        onComplete(typeConverters);
    } }
    function registerType(rawType, registeredInstance, options) { options = options || {}; if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
    } var name = registeredInstance.name; if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
    } if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
            return;
        }
        else {
            throwBindingError("Cannot register type '" + name + "' twice");
        }
    } registeredTypes[rawType] = registeredInstance; delete typeDependencies[rawType]; if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(function (cb) { cb(); });
    } }
    function __embind_register_bool(rawType, name, size, trueValue, falseValue) { var shift = getShiftFromSize(size); name = readLatin1String(name); registerType(rawType, { name: name, "fromWireType": function (wt) { return !!wt; }, "toWireType": function (destructors, o) { return o ? trueValue : falseValue; }, "argPackAdvance": 8, "readValueFromPointer": function (pointer) { var heap; if (size === 1) {
            heap = HEAP8;
        }
        else if (size === 2) {
            heap = HEAP16;
        }
        else if (size === 4) {
            heap = HEAP32;
        }
        else {
            throw new TypeError("Unknown boolean type size: " + name);
        } return this["fromWireType"](heap[pointer >> shift]); }, destructorFunction: null }); }
    var emval_free_list = [];
    var emval_handle_array = [{}, { value: undefined }, { value: null }, { value: true }, { value: false }];
    function __emval_decref(handle) { if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
        emval_handle_array[handle] = undefined;
        emval_free_list.push(handle);
    } }
    function count_emval_handles() { var count = 0; for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
            ++count;
        }
    } return count; }
    function get_first_emval() { for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
            return emval_handle_array[i];
        }
    } return null; }
    function init_emval() { Module["count_emval_handles"] = count_emval_handles; Module["get_first_emval"] = get_first_emval; }
    function __emval_register(value) { switch (value) {
        case undefined: {
            return 1;
        }
        case null: {
            return 2;
        }
        case true: {
            return 3;
        }
        case false: {
            return 4;
        }
        default: {
            var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
            emval_handle_array[handle] = { refcount: 1, value: value };
            return handle;
        }
    } }
    function simpleReadValueFromPointer(pointer) { return this["fromWireType"](HEAPU32[pointer >> 2]); }
    function __embind_register_emval(rawType, name) { name = readLatin1String(name); registerType(rawType, { name: name, "fromWireType": function (handle) { var rv = emval_handle_array[handle].value; __emval_decref(handle); return rv; }, "toWireType": function (destructors, value) { return __emval_register(value); }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: null }); }
    function _embind_repr(v) { if (v === null) {
        return "null";
    } var t = typeof v; if (t === "object" || t === "array" || t === "function") {
        return v.toString();
    }
    else {
        return "" + v;
    } }
    function floatReadValueFromPointer(name, shift) { switch (shift) {
        case 2: return function (pointer) { return this["fromWireType"](HEAPF32[pointer >> 2]); };
        case 3: return function (pointer) { return this["fromWireType"](HEAPF64[pointer >> 3]); };
        default: throw new TypeError("Unknown float type: " + name);
    } }
    function __embind_register_float(rawType, name, size) { var shift = getShiftFromSize(size); name = readLatin1String(name); registerType(rawType, { name: name, "fromWireType": function (value) { return value; }, "toWireType": function (destructors, value) { if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
        } return value; }, "argPackAdvance": 8, "readValueFromPointer": floatReadValueFromPointer(name, shift), destructorFunction: null }); }
    function new_(constructor, argumentList) { if (!(constructor instanceof Function)) {
        throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function");
    } var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function () { }); dummy.prototype = constructor.prototype; var obj = new dummy; var r = constructor.apply(obj, argumentList); return r instanceof Object ? r : obj; }
    function runDestructors(destructors) { while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
    } }
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) { var argCount = argTypes.length; if (argCount < 2) {
        throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
    } var isClassMethodFunc = argTypes[1] !== null && classType !== null; var needsDestructorStack = false; for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
            needsDestructorStack = true;
            break;
        }
    } var returns = argTypes[0].name !== "void"; var argsList = ""; var argsListWired = ""; for (var i = 0; i < argCount - 2; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
        argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
    } var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\n" + "if (arguments.length !== " + (argCount - 2) + ") {\n" + "throwBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n" + "}\n"; if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\n";
    } var dtorStack = needsDestructorStack ? "destructors" : "null"; var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"]; var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]]; if (isClassMethodFunc) {
        invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
    } for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
        args1.push("argType" + i);
        args2.push(argTypes[i + 2]);
    } if (isClassMethodFunc) {
        argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
    } invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n"; if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\n";
    }
    else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
            var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
            if (argTypes[i].destructorFunction !== null) {
                invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
                args1.push(paramName + "_dtor");
                args2.push(argTypes[i].destructorFunction);
            }
        }
    } if (returns) {
        invokerFnBody += "var ret = retType.fromWireType(rv);\n" + "return ret;\n";
    }
    else { } invokerFnBody += "}\n"; args1.push(invokerFnBody); var invokerFunction = new_(Function, args1).apply(null, args2); return invokerFunction; }
    function ensureOverloadTable(proto, methodName, humanName) { if (undefined === proto[methodName].overloadTable) {
        var prevFunc = proto[methodName];
        proto[methodName] = function () { if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
        } return proto[methodName].overloadTable[arguments.length].apply(this, arguments); };
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
    } }
    function exposePublicSymbol(name, value, numArguments) { if (Module.hasOwnProperty(name)) {
        if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
            throwBindingError("Cannot register public name '" + name + "' twice");
        }
        ensureOverloadTable(Module, name, name);
        if (Module.hasOwnProperty(numArguments)) {
            throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
        }
        Module[name].overloadTable[numArguments] = value;
    }
    else {
        Module[name] = value;
        if (undefined !== numArguments) {
            Module[name].numArguments = numArguments;
        }
    } }
    function heap32VectorToArray(count, firstElement) { var array = []; for (var i = 0; i < count; i++) {
        array.push(HEAP32[(firstElement >> 2) + i]);
    } return array; }
    function replacePublicSymbol(name, value, numArguments) { if (!Module.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistant public symbol");
    } if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
        Module[name].overloadTable[numArguments] = value;
    }
    else {
        Module[name] = value;
        Module[name].argCount = numArguments;
    } }
    function getDynCaller(sig, ptr) { assert(sig.indexOf("j") >= 0, "getDynCaller should only be called with i64 sigs"); var argCache = []; return function () { argCache.length = arguments.length; for (var i = 0; i < arguments.length; i++) {
        argCache[i] = arguments[i];
    } return dynCall(sig, ptr, argCache); }; }
    function embind__requireFunction(signature, rawFunction) { signature = readLatin1String(signature); function makeDynCaller() { if (signature.indexOf("j") != -1) {
        return getDynCaller(signature, rawFunction);
    } return wasmTable.get(rawFunction); } var fp = makeDynCaller(); if (typeof fp !== "function") {
        throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
    } return fp; }
    var UnboundTypeError = undefined;
    function getTypeName(type) { var ptr = ___getTypeName(type); var rv = readLatin1String(ptr); _free(ptr); return rv; }
    function throwUnboundTypeError(message, types) { var unboundTypes = []; var seen = {}; function visit(type) { if (seen[type]) {
        return;
    } if (registeredTypes[type]) {
        return;
    } if (typeDependencies[type]) {
        typeDependencies[type].forEach(visit);
        return;
    } unboundTypes.push(type); seen[type] = true; } types.forEach(visit); throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "])); }
    function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) { var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr); name = readLatin1String(name); rawInvoker = embind__requireFunction(signature, rawInvoker); exposePublicSymbol(name, function () { throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes); }, argCount - 1); whenDependentTypesAreResolved([], argTypes, function (argTypes) { var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1)); replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1); return []; }); }
    function integerReadValueFromPointer(name, shift, signed) { switch (shift) {
        case 0: return signed ? function readS8FromPointer(pointer) { return HEAP8[pointer]; } : function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
        case 1: return signed ? function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } : function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
        case 2: return signed ? function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } : function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
        default: throw new TypeError("Unknown integer type: " + name);
    } }
    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) { name = readLatin1String(name); if (maxRange === -1) {
        maxRange = 4294967295;
    } var shift = getShiftFromSize(size); var fromWireType = function (value) { return value; }; if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = function (value) { return value << bitshift >>> bitshift; };
    } var isUnsignedType = name.indexOf("unsigned") != -1; registerType(primitiveType, { name: name, "fromWireType": fromWireType, "toWireType": function (destructors, value) { if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
        } if (value < minRange || value > maxRange) {
            throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
        } return isUnsignedType ? value >>> 0 : value | 0; }, "argPackAdvance": 8, "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0), destructorFunction: null }); }
    function __embind_register_memory_view(rawType, dataTypeIndex, name) { var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array]; var TA = typeMapping[dataTypeIndex]; function decodeMemoryView(handle) { handle = handle >> 2; var heap = HEAPU32; var size = heap[handle]; var data = heap[handle + 1]; return new TA(buffer, data, size); } name = readLatin1String(name); registerType(rawType, { name: name, "fromWireType": decodeMemoryView, "argPackAdvance": 8, "readValueFromPointer": decodeMemoryView }, { ignoreDuplicateRegistrations: true }); }
    function __embind_register_std_string(rawType, name) { name = readLatin1String(name); var stdStringIsUTF8 = name === "std::string"; registerType(rawType, { name: name, "fromWireType": function (value) { var length = HEAPU32[value >> 2]; var str; if (stdStringIsUTF8) {
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i;
                if (i == length || HEAPU8[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === undefined) {
                        str = stringSegment;
                    }
                    else {
                        str += String.fromCharCode(0);
                        str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                }
            }
        }
        else {
            var a = new Array(length);
            for (var i = 0; i < length; ++i) {
                a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
            }
            str = a.join("");
        } _free(value); return str; }, "toWireType": function (destructors, value) { if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
        } var getLength; var valueIsOfTypeString = typeof value === "string"; if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError("Cannot pass non-string to std::string");
        } if (stdStringIsUTF8 && valueIsOfTypeString) {
            getLength = function () { return lengthBytesUTF8(value); };
        }
        else {
            getLength = function () { return value.length; };
        } var length = getLength(); var ptr = _malloc(4 + length + 1); HEAPU32[ptr >> 2] = length; if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr + 4, length + 1);
        }
        else {
            if (valueIsOfTypeString) {
                for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                        _free(ptr);
                        throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                    }
                    HEAPU8[ptr + 4 + i] = charCode;
                }
            }
            else {
                for (var i = 0; i < length; ++i) {
                    HEAPU8[ptr + 4 + i] = value[i];
                }
            }
        } if (destructors !== null) {
            destructors.push(_free, ptr);
        } return ptr; }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function (ptr) { _free(ptr); } }); }
    function __embind_register_std_wstring(rawType, charSize, name) { name = readLatin1String(name); var decodeString, encodeString, getHeap, lengthBytesUTF, shift; if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        getHeap = function () { return HEAPU16; };
        shift = 1;
    }
    else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        getHeap = function () { return HEAPU32; };
        shift = 2;
    } registerType(rawType, { name: name, "fromWireType": function (value) { var length = HEAPU32[value >> 2]; var HEAP = getHeap(); var str; var decodeStartPtr = value + 4; for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;
            if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                var maxReadBytes = currentBytePtr - decodeStartPtr;
                var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                if (str === undefined) {
                    str = stringSegment;
                }
                else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + charSize;
            }
        } _free(value); return str; }, "toWireType": function (destructors, value) { if (!(typeof value === "string")) {
            throwBindingError("Cannot pass non-string to C++ string type " + name);
        } var length = lengthBytesUTF(value); var ptr = _malloc(4 + length + charSize); HEAPU32[ptr >> 2] = length >> shift; encodeString(value, ptr + 4, length + charSize); if (destructors !== null) {
            destructors.push(_free, ptr);
        } return ptr; }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function (ptr) { _free(ptr); } }); }
    function __embind_register_void(rawType, name) { name = readLatin1String(name); registerType(rawType, { isVoid: true, name: name, "argPackAdvance": 0, "fromWireType": function () { return undefined; }, "toWireType": function (destructors, o) { return undefined; } }); }
    function requireHandle(handle) { if (!handle) {
        throwBindingError("Cannot use deleted val. handle = " + handle);
    } return emval_handle_array[handle].value; }
    function requireRegisteredType(rawType, humanName) { var impl = registeredTypes[rawType]; if (undefined === impl) {
        throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
    } return impl; }
    function __emval_as(handle, returnType, destructorsRef) { handle = requireHandle(handle); returnType = requireRegisteredType(returnType, "emval::as"); var destructors = []; var rd = __emval_register(destructors); HEAP32[destructorsRef >> 2] = rd; return returnType["toWireType"](destructors, handle); }
    var emval_symbols = {};
    function getStringOrSymbol(address) { var symbol = emval_symbols[address]; if (symbol === undefined) {
        return readLatin1String(address);
    }
    else {
        return symbol;
    } }
    function emval_get_global() { if (typeof globalThis === "object") {
        return globalThis;
    } return function () { return Function; }()("return this")(); }
    function __emval_get_global(name) { if (name === 0) {
        return __emval_register(emval_get_global());
    }
    else {
        name = getStringOrSymbol(name);
        return __emval_register(emval_get_global()[name]);
    } }
    function __emval_get_property(handle, key) { handle = requireHandle(handle); key = requireHandle(key); return __emval_register(handle[key]); }
    function __emval_incref(handle) { if (handle > 4) {
        emval_handle_array[handle].refcount += 1;
    } }
    function craftEmvalAllocator(argCount) { var argsList = ""; for (var i = 0; i < argCount; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
    } var functionBody = "return function emval_allocator_" + argCount + "(constructor, argTypes, args) {\n"; for (var i = 0; i < argCount; ++i) {
        functionBody += "var argType" + i + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + i + '], "parameter ' + i + '");\n' + "var arg" + i + " = argType" + i + ".readValueFromPointer(args);\n" + "args += argType" + i + "['argPackAdvance'];\n";
    } functionBody += "var obj = new constructor(" + argsList + ");\n" + "return __emval_register(obj);\n" + "}\n"; return new Function("requireRegisteredType", "Module", "__emval_register", functionBody)(requireRegisteredType, Module, __emval_register); }
    var emval_newers = {};
    function __emval_new(handle, argCount, argTypes, args) { handle = requireHandle(handle); var newer = emval_newers[argCount]; if (!newer) {
        newer = craftEmvalAllocator(argCount);
        emval_newers[argCount] = newer;
    } return newer(handle, argTypes, args); }
    function __emval_new_cstring(v) { return __emval_register(getStringOrSymbol(v)); }
    function __emval_run_destructors(handle) { var destructors = emval_handle_array[handle].value; runDestructors(destructors); __emval_decref(handle); }
    function __emval_set_property(handle, key, value) { handle = requireHandle(handle); key = requireHandle(key); value = requireHandle(value); handle[key] = value; }
    function __emval_take_value(type, argv) { type = requireRegisteredType(type, "_emval_take_value"); var v = type["readValueFromPointer"](argv); return __emval_register(v); }
    function __emval_throw(object) { object = requireHandle(object); throw object; }
    function _abort() { abort(); }
    function _emscripten_memcpy_big(dest, src, num) { HEAPU8.copyWithin(dest, src, src + num); }
    function _emscripten_get_heap_size() { return HEAPU8.length; }
    function emscripten_realloc_buffer(size) { try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
    }
    catch (e) { } }
    function _emscripten_resize_heap(requestedSize) { requestedSize = requestedSize >>> 0; var oldSize = _emscripten_get_heap_size(); var maxHeapSize = 2147483648; if (requestedSize > maxHeapSize) {
        return false;
    } var minHeapSize = 16777216; for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
            return true;
        }
    } return false; }
    function _getTempRet0() { return getTempRet0() | 0; }
    embind_init_charCodes();
    BindingError = Module["BindingError"] = extendError(Error, "BindingError");
    InternalError = Module["InternalError"] = extendError(Error, "InternalError");
    init_emval();
    UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
    var ASSERTIONS = false;
    __ATINIT__.push({ func: function () { ___wasm_call_ctors(); } });
    var asmLibraryArg = { "__cxa_allocate_exception": ___cxa_allocate_exception, "__cxa_begin_catch": ___cxa_begin_catch, "__cxa_find_matching_catch_2": ___cxa_find_matching_catch_2, "__cxa_find_matching_catch_3": ___cxa_find_matching_catch_3, "__cxa_free_exception": ___cxa_free_exception, "__cxa_throw": ___cxa_throw, "__resumeException": ___resumeException, "_embind_register_bool": __embind_register_bool, "_embind_register_emval": __embind_register_emval, "_embind_register_float": __embind_register_float, "_embind_register_function": __embind_register_function, "_embind_register_integer": __embind_register_integer, "_embind_register_memory_view": __embind_register_memory_view, "_embind_register_std_string": __embind_register_std_string, "_embind_register_std_wstring": __embind_register_std_wstring, "_embind_register_void": __embind_register_void, "_emval_as": __emval_as, "_emval_decref": __emval_decref, "_emval_get_global": __emval_get_global, "_emval_get_property": __emval_get_property, "_emval_incref": __emval_incref, "_emval_new": __emval_new, "_emval_new_cstring": __emval_new_cstring, "_emval_run_destructors": __emval_run_destructors, "_emval_set_property": __emval_set_property, "_emval_take_value": __emval_take_value, "_emval_throw": __emval_throw, "abort": _abort, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "getTempRet0": _getTempRet0, "invoke_diii": invoke_diii, "invoke_ii": invoke_ii, "invoke_iii": invoke_iii, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_viii": invoke_viii, "memory": wasmMemory };
    var asm = createWasm();
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function () { return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments); };
    var _malloc = Module["_malloc"] = function () { return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments); };
    var _free = Module["_free"] = function () { return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments); };
    var ___getTypeName = Module["___getTypeName"] = function () { return (___getTypeName = Module["___getTypeName"] = Module["asm"]["__getTypeName"]).apply(null, arguments); };
    var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = function () { return (___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = Module["asm"]["__embind_register_native_and_builtin_types"]).apply(null, arguments); };
    var ___errno_location = Module["___errno_location"] = function () { return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments); };
    var stackSave = Module["stackSave"] = function () { return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments); };
    var stackRestore = Module["stackRestore"] = function () { return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments); };
    var stackAlloc = Module["stackAlloc"] = function () { return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments); };
    var _setThrew = Module["_setThrew"] = function () { return (_setThrew = Module["_setThrew"] = Module["asm"]["setThrew"]).apply(null, arguments); };
    var __ZSt18uncaught_exceptionv = Module["__ZSt18uncaught_exceptionv"] = function () { return (__ZSt18uncaught_exceptionv = Module["__ZSt18uncaught_exceptionv"] = Module["asm"]["_ZSt18uncaught_exceptionv"]).apply(null, arguments); };
    function invoke_iii(index, a1, a2) { var sp = stackSave(); try {
        return wasmTable.get(index)(a1, a2);
    }
    catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0);
    } }
    function invoke_vi(index, a1) { var sp = stackSave(); try {
        wasmTable.get(index)(a1);
    }
    catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0);
    } }
    function invoke_diii(index, a1, a2, a3) { var sp = stackSave(); try {
        return wasmTable.get(index)(a1, a2, a3);
    }
    catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0);
    } }
    function invoke_iiiii(index, a1, a2, a3, a4) { var sp = stackSave(); try {
        return wasmTable.get(index)(a1, a2, a3, a4);
    }
    catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0);
    } }
    function invoke_viii(index, a1, a2, a3) { var sp = stackSave(); try {
        wasmTable.get(index)(a1, a2, a3);
    }
    catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0);
    } }
    function invoke_ii(index, a1) { var sp = stackSave(); try {
        return wasmTable.get(index)(a1);
    }
    catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0);
    } }
    var calledRun;
    function ExitStatus(status) { this.name = "ExitStatus"; this.message = "Program terminated with exit(" + status + ")"; this.status = status; }
    dependenciesFulfilled = function runCaller() { if (!calledRun)
        run(); if (!calledRun)
        dependenciesFulfilled = runCaller; };
    function run(args) { args = args || arguments_; if (runDependencies > 0) {
        return;
    } preRun(); if (runDependencies > 0)
        return; function doRun() { if (calledRun)
        return; calledRun = true; Module["calledRun"] = true; if (ABORT)
        return; initRuntime(); preMain(); if (Module["onRuntimeInitialized"])
        Module["onRuntimeInitialized"](); postRun(); } if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () { setTimeout(function () { Module["setStatus"](""); }, 1); doRun(); }, 1);
    }
    else {
        doRun();
    } }
    Module["run"] = run;
    if (Module["preInit"]) {
        if (typeof Module["preInit"] == "function")
            Module["preInit"] = [Module["preInit"]];
        while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
        }
    }
    noExitRuntime = true;
    run();
    var _modulePromise = new Promise(function (resolve, reject) {
        var onAbort = Module.onAbort;
        Module.onAbort = function (message) {
            Module.onAbort = onAbort;
            reject(new Error(message));
        };
        Module.onRuntimeInitialized = function () {
            Module.onAbort = onAbort;
            resolve(Module);
        };
    });
    return {
        init: function () {
            return _modulePromise;
        },
        mod: Module
    };
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WzKeyGenerator; });
/* harmony import */ var _MapleCryptoConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _WzMutableKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);


class WzKeyGenerator {
    static getIvFromZlz(zlzStream) {
        zlzStream.seek(0x10040);
        const iv = zlzStream.read(4);
        return iv;
    }
    /* private static getAesKeyFromZlz (zlzStream: BinaryReader): Uint8Array {
      const aes = new Uint8Array(32)
  
      zlzStream.seek(0x10060)
      for (let i = 0; i < 8; i++) {
        zlzStream.readToBuffer(aes, i * 4, 4)
        zlzStream.pos += 12
      }
      return aes
    } */
    static generateWzKey(wzIv) {
        return new _WzMutableKey_js__WEBPACK_IMPORTED_MODULE_1__[/* WzMutableKey */ "a"](wzIv, _MapleCryptoConstants_js__WEBPACK_IMPORTED_MODULE_0__[/* MapleCryptoConstants */ "a"].getTrimmedUserKey());
    }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzUOLProperty", function() { return WzUOLProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _WzImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _WzDirectory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _util_ErrorLogger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);






/**
 * @public
 */
class WzUOLProperty extends _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__[/* WzExtended */ "a"] {
    constructor(name = '', val = '') {
        super();
        this.name = name;
        this.val = val;
        this.linkVal = null;
        this.parent = null;
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].UOL;
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
    }
    get value() {
        return this.val;
    }
    get wzValue() {
        if (WzUOLProperty.UOLRES) {
            return this.linkValue;
        }
        return this;
    }
    get wzProperties() {
        return this.linkValue instanceof _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* WzImageProperty */ "a"] ? this.linkValue.wzProperties : null;
    }
    at(name) {
        return this.linkValue instanceof _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* WzImageProperty */ "a"] ? this.linkValue.at(name) : this.linkValue instanceof _WzImage_js__WEBPACK_IMPORTED_MODULE_3__[/* WzImage */ "a"] ? this.linkValue.at(name) : null;
    }
    getFromPath(path) {
        return this.linkValue instanceof _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* WzImageProperty */ "a"] ? this.linkValue.getFromPath(path) : this.linkValue instanceof _WzImage_js__WEBPACK_IMPORTED_MODULE_3__[/* WzImage */ "a"] ? this.linkValue.getFromPath(path) : null;
    }
    get linkValue() {
        if (this.linkVal == null) {
            const paths = this.val.split('/');
            this.linkVal = this.parent;
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const asdf = this.parent.fullPath;
            for (const path of paths) {
                if (path === '..') {
                    this.linkVal = this.linkVal.parent;
                }
                else {
                    if (this.linkVal instanceof _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* WzImageProperty */ "a"]) {
                        this.linkVal = this.linkVal.at(path);
                    }
                    else if (this.linkVal instanceof _WzImage_js__WEBPACK_IMPORTED_MODULE_3__[/* WzImage */ "a"]) {
                        this.linkVal = this.linkVal.at(path);
                    }
                    else if (this.linkVal instanceof _WzDirectory_js__WEBPACK_IMPORTED_MODULE_4__[/* WzDirectory */ "a"]) {
                        this.linkVal = this.linkVal.at(path);
                    }
                    else {
                        _util_ErrorLogger_js__WEBPACK_IMPORTED_MODULE_5__[/* ErrorLogger */ "b"].log(_util_ErrorLogger_js__WEBPACK_IMPORTED_MODULE_5__[/* ErrorLevel */ "a"].Critical, `UOL got nexon'd at property: ${this.fullPath}`);
                        return null;
                    }
                }
            }
        }
        return this.linkVal;
    }
    setValue(value) {
        this.val = value;
    }
    toString() {
        return this.val;
    }
    async getBitmap() {
        if (this.linkValue != null) {
            return await this.linkValue.getBitmap();
        }
        return null;
    }
}
WzUOLProperty.UOLRES = true;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryGetRequireFunction", function() { return tryGetRequireFunction; });
function tryGetRequireFunction (parentModule) {
  var nativeRequire;

  if (true) {
    nativeRequire =  true ? (function () {
  return typeof __webpack_public_path__ !== 'undefined' ? (typeof __non_webpack_require__ !== 'undefined' ? __non_webpack_require__ : undefined) : (typeof require !== 'undefined' ? require : undefined);
})() : undefined;
  } else {}

  if (typeof nativeRequire === 'function') {
    var g = (function (defaultValue) {
      var g;
      g = (function () { return this; })(); // non-strict mode
    
      try {
        g = g || new Function("return this")(); // allow eval
      } catch (_) {
        if (typeof globalThis !== "undefined") return globalThis;
        if (false) {}
        if (typeof window !== "undefined") return window;
        if (typeof self !== "undefined") return self;
      }
    
      return g || defaultValue;
    })();
    if (!(g && g.process && g.process.versions && typeof g.process.versions.node === 'string')) {
      return nativeRequire;
    }

    if (nativeRequire === g.require) {
      return nativeRequire;
    }

    var Module;
    try {
      Module = nativeRequire('module');
    } catch (_) {
      return nativeRequire;
    }

    Module = Module || Module.Module;
    if (!Module || !(parentModule instanceof Module)) {
      return nativeRequire;
    }

    return (function makeRequireFunction (mod, main) {
      var Module = mod.constructor;
      function require (path) {
        return mod.require(path);
      };

      function validateString (value, name) {
        if (typeof value !== 'string') throw new TypeError('The "' + name + '" argument must be of type string. Received type ' + typeof value);
      }

      function resolve (request, opts) {
        validateString(request, 'request');
        return Module._resolveFilename(request, mod, false, opts);
      }

      require.resolve = resolve;

      function paths (request) {
        validateString(request, 'request');
        return Module._resolveLookupPaths(request, mod);
      }

      resolve.paths = paths;

      require.main = main;
      require.extensions = Module._extensions;
      require.cache = Module._cache;

      return require;
    })(parentModule, (g.process.mainModule instanceof Module) ? g.process.mainModule : undefined);
  }

  return nativeRequire;
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WzMutableKey; });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _tybys_binreader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


/**
 * @public
 */
class WzMutableKey {
    constructor(_iv, _aesKey) {
        this._iv = _iv;
        this._aesKey = _aesKey;
        this._keys = null;
    }
    at(index) {
        if (this._keys == null || this._keys.length <= index) {
            this.ensureKeySize(index + 1);
        }
        return this._keys[index];
    }
    ensureKeySize(size) {
        if (this._keys != null && this._keys.length >= size) {
            return;
        }
        size = Math.ceil(1.0 * size / WzMutableKey._batchSize) * WzMutableKey._batchSize;
        const newKeys = new Uint8Array(size);
        const r = new _tybys_binreader__WEBPACK_IMPORTED_MODULE_1__[/* BinaryReader */ "b"](this._iv);
        // const tmp = this._iv.readInt32LE(0)
        const tmp = r.readInt32LE();
        r.dispose();
        if (tmp === 0) {
            this._keys = newKeys;
            return;
        }
        let startIndex = 0;
        if (this._keys != null) {
            // this._keys.copy(newKeys, 0, 0)
            newKeys.set(this._keys, 0);
            startIndex = this._keys.length;
        }
        const aes = _node_js__WEBPACK_IMPORTED_MODULE_0__[/* crypto */ "d"].createCipheriv('aes-256-ecb', this._aesKey, null);
        aes.setAutoPadding(true);
        // const ms = newKeys.slice(startIndex, newKeys.length - startIndex)
        const ms = newKeys.subarray(startIndex, newKeys.length - startIndex);
        for (let i = startIndex; i < size; i += 16) {
            if (i === 0) {
                const block = new Uint8Array(16);
                for (let j = 0; j < block.length; j++) {
                    block[j] = this._iv[j % 4];
                }
                const buf = aes.update(block);
                ms.set(buf, i);
                // buf.copy(ms, i, 0)
            }
            else {
                // const buf = aes.update(newKeys.slice(i - 16, i))
                const buf = aes.update(newKeys.subarray(i - 16, i));
                ms.set(buf, i);
                // buf.copy(ms, i, 0)
            }
        }
        this._keys = newKeys;
    }
}
WzMutableKey._batchSize = 4096;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzLuaProperty", function() { return WzLuaProperty; });
/* harmony import */ var _util_MapleCryptoConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _util_WzKeyGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_node_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);





/**
 * @public
 */
class WzLuaProperty extends _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* WzImageProperty */ "a"] {
    constructor(name, encryptedBytes) {
        super();
        this.name = name;
        this.encryptedBytes = encryptedBytes;
        this.parent = null;
        this.wzKey = _util_WzKeyGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* WzKeyGenerator */ "a"].generateWzKey(WzLuaProperty.USE_IV_KEY);
    }
    setValue(value) {
        this.encryptedBytes = value;
    }
    get wzValue() {
        return this.value;
    }
    get value() {
        return this.encryptedBytes;
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_3__[/* WzPropertyType */ "a"].Lua;
    }
    toString() {
        if (this.encryptedBytes == null)
            return '';
        return _util_node_js__WEBPACK_IMPORTED_MODULE_4__[/* asciiTextDecoder */ "c"].decode(this.encodeDecode(this.encryptedBytes));
    }
    encodeDecode(input) {
        const newArray = new Uint8Array(input.length);
        for (let i = 0; i < input.length; i++) {
            const encryptedChar = ((input[i] ^ this.wzKey.at(i)) & 0xFF);
            newArray[i] = encryptedChar;
        }
        return newArray;
    }
    dispose() {
        if (this._disposed)
            return;
        this.encryptedBytes = null;
        this._disposed = true;
    }
}
WzLuaProperty.USE_IV_KEY = _util_MapleCryptoConstants_js__WEBPACK_IMPORTED_MODULE_0__[/* MapleCryptoConstants */ "a"].WZ_MSEAIV;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzNullProperty", function() { return WzNullProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



/**
 * @public
 */
class WzNullProperty extends _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* WzImageProperty */ "a"] {
    constructor(name = '') {
        super();
        this.name = name;
        this.parent = null;
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].Null;
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
    }
    setValue(_value) {
        throw new _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_1__[/* NotImplementedError */ "a"]('[WzNullProperty#setValue]');
    }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzShortProperty", function() { return WzShortProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/**
 * @public
 */
class WzShortProperty extends _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* WzImageProperty */ "a"] {
    constructor(name = '', val = 0) {
        super();
        this.name = name;
        this.val = val;
        this.parent = null;
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].Short;
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
    }
    get value() {
        return this.val;
    }
    get wzValue() {
        return this.val;
    }
    setValue(value) {
        this.val = value;
    }
    toString() {
        return this.val.toString();
    }
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzLongProperty", function() { return WzLongProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/**
 * @public
 */
class WzLongProperty extends _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* WzImageProperty */ "a"] {
    constructor(name = '', val = BigInt(0)) {
        super();
        this.name = name;
        this.val = val;
        this.parent = null;
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].Long;
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
    }
    get value() {
        return this.val;
    }
    get wzValue() {
        return this.val;
    }
    setValue(value) {
        this.val = BigInt(value);
    }
    toString() {
        return this.val.toString();
    }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzFloatProperty", function() { return WzFloatProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/**
 * @public
 */
class WzFloatProperty extends _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* WzImageProperty */ "a"] {
    constructor(name = '', val = 0) {
        super();
        this.name = name;
        this.val = val;
        this.parent = null;
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].Float;
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
    }
    get value() {
        return this.val;
    }
    get wzValue() {
        return this.val;
    }
    setValue(value) {
        this.val = value;
    }
    toString() {
        return this.val.toString();
    }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzDoubleProperty", function() { return WzDoubleProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/**
 * @public
 */
class WzDoubleProperty extends _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* WzImageProperty */ "a"] {
    constructor(name = '', val = 0) {
        super();
        this.name = name;
        this.val = val;
        this.parent = null;
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].Double;
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
    }
    get value() {
        return this.val;
    }
    get wzValue() {
        return this.val;
    }
    setValue(value) {
        this.val = value;
    }
    toString() {
        return this.val.toString();
    }
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzStringProperty", function() { return WzStringProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/**
 * @public
 */
class WzStringProperty extends _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* WzImageProperty */ "a"] {
    constructor(name = '', val = '') {
        super();
        this.name = name;
        this.val = val;
        this.parent = null;
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].String;
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
    }
    get value() {
        return this.val;
    }
    get wzValue() {
        return this.val;
    }
    setValue(value) {
        this.val = value;
    }
    toString() {
        return this.val;
    }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzSubProperty", function() { return WzSubProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



/**
 * @public
 */
class WzSubProperty extends _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__[/* WzExtended */ "a"] {
    constructor(name = '') {
        super();
        this.name = name;
        this.properties = new Set();
        this.parent = null;
    }
    get wzProperties() {
        return this.properties;
    }
    addProperty(prop) {
        prop.parent = this;
        this.properties.add(prop);
    }
    removeProperty(prop) {
        prop.parent = null;
        this.properties.delete(prop);
    }
    addProperties(props) {
        for (const prop of props) {
            this.addProperty(prop);
        }
    }
    clearProperties() {
        for (const prop of this.properties) {
            prop.parent = null;
        }
        this.properties.clear();
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].SubProperty;
    }
    dispose() {
        if (this._disposed)
            return;
        for (const prop of this.properties) {
            prop.dispose();
        }
        this.properties.clear();
        this._disposed = true;
    }
    setValue(_value) {
        throw new _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_2__[/* NotImplementedError */ "a"]('[WzSubProperty#setValue]');
    }
    set(name, value) {
        if (value != null) {
            value.name = name;
            this.addProperty(value);
        }
    }
    at(name) {
        const nameLower = name.toLowerCase();
        for (const prop of this.properties) {
            if (prop.name.toLowerCase() === nameLower)
                return prop;
        }
        return null;
    }
    getFromPath(path) {
        const segments = path.split('/');
        if (segments[0] === '..') {
            return this.parent.at(path.substring(this.name.indexOf('/') + 1));
        }
        let ret = this;
        for (let x = 0; x < segments.length; x++) {
            let foundChild = false;
            const list = ret.wzProperties;
            if (list != null) {
                const l = list;
                for (const iwp of l) {
                    if (iwp.name === segments[x]) {
                        ret = iwp;
                        foundChild = true;
                        break;
                    }
                }
            }
            if (!foundChild) {
                return null;
            }
        }
        return ret;
    }
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzCanvasProperty", function() { return WzCanvasProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _WzImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _WzDirectory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);





/**
 * @public
 */
class WzCanvasProperty extends _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__[/* WzExtended */ "a"] {
    constructor(name = '') {
        super();
        this.name = name;
        this.properties = new Set();
        this.parent = null;
        this.pngProperty = null;
    }
    get inlinkPropertyName() { return '_inlink'; }
    get outlinkPropertyName() { return '_outlink'; }
    get originPropertyName() { return 'origin'; }
    get headPropertyName() { return 'head'; }
    get ltPropertyName() { return 'lt'; }
    get animationDelayPropertyName() { return 'delay'; }
    get wzProperties() {
        return this.properties;
    }
    addProperty(prop) {
        prop.parent = this;
        this.properties.add(prop);
    }
    removeProperty(prop) {
        prop.parent = null;
        this.properties.delete(prop);
    }
    addProperties(props) {
        for (const prop of props) {
            this.addProperty(prop);
        }
    }
    clearProperties() {
        for (const prop of this.properties) {
            prop.parent = null;
        }
        this.properties.clear();
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].Canvas;
    }
    dispose() {
        if (this._disposed)
            return;
        for (const prop of this.properties) {
            prop.dispose();
        }
        this.properties.clear();
        if (this.pngProperty != null) {
            this.pngProperty.dispose();
            this.pngProperty = null;
        }
        this._disposed = true;
    }
    get wzValue() {
        return this.pngProperty;
    }
    getProperty(name) {
        const nameLower = name.toLowerCase();
        for (const iwp of this.properties) {
            if (iwp.name.toLowerCase() === nameLower)
                return iwp;
        }
        return null;
    }
    at(name) {
        if (name === 'PNG')
            return this.pngProperty;
        const nameLower = name.toLowerCase();
        for (const iwp of this.properties) {
            if (iwp.name.toLowerCase() === nameLower)
                return iwp;
        }
        return null;
    }
    set(name, value) {
        if (value != null) {
            if (name === 'PNG') {
                this.pngProperty = value;
                return;
            }
            value.name = name;
            this.addProperty(value);
        }
    }
    setValue(value) {
        if (this.pngProperty != null) {
            this.pngProperty.setValue(value);
        }
    }
    getFromPath(path) {
        const segments = path.split('/');
        if (segments[0] === '..') {
            return this.parent.at(path.substring(this.name.indexOf('/') + 1));
        }
        let ret = this;
        for (let x = 0; x < segments.length; x++) {
            let foundChild = false;
            if (segments[x] === 'PNG') {
                return this.pngProperty;
            }
            const list = ret.wzProperties;
            if (list != null) {
                const l = list;
                for (const iwp of l) {
                    if (iwp.name === segments[x]) {
                        ret = iwp;
                        foundChild = true;
                        break;
                    }
                }
            }
            if (!foundChild) {
                return null;
            }
        }
        return ret;
    }
    haveInlinkProperty() {
        return this.at(this.inlinkPropertyName) != null;
    }
    haveOutlinkProperty() {
        return this.at(this.outlinkPropertyName) != null;
    }
    async getLinkedWzCanvasBitmap() {
        var _a, _b;
        const _inlink = (_a = this.at(this.inlinkPropertyName)) === null || _a === void 0 ? void 0 : _a.value; // could get nexon'd here. In case they place an _inlink that's not WzStringProperty
        const _outlink = (_b = this.at(this.outlinkPropertyName)) === null || _b === void 0 ? void 0 : _b.value; // could get nexon'd here. In case they place an _outlink that's not WzStringProperty
        if (_inlink != null) {
            let currentWzObj = this; // first object to work with
            while ((currentWzObj = currentWzObj.parent) != null) {
                if (!(currentWzObj instanceof _WzImage_js__WEBPACK_IMPORTED_MODULE_3__[/* WzImage */ "a"]))
                    continue; // keep looping if its not a WzImage
                const wzImageParent = currentWzObj;
                const foundProperty = wzImageParent.getFromPath(_inlink);
                if (foundProperty != null && foundProperty instanceof _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* WzImageProperty */ "a"]) {
                    return await foundProperty.getBitmap();
                }
            }
        }
        else if (_outlink != null) {
            let currentWzObj = this; // first object to work with
            while ((currentWzObj = currentWzObj.parent) != null) {
                if (!(currentWzObj instanceof _WzDirectory_js__WEBPACK_IMPORTED_MODULE_4__[/* WzDirectory */ "a"]))
                    continue; // keep looping if its not a WzImage
                const wzFileParent = (currentWzObj).wzFile;
                const foundProperty = wzFileParent.getObjectFromPath(_outlink);
                if (foundProperty != null && foundProperty instanceof _WzImageProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* WzImageProperty */ "a"]) {
                    return await foundProperty.getBitmap();
                }
            }
        }
        return await this.getBitmap();
    }
    async getBitmap() {
        if (this.pngProperty != null) {
            return await this.pngProperty.getBitmap();
        }
        return null;
    }
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzVectorProperty", function() { return WzVectorProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _WzIntProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



/**
 * @public
 */
class WzVectorProperty extends _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__[/* WzExtended */ "a"] {
    constructor(name = '', x, y) {
        super();
        this.name = '';
        this.parent = null;
        this.x = null;
        this.y = null;
        this.name = name;
        if (x != null)
            this.x = new _WzIntProperty_js__WEBPACK_IMPORTED_MODULE_2__["WzIntProperty"]('', x);
        if (y != null)
            this.y = new _WzIntProperty_js__WEBPACK_IMPORTED_MODULE_2__["WzIntProperty"]('', y);
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].Vector;
    }
    dispose() {
        if (this._disposed)
            return;
        if (this.x != null) {
            this.x.dispose();
            this.x = null;
        }
        if (this.y != null) {
            this.y.dispose();
            this.y = null;
        }
        this._disposed = true;
    }
    get wzValue() {
        return {
            x: this.x != null ? this.x.value : 0,
            y: this.y != null ? this.y.value : 0
        };
    }
    setValue(value) {
        if (this.x != null)
            this.x.setValue(value.x);
        if (this.y != null)
            this.y.setValue(value.y);
    }
    toString() {
        if (this.x != null && this.y != null) {
            return 'X: ' + this.x.value.toString() + ', Y: ' + this.y.value.toString();
        }
        return '';
    }
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzConvexProperty", function() { return WzConvexProperty; });
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



/**
 * @public
 */
class WzConvexProperty extends _WzExtended_js__WEBPACK_IMPORTED_MODULE_1__[/* WzExtended */ "a"] {
    constructor(name = '') {
        super();
        this.name = name;
        this.properties = new Set();
        this.parent = null;
    }
    get wzProperties() {
        return this.properties;
    }
    addProperty(prop) {
        prop.parent = this;
        this.properties.add(prop);
    }
    removeProperty(prop) {
        prop.parent = null;
        this.properties.delete(prop);
    }
    addProperties(props) {
        for (const prop of props) {
            this.addProperty(prop);
        }
    }
    clearProperties() {
        for (const prop of this.properties) {
            prop.parent = null;
        }
        this.properties.clear();
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_0__[/* WzPropertyType */ "a"].Convex;
    }
    dispose() {
        if (this._disposed)
            return;
        for (const prop of this.properties) {
            prop.dispose();
        }
        this.properties.clear();
        this._disposed = true;
    }
    setValue(_value) {
        throw new _util_NotImplementedError_js__WEBPACK_IMPORTED_MODULE_2__[/* NotImplementedError */ "a"]('[WzConvexProperty#setValue]');
    }
    at(name) {
        const nameLower = name.toLowerCase();
        for (const prop of this.properties) {
            if (prop.name.toLowerCase() === nameLower)
                return prop;
        }
        return null;
    }
    getProperty(name) {
        const nameLower = name.toLowerCase();
        for (const prop of this.properties) {
            if (prop.name.toLowerCase() === nameLower)
                return prop;
        }
        return null;
    }
    getFromPath(path) {
        const segments = path.split('/');
        if (segments[0] === '..') {
            return this.parent.at(path.substring(this.name.indexOf('/') + 1));
        }
        let ret = this;
        for (let x = 0; x < segments.length; x++) {
            let foundChild = false;
            const list = ret.wzProperties;
            if (list != null) {
                const l = list;
                for (const iwp of l) {
                    if (iwp.name === segments[x]) {
                        ret = iwp;
                        foundChild = true;
                        break;
                    }
                }
            }
            if (!foundChild) {
                return null;
            }
        }
        return ret;
    }
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WzBinaryProperty", function() { return WzBinaryProperty; });
/* harmony import */ var _WzExtended_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _util_node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



/**
 * @public
 */
class WzBinaryProperty extends _WzExtended_js__WEBPACK_IMPORTED_MODULE_0__[/* WzExtended */ "a"] {
    constructor(name, reader) {
        super();
        this.parent = null;
        this.mp3bytes = null;
        this.soundDataLen = 0;
        this.length = 0;
        this.offs = 0;
        this.name = name;
        this.wzReader = reader;
        this.offs = 0;
    }
    static async create(name, reader, parseNow) {
        const self = new WzBinaryProperty(name, reader);
        self.wzReader.pos++;
        // note - soundDataLen does NOT include the length of the header.
        self.soundDataLen = await self.wzReader.readWzInt();
        self.length = await self.wzReader.readWzInt();
        const headerOff = self.wzReader.pos;
        self.wzReader.pos += WzBinaryProperty.soundHeader.length;
        const wavFormatLen = await self.wzReader.readUInt8();
        self.wzReader.pos = headerOff;
        self.header = await self.wzReader.read(WzBinaryProperty.soundHeader.length + 1 + wavFormatLen);
        // this.parseWzSoundPropertyHeader()
        // sound file offs
        self.offs = self.wzReader.pos;
        if (parseNow) {
            self.mp3bytes = await self.wzReader.read(self.soundDataLen);
        }
        else {
            self.wzReader.pos += self.soundDataLen;
        }
        return self;
    }
    setValue(_value) { }
    get wzValue() {
        return this.getBytes(false);
    }
    async getBytes(saveInMemory = false) {
        if (this.mp3bytes != null) {
            return this.mp3bytes;
        }
        // if (this.wzReader == null) return null
        const currentPos = this.wzReader.pos;
        this.wzReader.pos = this.offs;
        this.mp3bytes = await this.wzReader.read(this.soundDataLen);
        this.wzReader.pos = currentPos;
        if (saveInMemory) {
            return this.mp3bytes;
        }
        const result = this.mp3bytes;
        this.mp3bytes = null;
        return result;
    }
    async saveToFile(file) {
        if (typeof window !== 'undefined') {
            const a = window.document.createElement('a');
            a.download = file;
            a.href = URL.createObjectURL(new Blob([await this.getBytes(false)], { type: 'audio/mp3' }));
            const event = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            });
            a.dispatchEvent(event);
            a.remove();
            return;
        }
        try {
            _util_node_js__WEBPACK_IMPORTED_MODULE_2__[/* fs */ "e"].mkdirSync(_util_node_js__WEBPACK_IMPORTED_MODULE_2__[/* path */ "g"].dirname(file), { recursive: true });
        }
        catch (_) { }
        _util_node_js__WEBPACK_IMPORTED_MODULE_2__[/* fs */ "e"].writeFileSync(file, await this.getBytes(false));
    }
    get propertyType() {
        return _WzPropertyType_js__WEBPACK_IMPORTED_MODULE_1__[/* WzPropertyType */ "a"].Sound;
    }
    dispose() {
        if (this._disposed)
            return;
        this.mp3bytes = null;
        this._disposed = true;
    }
}
WzBinaryProperty.soundHeader = [
    0x02,
    0x83, 0xEB, 0x36, 0xE4, 0x4F, 0x52, 0xCE, 0x11, 0x9F, 0x53, 0x00, 0x20, 0xAF, 0x0B, 0xA7, 0x70,
    0x8B, 0xEB, 0x36, 0xE4, 0x4F, 0x52, 0xCE, 0x11, 0x9F, 0x53, 0x00, 0x20, 0xAF, 0x0B, 0xA7, 0x70,
    0x00,
    0x01,
    0x81, 0x9F, 0x58, 0x05, 0x56, 0xC3, 0xCE, 0x11, 0xBF, 0x01, 0x00, 0xAA, 0x00, 0x55, 0x59, 0x5A
];


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "WzPngProperty", function() { return /* binding */ WzPngProperty_WzPngProperty; });

// EXTERNAL MODULE: ./lib/esm-modern/WzPropertyType.js
var WzPropertyType = __webpack_require__(0);

// EXTERNAL MODULE: ./lib/esm-modern/WzExtended.js
var WzExtended = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@tybys/binreader/lib/esm-modern/index.js + 5 modules
var esm_modern = __webpack_require__(9);

// CONCATENATED MODULE: ./lib/esm-modern/util/Color.js
class Color {
    constructor(r, g, b, a) {
        Object.defineProperties(this, {
            r: createGetSetDescriptor(r),
            g: createGetSetDescriptor(g),
            b: createGetSetDescriptor(b),
            a: createGetSetDescriptor(a)
        });
    }
    static fromRgb(r, g, b) {
        assertByteRange(r);
        assertByteRange(g);
        assertByteRange(b);
        return new Color(r, g, b, 255);
    }
    static fromArgb(a, r, g, b) {
        assertByteRange(a);
        assertByteRange(r);
        assertByteRange(g);
        assertByteRange(b);
        return new Color(r, g, b, a);
    }
    static fromAc(a, color) {
        assertByteRange(a);
        return new Color(color.r, color.g, color.b, a);
    }
}
Color.black = new Color(0, 0, 0, 255);
function createGetSetDescriptor(val) {
    return {
        configurable: true,
        enumerable: true,
        get: () => val,
        set: (v) => {
            assertByteRange(v);
            val = v;
        }
    };
}
function assertByteRange(n) {
    if (n >>> 8 !== 0 || Number.isNaN(n))
        throw new RangeError('RGB out of range');
}

// EXTERNAL MODULE: ./lib/esm-modern/util/ErrorLogger.js
var ErrorLogger = __webpack_require__(3);

// EXTERNAL MODULE: ./lib/esm-modern/util/NotImplementedError.js
var NotImplementedError = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/esm-modern/util/node.js
var node = __webpack_require__(2);

// EXTERNAL MODULE: ./lib/esm-modern/util/Canvas.js
var Canvas = __webpack_require__(8);

// EXTERNAL MODULE: ./lib/esm-modern/util/wz.js
var wz = __webpack_require__(14);

// CONCATENATED MODULE: ./lib/esm-modern/properties/WzPngProperty.js









/**
 * @public
 */
class WzPngProperty_WzPngProperty extends WzExtended["a" /* WzExtended */] {
    constructor(reader /* , parseNow: boolean = false */) {
        super();
        this.parent = null;
        this.compressedImageBytes = null;
        this.png = null;
        this.listWzUsed = false;
        this.width = 0;
        this.height = 0;
        this.format1 = 0;
        this.format2 = 0;
        this.offs = 0;
        this.wzReader = reader;
        Object.defineProperty(this, 'format', {
            configurable: true,
            enumerable: true,
            get: () => this.format1 + this.format2,
            set: (value) => {
                this.format1 = value;
                this.format2 = 0;
            }
        });
    }
    get propertyType() {
        return WzPropertyType["a" /* WzPropertyType */].PNG;
    }
    dispose() {
        if (this._disposed)
            return;
        this.compressedImageBytes = null;
        if (this.png != null) {
            this.png.dispose();
            this.png = null;
        }
        this._disposed = true;
    }
    get wzValue() {
        return this.getImage(false);
    }
    get name() {
        return 'PNG';
    }
    static async create(reader) {
        const self = new WzPngProperty_WzPngProperty(reader);
        self.width = await reader.readWzInt();
        self.height = await reader.readWzInt();
        self.format1 = await reader.readWzInt();
        self.format2 = await reader.readUInt8();
        reader.pos += 4;
        self.offs = reader.pos;
        const len = await reader.readInt32LE() - 1;
        reader.pos += 1;
        if (len > 0) {
            /* if (parseNow) {
              if (this.wzReader == null) {
                this.compressedImageBytes = reader.read(len)
              } else {
                this.compressedImageBytes = this.wzReader.read(len)
              }
      
              // this.parsePng()
            } else { */
            reader.pos += len;
            /* } */
        }
        return self;
    }
    setValue(_value) {
        throw new NotImplementedError["a" /* NotImplementedError */]('[WzPngProperty#setValue]');
    }
    async getImage(saveInMemory = false) {
        if (this.png == null) {
            const compressedImageBytes = await this.getCompressedBytes(saveInMemory);
            this.png = await this.parsePng(compressedImageBytes);
        }
        if (!saveInMemory) {
            const png = this.png;
            this.png = null;
            return png;
        }
        return this.png;
    }
    async getCompressedBytes(saveInMemory = false) {
        if (this.compressedImageBytes == null) {
            const pos = this.wzReader.pos;
            this.wzReader.pos = this.offs;
            const len = await this.wzReader.readInt32LE() - 1;
            if (len <= 0) {
                // possibility an image written with the wrong wzIv
                throw new Error('The length of the image is negative. WzPngProperty.');
            }
            this.wzReader.pos += 1;
            /* if (len > 0) */ this.compressedImageBytes = await this.wzReader.read(len);
            this.wzReader.pos = pos;
        }
        if (!saveInMemory) {
            // were removing the referance to compressedBytes, so a backup for the ret value is needed
            const returnBytes = this.compressedImageBytes;
            this.compressedImageBytes = null;
            return returnBytes;
        }
        return this.compressedImageBytes;
    }
    async parsePng(compressedImageBytes) {
        const reader = new esm_modern["b" /* BinaryReader */](compressedImageBytes);
        const header = reader.readUInt16LE();
        this.listWzUsed = header !== 0x9C78 && header !== 0xDA78 && header !== 0x0178 && header !== 0x5E78;
        let data;
        if (!this.listWzUsed) {
            data = compressedImageBytes;
        }
        else {
            reader.pos -= 2;
            const dataStream = [];
            let blocksize = 0;
            const endOfPng = compressedImageBytes.length;
            while (reader.pos < endOfPng) {
                blocksize = reader.readInt32LE();
                for (let i = 0; i < blocksize; i++) {
                    dataStream.push(((reader.readUInt8() ^ this.parentImage.reader.wzKey.at(i)) >>> 0) & 0xFF);
                }
            }
            data = new Uint8Array(dataStream);
        }
        reader.dispose();
        const format = this.format1 + this.format2;
        switch (format) {
            case 1: {
                const uncompressedSize = this.width * this.height * 2;
                const decBuf = await inflate(data, uncompressedSize);
                const decoded = WzPngProperty_WzPngProperty.getPixelDataBgra4444(decBuf, this.width, this.height);
                const img = new Canvas["a" /* Canvas */](this.width, this.height);
                // img.colorType(6)
                bgra8888(img, decoded, decoded.length);
                return img;
            }
            case 2: {
                const uncompressedSize = this.width * this.height * 4;
                const decBuf = await inflate(data, uncompressedSize);
                const img = new Canvas["a" /* Canvas */](this.width, this.height);
                bgra8888(img, decBuf, decBuf.length);
                return img;
            }
            case 3: {
                const uncompressedSize = this.width * this.height * 4;
                const decBuf = await inflate(data, uncompressedSize);
                const decoded = WzPngProperty_WzPngProperty.getPixelDataDXT3(decBuf, this.width, this.height);
                const img = new Canvas["a" /* Canvas */](this.width, this.height);
                bgra8888(img, decoded, this.width * this.height);
                return img;
            }
            case 513: {
                const uncompressedSize = this.width * this.height * 2;
                const decBuf = await inflate(data, uncompressedSize);
                const img = new Canvas["a" /* Canvas */](this.width, this.height);
                rgb565(img, decBuf, decBuf.length);
                return img;
            }
            case 517: {
                const uncompressedSize = parseInt(this.width * this.height / 128);
                const decBuf = await inflate(data, uncompressedSize);
                const decoded = WzPngProperty_WzPngProperty.getPixelDataForm517(decBuf, this.width, this.height);
                const img = new Canvas["a" /* Canvas */](this.width, this.height);
                rgb565(img, decoded, decoded.length);
                return img;
            }
            case 1026: {
                const uncompressedSize = this.width * this.height * 4;
                const decBuf = await inflate(data, uncompressedSize);
                const decoded = WzPngProperty_WzPngProperty.getPixelDataDXT3(decBuf, this.width, this.height);
                const img = new Canvas["a" /* Canvas */](this.width, this.height);
                bgra8888(img, decoded, decoded.length);
                return img;
            }
            case 2050: {
                const uncompressedSize = this.width * this.height;
                const decBuf = await inflate(data, uncompressedSize);
                const decoded = WzPngProperty_WzPngProperty.getPixelDataDXT5(decBuf, this.width, this.height);
                const img = new Canvas["a" /* Canvas */](this.width, this.height);
                bgra8888(img, decoded, decoded.length);
                return img;
            }
            default: {
                ErrorLogger["b" /* ErrorLogger */].log(ErrorLogger["a" /* ErrorLevel */].MissingFeature, `Unknown PNG format ${this.format1} ${this.format2}`);
                return null;
            }
        }
    }
    static getPixelDataBgra4444(rawData, width, height) {
        let b, g;
        const uncompressedSize = width * height * 2;
        const argb = new Uint8Array(uncompressedSize * 2);
        for (let i = 0; i < uncompressedSize; i++) {
            b = rawData[i] & 0x0F;
            b |= (b << 4);
            argb[i * 2] = (b >>> 0) & 0xff;
            g = rawData[i] & 0xF0;
            g |= (g >> 4);
            argb[i * 2 + 1] = (g >>> 0) & 0xff;
        }
        return argb;
    }
    static getPixelDataForm517(rawData, width, height) {
        const pixel = new Uint8Array(width * height * 2);
        let lineIndex = 0;
        for (let j0 = 0, j1 = parseInt((height / 16)); j0 < j1; j0++) {
            let dstIndex = lineIndex;
            for (let i0 = 0, i1 = parseInt((width / 16)); i0 < i1; i0++) {
                const idx = (i0 + j0 * i1) * 2;
                const b0 = rawData[idx];
                const b1 = rawData[idx + 1];
                for (let k = 0; k < 16; k++) {
                    pixel[dstIndex++] = b0;
                    pixel[dstIndex++] = b1;
                }
            }
            for (let k = 1; k < 16; k++) {
                const src = new Uint8Array(pixel.buffer, pixel.byteOffset + lineIndex, width * 2);
                pixel.set(src, dstIndex);
                // pixel.copy(pixel, dstIndex, lineIndex, lineIndex + (width * 2))
                dstIndex += width * 2;
            }
            lineIndex += width * 32;
        }
        return pixel;
    }
    static getPixelDataDXT5(rawData, width, height) {
        const pixel = new Uint8Array(width * height * 4);
        const colorTable = [
            Color.fromRgb(0, 0, 0),
            Color.fromRgb(0, 0, 0),
            Color.fromRgb(0, 0, 0),
            Color.fromRgb(0, 0, 0)
        ];
        const colorIdxTable = Array(16).fill(0);
        const alphaTable = new Uint8Array(8);
        const alphaIdxTable = Array(16).fill(0);
        for (let y = 0; y < height; y += 4) {
            for (let x = 0; x < width; x += 4) {
                const off = x * 4 + y * width;
                WzPngProperty_WzPngProperty.expandAlphaTableDXT5(alphaTable, rawData[off + 0], rawData[off + 1]);
                WzPngProperty_WzPngProperty.expandAlphaIndexTableDXT5(alphaIdxTable, rawData, off + 2);
                const r = new esm_modern["b" /* BinaryReader */](rawData);
                r.seek(off + 8);
                const u0 = r.readUInt16LE(); // rawData.readUInt16LE(off + 8)
                const u1 = r.readUInt16LE(); // rawData.readUInt16LE(off + 10)
                r.dispose();
                WzPngProperty_WzPngProperty.expandColorTable(colorTable, u0, u1);
                WzPngProperty_WzPngProperty.expandColorIndexTable(colorIdxTable, rawData, off + 12);
                for (let j = 0; j < 4; j++) {
                    for (let i = 0; i < 4; i++) {
                        WzPngProperty_WzPngProperty.setPixel(pixel, x + i, y + j, width, colorTable[colorIdxTable[j * 4 + i]], alphaTable[alphaIdxTable[j * 4 + i]]);
                    }
                }
            }
        }
        return pixel;
    }
    static expandAlphaTableDXT5(alpha, a0, a1) {
        alpha[0] = a0;
        alpha[1] = a1;
        if (a0 > a1) {
            for (let i = 2; i < 8; i++) {
                alpha[i] = (parseInt(((8 - i) * a0 + (i - 1) * a1 + 3) / 7) >>> 0) & 0xff;
            }
        }
        else {
            for (let i = 2; i < 6; i++) {
                alpha[i] = (parseInt(((6 - i) * a0 + (i - 1) * a1 + 2) / 5) >>> 0) & 0xff;
            }
            alpha[6] = 0;
            alpha[7] = 255;
        }
    }
    static expandAlphaIndexTableDXT5(alphaIndex, rawData, offset) {
        for (let i = 0; i < 16; i += 8, offset += 3) {
            const flags = rawData[offset] |
                (rawData[offset + 1] << 8) |
                (rawData[offset + 2] << 16);
            for (let j = 0; j < 8; j++) {
                const mask = 0x07 << (3 * j);
                alphaIndex[i + j] = (flags & mask) >> (3 * j);
            }
        }
    }
    static getPixelDataDXT3(rawData, width, height) {
        const pixel = new Uint8Array(width * height * 4);
        const colorTable = [
            Color.fromRgb(0, 0, 0),
            Color.fromRgb(0, 0, 0),
            Color.fromRgb(0, 0, 0),
            Color.fromRgb(0, 0, 0)
        ];
        const colorIdxTable = Array(16).fill(0);
        const alphaTable = new Uint8Array(16);
        for (let y = 0; y < height; y += 4) {
            for (let x = 0; x < width; x += 4) {
                const off = x * 4 + y * width;
                WzPngProperty_WzPngProperty.expandAlphaTableDXT3(alphaTable, rawData, off);
                const r = new esm_modern["b" /* BinaryReader */](rawData);
                r.seek(off + 8);
                const u0 = r.readUInt16LE(); // rawData.readUInt16LE(off + 8)
                const u1 = r.readUInt16LE(); // rawData.readUInt16LE(off + 10)
                r.dispose();
                WzPngProperty_WzPngProperty.expandColorTable(colorTable, u0, u1);
                WzPngProperty_WzPngProperty.expandColorIndexTable(colorIdxTable, rawData, off + 12);
                for (let j = 0; j < 4; j++) {
                    for (let i = 0; i < 4; i++) {
                        WzPngProperty_WzPngProperty.setPixel(pixel, x + i, y + j, width, colorTable[colorIdxTable[j * 4 + i]], alphaTable[j * 4 + i]);
                    }
                }
            }
        }
        return pixel;
    }
    static expandAlphaTableDXT3(alpha, rawData, offset) {
        for (let i = 0; i < 16; i += 2, offset++) {
            alpha[i + 0] = (rawData[offset] & 0x0f) >>> 0;
            alpha[i + 1] = ((rawData[offset] & 0xf0) >> 4) >>> 0;
        }
        for (let i = 0; i < 16; i++) {
            alpha[i] = ((alpha[i] | (alpha[i] << 4)) >>> 0) & 0xff;
        }
    }
    static setPixel(pixelData, x, y, width, color, alpha) {
        const offset = (y * width + x) * 4;
        pixelData[offset + 0] = color.b;
        pixelData[offset + 1] = color.g;
        pixelData[offset + 2] = color.r;
        pixelData[offset + 3] = (alpha >>> 0) & 0xff;
    }
    static expandColorTable(color, c0, c1) {
        color[0] = rgb565ToColor(c0);
        color[1] = rgb565ToColor(c1);
        if (c0 > c1) {
            color[2] = Color.fromArgb(0xff, parseInt((color[0].r * 2 + color[1].r + 1) / 3), parseInt((color[0].g * 2 + color[1].g + 1) / 3), parseInt((color[0].b * 2 + color[1].b + 1) / 3));
            color[3] = Color.fromArgb(0xff, parseInt((color[0].r + color[1].r * 2 + 1) / 3), parseInt((color[0].g + color[1].g * 2 + 1) / 3), parseInt((color[0].b + color[1].b * 2 + 1) / 3));
        }
        else {
            color[2] = Color.fromArgb(0xff, parseInt((color[0].r + color[1].r) / 2), parseInt((color[0].g + color[1].g) / 2), parseInt((color[0].b + color[1].b) / 2));
            color[3] = Color.fromAc(0xff, Color.black);
        }
    }
    static expandColorIndexTable(colorIndex, rawData, offset) {
        for (let i = 0; i < 16; i += 4, offset++) {
            colorIndex[i + 0] = (rawData[offset] & 0x03);
            colorIndex[i + 1] = (rawData[offset] & 0x0c) >> 2;
            colorIndex[i + 2] = (rawData[offset] & 0x30) >> 4;
            colorIndex[i + 3] = (rawData[offset] & 0xc0) >> 6;
        }
    }
    getBitmap() {
        return this.getImage(false);
    }
    async saveToFile(file) {
        if (this.png != null) {
            await this.png.writeAsync(file);
            return true;
        }
        const png = await this.getImage(false);
        if (png != null) {
            await png.writeAsync(file);
            return true;
        }
        return false;
    }
}
function inflate(data, len) {
    if (typeof window !== 'undefined') {
        return inflateWasm(data, len);
    }
    return new Promise((resolve, reject) => {
        const inflateStream = node["i" /* zlib */].createInflate();
        const buf = node["b" /* _Buffer */].alloc(len);
        const chunks = [];
        inflateStream.once('error', reject);
        inflateStream.on('data', (chunk) => {
            chunks.push(chunk);
        });
        inflateStream.on('finish', () => {
            const chunk = node["b" /* _Buffer */].concat(chunks);
            chunk.copy(buf, 0, 0, Math.min(chunk.length, len));
            resolve(buf);
            inflateStream.close();
        });
        inflateStream.end(data);
    });
}
async function inflateWasm(data, len) {
    const mod = await Object(wz["init"])();
    const buf = mod.inflate(data, len);
    return buf;
}
function rgb565ToColor(val) {
    const rgb565maskR = 0xf800;
    const rgb565maskG = 0x07e0;
    const rgb565maskB = 0x001f;
    const r = (val & rgb565maskR) >> 11;
    const g = (val & rgb565maskG) >> 5;
    const b = (val & rgb565maskB);
    var c = Color.fromRgb((r << 3) | (r >> 2), (g << 2) | (g >> 4), (b << 3) | (b >> 2));
    return c;
}
function bgra8888(img, data, length) {
    let x = 0;
    let y = 0;
    const width = img.getWidth();
    for (let i = 0; i < length; i += 4) {
        img.setPixelColor(Canvas["a" /* Canvas */].rgbaToInt(data[i + 2], data[i + 1], data[i + 0], data[i + 3]), x, y);
        x++;
        if (x >= width) {
            x = 0;
            y++;
        }
    }
}
function rgb565(img, data, length) {
    // rrrrrggg gggbbbbb
    let x = 0;
    let y = 0;
    const width = img.getWidth();
    const r = new esm_modern["b" /* BinaryReader */](data);
    for (let i = 0; i < length; i += 2) {
        const ushort = r.readUInt16LE(); // data.readUInt16LE(i)
        const c = rgb565ToColor(ushort);
        img.setPixelColor(Canvas["a" /* Canvas */].rgbaToInt(c.r, c.g, c.b, c.a), x, y);
        x++;
        if (x >= width) {
            x = 0;
            y++;
        }
    }
    r.dispose();
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ErrorLevel", function() { return /* reexport */ ErrorLogger["a" /* ErrorLevel */]; });
__webpack_require__.d(__webpack_exports__, "ErrorLogger", function() { return /* reexport */ ErrorLogger["b" /* ErrorLogger */]; });
__webpack_require__.d(__webpack_exports__, "WzError", function() { return /* reexport */ ErrorLogger["c" /* WzError */]; });
__webpack_require__.d(__webpack_exports__, "WzMutableKey", function() { return /* reexport */ WzMutableKey["a" /* WzMutableKey */]; });
__webpack_require__.d(__webpack_exports__, "WzBinaryReader", function() { return /* reexport */ WzBinaryReader_WzBinaryReader; });
__webpack_require__.d(__webpack_exports__, "NotImplementedError", function() { return /* reexport */ NotImplementedError["a" /* NotImplementedError */]; });
__webpack_require__.d(__webpack_exports__, "Canvas", function() { return /* reexport */ Canvas["a" /* Canvas */]; });
__webpack_require__.d(__webpack_exports__, "WzLuaProperty", function() { return /* reexport */ WzLuaProperty["WzLuaProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzBinaryPropertyType", function() { return /* reexport */ WzBinaryPropertyType; });
__webpack_require__.d(__webpack_exports__, "WzBinaryProperty", function() { return /* reexport */ WzBinaryProperty["WzBinaryProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzCanvasProperty", function() { return /* reexport */ WzCanvasProperty["WzCanvasProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzConvexProperty", function() { return /* reexport */ WzConvexProperty["WzConvexProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzDoubleProperty", function() { return /* reexport */ WzDoubleProperty["WzDoubleProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzFloatProperty", function() { return /* reexport */ WzFloatProperty["WzFloatProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzIntProperty", function() { return /* reexport */ WzIntProperty["WzIntProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzLongProperty", function() { return /* reexport */ WzLongProperty["WzLongProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzNullProperty", function() { return /* reexport */ WzNullProperty["WzNullProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzPngProperty", function() { return /* reexport */ WzPngProperty["WzPngProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzShortProperty", function() { return /* reexport */ WzShortProperty["WzShortProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzStringProperty", function() { return /* reexport */ WzStringProperty["WzStringProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzSubProperty", function() { return /* reexport */ WzSubProperty["WzSubProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzUOLProperty", function() { return /* reexport */ WzUOLProperty["WzUOLProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzVectorProperty", function() { return /* reexport */ WzVectorProperty["WzVectorProperty"]; });
__webpack_require__.d(__webpack_exports__, "WzObjectType", function() { return /* reexport */ WzObjectType["a" /* WzObjectType */]; });
__webpack_require__.d(__webpack_exports__, "WzMapleVersion", function() { return /* reexport */ WzMapleVersion; });
__webpack_require__.d(__webpack_exports__, "WzPropertyType", function() { return /* reexport */ WzPropertyType["a" /* WzPropertyType */]; });
__webpack_require__.d(__webpack_exports__, "WzHeader", function() { return /* reexport */ WzHeader; });
__webpack_require__.d(__webpack_exports__, "WzObject", function() { return /* reexport */ WzObject["a" /* WzObject */]; });
__webpack_require__.d(__webpack_exports__, "WzImageProperty", function() { return /* reexport */ WzImageProperty["a" /* WzImageProperty */]; });
__webpack_require__.d(__webpack_exports__, "WzExtended", function() { return /* reexport */ WzExtended["a" /* WzExtended */]; });
__webpack_require__.d(__webpack_exports__, "WzImage", function() { return /* reexport */ WzImage["a" /* WzImage */]; });
__webpack_require__.d(__webpack_exports__, "WzDirectory", function() { return /* reexport */ WzDirectory["a" /* WzDirectory */]; });
__webpack_require__.d(__webpack_exports__, "WzFile", function() { return /* reexport */ WzFile_WzFile; });
__webpack_require__.d(__webpack_exports__, "walkWzFileAsync", function() { return /* reexport */ walkWzFileAsync; });
__webpack_require__.d(__webpack_exports__, "init", function() { return /* reexport */ init; });

// EXTERNAL MODULE: ./lib/esm-modern/util/ErrorLogger.js
var ErrorLogger = __webpack_require__(3);

// EXTERNAL MODULE: ./lib/esm-modern/util/WzMutableKey.js
var WzMutableKey = __webpack_require__(18);

// CONCATENATED MODULE: ./lib/esm-modern/WzHeader.js
/**
 * @public
 */
class WzHeader {
    constructor() {
        this.ident = '';
        this.fsize = BigInt(0);
        this.fstart = 0;
        this.copyright = '';
    }
    recalculateFileStart() {
        this.fstart = this.ident.length + 8 + 4 + this.copyright.length + 1;
    }
    static getDefault() {
        const header = new WzHeader();
        header.ident = 'PKG1';
        header.copyright = 'Package file v1.0 Copyright 2002 Wizet, ZMS';
        header.fstart = 60;
        header.fsize = BigInt(0);
        return header;
    }
}

// EXTERNAL MODULE: ./node_modules/@tybys/binreader/lib/esm-modern/index.js + 5 modules
var esm_modern = __webpack_require__(9);

// EXTERNAL MODULE: ./lib/esm-modern/util/MapleCryptoConstants.js
var MapleCryptoConstants = __webpack_require__(12);

// EXTERNAL MODULE: ./lib/esm-modern/util/WzKeyGenerator.js
var WzKeyGenerator = __webpack_require__(15);

// CONCATENATED MODULE: ./lib/esm-modern/WzMapleVersion.js
/**
 * @public
 */
var WzMapleVersion;
(function (WzMapleVersion) {
    /**
     * Global MapleStory (old)
     */
    WzMapleVersion[WzMapleVersion["GMS"] = 0] = "GMS";
    /**
     * 新楓之谷 / 冒险岛Online / 메이플스토리 / MapleSEA / EMS (old)
     */
    WzMapleVersion[WzMapleVersion["EMS"] = 1] = "EMS";
    /**
     * BMS / GMS / MapleSEA / メイプルストーリー / 메이플스토리
     */
    WzMapleVersion[WzMapleVersion["BMS"] = 2] = "BMS";
    WzMapleVersion[WzMapleVersion["CLASSIC"] = 3] = "CLASSIC";
    /**
     * 生成
     */
    WzMapleVersion[WzMapleVersion["GENERATE"] = 4] = "GENERATE";
    WzMapleVersion[WzMapleVersion["GETFROMZLZ"] = 5] = "GETFROMZLZ";
    /**
     * 自定义编码
     */
    WzMapleVersion[WzMapleVersion["CUSTOM"] = 6] = "CUSTOM";
    WzMapleVersion[WzMapleVersion["UNKNOWN"] = 99] = "UNKNOWN";
})(WzMapleVersion || (WzMapleVersion = {}));

// CONCATENATED MODULE: ./lib/esm-modern/util/WzTool.js


class WzTool_WzTool {
    static rotateLeft(x, n) {
        return ((((x) << (n)) >>> 0) | ((x) >>> (32 - (n)))) >>> 0;
    }
    static getIvByMapleVersion(ver) {
        switch (ver) {
            case WzMapleVersion.EMS:
                return MapleCryptoConstants["a" /* MapleCryptoConstants */].WZ_MSEAIV;
            case WzMapleVersion.GMS:
                return MapleCryptoConstants["a" /* MapleCryptoConstants */].WZ_GMSIV;
            case WzMapleVersion.CUSTOM: {
                return new Uint8Array(4);
            }
            case WzMapleVersion.GENERATE:
                return new Uint8Array(4);
            case WzMapleVersion.BMS:
            case WzMapleVersion.CLASSIC:
            default:
                return new Uint8Array(4);
        }
    }
}

// EXTERNAL MODULE: ./lib/esm-modern/util/node.js
var node = __webpack_require__(2);

// CONCATENATED MODULE: ./lib/esm-modern/util/WzBinaryReader.js






/**
 * @public
 */
class WzBinaryReader_WzBinaryReader extends esm_modern["a" /* AsyncBinaryReader */] {
    constructor(filePath, wzIv) {
        super(filePath);
        this.wzKey = WzKeyGenerator["a" /* WzKeyGenerator */].generateWzKey(wzIv);
        this.hash = 0;
        this.header = WzHeader.getDefault();
    }
    async readWzStringAtOffset(offset, readByte = false) {
        const currentOffset = this.pos;
        this.pos = offset;
        if (readByte) {
            await this.read();
        }
        const returnString = await this.readWzString();
        this.pos = currentOffset;
        return returnString;
    }
    async readWzString() {
        const smallLength = await this.readInt8();
        if (smallLength === 0) {
            return '';
        }
        let length;
        const u8arr = [];
        if (smallLength > 0) {
            let mask = 0xAAAA;
            if (smallLength === 127) {
                length = await this.readInt32LE();
            }
            else {
                length = smallLength;
            }
            if (length <= 0) {
                return '';
            }
            for (let i = 0; i < length; i++) {
                let encryptedChar = await this.readUInt16LE();
                encryptedChar = (encryptedChar ^ mask) >>> 0;
                encryptedChar = (encryptedChar ^ (((this.wzKey.at(i * 2 + 1) << 8) >>> 0) + this.wzKey.at(i * 2))) >>> 0;
                u8arr.push(encryptedChar & 0xff);
                u8arr.push(encryptedChar >>> 16);
                mask++;
            }
            return node["h" /* utf16leTextDecoder */].decode(new Uint8Array(u8arr));
        }
        else { // ASCII
            let mask = 0xAA;
            if (smallLength === -128) {
                length = await this.readInt32LE();
            }
            else {
                length = -smallLength;
            }
            if (length <= 0) {
                return '';
            }
            for (let i = 0; i < length; i++) {
                let encryptedChar = await this.readUInt8();
                encryptedChar = (encryptedChar ^ mask) >>> 0;
                encryptedChar = (encryptedChar ^ this.wzKey.at(i)) >>> 0;
                u8arr.push(encryptedChar);
                mask++;
            }
            return node["c" /* asciiTextDecoder */].decode(new Uint8Array(u8arr));
        }
    }
    async readStringBlock(offset) {
        const type = await this.readUInt8();
        switch (type) {
            case 0:
            case 0x73:
                return await this.readWzString();
            case 1:
            case 0x1B:
                return await this.readWzStringAtOffset(offset + await this.readInt32LE());
            default:
                return '';
        }
    }
    readNullTerminatedString() {
        return super.readString();
    }
    async readWzInt() {
        const sb = await this.readInt8();
        if (sb === -128) {
            return await this.readInt32LE();
        }
        return sb;
    }
    async readWzLong() {
        const sb = await this.readInt8();
        if (sb === -128) {
            return await this.readBigInt64LE();
        }
        return BigInt(sb);
    }
    async readWzOffset() {
        let offset = this.pos;
        offset = ((offset - this.header.fstart) ^ 0xFFFFFFFF) >>> 0;
        offset = ((offset * this.hash) & 0xFFFFFFFF) >>> 0;
        offset -= MapleCryptoConstants["a" /* MapleCryptoConstants */].WZ_OffsetConstant;
        offset = WzTool_WzTool.rotateLeft(offset, offset & 0x1F) & 0xFFFFFFFF;
        const encryptedOffset = await this.readUInt32LE();
        offset = ((offset ^ encryptedOffset) & 0xFFFFFFFF) >>> 0;
        offset = ((offset + this.header.fstart * 2) & 0xFFFFFFFF) >>> 0;
        return offset;
    }
    decryptString(stringToDecrypt) {
        let outputString = '';
        for (let i = 0; i < stringToDecrypt.length; i++) {
            outputString += String.fromCharCode(((stringToDecrypt.charCodeAt(i) ^ (((this.wzKey.at(i * 2 + 1) << 8) >>> 0) + this.wzKey.at(i * 2))) >>> 0) & 0xFFFF);
        }
        return outputString;
    }
    decryptNonUnicodeString(stringToDecrypt) {
        let outputString = '';
        for (let i = 0; i < stringToDecrypt.length; i++) {
            outputString += String.fromCharCode(((stringToDecrypt.charCodeAt(i) ^ this.wzKey.at(i)) >>> 0) & 0xFFFF);
        }
        return outputString;
    }
}

// EXTERNAL MODULE: ./lib/esm-modern/util/NotImplementedError.js
var NotImplementedError = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/esm-modern/util/Canvas.js
var Canvas = __webpack_require__(8);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzLuaProperty.js
var WzLuaProperty = __webpack_require__(19);

// CONCATENATED MODULE: ./lib/esm-modern/properties/WzBinaryPropertyType.js
/**
 * @public
 */
var WzBinaryPropertyType;
(function (WzBinaryPropertyType) {
    WzBinaryPropertyType[WzBinaryPropertyType["Raw"] = 0] = "Raw";
    WzBinaryPropertyType[WzBinaryPropertyType["MP3"] = 1] = "MP3";
    WzBinaryPropertyType[WzBinaryPropertyType["WAV"] = 2] = "WAV";
})(WzBinaryPropertyType || (WzBinaryPropertyType = {}));

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzBinaryProperty.js
var WzBinaryProperty = __webpack_require__(30);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzCanvasProperty.js
var WzCanvasProperty = __webpack_require__(27);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzConvexProperty.js
var WzConvexProperty = __webpack_require__(29);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzDoubleProperty.js
var WzDoubleProperty = __webpack_require__(24);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzFloatProperty.js
var WzFloatProperty = __webpack_require__(23);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzIntProperty.js
var WzIntProperty = __webpack_require__(13);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzLongProperty.js
var WzLongProperty = __webpack_require__(22);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzNullProperty.js
var WzNullProperty = __webpack_require__(20);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzPngProperty.js + 1 modules
var WzPngProperty = __webpack_require__(31);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzShortProperty.js
var WzShortProperty = __webpack_require__(21);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzStringProperty.js
var WzStringProperty = __webpack_require__(25);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzSubProperty.js
var WzSubProperty = __webpack_require__(26);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzUOLProperty.js
var WzUOLProperty = __webpack_require__(16);

// EXTERNAL MODULE: ./lib/esm-modern/properties/WzVectorProperty.js
var WzVectorProperty = __webpack_require__(28);

// EXTERNAL MODULE: ./lib/esm-modern/WzObjectType.js
var WzObjectType = __webpack_require__(7);

// EXTERNAL MODULE: ./lib/esm-modern/WzPropertyType.js
var WzPropertyType = __webpack_require__(0);

// EXTERNAL MODULE: ./lib/esm-modern/WzObject.js
var WzObject = __webpack_require__(10);

// EXTERNAL MODULE: ./lib/esm-modern/WzImageProperty.js
var WzImageProperty = __webpack_require__(1);

// EXTERNAL MODULE: ./lib/esm-modern/WzExtended.js
var WzExtended = __webpack_require__(5);

// EXTERNAL MODULE: ./lib/esm-modern/WzImage.js
var WzImage = __webpack_require__(6);

// EXTERNAL MODULE: ./lib/esm-modern/WzDirectory.js
var WzDirectory = __webpack_require__(11);

// CONCATENATED MODULE: ./lib/esm-modern/WzFile.js












/**
 * @public
 */
class WzFile_WzFile extends WzObject["a" /* WzObject */] {
    constructor(filepath, version, gameVersion = -1) {
        super();
        this.name = '';
        this.parent = null;
        this.header = WzHeader.getDefault();
        this._version = 0;
        this._versionHash = 0;
        this.mapleStoryPatchVersion = 0;
        this._wzDir = null;
        this.filepath = filepath;
        this.name = typeof filepath === 'string' ? filepath : filepath.name;
        this.mapleStoryPatchVersion = gameVersion;
        this.maplepLocalVersion = version;
        if (version === WzMapleVersion.GETFROMZLZ) {
            if (typeof window !== 'undefined')
                throw new Error('Not supported in browser');
            const r = new esm_modern["b" /* BinaryReader */](node["g" /* path */].join(node["g" /* path */].dirname(filepath), 'ZLZ.dll'));
            this._wzIv = WzKeyGenerator["a" /* WzKeyGenerator */].getIvFromZlz(r);
            r.close();
        }
        else {
            this._wzIv = WzTool_WzTool.getIvByMapleVersion(version);
        }
    }
    static createParseResult() {
        return { message: '' };
    }
    get wzDirectory() {
        return this._wzDir;
    }
    dispose() {
        if (this._disposed)
            return;
        if (this._wzDir != null) {
            this._wzDir.reader.dispose();
            this._wzDir.dispose();
            this._wzDir = null;
        }
        this.header = WzHeader.getDefault();
        this._disposed = true;
    }
    get objectType() {
        return WzObjectType["a" /* WzObjectType */].File;
    }
    get wzFileParent() {
        return this;
    }
    at(name) {
        return this._wzDir != null ? this._wzDir.at(name) : null;
    }
    get fullPath() {
        return this.wzDirectory != null ? this.wzDirectory.name : '';
    }
    async parseWzFile(out, lazyParse = false, wzIv = null) {
        if (this._wzDir != null) {
            if (out != null)
                out.message = 'Already parsed wz file';
            return true;
        }
        if (wzIv != null) {
            this._wzIv = wzIv;
        }
        return await this._parseMainWzDirectory(out, lazyParse);
    }
    /* public lazyParseWzFile (out: IWzParseResult): boolean {
      return this.parseMainWzDirectory(out, true)
    } */
    async _parseMainWzDirectory(out, lazyParse = false) {
        if (this.filepath === '') {
            const msg = 'Invalid path: ""';
            ErrorLogger["b" /* ErrorLogger */].log(ErrorLogger["a" /* ErrorLevel */].Critical, msg);
            if (out != null)
                out.message = msg;
            return false;
        }
        const reader = new WzBinaryReader_WzBinaryReader(this.filepath, this._wzIv);
        this.header = new WzHeader();
        this.header.ident = await reader.readString('ascii', 4);
        this.header.fsize = await reader.readBigUInt64LE();
        this.header.fstart = await reader.readUInt32LE();
        this.header.copyright = await reader.readNullTerminatedString();
        await reader.read(this.header.fstart - reader.pos);
        reader.header = this.header;
        this._version = await reader.readInt16LE();
        if (this.mapleStoryPatchVersion === -1) {
            const MAX_PATCH_VERSION = 10000;
            for (let j = 0; j < MAX_PATCH_VERSION; j++) {
                this.mapleStoryPatchVersion = j;
                this._versionHash = this._checkAndGetVersionHash(this._version, this.mapleStoryPatchVersion);
                if (this._versionHash === 0) {
                    continue;
                }
                reader.hash = this._versionHash;
                const position = reader.pos; // save position to rollback to, if should parsing fail from here
                let testDirectory;
                try {
                    testDirectory = new WzDirectory["a" /* WzDirectory */](reader, this.name, this._versionHash, this._wzIv, this);
                    testDirectory.offset = reader.pos;
                    await testDirectory.parseDirectory(false);
                }
                catch (_) {
                    reader.pos = position;
                    continue;
                }
                try {
                    const childImages = testDirectory.getChildImages();
                    if (childImages.size === 0) {
                        reader.pos = position;
                        continue;
                    }
                    const testImage = childImages.values().next().value;
                    try {
                        reader.pos = testImage.offset;
                        const checkByte = await reader.readUInt8();
                        reader.pos = position;
                        switch (checkByte) {
                            case 0x73:
                            case 0x1b: {
                                const directory = new WzDirectory["a" /* WzDirectory */](reader, this.name, this._versionHash, this._wzIv, this);
                                directory.offset = reader.pos;
                                await directory.parseDirectory(lazyParse);
                                this._wzDir = directory;
                                if (out != null)
                                    out.message = 'Success';
                                return true;
                            }
                            default: {
                                ErrorLogger["b" /* ErrorLogger */].log(ErrorLogger["a" /* ErrorLevel */].MissingFeature, `New Wz image header found. checkByte = ${checkByte}`);
                                break;
                            }
                        }
                        reader.pos = position; // reset
                    }
                    catch (_) {
                        reader.pos = position; // reset
                    }
                }
                catch (_) {
                    testDirectory.dispose();
                }
                testDirectory.dispose();
            }
        }
        else {
            this._versionHash = this._checkAndGetVersionHash(this._version, this.mapleStoryPatchVersion);
            reader.hash = this._versionHash;
            const directory = new WzDirectory["a" /* WzDirectory */](reader, this.name, this._versionHash, this._wzIv, this);
            directory.offset = reader.pos;
            await directory.parseDirectory(lazyParse);
            this._wzDir = directory;
        }
        if (out != null)
            out.message = 'Success';
        return true;
    }
    _checkAndGetVersionHash(wzVersionHeader, maplestoryPatchVersion) {
        const VersionNumber = maplestoryPatchVersion;
        let VersionHash = 0;
        const VersionNumberStr = VersionNumber.toString();
        const l = VersionNumberStr.length;
        for (let i = 0; i < l; i++) {
            VersionHash = (32 * VersionHash) + VersionNumberStr.charCodeAt(i) + 1;
        }
        const a = (VersionHash >> 24) & 0xFF;
        const b = (VersionHash >> 16) & 0xFF;
        const c = (VersionHash >> 8) & 0xFF;
        const d = VersionHash & 0xFF;
        const DecryptedVersionNumber = (0xff ^ a ^ b ^ c ^ d);
        if (wzVersionHeader === DecryptedVersionNumber)
            return (VersionHash >>> 0);
        return 0;
    }
    getObjectFromPath(path, checkFirstDirectoryName = true) {
        if (this._wzDir == null)
            return null;
        const seperatedPath = path.split('/');
        if (checkFirstDirectoryName) {
            if (seperatedPath[0].toLowerCase() !== this._wzDir.name.toLowerCase() && seperatedPath[0].toLowerCase() !== this._wzDir.name.substring(0, this._wzDir.name.length - 3).toLowerCase())
                return null;
        }
        if (seperatedPath.length === 1)
            return this.wzDirectory;
        let curObj = this.wzDirectory;
        for (let i = 1; i < seperatedPath.length; i++) {
            if (curObj == null) {
                return null;
            }
            switch (curObj.objectType) {
                case WzObjectType["a" /* WzObjectType */].Directory:
                    curObj = curObj.at(seperatedPath[i]);
                    continue;
                case WzObjectType["a" /* WzObjectType */].Image:
                    curObj = curObj.at(seperatedPath[i]);
                    continue;
                case WzObjectType["a" /* WzObjectType */].Property:
                    switch (curObj.propertyType) {
                        case WzPropertyType["a" /* WzPropertyType */].Canvas:
                            curObj = curObj.at(seperatedPath[i]);
                            continue;
                        case WzPropertyType["a" /* WzPropertyType */].Convex:
                            curObj = curObj.at(seperatedPath[i]);
                            continue;
                        case WzPropertyType["a" /* WzPropertyType */].SubProperty:
                            curObj = curObj.at(seperatedPath[i]);
                            continue;
                        case WzPropertyType["a" /* WzPropertyType */].Vector:
                            if (seperatedPath[i] === 'x')
                                return curObj.x;
                            else if (seperatedPath[i] === 'y')
                                return curObj.y;
                            else
                                return null;
                        default: // Wut?
                            return null;
                    }
            }
        }
        if (curObj == null) {
            return null;
        }
        return curObj;
    }
}

// EXTERNAL MODULE: ./lib/esm-modern/util/wz.js
var util_wz = __webpack_require__(14);

// CONCATENATED MODULE: ./lib/esm-modern/init.js

/**
 * @public
 */
async function init() {
    if (typeof window !== 'undefined') {
        await Object(util_wz["init"])();
    }
    else {
        await Promise.resolve();
    }
}

// CONCATENATED MODULE: ./lib/esm-modern/walk.js
/* eslint-disable @typescript-eslint/strict-boolean-expressions */




/**
 * @public
 */
async function walkWzFileAsync(filepath, mapleVersion, callback) {
    await init();
    const wz = new WzFile_WzFile(filepath, mapleVersion);
    const result = WzFile_WzFile.createParseResult();
    const r = await wz.parseWzFile(result, true);
    if (!r) {
        throw new Error(result.message);
    }
    let stop = false;
    await walkDirectory(wz.wzDirectory, callback);
    wz.dispose();
    async function walkPropertyContainer(container, callback) {
        if (container instanceof WzImage["a" /* WzImage */]) {
            await container.parseImage();
        }
        stop = !!(await Promise.resolve(callback(container)));
        if (!stop && !(container instanceof WzUOLProperty["WzUOLProperty"]) && container.wzProperties != null) {
            for (const prop of container.wzProperties) {
                await walkPropertyContainer(prop, callback);
                if (stop)
                    break;
            }
        }
        container.dispose();
    }
    async function walkDirectory(dir, callback) {
        await dir.parseDirectory(true);
        stop = !!(await Promise.resolve(callback(dir)));
        if (stop) {
            dir.dispose();
            return;
        }
        for (const subdir of dir.wzDirectories) {
            await walkDirectory(subdir, callback);
            if (stop) {
                dir.dispose();
                return;
            }
        }
        for (const img of dir.wzImages) {
            await walkPropertyContainer(img, callback);
            if (stop) {
                dir.dispose();
                return;
            }
        }
        dir.dispose();
    }
}

// CONCATENATED MODULE: ./lib/esm-modern/index.js
/**
 * MapleStory WZ reader.
 *
 * @packageDocumentation
 */



































/***/ })
/******/ ]);
});