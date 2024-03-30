const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  .section-title {
    padding-top: 100px;
    margin-top: 25vh;
    font-size: 3em;
    text-align: center;
  }
`;

template.innerHTML = /* html */ `
    <section-wrapper align="center">
      <about-me-profile></about-me-profile>
    </section-wrapper>
`;

export default class HistorySection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot?.appendChild(style.cloneNode(true));
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}
