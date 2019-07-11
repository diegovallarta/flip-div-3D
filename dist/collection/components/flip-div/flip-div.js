import { h } from '@stencil/core';
export class FlipCard {
    constructor() {
        this.height = '320px';
        this.width = '320px';
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
        return (h("div", { class: "flip-div-container", style: { height: this.height, width: this.width } },
            h("div", { class: "flip-div-perspective" },
                h("slot", null))));
    }
    static get is() { return "flip-div"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["flip-div.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["flip-div.css"]
    }; }
    static get properties() { return {
        "height": {
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
            "attribute": "height",
            "reflect": false,
            "defaultValue": "'320px'"
        },
        "width": {
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
            "attribute": "width",
            "reflect": false,
            "defaultValue": "'320px'"
        }
    }; }
    static get events() { return [{
            "method": "clicked",
            "name": "clicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "click",
            "method": "clickHandle",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
