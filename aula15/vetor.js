let valores = [7, 5, 3, 2, 8, 0]
valores.sort()
valores.indexOf(7) //buscar valor na posição desejada

/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}