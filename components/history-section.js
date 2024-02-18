const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";
`;

template.innerHTML = /* html */ `
    <section-wrapper>
        <ul>
            <li>2021.01.01 - First commit</li>
            <li>2021.01.02 - Second commit</li>
            <li>2021.01.03 - Third commit</li>
        </ul>
    </section-wrapper>
`;

export default class HistorySection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
