{
    modules: [
        {
            nome: "@babel/core",
            desc: "",
            type: "dev"
        },
        {
            nome: "@babel/preset-env",
            desc: "faz o navegador entender funcoes que o navegador não entendo como import arrow function, class, etc",
            type: "dev"
        },
        {
            nome: "@babel/preset-react",
            desc: "o mesmo que o env porem do react como o jsx",
            type: "dev"
        },
        {
            nome: "webpack",
            desc: "",
            type: "dev"
        },
        {
            nome: "webpack-cli",
            desc: "",
            type: "dev"
        },
        {
            nome: "react",
            desc: ""
        },
        {
            nome: "react-dom",
            desc: ""
        },
        {
            nome: "babel-loader",
            desc: "faz o webpack entender arquivos js",
            type: "dev"
        },
        {
            nome: "webpack-dev-server",
            desc: "criar um servidor local para e sempre que salvamos ele recarrega servidor e a pagina do browser automaticamente",
            type: "dev"
        },
        {
            nome: "style-loader",
            desc: "pega o css do arquivo e joga dentro do codigo em uma tag style",
            type: "dev"
        },
        {
            nome: "css-loader",
            desc: "faz o codigo css deixar importar alguma coisa como na tag background que podemos importar uma imagem, ou mesmo importar um css dentro do css com a tag @import",
            type: "dev"
        },
        {
            nome: "file-loader",
            desc: "permite importar uma imagem ou arquivo dentro do codigo js ex: import './batata.jpg' ",
            type: "dev"
        },
        {
            nome: "@babel/plugin-proposal-class-properties",
            desc: "",
            type: "dev"
        },
        {
            nome: "prop-types",
            desc: "ajuda o desenvolvedor adicionando o tipo da propriedade e se é requirida, no PropTpes, mostrando um erro no console"
        }
    ]
}