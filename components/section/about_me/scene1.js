const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .about-me-scene1 {
    font-size: 1rem;
  }

  .abount-me-scene1-description {
    padding: 20px;
  }
`;

template.innerHTML = /* html */ `
  <div class="about-me-scene1">
    <div class="abount-me-scene1-profile">
      <profile-image round="true"></profile-image>
    </div>
    <p class="abount-me-scene1-description">
      저는 2019년부터 프론트엔드 개발을 시작하였으며, <br />
      Mobile, Desktop, 그리고 Web 등 다양한 플랫폼에서 <br />
      개발을 해왔습니다. <br />
    </p>
  </div>
`;

export default class HistoryScene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.profile$el = this.shadowRoot.querySelector(
      '.abount-me-scene1-profile'
    );
    this.aboutMeDescription$el = this.shadowRoot.querySelector(
      '.abount-me-scene1-description'
    );
  }

  connectedCallback() {
    let observer = new IntersectionObserver((observers) => {
      observers.forEach((observer) => {
        if (observer.isIntersecting)
          this.profile$el.animate(
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
        this.aboutMeDescription$el.animate(
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
