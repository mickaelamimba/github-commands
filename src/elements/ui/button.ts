import { createElements } from "../../func/createElment";
export class Button extends HTMLElement {
  text: string | null;
  shadow: ShadowRoot | null;
  btnElment: HTMLElement;
  color: string |null
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.shadow = shadow;
    this.text = this.getAttribute("text");
    this.color = this.getAttribute('color')
    this.btnElment = createElements({
      tagName: "button",
    });
    this.shadowRoot!.innerHTML = `
        <style>
        :host{
            display: block;
        }
        button {
        border: none;
        background: #000;
        color:'#fff' ;
        cursor: pointer;
        padding: 0.5rem;
        font-size: 1rem;
        font-weight: bold;
        outline: none;
                
            }
        </style>
        `;
  }
  connectedCallback(){
    this.shadowRoot?.appendChild(this.btnElment)
  }

  disconnectedCallback(){
    this.btnElment.remove()
  }

  static get observedAttributes() {
    return ["text","color"];
  }
  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    name === "text" && (this.btnElment.textContent = newValue) 
    name === "color" && (this.btnElment.style.color = newValue)
  }
}
customElements.define("c-button", Button);
