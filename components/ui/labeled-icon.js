const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

    .labeled-icon {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .icon {
        border-radius: 12%;
        box-shadow: 0 0 5px 0 white:
    }

    .label {
        margin-top: 10px;
        font-size: 1.2em;
    }
`;

template.innerHTML = /* html */ `
    <figure class="labeled-icon">
        <img class="icon" width="50px" />
        <figcaption class="label"></figcaption>
    </figure>
`;

export default class LabeledIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['icon', 'label'];
  }

  get icon() {
    return this.getAttribute('icon');
  }
  set icon(value) {
    this.setAttribute('icon', value);
  }

  get label() {
    return this.getAttribute('label');
  }
  set label(value) {
    this.setAttribute('label', value);
  }

  attributeChangedCallback(name, _, newValue) {
    const icon$el = this.shadowRoot.querySelector('.icon');
    const label$el = this.shadowRoot.querySelector('.label');

    switch (name) {
      case 'icon':
        icon$el.src = newValue;
        icon$el.alt = newValue;
        break;
      case 'label':
        label$el.textContent = newValue;
        break;
      default:
        throw new Error('Unexpected attribute:', name);
        break;
    }
  }
}
