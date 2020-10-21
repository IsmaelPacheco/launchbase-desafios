const user = {
  name: "Ismael",
  age: 26,
  technologies: [
    {
      name: "C++",
      especialidade: "Desktop",
    },
    {
      name: "Python",
      especialidade: "Data Science",
    },
    {
      name: "JavaScript",
      especialidade: "Web/Mobile",
    },
  ],
};

console.log(
  `O usuário ${user.name} tem ${user.age} e usa a tecnologia ${user.technologies[0].name} com especialidade em ${user.technologies[0].especialidade}.`
);
