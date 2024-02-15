class ScrollHeader extends HTMLElement {
  constructor() {
    super();
    this.lastScrollTop = 0;
    this.visible = true;
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    /* html */
    this.shadowRoot.innerHTML = `
        <style>
          @import "/components/header/index.css";
        </style>

        <header>
          <slot name="profile-link"></slot>
          <slot name="menu"></slot>
        </header>
      `;
  }

  connectedCallback() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const currentScrollTop = document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop && this.visible) {
      this.style.transform = 'translateY(-100%)';
      this.visible = false;
    } else if (currentScrollTop < this.lastScrollTop && !this.visible) {
      this.style.transform = 'translateY(0)';
      this.visible = true;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}

customElements.define('layout-header', ScrollHeader);
