function atualizaPontos(){
    let campoRecord = document.getElementById("record")
    campoRecord.textContent = 0
    if( localStorage.getItem("record") != null &&
        localStorage.getItem("record") != undefined ){
        campoRecord.textContent = ranking[0].record
    }
}

function novoRecord(){
    let pontos = document.getElementById("pontuacao").value
    let nome = prompt("Qual o Seu nome?")
    let agora = Date.now()

    let novoRecord = {
        timestamp : agora,
        nomedoJogador: nome,
        record: pontos
    }

    let ranking = JSON.parse(localStorage.getItem("record"))
    if (pontos > ranking[0]) {
        ranking.unshift(novoRecord)
    }

    localStorage.setItem("record", JSON.stringify(ranking))
    atualizaPontos()
}

var ranking = [
    {
        timestamp: "21/01/2021",
        nomedoJogador: "Patrick",
        record: 500
    },
    {
        timestamp: "21/01/2021",
        nomedoJogador: "Gabriel",
        record: 100
    },
    {
        timestamp: "21/01/2021",
        nomedoJogador: "Lucca",
        record: 300
    },
]
localStorage.setItem("record", JSON.stringify(ranking))