// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      imagem: "/images/Cartas/Comum/Arqueiras.png",
      raridade: "Comum",
      pergunta: "Qual o custo de Elixir das Arqueiras?",
      respostas: [
        { opcao: "1", correto: false },
        { opcao: "2", correto: true },
        { opcao: "3", correto: false },
        { opcao: "4", correto: false },
      ]
    },
    { 
      imagem: "/images/Cartas/Comum/Barbaros de Elite.png",
      pergunta: "Qual o custo de Elixir dos Bárbaros de Elite?",
      raridade: "Comum",
      respostas: [
        { opcao: "2", correto: false },
        { opcao: "3", correto: false },
        { opcao: "4", correto: true },
        { opcao: "5", correto: false },
      ]
    },
    {
      imagem: "/images/Cartas/Comum/Barbaros.png",
      pergunta: "Qual o custo de Elixir dos Bárbaros ?",
      
      respostas: [
        { opcao: "1", correto: false },
        { opcao: "2", correto: false },
        { opcao: "3", correto: true },
        { opcao: "4", correto: false },
      ]
    },
];


// PARTE 2: Pegando os elementos do HTML
  const imagemCarta = document.getElementById("imagemCarta")
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const indicePergunta = document.querySelector(".indice__pergunta");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `Questão: ${indiceAtual + 1} de ${perguntas.length}`; // Atualiza o progresso
    indicePergunta.innerHTML = `${indiceAtual + 1}`;
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
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
          acertos = acertos + 1;
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
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}
  
  // PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();