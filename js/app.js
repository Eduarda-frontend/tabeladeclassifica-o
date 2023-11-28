
let jogadores = [];
const elementoTabela = document.getElementById('tabelaJogadores');
exibirNaTela();

function inserirNovoJogador() {
    let nome = document.getElementById('nomeJogador');
    nome = document.getElementById('nomeJogador').value;
    
    let novoJogador = ({ nome: nome, vitorias: 0, empate: 0, derrotas: 0, pontos: 0 });
    jogadores.push(novoJogador);
    document.getElementById('nomeJogador').value = '';
    
    exibirNaTela();
    salvarJogadores()
}

function zerarPontuacao(){

    jogadores.forEach(jogador =>{
        jogador.vitorias = 0;
        jogador.empate = 0;
        jogador.derrotas = 0;
        jogador.pontos = 0;
    })
    exibirNaTela();
}

// function salvarJogadores() {
//     localStorage.setItem('jogadores', JSON.stringify(jogadores));
//     jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
// }
function exibirNaTela() {
    let tabelaHTML = '';

    jogadores.forEach((jogador, indice) => {

        tabelaHTML += `  
    
            <tr>
                <td>${jogador.nome}</td>
                <td>${jogador.vitorias}</td>
                <td>${jogador.empate}</td>
                <td>${jogador.derrotas}</td>
                <td>${jogador.pontos}</td>
                <td><button onClick="adicionarVitoria(${indice})">Vitória</button></td>
                <td><button onClick="adicionarEmpate(${indice})">Empate</button></td>
                <td><button onClick="adicionarDerrota(${indice})">Derrota</button></td>
            </tr>`
    });

    elementoTabela.innerHTML = tabelaHTML;
}


function adicionarVitoria(indice) {

    let jogador = jogadores[indice];

    jogador.vitorias++;
    jogador.pontos += 3;
    exibirNaTela();

}

function adicionarEmpate(indice) {

    let jogador = jogadores[indice];

    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
}

function adicionarDerrota(indice) {

    let jogador = jogadores[indice];

    jogador.derrotas++;
    exibirNaTela();
}


// window.addEventListener('load', function () {
//     jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
//     exibirNaTela();
// });
