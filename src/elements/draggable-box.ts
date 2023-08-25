import { Commande } from "./git-commands";



  export interface DraggableBoxEventMap extends Event {
    'itemdropped': CustomEvent<Commande>;
  }  
class DraggableBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot!.innerHTML = `
        <style>
        :host {
            display: block;
            border: 2px dashed #bababa;
            padding: 1rem;
            margin: 1rem 0;
            background-color: white;
            color: black;
            font-family: sans-serif;
            font-size: 1.5rem;
            text-align: center;
            }
            </style>
        <slot></slot>
        `

        this.addEventListener('dragover', this.handleDragOver.bind(this));
        this.addEventListener('drop', this.handleDrop.bind(this));
        
    }
  
    handleDragOver(event: DragEvent) {
        event.preventDefault();
        event.dataTransfer!.dropEffect = 'move';
    }

    handleDrop(event: DragEvent) {
        event.preventDefault();
        const data = JSON.parse(event.dataTransfer!.getData('text/plain')) as Commande;
        const customEvent = new CustomEvent<Commande>('itemdropped', {
          bubbles: true,
          detail: data,
        });
    
        this.dispatchEvent(customEvent);
      }
}

customElements.define('draggable-box', DraggableBox);
