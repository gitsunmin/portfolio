const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .experience-scene1 {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    height: 300px;
    max-width: 80vw;
    overflow-x: scroll;

    margin: 0 auto;
    white-space: nowrap;
  }

  .experience-scene1-chart {
    background-color: orange;
  }

`;

const ProjectList = [
  {
    name: '식봄',
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['E-Commerce', 'Re-Engineering', 'Next.js', 'TypeScript'],
  },
];

template.innerHTML = /* html */ `
  <div class="experience-scene1">
    <section class="experience-scene1-section">
      <h2>Project</h2>

      <ul class="experience-scene1-cards">
      </ul>
    </section>
  </div>
`;

export default class HistoryScene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.cards$el = this.shadowRoot.querySelector('.skills-scene1-unordered');

    this.cards$el.innerHTML = ProjectList.map((project) => {
      return /* html */ `
        <li class="experience-scene1-card">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        </li>
      `;
    }).join('');
  }

  connectedCallback() {
    let observer = new IntersectionObserver((observers) => {
      observers.forEach((observer) => {});
    });

    observer.observe(this);
  }
}
