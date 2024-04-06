// import LayoutFooter from './layout/Footer';
// import LayoutHeader from './layout/Header';
// import LayoutMain from './layout/main';
// import ProfileImage from './ui/profile-image';
import LabeledIcon from './ui/labeled-icon';
// import SectionTitle from './ui/SectionTitle';
import SectionWrapper from './ui/section-wrapper';
// import HelloSection from './section/hello/section';
// import GlobalGreetings from './section/hello/GlobalGreetings';
// import AboutMeSection from './section/about_me/AboutMeSection';
// import AboutMeProfile from './section/about_me/profile';
import SkillsSection from './section/skills/section';
import SkillsList from './section/skills/list';
// import ExperienceSection from './section/experience/section';
// import ExperienceProjectListWrapper from './section/experience/project/listWrapper';
// import ExperienceProjectList from './section/experience/project/list';
import ExperienceActivityList from './section/experience/activity/list';
import ExperienceActivityListWrapper from './section/experience/activity/listWrapper';

export const defineComponents = () => {
  // customElements.define('profile-image', ProfileImage);
  customElements.define('labeled-icon', LabeledIcon);
  // customElements.define('about-me-section', AboutMeSection);
  // customElements.define('about-me-profile', AboutMeProfile);
  // customElements.define('section-title', SectionTitle);
  customElements.define('section-wrapper', SectionWrapper);
  // customElements.define('layout-footer', LayoutFooter);
  // customElements.define('layout-header', LayoutHeader);
  // customElements.define('layout-main', LayoutMain);
  // customElements.define('hello-section', HelloSection);
  // customElements.define('global-greetings', GlobalGreetings);
  customElements.define('skills-section', SkillsSection);
  customElements.define('skills-list', SkillsList);
  // customElements.define('experience-section', ExperienceSection);
  // customElements.define(
  //   'experience-project-list-wrapper',
  //   ExperienceProjectListWrapper
  // );
  // customElements.define('experience-project-list', ExperienceProjectList);
  customElements.define('experience-activity-list', ExperienceActivityList);
  customElements.define(
    'experience-activity-list-wrapper',
    ExperienceActivityListWrapper
  );
};
