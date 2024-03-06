import Attribute from '../../utils/attribute.js';

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

  static get observedAttributes() {
    return ['width', 'height', 'round'];
  }

  get width() {
    return this.getAttribute('width') ?? '200px';
  }
  set width(value) {
    this.setAttribute('width', value);
  }

  get height() {
    return this.getAttribute('height') ?? '200px';
  }
  set height(value) {
    this.setAttribute('height', value);
  }

  get round() {
    return this.getAttribute('round') ?? '200px';
  }
  set round(value) {
    this.setAttribute('round', value);
  }

  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case 'width':
        this.profileImage$el.setAttribute('width', newValue);
        break;
      case 'height':
        this.profileImage$el.setAttribute('height', newValue);
        break;
      case 'round':
        this.profileImage$el.style.borderRadius = newValue ? '50%' : '10%';
        break;
      default:
        throw new Error('Unexpected attribute:', name);
        break;
    }
  }
}
