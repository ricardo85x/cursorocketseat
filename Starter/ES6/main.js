// array
const ar = [2,4,6,8];

const novo = ar.map((item) => {
    return item * 2    
})
//console.log(novo)


const sum = ar.reduce((total, next) => {
    return total + next;
})

console.log('sum',sum)

const filter = ar.filter((item) => item % 2 == 0)

//console.log(filter)

const find = ar.find((item) => item === 99)

//console.log(find)

// desesstruturacao


// const usuario = {
//     nome: 'Ricardo',
//     idade: 28,
//     endereco: {
//         cidade: 'Sao Paulo',
//         estado: 'SP',
//         nome: 'Rua bonita'
//     }
// }

// const { nome, idade, endereco: { nome:le_nome} } = usuario;

// console.log(le_nome)

// rest

// const usuario = {
//     nome: 'ricardo',
//     idade: 22,
//     empresa: 'ovos'
// }

// const { nome, ...resto} = usuario

// //console.log(nome, resto)

// const arr = [1,2,3,4]

// const { a,b,...c } = arr

// //console.log(c)


// function soma(...tudo) {
//     return tudo.reduce((a, b) => {
//         console.log("total", a)
//         console.log("proximo", b)
//         return a + b
//     })
// }


// console.log("soma", soma(1,2,3,4,5,6,7,8,9,10))


// // spread

// const arr1 = [1,2,3]

// const arr2 = [4,5,6]

// const arr3 = [ ...arr1, ...arr2]

// console.log(arr3)

// const usuario1 = {
//     nome: 'Ricardo',
//     idade: 23,
//     empresa: 'pog'
// }

// const usuario2 = { ...usuario1, nome: 'peba'}

// console.log(usuario2)

// template literal

// const nome = 'Ricardo'
// const idade = 33

// console.log(`meu nome eh ${nome} e tenho ${idade}`)

// object shor

// const nome = "ricardo"
// const idade = 20

// const usuario = {
//     nome,
//     idade,
//     empresa: 'pog'
// }

import tomaDistraido, { soma, sub as subtracao } from './funcoes'
import soma2 from './soma'
import * as tudo from './funcoes';


console.log(soma2(10,2))
console.log(soma(222,2))
console.log(tudo.soma(3,9))

console.log(subtracao(20,10))

console.log(tomaDistraido(2,4,6,8,10))