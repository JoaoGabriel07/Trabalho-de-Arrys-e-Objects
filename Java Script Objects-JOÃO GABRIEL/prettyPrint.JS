function prettyPrint(obj) {
    console.log(JSON.stringify(obj, null, 2));
  }
  

let meuObjeto = {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua do Meio",
      cidade: "São Paulo",
      estado: "SP"
    }
  };