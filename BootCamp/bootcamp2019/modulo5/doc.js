const doc = [ erro // erro proposital para ficar visivel no vscode

    {
        instalacao: [
            {
                inicio: [
                    "yarn create react-app nome",
                    "apagar eslintconf do arquivo package.json",
                    "apagar manifest.json"
                ]
            }
        ]
    },
    {
        configuracao: [
            {
                nome: "editorconfig",
                desc: "extensao do editorconfig no vscode para configurar eslint prettier"
            },{
                nome: "prettieer e eslint",
                desc: "yarn add prettier eslint-config-prettier eslint-plugin-prettier  babel-eslint"
            }
        ]
    },
    {
        modulos: [
            {
                nome: "react-router-dom",
                desc: "permite rotas dentro do react"
            },
            {
                nome: "styled-components",
                desc: "modifica forma de escrever o css no react e react native",
                dica: "instale a extensao styled no vscode para ele entender o css dentro do js"
            }, {
                nome: "react-icons",
                desc: "vem com os icones mais famosos"
            },
            {
                nome: 'prop-types',
                desc: 'Garante que os parametros sejam enviados da forma esperada, caso contrario tera um erro no console '
            }
        ]
    },{
        erros: [
            {
                nome: "erro no yarn start",
                fix: "echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p"
            }
        ]
    }
]
