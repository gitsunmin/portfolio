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
    description:
      '시멘틱, 웹 표준, 웹 접근성, SEO 등 기본적인 웹 기술에 대한 이해와 활용을 할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'CSS3',
    icon: './assets/icons/css3.svg',
    description:
      'Box Model, Flexbox, Grid, Animation, Media Query 등을 활용을 할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Javascript',
    icon: './assets/icons/javascript.svg',
    description:
      'ES6+ 문법, 비동기 처리, 호이스팅, 동작 원리 등을 이해하고 활용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Typescript',
    icon: './assets/icons/typeScript.svg',
    description:
      '기본 타입과 인터페이스, 제네릭, 타입 합성 등 타입을 활용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'React',
    icon: './assets/icons/react.svg',
    description:
      '기본 문법부터 훅, 라우터 등을 활용하여 다양한 프로젝트 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Next.js',
    icon: './assets/icons/next.js.svg',
    description:
      'SSR, SSG, API Routes, Image 등을 활용하여 다양한 프로젝트 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Vue.js',
    icon: './assets/icons/vue.js.svg',
    description:
      '2버전을 이용하여 대규모 프로젝트와 다양한 프로젝트 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Nuxt.js',
    icon: './assets/icons/nuxt.js.svg',
    description:
      'Nuxt에서 지원하는 기능을 활용하여 다양한 프로젝트 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Flutter',
    icon: './assets/icons/flutter.svg',
    description:
      '모바일 앱 개발과 웹뷰 앱 개발 경험이 있고, Firebase와 연동하여 사용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Git',
    icon: './assets/icons/git.svg',
    description:
      '기본적인 명령어부터 브렌치 전략, 리베이스 등을 활용하여 프로젝트의 버전을 관리할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'GraphQL',
    icon: './assets/icons/graphql.svg',
    description:
      'Schema를 정의하고, Query, Mutation을 작성하여 사용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Apollo Client',
    icon: './assets/icons/apollo.svg',
    description:
      'Link, Cache, Query, Mutation 등을 활용하여 사용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Relay',
    icon: './assets/icons/relay.svg',
    description:
      'compiler 설정, Query, Mutation 등을 활용하여 사용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Storybook',
    icon: './assets/icons/storybook.svg',
    description:
      'UI 컴포넌트를 설계하고 프로젝트 빌드 및 배포 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Jest',
    icon: './assets/icons/jest.svg',
    description:
      '로직의 단위 테스트를 작성하고, 테스트 커버리지를 확인할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'SCSS/SASS',
    icon: './assets/icons/sass.svg',
    description: 'scss 문법을 활용하여 스타일을 모듈화하여 관리할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Styled Components',
    icon: './assets/icons/styled-component.png',
    description:
      '스타일을 컴퓨넌트화 하고, 다른 컴포넌트와 합성 및 재사용하여 사용할 수 있습니다.',
    highlight: false,
  },
];

export default class SkillsScene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.unOrderedList$el = this.shadowRoot.querySelector(
      '.skills-scene1-unordered'
    );

    this.unOrderedList$el.innerHTML = skillList
      .concat(skillList)
      .map((skill) => {
        return /* html */ `
              <li class="skills-scene1-list">
                <labeled-icon label="${skill.name}" icon="${skill.icon}"></labeled-icon>
                <p>${skill.description}</p>
              </li>
          `;
      })
      .join('');
  }

  connectedCallback() {
    const animation = this.unOrderedList$el.animate(
      [
        { transform: 'translateX(0)' }, // 시작 상태
        { transform: 'translateX(-50%)' }, // 종료 상태
      ],
      {
        duration: skillList.length * 3000,
        iterations: Infinity,
        easing: 'linear',
      }
    );

    const play = () => animation.play();
    const pause = () => animation.pause();

    this.unOrderedList$el.addEventListener('mouseover', pause);
    this.unOrderedList$el.addEventListener('mouseout', play);
    // mobile
    this.unOrderedList$el.addEventListener('touchstart', pause);
    this.unOrderedList$el.addEventListener('touchend', play);

    let observer = new IntersectionObserver((observers) => {
      observers.forEach((observer) => {
        if (observer.isIntersecting) play();
      });
    });

    observer.observe(this);
  }
}
