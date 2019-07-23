export const doc = {
  modulo: {
    name: 'eslint-plugin-react-hooks',
    dev: true,
    desc: `
      avisa se estamos usando o 
      react hooks de forma errada
      ps: adicionar no .eslintrc
    `,
  },
  hooks: [
    {
      name: 'useState',
      desc: 'funciona como o state/setstate. Mas pode ser usando sem classe',
    },
    {
      name: {
        name: 'useEffect',
        desc: `
          - fuunciona como o componentDidMount/Update, etc
          - se usado com o segundo argumento vazio ele roda apenas 1x
          - se colocar um return com uma funcao no final, ele age como um didUnmount,
              util para remover o eventListener quando o componente deixa
              de existir
        `,
      },
    },
    {
      name: 'useMemo',
      desc: `
        usado para rodar uma função apenas quando um 
          state indicado for alterado, deixando a aplicação
          mais leve
      `,
    },
    {
      name: 'useCallback',
      desc: `
        igual o useMemo, mas no lugar de criar uma variavel, 
          ele cria uma função, util para deixar codigo mais leve
          pois se não ele iria recriar a mesma função sempre que
          que algum state é alterado, usando o useCallback, vc indica
          qual state ele deve ouvir, para recriar a função
      `,
    },
  ],
};
