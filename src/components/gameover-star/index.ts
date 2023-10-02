export function initStarComp() {
  class GameOverStar extends HTMLElement {
    shadow: ShadowRoot;
    win: boolean;
    imgURL: string;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      if (
        this.getAttribute("is-win") == "true" ||
        this.getAttribute("is-win") == "false"
      ) {
        const isWin = JSON.parse(this.getAttribute("is-win")!);
        this.win = isWin;
      } else {
        this.win = true;
      }

      this.render();
    }
    render() {
      this.win
        ? (this.imgURL = require("url:./win.svg"))
        : (this.imgURL = require("url:./loose.svg"));

      const style = document.createElement("style");
      style.innerHTML = `
      * {
      box-sizing: border-box;
    }
      div{
        background-image: url(${this.imgURL});
        width: 254.051px;
        height: 259.748px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
`;

      const div = document.createElement("div");
      const text = document.createElement("text-ce");
      text.setAttribute("text-type", "large");
      text.textContent = this.win ? "Ganaste" : "Perdiste";

      div.appendChild(text);
      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
  customElements.define("game-over", GameOverStar);
}
