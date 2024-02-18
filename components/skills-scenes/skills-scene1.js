const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .skills-scene1 {
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

  .skills-scene1-unordered {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
  }

  .skills-scene1-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    white-space: normal;
  }
`;

template.innerHTML = /* html */ `
  <div class="skills-scene1">
    <ul class="skills-scene1-unordered">
    </ul>
  </div>
`;

const skillList = [
  {
    name: 'HTML5',
    icon: './assets/icons/html5.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'CSS3',
    icon: './assets/icons/css3.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'Javascript',
    icon: './assets/icons/javascript.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'Typescript',
    icon: './assets/icons/typeScript.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'React',
    icon: './assets/icons/react.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'Vue.js 2',
    icon: './assets/icons/vue.js.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'Flutter',
    icon: './assets/icons/flutter.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'git',
    icon: './assets/icons/git.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'GraphQL',
    icon: './assets/icons/graphql.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'Apollo Client',
    icon: './assets/icons/apollo.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'Relay',
    icon: './assets/icons/relay.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'Storybook',
    icon: './assets/icons/storybook.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'Jest',
    icon: './assets/icons/jest.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'SCSS/SASS',
    icon: './assets/icons/sass.svg',
    description: '',
    highlight: false,
  },
  {
    name: 'Styled Components',
    icon: './assets/icons/styled-component.png',
    description: '',
    highlight: false,
  },
];

export default class SkillsScene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('.skills-scene1-unordered').innerHTML =
      skillList
        .concat(skillList)
        .map((skill) => {
          return /* html */ `
        <li class="skills-scene1-list">
          <labeled-icon label="${skill.name}" icon="${skill.icon}"></labeled-icon>
          <p>${skill.description}</p>
        </li>
        `;
        })
        .toString()
        .replace(/,/g, '');
  }

  connectedCallback() {
    let observer = new IntersectionObserver((observers) => {
      observers.forEach((observer) => {
        if (observer.isIntersecting)
          this.shadowRoot.querySelector('.skills-scene1-unordered').animate(
            [
              { transform: 'translateX(0)' }, // 시작 상태
              { transform: 'translateX(-50%)' }, // 종료 상태
            ],
            {
              duration: 30000,
              iterations: Infinity,
              easing: 'linear',
            }
          );
      });
    });

    observer.observe(this);
  }
}
