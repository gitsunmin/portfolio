const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .header-case {
    margin-top: 90px;
  }
`;

template.innerHTML = /* html */ `
  <div class="header-case"></div> 
  <main class="main">
    <slot></slot>
  </main>
`;

export default class LayoutMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot?.appendChild(style.cloneNode(true));
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}
