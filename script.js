const prompt = require("prompt-sync")()

const tam = Number(10)
pilha = [tam]
let topo 

function inicializa(){
    topo = -1
}

function verificaCheia(){
    if(topo == tam-1){
        return 1
    }else{
        return 0
    }
}

function verificaVazia(){
    if(topo == -1){
        return 1
    }else{
        return 0
    }
}

function empilha(){
    let valor = Number(prompt("Digite um valor: "))
    let pilhaCheia = verificaCheia()
    if(pilhaCheia == 1){
        console.log("Pilha cheia \n")
    }else{
        topo ++
        pilha[topo] = valor
        return valor
    }
}

function desempilha(){
    let pilhaVazia = verificaVazia()
    if(pilhaVazia == 1){
        print("Pilha vazia \n")
    }else{
        topo--
    }
}
function imprimir(){
    console.log("\n--- PILHA ---\n")
    for(let x = 0; x <= topo; x++){
        console.log(" ", pilha[x])
    }
}

inicializa()
imprimir()
empilha()
empilha()
empilha()
imprimir()
empilha()
imprimir()
desempilha()
imprimir()
desempilha()
imprimir()
