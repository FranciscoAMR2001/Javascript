let num = [5,8,2,9,3]
num.push(1) // adiciona o elemento entre parenteses a ultima posição do array
num.sort() // coloca os elementos do array em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // mostra o comprimeto do array
console.log(num[0]) // mosta o valor que esta na posição escrita entre colchetes
let pos = num.indexOf(2)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}