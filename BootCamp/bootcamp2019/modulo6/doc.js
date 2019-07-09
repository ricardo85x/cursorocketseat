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
