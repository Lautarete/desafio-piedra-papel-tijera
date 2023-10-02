export function initButtonComp() {
  class ButtonCE extends HTMLElement {
    shadow: ShadowRoot;
    text: string;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.text = this.textContent!;
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      * {
      box-sizing: border-box;
      }
      .button{
        height: 87px;
        width: 100%;
        border-radius: 10px;
        border: 10px solid #001997;
        background: #006CFC;
      }
      .button:hover {
        scale: 1.05;
      }
      .button:active {
        scale: 0.9;
      }
      `;

      const buttonEl = document.createElement("button");
      const buttonText = document.createElement("text-ce");
      buttonText.textContent = this.text;
      buttonEl.classList.add("button");

      buttonText.setAttribute("color", "button");
      buttonText.setAttribute("text-type", "button");
      buttonEl.appendChild(buttonText);
      this.shadow.appendChild(buttonEl);
      this.shadow.appendChild(style);
    }
  }
  customElements.define("button-ce", ButtonCE);
}
