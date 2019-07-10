const doc = [
    {
        modulos: [
            {
                nome: 'eslint',
                desc: 'yarn eslint --init',
            },
            {
                nome:
                    'prettier eslint-config-prettier eslint-plugin-prettier  babel-eslint',
            },
            {
                nome: 'react-navigation react-native-gesture-handler',
                desc: 'modulo para navegão e uso do touch para navegacao',
                dependencias: [
                    {
                        nome:
                            'apos instalar o gesture-handle temos que linkar ela ao react native (criar arquivos necessarios dentro da pasta ios e android)',
                        comando:
                            'react-native link react-native-gesture-handler',
                        extras: [
                            'para o android temos que ir no site com o docs do handler e fazer os passos a mais',
                            'apos todo react-native link, temos que rodar o react-native run-android/ios ',
                        ],
                        bugs: [
                            {
                                nome:
                                    'com o android X esta dando bug no gesture handle e outros modulos, para resolver temos que instalar o jetifier',
                                comando: [
                                    'yarn add jetifier -D',
                                    'yarn jetify', // nao confundir com yarn jetifier
                                    '# agora sim podemos usar o react-native run-android',
                                ],
                            },
                        ],
                    },
                ],
            },

            {
                nome: 'styled-components',
                desc: 'configuração de css usando js',
                limitacoes: [
                    'nao é possivel usar encadeamento',
                    'não é possivel usar estilo global, ja que nao existe classe id nem tag',
                    'não é possivel usar porcentagem',
                ],
            },
            {
                nome: 'react-native-vector-icons',
                desc: 'biblioteca de icones',
                outros: ['tem que rodar o react link e o jetfy'],
            },
            {
                nome: 'axios',
                desc: 'trabalhar com api ',
            },
            {
                nome: '@react-native-community/async-storage',
                desc:
                    'funciona como o localStorage que temos para o browser, mas no dispositivo',
                outros: 'tem que fazer o link, jestify e o run-android/ios',
            },
            {
                nome: 'prop-types',
                desc: 'fazer a validacao das propriedades',
            },
        ],
    },
    {
        ferramentas: [
            {
                nome: 'reactron',
                desc:
                    'utilitario para debugar app usando react native entre outros',
                dependencias: [
                    {
                        nome: 'instalar modulo no projeto',
                        comando: 'yarn add reactotron-react-native',
                    },
                ],
                config: [
                    {
                        nome: 'android com linux',
                        desc:
                            'temos que redirecionar a porta 9090 se estamos no linux e emulador do android',
                        comando: 'adb reverse tcp:9090 tcp:9090',
                    },
                ],
            },
        ],
    },
];

console.log(doc);
