export function soma(a,b) {
    return a + b;
}

export function sub(a,b) {
    return a - b
}

export default function toma(...tudo) {
    return tudo.reduce((total, proximo) => total + proximo)
}