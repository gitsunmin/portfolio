const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  .about-me-scene1 {
    font-size: 1rem;
  }

  .abount-me-scene1-description {
    padding: 20px;
    margin: 0 auto;
    margin-top: 40px;
    text-align: left;
    max-width: 400px;
  }
`;

template.innerHTML = /* html */ `
  <div class="about-me-scene1">
    <div class="abount-me-scene1-profile">
      <profile-image round="true"></profile-image>
    </div>
    <p class="abount-me-scene1-description">
      안녕하세요.
      <br />
      <br />
      저는 2019년부터 프론트엔드 개발을 해오고 있는 개발자입니다. 
      다양한 플랫폼에서 사용자 경험을 향상시키기 위한 작업에 참여해왔으며,
      특히 Mobile, Desktop, Web 분야에서 실력을 쌓아왔습니다.
      기술적인 도전을 해결하며 성장하는 과정을 중요시하고,
      항상 새로운 것을 배우려는 자세를 가지고 있습니다.
      <br />
      <br />
      개발 작업을 할 때는 사용자 중심의 디자인을 지향하며, 웹 표준과 접근성,
      반응형 디자인을 고려하여 프로젝트를 진행합니다.
      JavaScript, React, Vue.js 같은 현대적인 기술 스택을 활용하여,
      사용자에게 보다 나은 경험을 제공하기 위해 노력합니다. 
      <br />
      <br />
      저의 포트폴리오는 저의 기술과 경험을 소개하는 공간입니다.
      협업에 대한 열린 마음과 함께, 계속해서 배우고 성장하기 위한 저의 열정을 확인하실 수 있습니다.
      <br />
      <br />
      만약 제 작업에 대해 더 알고 싶으시다면, 언제든지 연락 주세요.
      <br />
      <br />
      감사합니다.
    </p>

    <p>
      tjsals116@gmail.com
    </p>
  </div>
`;

export default class AboutMeScene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot?.appendChild(style.cloneNode(true));
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    let observer = new IntersectionObserver((observers) => {
      observers.forEach((observer) => {
        if (observer.isIntersecting)
          this.shadowRoot?.querySelector('.abount-me-scene1-profile')?.animate(
            {
              opacity: [0, 1],
              transform: [
                'translateX(200px)',
                'translateX(-20px)',
                'translateX(0)',
              ],
            },
            {
              duration: 1200,
              iterations: 1,
              easing: 'ease-in-out',
            }
          );
        this.shadowRoot
          ?.querySelector('.abount-me-scene1-description')
          ?.animate(
            {
              opacity: [0, 1],
            },
            {
              duration: 2000,
              iterations: 1,
              easing: 'ease-in-out',
            }
          );
      });
    });

    observer.observe(this);
  }
}
