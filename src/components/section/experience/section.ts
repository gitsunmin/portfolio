const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  ul {
    list-style: none;
    padding-left: 0;
    height: 500px;
  }

  .section-title {
    padding-top: 100px;
    margin-top: 25vh;
    font-size: 3em;
    text-align: center;
  }
`;

template.innerHTML = /* html */ `
    <section-wrapper align="center">
      <h1 class="section-title">Experience</h1>
      <experience-project-list-wrapper></experience-project-list-wrapper>
      <experience-activity-list-wrapper></experience-activity-list-wrapper>
    </section-wrapper>
`;

export default class ExperienceSection extends HTMLElement {
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
          this.shadowRoot?.querySelector('.section-title')?.animate(
            {
              opacity: [0, 1],
              transform: [
                'translateX(-100px)',
                'translateX(20px)',
                'translateX(0)',
              ],
            },
            {
              duration: 900,
              iterations: 1,
              easing: 'ease-in-out',
            }
          );
      });
    });

    observer.observe(this);
  }
}
