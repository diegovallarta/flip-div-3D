import { a as patchEsm, b as bootstrapLazy } from './chunk-7a130699.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["card-item_2", [[4, "card-item", { "classNames": [1, "class-names"] }], [1, "flip-div", { "height": [1], "width": [1] }, [[0, "click", "clickHandle"]]]]]], options);
    });
};
export { defineCustomElements };
