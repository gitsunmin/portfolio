const flags = {
  sections: {
    hello: true,
    'about-me': true,
    experience: true,
    skills: true,
  },
};

function main() {
  Object.keys(flags.sections).forEach((section) => {
    if (!flags.sections[section]) {
      document.querySelector(`#${section}`)?.remove();
    }
  });
}

main();
