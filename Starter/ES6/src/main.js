// alert("olocomeu 2")


class Starter {

    arNum = [1,2,3,4,5,6,7,8,9,10]

    pessoa = {
        nome: "Ricaardo",
        idade: 12,
        endereco: {
            nome: "rua xpto",
            numero: 32,
            estado: "tangamandapio"
        }
    }

    somaArr = () => {
        const items = [1,2,3,4,5,6,7,8,9,10]

        const soma = items.reduce((anterior, atual) => anterior + atual)

        console.log("######### INICIO SOMA AR #############")
        console.log("ATUAL", items)
        console.log("SOMA", soma)
        console.log("######### FIM SOMA AR #############")

    }

    filtroArr = (comparar) => {
        
        const filtrado_par = this.arNum.filter((item) => {
            return item % 2 == 0
        })

        console.log("######### INICIO FILTRO AR #############")
        console.log("ATUAL", this.arNum)
        console.log("FILTRO PAR", filtrado_par)
        console.log("######### FIM FILTRO AR #############")
    
    }

    destruturar = () => {

        const { endereco } = this.pessoa

        console.log( endereco )

        const { nome,...resto } = this.pessoa

        console.log("resto", resto)

        
    }

}

//var starter = new Starter();
//starter.somaArr()
//starter.filtroArr(4)
//starter.destruturar()

/*

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve("ok")}, 2000);
})


async function executaPromisse() {
    const response = await minhaPromise()

    console.log(response)
}

executaPromisse();

minhaPromise().then(response => {
    console.log(response)
})
.catch(err => {

})

*/


// import axios from 'axios'

// class Api {
//     static async getUserInfo(username) {
//         const response = await axios.get(`https://api.github.com/users/${username}`)

//         console.log(response)

//     }
// }


// Api.getUserInfo('ricardo85x')

import api from './api'

class App {
    constructor() {
        this.repositories = [];

        this.fomrEl = document.getElementById("repo-form")
        this.listEl = document.getElementById("repo-list");
        this.inputEl = document.querySelector("input[name=repository]");

        this.registerHandles();

    }

    registerHandles() {

        this.fomrEl.onsubmit = event =>  this.addRepository(event);

    }

    setLoading(loading = true ) {
        if (loading) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando...'))
            loadingEl.setAttribute('id', 'loading')

            this.fomrEl.appendChild(loadingEl)
        } else {
            const loadingEl = document.querySelector('[id=loading]')
            if (loadingEl) {
                loadingEl.remove()
            }
        }
    }

    async addRepository(event) {
        event.preventDefault()



        const repoInput = this.inputEl.value;

        if (repoInput.length > 0) {

            this.setLoading()

            try {

                const response = await api.get(`repos/${repoInput}`)
                const { name, description, html_url, owner: { avatar_url} } = response.data

                this.repositories.push({
                    name,
                    description,
                    avatar_url,
                    html_url
                })





            } catch(e){


                console.log('deu ruim', e)
            }


        }

        // this.repositories.push({
        //     name: 'Repositorio Pog',
        //     description: 'Repositorio do Pog para fazer muitas pogagens belas',
        //     avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
        //     html_url: 'https://github.com/rocketseat.com.br'
        // })

        // console.log(this.repositories)

        this.setLoading(false)


        this.render()
    }

    render() {

        this.listEl.innerHTML = ''

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank' )
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))


            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)


            this.listEl.appendChild(listItemEl)

        });
    }

}

new App();