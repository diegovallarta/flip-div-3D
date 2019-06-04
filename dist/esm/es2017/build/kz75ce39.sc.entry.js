import { h } from '../flipdiv3d.core.js';

class CardItem {
    render() {
        return (h("div", { class: this.classNames },
            h("slot", null)));
    }
    static get is() { return "card-item"; }
    static get properties() { return {
        "classNames": {
            "type": String,
            "attr": "class-names"
        },
        "el": {
            "elementRef": true
        }
    }; }
    static get style() { return ".front-card{z-index:2;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}.back-card,.front-card{top:0;left:0;width:-webkit-fill-available;height:-webkit-fill-available;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute}.back-card{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}"; }
}

class FlipCard {
    constructor() {
        this.height = "320px";
        this.width = "320px";
    }
    componentWillLoad() {
        setTimeout(() => {
            const list = this.el.querySelectorAll('card-item > div');
            if (list.length >= 2) {
                list[0].classList.add("front-card");
                list[1].classList.add("back-card");
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
        return (h("div", { class: "flip-div-container", style: { height: this.height, width: this.width } },
            h("div", { class: "flip-div-perspective" },
                h("slot", null))));
    }
    static get is() { return "flip-div"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "height": {
            "type": String,
            "attr": "height"
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get events() { return [{
            "name": "clicked",
            "method": "clicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "clickHandle"
        }]; }
    static get style() { return ".flip-div-container.sc-flip-div{-webkit-perspective:1000px;perspective:1000px}.flip-div-container.sc-flip-div:hover   .flip-div-perspective.sc-flip-div{will-change:transform;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.flip-div-container.sc-flip-div   .flip-div-perspective.sc-flip-div{-webkit-transition:.5s;transition:.5s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}"; }
}

export { CardItem, FlipCard as FlipDiv };
