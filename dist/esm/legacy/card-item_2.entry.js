import { r as registerInstance, h, g as getElement, c as createEvent } from './chunk-7a130699.js';
var CardItem = /** @class */ (function () {
    function CardItem(hostRef) {
        registerInstance(this, hostRef);
    }
    CardItem.prototype.render = function () {
        return (h("div", { class: this.classNames }, h("slot", null)));
    };
    Object.defineProperty(CardItem.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardItem, "style", {
        get: function () { return ".front-card{z-index:2;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}.back-card,.front-card{top:0;left:0;width:-webkit-fill-available;height:-webkit-fill-available;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute}.back-card{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}"; },
        enumerable: true,
        configurable: true
    });
    return CardItem;
}());
var FlipCard = /** @class */ (function () {
    function FlipCard(hostRef) {
        registerInstance(this, hostRef);
        this.height = '320px';
        this.width = '320px';
        this.clicked = createEvent(this, "clicked", 7);
    }
    FlipCard.prototype.componentWillLoad = function () {
        var _this = this;
        setTimeout(function () {
            var list = _this.el.querySelectorAll('card-item > div');
            if (list.length >= 2) {
                list[0].classList.add('front-card');
                list[1].classList.add('back-card');
                //Remove unnecessary cards
                if (list.length > 2)
                    Array.from(list).forEach(function (item, key) {
                        if (key > 1) {
                            item.remove();
                        }
                    });
            }
        }, 0);
    };
    FlipCard.prototype.clickHandle = function (e) {
        this.clicked.emit(e);
    };
    FlipCard.prototype.render = function () {
        return (h("div", { class: "flip-div-container", style: { height: this.height, width: this.width } }, h("div", { class: "flip-div-perspective" }, h("slot", null))));
    };
    Object.defineProperty(FlipCard.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlipCard, "style", {
        get: function () { return ".flip-div-container{-webkit-perspective:1000px;perspective:1000px}.flip-div-container:hover .flip-div-perspective{will-change:transform;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.flip-div-container .flip-div-perspective{-webkit-transition:.5s;transition:.5s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}"; },
        enumerable: true,
        configurable: true
    });
    return FlipCard;
}());
export { CardItem as card_item, FlipCard as flip_div };
