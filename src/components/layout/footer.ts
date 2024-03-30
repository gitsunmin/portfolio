const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  .footer {
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

template.innerHTML = /* html */ `
  <footer class="footer">
    Gitsunmin's Portfolio © 2024
  </footer>
`;

export default class LayoutFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot?.appendChild(style.cloneNode(true));
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}
