export function initOptionComp() {
  class ButtonCE extends HTMLElement {
    shadow: ShadowRoot;
    playOption: string;
    types: string[] = ["rock", "paper", "scissors"];
    imgURL: string;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      if (this.types.includes(this.getAttribute("play-option")!)) {
        this.playOption = this.getAttribute("play-option")!;
      }

      const posiblePlays = {
        rock: require("url:./piedra.svg"),
        paper: require("url:./papel.svg"),
        scissors: require("url:./tijera.svg"),
      };
      this.imgURL = posiblePlays[this.playOption];

      this.render();
      this.events();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      * {
      box-sizing: border-box;
    }
      .img{
        width: 100%;
      }
      `;
      const img = document.createElement("img");
      img.setAttribute("src", this.imgURL);
      img.classList.add("img");
      this.shadow.appendChild(img);
      img.classList.add(this.playOption);
      // console.log(this.playOption);
      this.shadow.appendChild(style);
    }
    events() {
      this.shadow.addEventListener("click", () => {
        const event = new CustomEvent("select", {
          detail: {
            selected: this.playOption,
          },
        });
        this.dispatchEvent(event);
      });
    }
  }
  customElements.define("option-ce", ButtonCE);
}
