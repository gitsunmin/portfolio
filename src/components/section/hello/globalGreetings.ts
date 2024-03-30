const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  .wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 2.5em;
    height: 30px; /* 텍스트 높이에 맞게 조정 */
    margin-top: 25vh;
  }
  `;

template.innerHTML = /* html */ `
  <div class="wrapper">
    <span class="greeting">Hello</span>
    <span class="greeting">안녕하세요</span>
    <span class="greeting">こんにちは</span>
    <span class="greeting">Hallo</span>
    <span class="greeting">Bonjour</span>
    <span class="greeting">Hola</span>
  </div>
`;

const showGreeting = (elList: NodeListOf<Element>) => (index: number) => {
  elList[index].animate(
    [
      { opacity: 0, display: 'block' },
      { opacity: 1, display: 'block' },
      { opacity: 1, display: 'none' },
    ],
    {
      duration: 2500,
      fill: 'forwards',
    }
  ).onfinish = () => {
    const nextIndex = (index + 1) % elList.length;
    showGreeting(elList)(nextIndex);
  };
};

export default class HelloSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    if (!this.shadowRoot) throw new Error('Shadow DOM를 설정하지 못했습니다.');

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (!this.shadowRoot) throw new Error('Shadow DOM를 설정하지 못했습니다.');

    const greetingElList = this.shadowRoot?.querySelectorAll('.greeting') ?? [];

    greetingElList.forEach((el) => el.setAttribute('style', 'display: none;'));

    const startAnimation = showGreeting(greetingElList);

    startAnimation(0);
  }
}
