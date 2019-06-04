import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class FlipCard {
    height: string;
    width: string;
    el: HTMLElement;
    clicked: EventEmitter;
    componentWillLoad(): void;
    clickHandle(e: any): void;
    render(): JSX.Element;
}
