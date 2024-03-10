const flags = {
  sections: {
    hello: true,
    'about-me': true,
    skills: true,
    experience: true,
  },
};

function main() {
  Object.keys(flags.sections).forEach((section) => {
    if (!flags.sections[section]) {
      document.querySelector(`#${section}`).style.display = 'none';
    }
  });
}

main();
