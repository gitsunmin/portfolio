import LayoutFooter from './layout-footer.js';
import LayoutHeader from './layout-header.js';
import LayoutMain from './layout-main.js';

import ProfileImage from './profile-image.js';
import LabeledIcon from './labeled-icon.js';

import SectionTitle from './section-title.js';
import SectionWrapper from './section-wrapper.js';

import HelloSection from './hello-section.js';

import AboutMeSection from './about-me-section.js';
import AboutMeScene1 from './about-me-scenes/about-me-scene1.js';

import SkillsSection from './skills-section.js';
import SkillsScene1 from './skills-scenes/skills-scene1.js';

export const defineComponents = () => {
  customElements.define('profile-image', ProfileImage);
  customElements.define('labeled-icon', LabeledIcon);
  customElements.define('about-me-section', AboutMeSection);
  customElements.define('about-me-scene1', AboutMeScene1);
  customElements.define('section-title', SectionTitle);
  customElements.define('section-wrapper', SectionWrapper);
  customElements.define('layout-footer', LayoutFooter);
  customElements.define('layout-header', LayoutHeader);
  customElements.define('layout-main', LayoutMain);
  customElements.define('hello-section', HelloSection);
  customElements.define('skills-section', SkillsSection);
  customElements.define('skills-scene1', SkillsScene1);
};
