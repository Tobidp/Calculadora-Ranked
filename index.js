let player = "Maya" //nome da minha gata
let totalJogos = rankedCalc (100, 25)

function rankedCalc (totalVictory, defeats) {
    let calc = (totalVictory - defeats)
    return calc
}

if (totalJogos <= 10) {
    console.log("O jogador " + player + " é da classificação Ferro")
} else if (totalJogos > 11 && totalJogos < 20) {
    console.log("O jogador " + player + " é da classificação Bronze")
} else if (totalJogos > 21 && totalJogos < 50) {
    console.log("O jogador " + player + " é da classificação Prata")
} else if (totalJogos > 51 && totalJogos < 80) {
    console.log("O jogador " + player + " é da classificação Ouro")
} else if (totalJogos > 81 && totalJogos < 90) {
    console.log("O jogador " + player + " é da classificação Diamante")
} else if (totalJogos > 91 && totalJogos < 100) {
    console.log("O jogador " + player + " é da classificação Lendario")
} else if (totalJogos >= 101) {
    console.log("O jogador " + player + " é da classificação Imortal")
} else {
    console.log("Jogador " + player + " não está no ranqueado")
}
