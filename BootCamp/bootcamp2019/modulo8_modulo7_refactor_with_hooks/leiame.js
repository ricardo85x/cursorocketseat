export const doc = {
    modulos: [
        {
            nome: 'react-router-dom',
            desc: 'tratar rotas no react',
        },
        {
            nome: 'styled-components',
            desc: 'lib de estilo',
        },
        {
            nome: 'react-icons',
            desc: 'pacote de icons ',
        },
        {
            nome: 'polished',
            desc: 'tratar cores',
        },
        {
            nome: 'json-server',
            desc: 'modulo que cria uma api fake apartir de um arquivo de json',
            tipo: 'global, não instale no seu projeto...',
        },
        {
            name: 'axios',
            desc: 'tratar requests ',
        },
        {
            name: 'redux e react-redux',
            desc: 'google it please...',
        },
        {
            name: 'propTypes',
            desc: 'google it',
        },
        {
            name: 'reactotron-react-js e reactotron-redux',
            desc: 'o nome ja diz tudo',
        },
        {
            name: 'immer',
            desc:
                'permite trabalhar com objetos imutaveis modificando os valores e atualizando eles',
        },
        {
            name: 'redux-saga',
            desc: 'permite o usuado de middleware nas actions do redux',
        },
        {
            name: 'reactotron-redux-saga',
            desc: 'ajuda a debugar o redux saga com o reactotron',
        },
        {
            name: 'react-toastify',
            desc: 'exibe mensagens de aviso/warning/erro para o usuario',
        },
        {
            name: 'history',
            desc: 'controla a history do navegador que neste caso são as rotas',
        },
    ],
    hooks: [
        {
            name: 'useState',
            desc:
                'funciona como o state/setstate. Mas pode ser usando sem classe',
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
