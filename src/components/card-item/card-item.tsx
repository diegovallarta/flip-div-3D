import { Component, Prop, Element, h } from '@stencil/core';

@Component({
  tag: 'card-item',
  styleUrl: 'card-item.scss',
  shadow: false
})
export class CardItem {
  @Prop() classNames: string;
  @Element() el: HTMLElement;

  render() {
    return (
      <div class={ this.classNames }>
        <slot/>
      </div>
    );
  }
}
