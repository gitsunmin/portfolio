import { P, match } from 'ts-pattern';

const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .hello-section {
    height: 75vh;
  }

  .guide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    margin: 0;
    margin-top: 30vh;
    font-size: 1.2em;
    padding: 20px;
    line-height: 1.3;
    width: 100%;
    rotate: 0deg;
  }
`;

template.innerHTML = /* html */ `
    <section class="hello-section">
      <global-greetings></global-greetings>

      <p class="guide">
        스크롤을 내리면서,
        <br />
        포트폴리오를 확인해보세요.
      </p>
    </section>
`;

export default class HelloSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    if (!this.shadowRoot) throw new Error('Shadow DOM를 사용할 수 없습니다.');

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (!this.shadowRoot) throw new Error('Shadow DOM를 사용할 수 없습니다.');

    const HuideEl = this.shadowRoot.querySelector('.guide');

    HuideEl?.animate(
      [
        {
          rotate: '90deg',
          transform: 'translateX(-80px)',
        },
        {
          rotate: '90deg',
          transform: 'translateX(-60px)',
        },
        {
          rotate: '90deg',
          transform: 'translateX(-80px)',
        },
      ],
      {
        delay: 4000,
        fill: 'forwards',
        duration: 1000,
        iterations: Infinity,
      }
    );
  }
}
