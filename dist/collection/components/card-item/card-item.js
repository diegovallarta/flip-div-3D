export class CardItem {
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
    static get style() { return "/**style-placeholder:card-item:**/"; }
}
