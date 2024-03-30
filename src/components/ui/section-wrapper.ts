const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ ``;

template.innerHTML = /* html */ `
    <section class="section-wrapper">
        <slot></slot>
    </section>
`;

export default class SectionWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot?.appendChild(style.cloneNode(true));
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['align'];
  }

  get align() {
    return this.getAttribute('align') ?? '200px';
  }
  set align(value) {
    this.setAttribute('align', value);
  }

  connectedCallback() {
    this.shadowRoot
      ?.querySelector('.section-wrapper')
      ?.setAttribute(`style`, `text-align: ${this.getAttribute('align')};`);
  }
}
