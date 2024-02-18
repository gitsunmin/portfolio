const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .hello-section {
    height: 100vh;
  }

  .hello-animation {
    position: relative;
    font-size: 2.5em;
    height: 30px; /* 텍스트 높이에 맞게 조정 */
  }
  
  .hello {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation: helloAnimation 12s infinite;
  }

  .description {
    text-align: center;
    font-size: 1.5em;
  }
  
  @keyframes helloAnimation {
    0%, 100% { opacity: 0; }
    10% { opacity: 1; }
    20% { opacity: 0; }
  }

  .hello:nth-child(1) { animation-delay: 0s; }
  .hello:nth-child(2) { animation-delay: 2s; }
  .hello:nth-child(3) { animation-delay: 4s; }
  .hello:nth-child(4) { animation-delay: 6s; }
  .hello:nth-child(5) { animation-delay: 8s; }
  .hello:nth-child(6) { animation-delay: 10s; }

  .description {
    font-size: 1em;
    padding: 20px;
  }

`;

template.innerHTML = /* html */ `
    <section class="hello-section">
      <div class="hello-animation">
        <span class="hello">Hello</span>
        <span class="hello">안녕하세요</span>
        <span class="hello">こんにちは</span>
        <span class="hello">Hallo</span>
        <span class="hello">Bonjour</span>
        <span class="hello">Hola</span>
      </div>

      <p class="description">
        스크롤을 내리면서, <br />
        포트폴리오를 확인해보세요.
      </p>
    </section>
`;

export default class HelloSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
