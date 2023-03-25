/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    
    
    
   
    function inicioDojogo() {

      let inicioDoJogo21 = confirm(`Boas vindas ao jogo de BlackJack! 
        Quer iniciar uma nova rodada?`)
    
      if (inicioDoJogo21 === false) {
    
        alert(`O jogo acabou.`)
        return
      }
    
      let jogador = []
      let computador = []
    
      if (inicioDoJogo21) {
    
        let cartas = false
        while (!cartas) {
    
          jogador.push(comprarCarta())
          jogador.push(comprarCarta())
          computador.push(comprarCarta())
          computador.push(comprarCarta())
    
          //verificação para impedir um par de A na primeira mão
          if ((jogador[0].valor === 11 && jogador[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11)) {
    
            jogador = []
            computador = []
    
          } else {
            cartas = true
    
          }
        }
      }
    
      let textoJogador = (`As cartas do usuário são:   `) 
      let textoComputador = (`Computador: `)  
    
      let pontosJogador = 0
      let pontuacaoComputador = 0
    for (let i = 0; i < jogador.length; i++) {
        textoJogador += jogador[i].texto + " "
        pontosJogador += jogador[i].valor
      }
    
      for (let i = 0; i < computador.length; i++) {
        textoComputador += computador[i].texto + ""
        pontuacaoComputador += computador[i].valor
      }
    
      let comprar = true
    
      while (comprar) {
        if (pontosJogador > 21) {
          break;
        }
        let outraCarta = confirm(`${textoJogador}\nA carta revelada do computador é    ${computador[0].texto}.   +
          "\n" + Deseja comprar mais uma carta?
        `)
    
        if (outraCarta) {
          let carta = comprarCarta()
          jogador.push(carta)
          pontosJogador += carta.valor
          textoJogador += carta.texto
    
        } else {
          comprar = false
        }
      }
    while (pontuacaoComputador <= pontosJogador && pontosJogador <= 21) {
        let carta = comprarCarta()
        computador.push(carta)
        pontuacaoComputador += carta.valor
        textoComputador += carta.texto
      }
    
      let frase = " "
    
      if (pontosJogador > 21) {
        frase = "Computador ganhou!"
    
      } else if (pontuacaoComputador > 21) {
        frase = "Usuário ganhou!"
    
      } else if (pontuacaoComputador > pontosJogador) {
        frase = "Computador ganhou!"
    
      } else if (pontosJogador > pontuacaoComputador) {
        frase = "Usuário ganhou!"
    
      } else {
        frase = "Empate!"
      }
    
      alert((`${textoJogador}\nPontuação do Usuário:  ${pontosJogador}\n${textoComputador}\nPontuação do Computador é: 
          ${pontuacaoComputador}\n${frase}`))
    
    }
    
    inicioDojogo()
   