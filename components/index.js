import LayoutFooter from './layout/footer.js';
import LayoutHeader from './layout/header.js';
import LayoutMain from './layout/main.js';

import ProfileImage from './ui/profile-image.js';
import LabeledIcon from './ui/labeled-icon.js';

import SectionTitle from './ui/section-title.js';
import SectionWrapper from './ui/section-wrapper.js';

import HelloSection from './section/hello/section.js';

import AboutMeSection from './section/about_me/section.js';
import AboutMeScene1 from './section/about_me/scene1.js';

import SkillsSection from './section/skills/section.js';
import SkillsScene1 from './section/skills/scene1.js';

import ExperienceSection from './section/experience/section.js';
import ExperienceScene1 from './section/experience/scene1.js';

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
  customElements.define('experience-section', ExperienceSection);
  customElements.define('experience-scene1', ExperienceScene1);
};
