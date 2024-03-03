const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .scene {
    max-width: 80vw;
    overflow-x: scroll;
    margin: 0 auto;
  }

  .cards {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 80vw;
    overflow-x: scroll;
    gap: 18px;
  }

  .card {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    min-width: 200px;
    border: 2px solid #E0EAF1;
    border-radius: 8px;
    padding: 24px;
  }

  .tags-warp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
  }

  .tag {
    color: white;
    text-decoration: none;
    border: 1px solid #E0EAF1;
    padding: 4px;
    border-radius: 4px;
  }

  .link-wrap {
    margin-top: 22px;
  }

  .more-link {
    color: #E0EAF1;
    border-radius: 4px;
    padding: 8px;
    text-decoration: none;
    border: 2px solid #E0EAF1;
  }

  .more-link:hover {
    border: 2px solid;
    border-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) 1;
  }
`;

template.innerHTML = /* html */ `
  <h2>Projects</h2>
  <div class="scene">
    <section>
      <ul class="cards"></ul>
    </section>
  </div>
`;

const ProjectList = [
  {
    name: '공지사항 관리 시스템 개발',
    period: {
      start: '2021-01',
      end: '2021-03',
    },
    role: 'Frontend Developer',
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['Desktap'],
  },
  {
    name: '업무 협업 프로그램 개발',
    period: {
      start: '2021-01',
      end: '2021-03',
    },
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['Web', 'B2B'],
  },
  {
    name: '마켓봄 프로 개발',
    period: {
      start: '2021-01',
      end: '2021-03',
    },
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['Web', 'Mobile', 'B2B'],
  },
  {
    name: '공통 웹뷰 앱 개발',
    period: {
      start: '2021-01',
      end: '2021-03',
    },
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['App', 'Flutter'],
  },
  {
    name: '식봄, Next.js로 전환',
    period: {
      start: '2021-01',
      end: '2021-03',
    },
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['E-Commerce', 'Next.js'],
  },
];

export default class HistoryScene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.cards$el = this.shadowRoot.querySelector('.cards');

    this.cards$el.innerHTML = ProjectList.map((project) => {
      return /* html */ `
        <li class="card">
          <div>
            <h3>${project.name}</h3>
            <span>${project.period.start} ~ ${project.period.end}</span>
            <p>${project.description}</p>
            <div class="tags-warp">
              ${project.tags
                .map((tag) => /* html */ `<span class="tag">${tag}</span>`)
                .join('')}
            </div>
          </div>
          <div class="link-wrap">
            <a class="more-link" href="/">More</a>
          </div>
        </li>
      `;
    })
      .reverse()
      .join('');
  }

  connectedCallback() {
    let observer = new IntersectionObserver((observers) => {
      observers.forEach((observer) => {});
    });

    observer.observe(this);
  }
}
