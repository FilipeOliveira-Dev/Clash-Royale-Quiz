// PARTE 1: Importando as perguntas de um arquivo separado
import perguntas from './questions.js';

// PARTE 2: Pegando os elementos do HTML
  const imagemCarta = document.getElementById("imagemCarta")
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const indicePergunta = document.querySelector(".indice__pergunta");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  const btnFinalizar = document.querySelector(".progresso__geral button");
  const btnReiniciar = document.querySelector(".fim button");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // Função para embaralhar um array usando o algoritmo Fisher-Yates
  function shuffleArray(array) {
    // Loop do último elemento para o primeiro
    for (let i = array.length - 1; i > 0; i--) {
      // Escolhe um índice aleatório antes do elemento atual
      const j = Math.floor(Math.random() * (i + 1));
      // Troca o elemento atual com o elemento do índice aleatório
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `Questão: ${indiceAtual + 1} de ${perguntas.length}`; // Atualiza o progresso
    indicePergunta.innerHTML = `${indiceAtual + 1}`;
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    shuffleArray(perguntaAtual.respostas); // Embaralha as respostas da pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      
      imagemCarta.src = perguntaAtual.imagem;
      
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
}
  
  // PARTE 5: Função para mostrar a tela final
function finalizarJogo() { // Esta função agora é chamada pelo event listener ou ao final das perguntas
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}
  
// PARTE 7: Reiniciando o Jogo
function reiniciarJogo(){ // Esta função agora é chamada pelo event listener
    shuffleArray(perguntas); // Embaralha a ordem das perguntas
    conteudo.style.display = "flex"; // Mostra as perguntas
    conteudoFinal.style.display = "none"; // Esconde a tela final
    indiceAtual = 0; // Reinicia o índice da pergunta atual
    acertos = 0; // Reinicia o contador de acertos
    carregarPergunta();
}
  
// PARTE 6: Adicionando Event Listeners e iniciando o jogo
btnFinalizar.addEventListener("click", finalizarJogo);
btnReiniciar.addEventListener("click", reiniciarJogo);

// Iniciando o jogo pela primeira vez
shuffleArray(perguntas); // Embaralha as perguntas para o primeiro jogo
carregarPergunta();
