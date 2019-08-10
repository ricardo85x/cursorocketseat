export default {
  modules: [
    {
      name: "customize-cra e react-app-rewired",
      desc:
        "permite modificar configurações do babel em um app criado com o create react app",
      devel: true
    },
    {
      name: "babel-plugin-root-import",
      desc: `permite modificar os import dos arquivos 
            dentro do app sem usar aqueles .. para dizer
            que esta no nivel anterior, etc`,
      devel: true
    },
    {
      name: "eslint-import-resolver-babel-plugin-root-import",
      desc:
        "para o eslint não reclamar do ~ no import dos aruivos com o plugin root-import",
      devel: true
    },
    {
      name: "redux-persist",
      desc:
        "armazenar dados do redux no local storage ou outro storage configurado, magicamente"
    }
  ],
  redux: [
    {
      nome: "nova pasta store"
    },
    {
      nome: "modulos",
      desc: {
        nome:
          "redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer "
      }
    }
  ],
  outros: {
    sites: [
      {
        name: "http://avatars.adorable.io/",
        desc: "para pegar uma imagem para testar no site"
      }
    ]
  }
};
