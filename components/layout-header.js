const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    padding: 10px;
    z-index: 1000;
  }

  .profile {
    display: flex;
    align-items: center;
  }

  .profile img {
    margin: 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

template.innerHTML = /* html */ `
  <header class="header">
    <a class="profile" href="/">
      <img id="header-me-img" src="./assets/me.jpeg" width="50px" alt="me" class="round-1" />
      <span class="site-name">
        Gitsunmin's Portfolio
      </span>
    </a>

    <div class="slot">
      <slot></slot>
    </div>
    <div class="menu">
      <span></span>
    </div>
  </header>
`;

class LayoutHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('layout-header', LayoutHeader);
