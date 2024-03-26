const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .section-title {
    padding-top: 100px;
    margin-top: 25vh;
    font-size: 3em;
    text-align: center;
  }
`;

template.innerHTML = /* html */ `
    <section-wrapper align="center">
      <about-me-scene1></about-me-scene1>
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
