function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=t.parcelRequire5feb;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire5feb=s),s.register("7PhYn",(function(t,n){var o,s;e(t.exports,"resolve",(()=>o),(e=>o=e)),e(t.exports,"register",(()=>s),(e=>s=e));var i={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("7PhYn").register(JSON.parse('{"di8mO":"index.28dfa4ee.js","i1rxQ":"win.1eea6986.svg","dxNCo":"loose.342a139d.svg","sajIy":"piedra.c88f7ccf.svg","1sqfz":"papel.5f79bbf0.svg","e7pYe":"tijera.6a2fdda1.svg"}')),s.register("7XJyK",(function(e,t){e.exports=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("i1rxQ")})),s.register("kVZsc",(function(t,n){var o;e(t.exports,"getBundleURL",(()=>o),(e=>o=e));var s={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=s[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),s[e]=t),t}})),s.register("i1vho",(function(e,t){e.exports=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("dxNCo")}));const i={data:{timeOver:!1},listeners:[],init(){console.log("State Init");const e=localStorage.getItem("game-save-state");this.setState(JSON.parse(e))},getState(){return this.data},setState(e){this.data=e;for(const t of this.listeners)t(e);console.log("se ah cambiado el state"),console.log(this.data),localStorage.setItem("game-save-state",JSON.stringify(e))},setWinner(){const e=this.getState();let t;t={scissors:{scissors:"tie",rock:"lose",paper:"win"},rock:{scissors:"win",rock:"tie",paper:"lose"},paper:{scissors:"lose",rock:"win",paper:"tie"}}[e.userPlay][e.PCPlay],"win"===t&&(e.history.userWins++,e.currentWinner="user",this.setState(e)),"tie"===t&&(e.currentWinner="tie",this.setState(e)),"lose"===t&&(e.history.PCWins++,e.currentWinner="PC",this.setState(e))},subscribe(e){this.listeners.push(e)}};function r(e){const t=document.createElement("div");t.classList.add("welcome__root"),t.innerHTML='\n          <div class="welcome__title-container">\n            <text-ce text-type="title"> Piedra Papel ó Tijera </text-ce>\n          </div>\n          <div class="welcome__button-container">\n            <button-ce>Empezar</button-ce>\n          </div>\n          <div class="welcome__footer">\n            <option-ce class="welcome__hand" play-option="scissors"></option-ce>\n            <option-ce class="welcome__hand" play-option="rock"></option-ce>\n            <option-ce class="welcome__hand" play-option="paper"></option-ce>\n          </div>\n      ';const n=t.querySelector("button-ce");return n?.addEventListener("click",(()=>{console.log("se cambio de pagina"),e.goTo("/instructions")})),t}function c(e){const t=document.createElement("div");t.classList.add("instructions__root"),t.innerHTML='\n    <div class="instructions__text-container">\n      <text-ce>\n        Presioná jugar y elegí: piedra, papel o tijera antes de que pasen\n        los 3 segundos.\n      </text-ce>\n    </div>\n    <div class="instructions__button-container">\n      <button-ce>¡Jugar!</button-ce>\n    </div>\n    <div class="welcome__footer">\n      <option-ce class="welcome__hand" play-option="scissors"></option-ce>\n      <option-ce class="welcome__hand" play-option="rock"></option-ce>\n      <option-ce class="welcome__hand" play-option="paper"></option-ce>\n    </div>\n        ';const n=t.querySelector("button-ce");return n?.addEventListener("click",(()=>{console.log("se cambio de pagina"),e.goTo("/play")})),t}function a(e){let t="";const n=document.createElement("div");n.classList.add("game__root"),n.classList.remove("show-hand"),n.classList.remove("show-results"),n.innerHTML='\n        <div class="game__countdown-container">\n          <timer-ce></timer-ce>\n        </div>\n        <div class="game__choice-container">\n          <option-ce class="game__hand scissors" play-option="scissors"></option-ce>\n          <option-ce class="game__hand rock" play-option="rock"></option-ce>\n          <option-ce class="game__hand paper" play-option="paper"></option-ce>\n        </div>\n          ';const o=n.querySelector("button-ce");o?.addEventListener("click",(()=>{console.log("se cambio de pagina")}));const s=[n.querySelector(".scissors"),n.querySelector(".rock"),n.querySelector(".paper")];return function(){const e=s[Math.floor(3*Math.random())],n=e?.getAttribute("play-option");function o(e){const t=i.getState();t.PCPlay=n;for(const n of s)n==s[e]?(n?.classList.remove("discarded"),n?.classList.add("chosen"),t.userPlay=n?.getAttribute("play-option"),i.setState(t)):(n?.classList.remove("chosen"),n?.classList.add("discarded"))}s[0]?.addEventListener("select",(e=>{t=e.detail.selected,o(0)})),s[1]?.addEventListener("select",(e=>{t=e.detail.selected,o(1)})),s[2]?.addEventListener("select",(e=>{t=e.detail.selected,o(2)}))}(),function(){const t=n.querySelector("timer-ce");t?.addEventListener("game-over",(()=>{const t=i.getState();""==t.userPlay&&e.goTo("/instructions"),console.log("se muestran las manos"),i.setWinner(),n.classList.add("show-hand"),n.innerHTML=`\n      <option-ce play-option=${t.PCPlay} class="game__hand-big rotate rock"></option-ce>\n      <option-ce play-option=${t.userPlay} class="game__hand-big rock"></option-ce>\n      `,function(){const t="rgba(136, 137, 73, 0.90)",o="rgba(137, 73, 73, 0.90)";let s=setInterval((()=>{const r=i.getState(),c=document.createElement("div");"user"==r.currentWinner?c.style.backgroundColor=t:c.style.backgroundColor=o,c.classList.add("show-results"),c.innerHTML=`\n      <game-over is-win=${"user"==r.currentWinner?"true":"false"}></game-over>\n      <history-ce ></history-ce>\n      <div class="game__button-container">\n        <button-ce>Volver a jugar</button-ce>\n      </div>\n     `,n.appendChild(c),n.querySelector(".game__button-container")?.addEventListener("click",(()=>{r.PCPlay="",r.userPlay="",r.currentWinner="",i.setState(r),e.goTo("/instructions")})),clearInterval(s)}),3e3)}()}))}(),n}s.register("2heIA",(function(e,t){e.exports=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("sajIy")})),s.register("5DGM0",(function(e,t){e.exports=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("1sqfz")})),s.register("jugF5",(function(e,t){e.exports=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("e7pYe")})),function(){class e extends HTMLElement{constructor(){super(),this.types=["title","button","normal","large","extralarge"],this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.text=this.textContent,this.types.includes(this.getAttribute("text-type"))?this.textType=this.getAttribute("text-type"):this.textType="normal","black"==this.getAttribute("color")?this.color="#000":"button"==this.getAttribute("color")?this.color="#D8FCFC":this.color="#FFF",this.render()}render(){const e=document.createElement("style");e.innerHTML=`\n      * {\n      box-sizing: border-box;\n    }\n      *{\n        font-family: 'Odibee Sans', cursive;\n        margin: 0;\n        }\n      .title{\n        font-size: 80px;\n        font-style: normal;\n        font-weight: 700;\n        color: #009048;\n      }\n      .button{\n        color: ${this.color};\n        font-size: 45px;\n        font-style: normal;\n        font-weight: 400;\n      }\n      .normal{\n        color: #000;\n        font-size: 40px;\n        font-style: normal;\n        font-weight: 600;\n      }\n      .large{\n        color: ${this.color};\n        font-size: 55px;\n        font-style: normal;\n        font-weight: 400;\n        line-height: normal;\n      }\n      .extralarge{\n        color: #000;\n        font-size: 100px;\n        font-style: normal;\n        font-weight: 700;\n      }\n      `;const t={title:`<h1 class="title">${this.text}</h1>`,button:`<p class="button">${this.text}</p>`,normal:`<p class="normal">${this.text}</p>`,large:`<h3 class="large">${this.text}</h3>`,extralarge:`<h2 class="extralarge">${this.text}</h2>`};this.shadow.innerHTML=t[this.textType],this.shadow.appendChild(e)}}customElements.define("text-ce",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.text=this.textContent,this.render()}render(){const e=document.createElement("style");e.innerHTML="\n      * {\n      box-sizing: border-box;\n      }\n      .button{\n        height: 87px;\n        width: 100%;\n        border-radius: 10px;\n        border: 10px solid #001997;\n        background: #006CFC;\n      }\n      .button:hover {\n        scale: 1.05;\n      }\n      .button:active {\n        scale: 0.9;\n      }\n      ";const t=document.createElement("button"),n=document.createElement("text-ce");n.textContent=this.text,t.classList.add("button"),n.setAttribute("color","button"),n.setAttribute("text-type","button"),t.appendChild(n),this.shadow.appendChild(t),this.shadow.appendChild(e)}}customElements.define("button-ce",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){if("true"==this.getAttribute("is-win")||"false"==this.getAttribute("is-win")){const e=JSON.parse(this.getAttribute("is-win"));this.win=e}else this.win=!0;this.render()}render(){this.win?this.imgURL=s("7XJyK"):this.imgURL=s("i1vho");const e=document.createElement("style");e.innerHTML=`\n      * {\n      box-sizing: border-box;\n    }\n      div{\n        background-image: url(${this.imgURL});\n        width: 254.051px;\n        height: 259.748px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n`;const t=document.createElement("div"),n=document.createElement("text-ce");n.setAttribute("text-type","large"),n.textContent=this.win?"Ganaste":"Perdiste",t.appendChild(n),this.shadow.appendChild(t),this.shadow.appendChild(e)}}customElements.define("game-over",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.types=["rock","paper","scissors"],this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.types.includes(this.getAttribute("play-option"))&&(this.playOption=this.getAttribute("play-option"));const e={rock:s("2heIA"),paper:s("5DGM0"),scissors:s("jugF5")};this.imgURL=e[this.playOption],this.render(),this.events()}render(){const e=document.createElement("style");e.innerHTML="\n      * {\n      box-sizing: border-box;\n    }\n      .img{\n        width: 100%;\n      }\n      ";const t=document.createElement("img");t.setAttribute("src",this.imgURL),t.classList.add("img"),this.shadow.appendChild(t),t.classList.add(this.playOption),this.shadow.appendChild(e)}events(){this.shadow.addEventListener("click",(()=>{const e=new CustomEvent("select",{detail:{selected:this.playOption}});this.dispatchEvent(e)}))}}customElements.define("option-ce",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=document.createElement("style");e.innerHTML="\n      * {\n      box-sizing: border-box;\n    }\n    div{\n        border-radius: 125px; \n    }\n    .border{\n        height: 243px;\n        width: 243px;\n        background-color: black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .center{\n        height: 200px;\n        width: 200px;\n        background-color: white;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    ";const t=document.createElement("div");t.classList.add("border");const n=document.createElement("div");n.classList.add("center");const o=document.createElement("text-ce");o.textContent="3",o.setAttribute("text-type","extralarge"),n.appendChild(o),t.appendChild(n),this.shadow.appendChild(t),this.shadow.appendChild(e),this.startTimer()}startTimer(){const e=this.shadow.querySelector(".center"),t=document.createElement("text-ce");t.setAttribute("text-type","extralarge"),t.setAttribute("color","black");let n=3,o=setInterval((()=>{if(e?.removeChild(this.shadow.querySelector("text-ce")),t.textContent=n.toString(),e?.appendChild(t),-1==n){clearInterval(o);const e=new CustomEvent("game-over",{detail:{h:"se termino el tiempo"}});this.dispatchEvent(e)}n--}),1e3)}}customElements.define("timer-ce",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){const e=i.getState().history;this.wins=e.userWins,this.looses=e.PCWins,this.render()}render(){const e=document.createElement("style");e.innerHTML="\n      * {\n      box-sizing: border-box;\n    }\n    .container {\n      width: 259px;\n      border-radius: 10px;\n      border: 10px solid #000;\n      background: #fff;\n      text-align: center;\n      padding: 5px 20px 18px 20px;\n    }\n    .score-container {\n      margin-top: 15px;\n      text-align: end;\n    }    \n      ";const t=document.createElement("div");t.classList.add("container");const n=document.createElement("text-ce");n.setAttribute("text-type","large"),n.setAttribute("color","black"),n.textContent="Score";const o=document.createElement("div");o.classList.add("score-container");const s=document.createElement("text-ce");s.setAttribute("text-type","button"),s.setAttribute("color","black"),s.textContent=`Vos: ${this.wins}`;const i=document.createElement("text-ce");i.setAttribute("text-type","button"),i.setAttribute("color","black"),i.textContent=`Máquina: ${this.looses}`,o.appendChild(s),o.appendChild(i),t.appendChild(n),t.appendChild(o),this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("history-ce",e)}(),function(e){const t=[{path:/\/welcome/,page:r},{path:/\/instructions/,page:c},{path:/\/play/,page:a}],n="Lautarete/desafio-piedra-papel-tijera";function o(){return location.host.includes("github.io")}function s(e){const t=o()?n+e:e;history.pushState({},"",t),i(t)}function i(i){const r=o()?i.replace(n,""):i;for(const n of t)if(n.path.test(r)){e?.firstChild?.remove();const t=n.page({goTo:s});e?.appendChild(t)}}"/"==location.pathname?s("/welcome"):i(location.pathname)}(document.querySelector("#root")),window.addEventListener("load",(()=>{console.log("se cargo el juego"),i.init()}));
//# sourceMappingURL=index.28dfa4ee.js.map