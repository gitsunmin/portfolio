import Attribute from './../utils/attribute.js';

const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";
  .profile-image {
    box-shadow: 0 0 10px 0 white;
    isolation: isolate;
  }
`;

template.innerHTML = /* html */ `
    <img class="profile-image" src="./assets/me.jpeg" width="200px" sync/>
`;

export default class ProfileImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.profileImage$el = this.shadowRoot.querySelector('.profile-image');
  }

  connectedCallback() {
    const width = this.getAttribute('width') ?? '200px';
    const height = this.getAttribute('height') ?? '200px';

    const round = Attribute.typeApplier('boolean')(this.getAttribute('round'));

    this.profileImage$el.setAttribute('width', width);
    this.profileImage$el.setAttribute('height', height);

    this.profileImage$el.style.borderRadius = round ? '50%' : '10%';
  }
}
