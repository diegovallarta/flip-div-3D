import { Component, Prop, Element, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'flip-div',
  styleUrl: 'flip-div.scss',
  shadow: true
})
export class FlipCard {
  @Prop() height: string = '320px';
  @Prop() width: string = '320px';
  @Element() el: HTMLElement;
  @Event() clicked: EventEmitter;

  componentWillLoad() {
    setTimeout(() => {
      const list = this.el.querySelectorAll('card-item > div');
      
      if(list.length>=2){
        
        list[0].classList.add('front-card');
        list[1].classList.add('back-card');
  
        //Remove unnecessary cards
        if(list.length>2)
          Array.from(list).forEach(function(item,key){
            if(key>1){
              item.remove();
            }
          });
      }
    },0);    
  }

  @Listen('click')
  clickHandle(e){
    this.clicked.emit(e);
  }

  render(){
    return (
      <div class="flip-div-container" style={{height: this.height, width: this.width}}>
        <div class="flip-div-perspective">
          <slot/>
        </div>
      </div>
    );
  }
}

