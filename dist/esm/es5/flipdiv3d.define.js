
// flipdiv3d: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './flipdiv3d.core.js';
import { COMPONENTS } from './flipdiv3d.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
