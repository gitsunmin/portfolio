import { P, match } from 'ts-pattern';

const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  .scene {
    max-width: 80vw;
    overflow-x: scroll;
    margin: 0 auto;
  }

  .cards {
    display: flex;
    flex-direction: row;
    list-style: none;
    overflow-x: scroll;
    gap: 24px;
    padding: 0;
    width: 80vw;
    height: 400px;
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
      start: '2019.08',
      end: '2019.10',
    },
    description:
      'Google API를 이용하여 Google Workspace에 작성한 내용을 조회하여, 사내 공지사항 및 일정을 대시보드의 형태로 제공하는 시스템을 개발하였습니다.',
    tags: ['Desktap'],
    link: 'https://gitsunmin.notion.site/dca6ba6ff38042ddadad31b67f3bad1c',
  },
  {
    name: '업무 협업 프로그램 개발',
    period: {
      start: '2019.10',
      end: '2020.10',
    },
    description:
      '문서 공동편집기능을 기반으로 채팅, 할일 관리 등 기능의 협업툴을 개발하였습니다.',
    tags: ['Web'],
    link: 'https://gitsunmin.notion.site/179c4f41db6d4e51b132738a439e5aa6',
  },
  {
    name: '마켓봄 프로 개발',
    period: {
      start: '2020.10',
      end: '2023.08',
    },
    description:
      '마켓봄 프로의 PC, Mobile 웹 그리고 백오피스 웹 서비스를 초기 단계부터 개발 및 운영업무를 담당하였습니다.',
    tags: ['Web', 'Mobile', 'B2B'],
    link: 'https://gitsunmin.notion.site/9c437384d105421aafb89ef21ea673a6',
  },
  {
    name: '마켓보로, 공통 웹뷰 개발',
    period: {
      start: '2023.08',
      end: '2023.12',
    },
    description:
      '마켓보로에서 사용중인 네이티브 하이브리드 앱들을 Flutter로 재개발하여 공통으로 사용할 수 있는 웹뷰 앱을 개발하였습니다.',
    tags: ['App', 'Flutter', 'Web View'],
    link: 'https://gitsunmin.notion.site/f098322d80274c32b621e78d1a2588ee',
  },
  {
    name: '식봄, Next.js로 전환',
    period: {
      start: '2024.01',
      end: '2024.03',
    },
    description:
      '사업자 대상 식자재 E-Commerce 서비스인 식봄의 유지보수 및 Next.js로 전환하는 작업을 하였습니다.',
    tags: ['E-Commerce'],
    link: 'https://gitsunmin.notion.site/Next-js-72cf7aca6d73402cbdd8b80556887aa5',
  },
];

export default class ExperienceProjectListWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    if (this.shadowRoot === null) throw new Error('this.shadowRoot is null');

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    match(this.shadowRoot.querySelector('.cards'))
      .with(P.not(P.nullish), (cardsEl) => {
        cardsEl.innerHTML = ProjectList.map((project) => {
          return /* html */ `
            <experience-project-list
              link="${project.link}"
              name="${project.name}"
              start="${project.period.start}"
              end="${project.period.end}"
              description="${project.description}"
              tags="${project.tags.join(',')}"
            ></experience-project-list>
            `;
        })
          .reverse()
          .join('');
      })
      .otherwise(() => {
        throw new Error('this.shadowRoot.querySelector(".cards") is null');
      });
  }
}
