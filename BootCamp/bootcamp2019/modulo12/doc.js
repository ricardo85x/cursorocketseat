export default {
    modulos: [
        {
            name: 'react-app-rewired',
            dev: true,
            desc: 'possibilita alterar alguns configurações da aplicação como o jest do react',
            conf: 'no package.json troque o react-scripts por react-app-rewired no start, build, test'
        },
        {
            name: "@testing-library/react",
            desc: "testar os componentes no react",
            dev: true
        },
        {
            name: "@testing-library/react",
            desc: "testar os componentes e deixar procurar elementos no DOM",
            dev: true

        },
        {
            name: "@types/jest",
            dev: true,
            desc: 'adicionar o auto complete nos testes'
        }
    ]   
}