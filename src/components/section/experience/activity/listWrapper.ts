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
    height: 300px;
  }
`;

template.innerHTML = /* html */ `
  <h2>Activities</h2>
  <div class="scene">
    <section>
      <ul class="cards"></ul>
    </section>
  </div>
`;

const ActivityList = [
  {
    name: 'Khuthon',
    period: {
      start: '2018.11',
      end: '2018.11',
    },
    description: '경희대학교',
    tags: ['해커톤'],
    link: 'https://thon.khlug.org/',
  },
  {
    name: '정원사들 시즌 9',
    period: {
      start: '2023.08',
      end: '2023.11',
    },
    description: 'Google I/O Extended 2023',
    tags: ['Gathering'],
    link: 'https://gitsunmin.github.io/blogs/garden9-2023/',
  },
];

export default class ExperienceActivityListWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    if (this.shadowRoot === null) throw new Error('this.shadowRoot is null');

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    match(this.shadowRoot.querySelector('.cards'))
      .with(P.not(P.nullish), (cardsEl) => {
        cardsEl.innerHTML = ActivityList.map((projecty) => {
          return /* html */ `
            <experience-activity-list
              link="${projecty.link}"
              name="${projecty.name}"
              start="${projecty.period.start}"
              end="${projecty.period.end}"
              description="${projecty.description}"
              tags="${projecty.tags.join(',')}"
            ></experience-activity-list>
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
