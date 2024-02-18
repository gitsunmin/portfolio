import HistorySection from './history-section.js';
import SectionTitle from './section-title.js';
import SectionWrapper from './section-wrapper.js';
import LayoutFooter from './layout-footer.js';
import LayoutHeader from './layout-header.js';
import LayoutMain from './layout-main.js';
import HelloSection from './hello-section.js';

export const defineComponents = () => {
  customElements.define('history-section', HistorySection);
  customElements.define('section-title', SectionTitle);
  customElements.define('section-wrapper', SectionWrapper);
  customElements.define('layout-footer', LayoutFooter);
  customElements.define('layout-header', LayoutHeader);
  customElements.define('layout-main', LayoutMain);
  customElements.define('hello-section', HelloSection);
};
