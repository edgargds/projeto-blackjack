# Projeto BlackJack
É um jogo semelhante ao BlackJack (também conhecido como ["21"](https://pt.wikipedia.org/wiki/Blackjack)).  


Os problemas lógicos deste projeto se baseiam em 3 conteúdos principais:
* Funções
* Condicionais
* Loops

# Enunciado
O objetivo deste projeto é criar um jogo BlackJack utilizando Javascript. O projeto é dividido em duas etapas: A primeira, chamada de "Nosso Jogo", refere-se a uma [versão reduzida e mais simples do Blackjack](http://different-alley.surge.sh/). A segunda, chamada de "Desafio", pretende aproximar o nosso [projeto do jogo original](http://unbiased-desire.surge.sh/).

<details>
   <summary> 📖 Regras do jogo</summary>
   As regras do jogo são as seguintes:

- Existem 2 jogadores: o usuário e o computador.
- Os jogadores usam um baralho com muitas cartas. As cartas têm um número (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J , Q, K) e um naipe (Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)). Por exemplo, uma carta do baralho é o dois de Paus (2♣️). Existem 52 possibilidades de cartas diferentes (13 números e 4 naipes).
- Os jogadores compram cartas do baralho. Ao comprar uma carta do baralho, ela pode ser qualquer uma das 52 cartas, com probabilidade igual.
- As cartas tem um valor de acordo com seu número (a carta 4♣️ tem valor 4, e a carta 9♦️ tem valor 9). As cartas J, Q e K têm valor 10, e a carta A tem valor 11.
- O jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. A pontuação de cada jogador é a soma do valor das suas cartas.
- O jogador com a maior pontuação ganha a rodada.
   </details>
O enunciado completo está no Sistema de Estudante, na sessão de Projetos https://estudante.labenu.com.br/conteudos/tecnico/projetos

## Lista de requisitos


- [x] O usuário deve encontrar uma mensagem de boas vindas no console ao abrir o programa
	
- [x] O usuário deve ser questionado se deseja iniciar uma nova rodada	

- [x] Se o usuário recusar iniciar uma nova rodada, o programa deve imprimir uma mensagem informando o fim do jogo	

- [x] Se o usuário aceitar iniciar uma nova rodada, o programa deve exibir as cartas do jogador e do computador

- [x] Ao final do jogo, o programa deve imprimir o resultado informando quem ganhou	

- [x] Implementou a verificação para impedir um par de A na primeira mão	

- [x] O jogo esconde a uma das cartas do computador ao início da rodada	

- [x] O usuário é questionado se deseja comprar mais cartas	

- [x] Se o usuário somar mais de 21, o mesmo perde automaticamente	

- [x] Se o computador somar mais de 21, o mesmo perde automaticamente	



### Instruções de entrega

- Faça o fork desse repositório e realize o clone da sua cópia `seu-nome-de-usuario/projeto-intro-web`.
   <details>
   <summary>Quer uma dica?</summary>
   <img src="https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/gerais%2Ffork.png?alt=media&token=7030e997-246a-41fe-a75f-2a2ced61e54d" alt="Como adicionar o projeto no repositório"/>
   </details>
- Crie os arquivos do projeto dentro deste repo;
- Execute o fluxo de entrega do git. **Lembre-se de abrir os PRs para seu próprio repositório.**
- Para isso, você precisará fazer o projeto utilizando **branches**. Não faça as alterações direto na branch ```main```!
    <details>
       <summary>Dúvidas sobre o Git & Github?</summary>
       <p>Adicionamos um vídeo explicando o <strong>processo de entrega</strong> [do fork ao pull request] no Material Assíncrono da Aula de <a href="https://estudante.labenu.com.br/conteudos/tecnico/mod1/Git%20e%20Github">Git e Github</a>. Esse vídeo também exemplifica situações que podem acontecer durante o fluxo de utilização do Git.</p>
    </details>
- Entregue o **link do repo** no [Formulário de entrega](https://forms.gle/GLrYczpdrwiirQWg7).

