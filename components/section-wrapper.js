const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";
  .section-wrapper {
  }
`;

template.innerHTML = /* html */ `
    <section class="section-wrapper">
        <slot></slot>
    </section>
`;

export default class SectionWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.section-wrapper').style.textAlign =
      this.getAttribute('align');
  }
}
