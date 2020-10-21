const usuario = {
  nome: "Ismael",
  empresa: {
    nome: "Roketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
      rua: "Rua Guilherme Guembala",
      numero: 260,
    },
  },
};

console.log(
  `A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`
);
