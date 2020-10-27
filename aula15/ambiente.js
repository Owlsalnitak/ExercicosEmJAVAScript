let num = [5,4,7,8]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log9(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
