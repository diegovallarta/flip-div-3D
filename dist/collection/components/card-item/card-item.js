import { h } from '@stencil/core';
export class CardItem {
    render() {
        return (h("div", { class: this.classNames },
            h("slot", null)));
    }
    static get is() { return "card-item"; }
    static get originalStyleUrls() { return {
        "$": ["card-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card-item.css"]
    }; }
    static get properties() { return {
        "classNames": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "class-names",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
}
