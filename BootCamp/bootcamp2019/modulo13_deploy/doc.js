export default {
    modules: [
        {
            name: 'react-native-code-push',
            desc: 'atualizar o app mesmo depois de estar na loja',
        },
        {
            name:'react-native-onesignal',
            desc: 'biblioteca do oneSignal para trabalhar com push notificaltion',
            url: 'https://github.com/geektimecoil/react-native-onesignal',
            url2: 'https://app.onesignal.com',
            config: {
                android: [
                    {
                        passo1: 'Editar o arquivo AndroidManifest.xml',
                        dados: `adicionar no activity:
                            android:launchMode="singleTop"    
                        `
                    },
                    {
                        passo2: `siga a instrucoes do site...`,
                        url: 'https://documentation.onesignal.com/docs/react-native-sdk-setup'
                    },
                    {
                        passo3: 'crie o app no opensignal e configure o firebase da googgle'
                    }
                ],
                ios: [
                    {
                        passo1: `
                            vai no site do onsignal e adicione o app
                            na hora de pedir o certificado, adicione use o provisionator da one signal(google it) 
                            e baixe o certificado p12
                        `

                    }
                ]
            }
        }
    ],
    deploy: [
        {
            android: [
                {
                    name: 'trocar nome do app',
                    desc: 'altere o arquivo strings.xml na tag app_name',
                    path: 'android/app/src/main/res/values/strings.xml'
                },
                {
                    name: 'gerar icone',
                    url: 'https://apetools.webprofusion.com/#/tools/imagegorilla',
                    desc: [
                        {
                            passo1: 'siga as instrucoes do site gerar as imagens para android e ios'
                        },
                        {
                            passo2: 'vai na pasta res e apague tudo que comece com mipmap e coloque as pastas drawable na pasta res'
                        },
                        {
                            passo3: 'edite o arquivo AndroidManifest.xml e faça se seguinte edicao:',
                            
                            antes: `
                                android:icon="@mipmap/ic_launcher"
                                android:roundIcon="@mipmap/ic_launcher_round"
                            `,
                            depois: `
                                android:icon="@drawable/icon"
                                android:roundIcon="@drawable/icon"
                            `
                        }
                    ] 

                },
                {
                    name: 'gerar splashscreen',
                    desc: [
                        {
                            passo1: 'crie o arquivo colors.xml dentro da pasta values',
                            path_colors: 'android/app/src/main/res/values/colors.xml',
                            conteudo: `
                            <?xml version="1.0" encoding="utf-8"?>

                            <resources>
                                <color name="primary">#0000</color>
                            </resources>
                            `
                        },
                        {
                            passo2: 'crie um arquivo background_splash.xml dentro da pasta drwable',
                            path: 'android/app/src/main/res/drawable/background_splash.xml',
                            conteudo: `
                            <?xml version="1.0" encoding="utf-8" ?>

                            <layer-list xmlns:android="http://schemas.android.com/apk/res/android">
                                <item android:drawable="@color/primary" />
                            
                                <item 
                                    android:height="200dp" 
                                    android:width="200dp" 
                                    android:drawable="@drawable/icon"
                                    android:gravity="center"    
                                />
                            </layer-list>
                            `
                        }, 
                        {
                            passo3: 'edite o arquivo styles.xml e adicione um novo style SplashTheme',
                            path: 'android/app/src/main/res/values/styles.xml',
                            conteudo_append: `
                            <style name="SplashTheme" parent="Theme.AppCompat.Light.NoActionBar">
                                <item name="android:windowBackground">@drawable/background_splash</item>
                            </style>
                            `
                        },
                        {
                            passo4: `
                                edite o arquivo AndroidManifest.xml e adicione
                                dentro do activity:
                                    android:theme="@style/SplashTheme"
                            `
                        }
                    ]
                },
                {
                    name: 'Editar o ID do pacote da aplicação',
                    desc: 'Edite o arquivo bundle.gradle',
                    path: 'android/app/build.gradle',
                    passos: [
                        'dentro de defaultConfig { ',
                        'edite o applicationId'
                    ]
                }
            ],
            outros: [
               
            ]
        }
    ]
};
