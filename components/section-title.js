const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .section-title {
    text-align: center;
  }
`;

template.innerHTML = /* html */ `
    <h2 class="section-title">
        <slot></slot>
    </h2>
`;

export default class SectionTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
