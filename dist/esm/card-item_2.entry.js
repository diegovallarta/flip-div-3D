import { r as registerInstance, h, g as getElement, c as createEvent } from './chunk-7a130699.js';

class CardItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: this.classNames }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ".front-card{z-index:2;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}.back-card,.front-card{top:0;left:0;width:-webkit-fill-available;height:-webkit-fill-available;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute}.back-card{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}"; }
}

class FlipCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.height = '320px';
        this.width = '320px';
        this.clicked = createEvent(this, "clicked", 7);
    }
    componentWillLoad() {
        setTimeout(() => {
            const list = this.el.querySelectorAll('card-item > div');
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
    }
    clickHandle(e) {
        this.clicked.emit(e);
    }
    render() {
        return (h("div", { class: "flip-div-container", style: { height: this.height, width: this.width } }, h("div", { class: "flip-div-perspective" }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ".flip-div-container{-webkit-perspective:1000px;perspective:1000px}.flip-div-container:hover .flip-div-perspective{will-change:transform;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.flip-div-container .flip-div-perspective{-webkit-transition:.5s;transition:.5s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}"; }
}

export { CardItem as card_item, FlipCard as flip_div };
