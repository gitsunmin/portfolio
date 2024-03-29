const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .hello-section {
    height: 75vh;
  }

  .description {
    text-align: center;
    font-size: 1.5em;
  }

  .scroll-btn-wrapper {
    text-align: center;
  }
  .description {
    margin-top: 25vh;
    font-size: 1em;
    padding: 20px;
  }

`;

template.innerHTML = /* html */ `
    <section class="hello-section">
      <global-greetings></global-greetings>

      <p class="description">
        스크롤을 내리면서, <br />
        포트폴리오를 확인해보세요.
      </p>

      <div class="scroll-btn-wrapper">
        <button class="show-about-me">Scroll Down</button>
      </div>
    </section>
`;

export default class HelloSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot?.appendChild(style.cloneNode(true));
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      ?.querySelector('.show-about-me')
      ?.addEventListener('click', () => {
        document
          ?.querySelector('#about-me')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
  }
}
