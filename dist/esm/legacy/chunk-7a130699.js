var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var NAMESPACE = 'flipdiv3d';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: function (h) { return h(); },
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsListenerOptions = /*@__PURE__*/ (function () {
    var supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get: function () { supportsListenerOptions = true; }
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
var supportsConstructibleStylesheets = /*@__PURE__*/ (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var moduleCache = /*@__PURE__*/ new Map();
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    var bundleId = (cmpMeta.$lazyBundleIds$);
    var module = moduleCache.get(bundleId);
    if (module) {
        return module[exportName];
    }
    return import(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    "./" + bundleId + ".entry.js" + '').then(function (importedModule) {
        {
            moduleCache.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
var styles = new Map();
var cssVarShim = /*@__PURE__*/ win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue, write) { return function (cb) {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var nextTick = /*@__PURE__*/ function (cb) { return Promise.resolve().then(cb); };
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import('./css-shim-3ea8955c-3ea8955c.js');
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, import('./dom-860d8016-860d8016.js')];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText, allowCS) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
    var scopeId = getScopeId(cmpMeta.$tagName$);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var slotName;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            slotName = vnodeData.name;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
var Host = {};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        if (newValue == null || newValue === false) {
            {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    var oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            if (!newVNode.$children$) {
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                newVNode.$flags$ |= 1 /* isSlotReference */;
            }
            else {
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                newVNode.$flags$ |= 2 /* isSlotFallback */;
            }
        }
    }
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        newVNode.$elm$ = doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement((newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    {
        newVNode.$elm$['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            newVNode.$elm$['s-sr'] = true;
            // remember the content reference comment
            newVNode.$elm$['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            newVNode.$elm$['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return newVNode.$elm$;
};
var putBackInOriginalLocation = function (parentElm, recursive) {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    var oldSlotChildNodes = parentElm.childNodes;
    for (var i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        var childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before));
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var referenceNode = function (node) {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
var parentReferenceNode = function (node) { return (node['s-ol'] ? node['s-ol'] : node).parentNode; };
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    var defaultHolder;
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            if (newVNode.$tag$ === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = newVNode.$text$;
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
};
var updateFallbackSlotVisibility = function (elm, childNode, childNodes, i, ilen, j, slotNameAttr, nodeType) {
    childNodes = elm.childNodes;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
var relocateNodes = [];
var relocateSlotContent = function (elm) {
    // tslint:disable-next-line: prefer-const
    var childNodes = elm.childNodes;
    var ilen = childNodes.length;
    var i = 0;
    var j = 0;
    var nodeType = 0;
    var childNode;
    var node;
    var hostContentNodes;
    var slotNameAttr;
    for (ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    nodeType = node.nodeType;
                    if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        if (!relocateNodes.some(function (r) { return r.nodeToRelocate === node; })) {
                            // made some changes to slots
                            // let's make sure we also double check
                            // fallbacks are correctly hidden or shown
                            checkSlotFallbackVisibility = true;
                            node['s-sn'] = slotNameAttr;
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                slotRefNode: childNode,
                                nodeToRelocate: node
                            });
                        }
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    hostTagName = toLowerCase(hostElm.tagName);
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    var rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotRelocate = checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                if (!relocateNode.nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    var orgLocationNode = doc.createTextNode('');
                    orgLocationNode['s-nr'] = relocateNode.nodeToRelocate;
                    relocateNode.nodeToRelocate.parentNode.insertBefore((relocateNode.nodeToRelocate['s-ol'] = orgLocationNode), relocateNode.nodeToRelocate);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                // by default we're just going to insert it directly
                // after the slot reference node
                var parentNodeRef = relocateNode.slotRefNode.parentNode;
                var insertBeforeNode = relocateNode.slotRefNode.nextSibling;
                var orgLocationNode = relocateNode.nodeToRelocate['s-ol'];
                while (orgLocationNode = orgLocationNode.previousSibling) {
                    var refNode = orgLocationNode['s-nr'];
                    if (refNode &&
                        refNode['s-sn'] === relocateNode.nodeToRelocate['s-sn'] &&
                        parentNodeRef === refNode.parentNode) {
                        refNode = refNode.nextSibling;
                        if (!refNode || !refNode['s-nr']) {
                            insertBeforeNode = refNode;
                            break;
                        }
                    }
                }
                if ((!insertBeforeNode && parentNodeRef !== relocateNode.nodeToRelocate.parentNode) ||
                    (relocateNode.nodeToRelocate.nextSibling !== insertBeforeNode)) {
                    // we've checked that it's worth while to relocate
                    // since that the node to relocate
                    // has a different next sibling or parent relocated
                    if (relocateNode.nodeToRelocate !== insertBeforeNode) {
                        // add it back to the dom but in its new home
                        parentNodeRef.insertBefore(relocateNode.nodeToRelocate, insertBeforeNode);
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};
var safeCall = function (instance, method, arg) {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
var then = function (promise, thenFn) {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    var instance = hostRef.$lazyInstance$;
    var promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* isListenReady */;
        }
        if (hostRef.$queuedListeners$) {
            hostRef.$queuedListeners$.forEach(function (_a) {
                var methodName = _a[0], event = _a[1];
                return safeCall(instance, methodName, event);
            });
            hostRef.$queuedListeners$ = null;
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    var update = function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); };
    return then(promise, function () { return writeTask(update); });
};
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 64 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var forceUpdate = function (elm, cmpMeta) {
    {
        var hostRef = getHostRef(elm);
        if (hostRef.$flags$ & 2 /* hasRendered */) {
            scheduleUpdate(elm, hostRef, cmpMeta, false);
        }
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$();
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
    }
};
var addEventListeners = function (elm, hostRef, listeners) {
    hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || [];
    var removeFns = listeners.map(function (_a) {
        var flags = _a[0], name = _a[1], method = _a[2];
        var target = (elm);
        var handler = hostListenerProxy(hostRef, method);
        var opts = hostListenerOpts(flags);
        plt.ael(target, name, handler, opts);
        return function () { return plt.rel(target, name, handler, opts); };
    });
    return function () { return removeFns.forEach(function (fn) { return fn(); }); };
};
var hostListenerProxy = function (hostRef, methodName) {
    return function (ev) {
        {
            if (hostRef.$flags$ & 256 /* isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                hostRef.$queuedListeners$.push([methodName, ev]);
            }
        }
    };
};
var hostListenerOpts = function (flags) { return supportsListenerOptions ?
    {
        'passive': (flags & 1 /* Passive */) !== 0,
        'capture': (flags & 2 /* Capture */) !== 0,
    }
    : (flags & 2 /* Capture */) !== 0; };
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if (((memberFlags & 31 /* Prop */) ||
                ((flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var _this = this;
                plt.jmp(function () {
                    var propName = attrNameToPropName_1.get(attrName);
                    _this[propName] = newValue === null && typeof _this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent, schedule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 5];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = loadModule(cmpMeta);
                if (!Cstr.then) return [3 /*break*/, 2];
                return [4 /*yield*/, Cstr];
            case 1:
                // Await creates a micro-task avoid if possible
                Cstr = _a.sent();
                _a.label = 2;
            case 2:
                if (!Cstr.isProxied) {
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 5];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 4]; /* needsShadowDomShim */
                return [4 /*yield*/, import('./shadow-css-984bac74-549b16dd.js').then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 3:
                style_1 = _a.sent();
                _a.label = 4;
            case 4:
                registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                Cstr.isStyleRegistered = true;
                _a.label = 5;
            case 5:
                ancestorComponent = hostRef.$ancestorComponent$;
                schedule = function () { return scheduleUpdate(elm, hostRef, cmpMeta, true); };
                if (ancestorComponent && ancestorComponent['s-lr'] === false && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    // this will get fired off when the ancestor component
                    // finally gets around to rendering its lazy self
                    // fire off the initial update
                    ancestorComponent['s-rc'].push(schedule);
                }
                else {
                    schedule();
                }
                return [2 /*return*/];
        }
    });
}); };
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (cmpMeta.$listeners$) {
            // initialize our event listeners on the host element
            // we do this now so that we can listening to events that may
            // have fired even before the instance is ready
            hostRef.$rmListeners$ = addEventListeners(elm, hostRef, cmpMeta.$listeners$);
        }
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            var hostId = void 0;
            if (!hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((cmpMeta.$flags$ & 4 /* hasSlotRelocation */) ||
                    (cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent['s-init'] && ancestorComponent['s-lr'] === false)) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
    }
};
var setContentReference = function (elm, contentRefElm) {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    var crName;
    {
        crName = '';
    }
    contentRefElm = elm['s-cr'] = doc.createComment(crName);
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return connectedCallback(_this, cmpMeta); });
            };
            class_1.prototype.disconnectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return disconnectedCallback(_this); });
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                forceUpdate(this, cmpMeta);
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var createEvent = function (ref, name, flags) {
    var elm = getElement(ref);
    return {
        emit: function (detail) { return elm.dispatchEvent(new (CustomEvent)(name, {
            bubbles: !!(flags & 4 /* Bubbles */),
            composed: !!(flags & 2 /* Composed */),
            cancelable: !!(flags & 1 /* Cancellable */),
            detail: detail
        })); }
    };
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };
export { patchEsm as a, bootstrapLazy as b, createEvent as c, getElement as g, h, patchBrowser as p, registerInstance as r };
