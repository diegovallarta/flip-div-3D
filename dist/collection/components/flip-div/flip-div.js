export class FlipCard {
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
    static get style() { return "/**style-placeholder:flip-div:**/"; }
}
