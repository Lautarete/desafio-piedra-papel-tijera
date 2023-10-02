export function initTextComp() {
  class TextCE extends HTMLElement {
    shadow: ShadowRoot;
    text: string;
    textType: string;
    types: string[] = ["title", "button", "normal", "large", "extralarge"];
    color: string;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.text = this.textContent!;

      if (this.types.includes(this.getAttribute("text-type")!)) {
        this.textType = this.getAttribute("text-type")!;
      } else {
        this.textType = "normal";
      }

      if (this.getAttribute("color") == "black") {
        this.color = "#000";
      } else if (this.getAttribute("color") == "button") {
        this.color = "#D8FCFC";
      } else {
        this.color = "#FFF";
      }

      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      * {
      box-sizing: border-box;
    }
      *{
        font-family: 'Odibee Sans', cursive;
        margin: 0;
        }
      .title{
        font-size: 80px;
        font-style: normal;
        font-weight: 700;
        color: #009048;
      }
      .button{
        color: ${this.color};
        font-size: 45px;
        font-style: normal;
        font-weight: 400;
      }
      .normal{
        color: #000;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
      }
      .large{
        color: ${this.color};
        font-size: 55px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .extralarge{
        color: #000;
        font-size: 100px;
        font-style: normal;
        font-weight: 700;
      }
      `;
      // types: string[] = ["title", "button", "normal", "large", "extra-large"];
      const text = {
        title: `<h1 class="title">${this.text}</h1>`,
        button: `<p class="button">${this.text}</p>`,
        normal: `<p class="normal">${this.text}</p>`,
        large: `<h3 class="large">${this.text}</h3>`,
        extralarge: `<h2 class="extralarge">${this.text}</h2>`,
      };

      this.shadow.innerHTML = text[this.textType];
      this.shadow.appendChild(style);
    }
  }
  customElements.define("text-ce", TextCE);
}
