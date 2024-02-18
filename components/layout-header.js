const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .profile {
    display: flex;
    align-items: center;
  }

  .menu {
    padding: 0 20px;
    display: flex;
    align-items: center;
  }

  .profile img {
    margin: 10px;
  }

  a {
    color: white;
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
      <a href="https://gitsunmin.github.io/">Blog</a>
    </div>
  </header>
`;

export default class LayoutHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
