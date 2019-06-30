export default { erro // adicionado este erro para o vscode deixar o arquivo vermelho e ser mais facil achar :P
  modules: [
    {
      nome: 'sucrase',
      desc: 'adiciona suporte a usar import blala from, igual usado no react',
      obs: 'devemos rodar sucrase-node server.js',
      obs2: 'para usar o nodemon crie o arquivo nodemon.json',
      obs3: ' e adicione a tag execMap -> js : sucrase-node',
    },
    {
      nome: 'nodemon',
      desc: 'restart node, sempre que o arquivo é editado',
    },
    {
      nome: 'sequelize',
      migrations: [
        'yarn sequelize migrate:create --name=create-users',
        'yarn sequelize migrate:undo', // desmerdify a ultima
        'yarn sequelize migrate:undo:all', // desmerdify tudo
      ],
      dicas: [
        relacionamento: 'quando se tem mais de 1 relacionamento devemos colocar "as" no belongsTo '
      ]
    },
    {
      nome: 'bcryptjs',
      desc: 'gera hash para usar por exemplo em senha de usuarios no banco',
    },
    {
      nome: 'jsonwebtoken',
      desc: 'cria o token JWT (Json Web token)',
    },
    {
      nome: 'yup',
      desc: 'validacao de campos ',
    },
    {
      nome: "multer",
      desc: "modulo para tratar multform-data para upload de imagens e afins"
    },
    {
      nome: "date-fns",
      desc: "para tratar datas",
      obs: "para instalar a ultima adicione @next ex: yarn install data-fns@next"
    },
    {
      nome: "mongoose",
      desc: "para trabalhar com o mongo db no node"
    }, {
      nome: "nodemailer",
      desc: "envio de emails..."
    },
    {
      nome: "express-handlebars",
      desc: "possibilita criação de template html"
    },
    {
      nome: "nodemailer-express-handlebars",
      desc: "integração do nodemailer com o handlebars"
    },
    {
      nome: 'bee-queue',
      desc: 'gerenciamento de filas, exemplo: manda enviar email, e se falhou(smtp offline) tenta novamente em x minutos',
      desc2: 'existe outros com mais opcoes(prioridade por exemplo) mas o bee-queue é mais rapido por ser leve'
    },
    {
      nome: 'express-async-errors',
      desc: 'por padrao o express nao reporta os erros nos methodos async, este modulo ativa isto'
    },
    {
      nome: 'youch',
      desc: 'faz uma tratativa das msg de erro para ser mais facil debugar'
    },
    {
      nome: 'dotenv',
      desc: 'ler variaveis de ambiente do arquivo .env'
    }
  ],
  docker: [
    {
      banco: [
        {
          banco_postgres: {
            criar:
              'docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres',
            obs:
              'na porta:porta a primeira é a porque que vc vai acessar local e a segunda é a porta real',
            link: 'https://hub.docker.com/_/postgres',
          }
        },
        {
          banco_mongo: {
            criar: 'docker run --name mongobarber -p 27017:27017 -d -t mongo'
          }
        },
        {
          banco_redis: {
            criar: 'docker run --name redisbarber -p 6379:6379 -d -t redis:alpine',
            obs: 'banco de chave/valor muiiito rapido, porem nao oferece template como o mongo',
            obs2: 'alpine indica só com as features mais essenciais, assim fica mais leve '
          }
        }

      ]
    },
    {
      dicas: {
        comandos: [
          {
            listagem: 'docker ps',
            desc: 'lista os dockers ativos',
          },
          {
            basico: 'docker start/stop/log database',
          },
        ],
      },
    },
  ],
  ferramentas: [
    {
      banco: [
        {
          postbird: {
            site: 'https://electronjs.org/apps/postbird',
          },
        },
      ],
    },
    {
      errors: [{
        nome: 'sentry',
        desc: 'ferramenta para monitoramento de erros,',
        desc2: 'uma possibilidade é criar um issue no github e depois podemos repassar para algum arrumar o bug',
        url: 'sentry.io',

      }]
    }
  ],
  servicos: [{
    email: [
      {
        nome: "mailtrap",
        url: "mailtrap.io",
        desc: "envios de email for free para ambiente dev",
        desc2: "o email vai chegar apenas no mailtrap e nao no destinatario real"
      }
    ]
  }],
  beautify: [
    {
      eslint: [
        {
          instalacao: [
            'yarn add eslint -D',
            'yarn eslint --init',
            'To check syntax, find problems, and enforce code style',
            ' JavaScript modules (import/export)',
            'None of thes',
            'Node',
            'Use a popular style guide ',
            'Airbnb (https://github.com/airbnb/javascript) ',
            'JavasScript',
            'Apagar o package-lock.json',
            'rode o comando yarn para concluir',
            'verifique o arquo .eslintrc.js para mais infos',
          ],
        },
        {
          commandline: [
            'yarn eslint --fix src --ext .js',
            'comando que arruma tudo na pasta e extensao apontada',
          ],
        },
      ],
      prettier: [
        {
          instalacao: [
            'yarn add prettier eslint-config-prettier eslint-plugin-prettier -D',
          ],
          configuracao: [
            'edite o arquivo .eslintrc.js',
            'edite/crie o arquivo .prettierrc',
          ],
        },
      ],
    },
  ],
  tips: [
    {
      nome: 'JWT',
      opcooes: [
        {
          nome: 'padroes',
          desc:
            'por padrao usamos texto Bearer no inicio do token pu usamos o auth type Bearer Auth',
        },
      ],
    },
  ],
};
