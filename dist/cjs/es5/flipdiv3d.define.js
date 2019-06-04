"use strict";
// flipdiv3d: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var flipdiv3d_core_js_1 = require("./flipdiv3d.core.js");
var flipdiv3d_components_js_1 = require("./flipdiv3d.components.js");
function defineCustomElements(win, opts) {
    return flipdiv3d_core_js_1.defineCustomElement(win, flipdiv3d_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
