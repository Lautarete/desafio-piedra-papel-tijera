export function initTimerComp() {
  class TimernCE extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      * {
      box-sizing: border-box;
    }
    div{
        border-radius: 125px; 
    }
    .border{
        height: 243px;
        width: 243px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .center{
        height: 200px;
        width: 200px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `;

      const circle1 = document.createElement("div");
      circle1.classList.add("border");
      const circel2 = document.createElement("div");
      circel2.classList.add("center");

      const text = document.createElement("text-ce");
      text.textContent = "3";
      text.setAttribute("text-type", "extralarge");
      circel2.appendChild(text);

      circle1.appendChild(circel2);
      this.shadow.appendChild(circle1);
      this.shadow.appendChild(style);

      this.startTimer();
    }
    startTimer() {
      const containerEl = this.shadow.querySelector(".center");
      const text = document.createElement("text-ce");
      text.setAttribute("text-type", "extralarge");
      text.setAttribute("color", "black");

      let contador = 3;
      let timerID = setInterval(() => {
        containerEl?.removeChild(this.shadow.querySelector("text-ce")!);

        text.textContent = contador.toString();
        containerEl?.appendChild(text);

        if (contador == -1) {
          clearInterval(timerID);
          const event = new CustomEvent("game-over", {
            detail: {
              h: "se termino el tiempo",
            },
          });
          this.dispatchEvent(event);
        }
        contador--;
      }, 1000);
    }
  }
  customElements.define("timer-ce", TimernCE);
}
