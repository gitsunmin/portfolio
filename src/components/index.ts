import LayoutFooter from './layout/footer';
import LayoutHeader from './layout/header';
import LayoutMain from './layout/main';
import ProfileImage from './ui/profile-image';
import LabeledIcon from './ui/labeled-icon';
import SectionTitle from './ui/section-title';
import SectionWrapper from './ui/section-wrapper';
import HelloSection from './section/hello/section';
import GlobalGreetings from './section/hello/globalGreetings';
import AboutMeSection from './section/about_me/section';
import AboutMeProfile from './section/about_me/profile';
import SkillsSection from './section/skills/section';
import SkillsScene1 from './section/skills/scene1';
import ExperienceSection from './section/experience/section';
import ExperienceProjectListWrapper from './section/experience/project/listWrapper';
import ExperienceProjectList from './section/experience/project/list';
import ExperienceActivityList from './section/experience/activity/list';
import ExperienceActivityListWrapper from './section/experience/activity/listWrapper';

export const defineComponents = () => {
  customElements.define('profile-image', ProfileImage);
  customElements.define('labeled-icon', LabeledIcon);
  customElements.define('about-me-section', AboutMeSection);
  customElements.define('about-me-profile', AboutMeProfile);
  customElements.define('section-title', SectionTitle);
  customElements.define('section-wrapper', SectionWrapper);
  customElements.define('layout-footer', LayoutFooter);
  customElements.define('layout-header', LayoutHeader);
  customElements.define('layout-main', LayoutMain);
  customElements.define('hello-section', HelloSection);
  customElements.define('global-greetings', GlobalGreetings);
  customElements.define('skills-section', SkillsSection);
  customElements.define('skills-scene1', SkillsScene1);
  customElements.define('experience-section', ExperienceSection);
  customElements.define(
    'experience-project-list-wrapper',
    ExperienceProjectListWrapper
  );
  customElements.define('experience-project-list', ExperienceProjectList);
  customElements.define('experience-activity-list', ExperienceActivityList);
  customElements.define(
    'experience-activity-list-wrapper',
    ExperienceActivityListWrapper
  );
};
