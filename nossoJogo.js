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

const cartasJogador = []
const cartasComputador = []

const imprimirCartas = (cartas, ehComputador) =>{
   let texto = ""
   const length = ehComputador ? cartas.length - 1 : cartas.length
   for(let i = 0; i < length; i++){
      texto += cartas[i].texto + " "
   }
   console.log(ehComputador ? `COMPUTADOR: ${texto}` : `JOGADOR: ${texto}`)
}



const iniciarRodada = () =>{

   cartasJogador.push(comprarCarta())
   cartasJogador.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   

   imprimirCartas(cartasJogador, false)
   imprimirCartas(cartasComputador, true)

   const jogadorComDoisA = (cartasJogador[0].valor === 11 && cartasJogador[1].valor === 11)
   const computadorComDoisA = (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11)
   if(jogadorComDoisA || computadorComDoisA){
      console.log(`Iniciando Rodada novamente`)
      iniciarRodada()
   }

   
}

const jogarRodada = () =>{
   const desejaCompraCarta = prompt(`Deseja comprar mais cartas? (se não desejar, Aperte o ENTER!)`)
   
   if(desejaCompraCarta.toLowerCase() === `sim`){
      cartasJogador.push(comprarCarta())
      imprimirCartas(cartasJogador, false)
      jogarRodada()
   }else{
      console.log(`Comprando para o computador`)
      let pontosJogador = 0
      for(let i = 0; i < cartasJogador.length; i++){
         pontosJogador += cartasJogador[i].valor
         
      }
      
      let pontosComputador = 0
      for(let i = 0; i < cartasComputador.length; i++){
         pontosComputador += cartasComputador[i].valor
      }
     
      while ((pontosComputador < pontosJogador) && (pontosComputador < 21)) {
         let carta = comprarCarta()
         cartasComputador.push(carta)
         pontosComputador += carta.valor
         
      }
   }
}


const informarQuemGanhou = () =>{
   let pontosJogador = 0
   for(let i = 0; i < cartasJogador.length; i++){
      pontosJogador += cartasJogador[i].valor
      
   }
   
   let pontosComputador = 0
   for(let i = 0; i < cartasComputador.length; i++){
      pontosComputador += cartasComputador[i].valor
   }

   console.log(`Pontuação do jogador: ${pontosJogador}`)
   console.log(`Pontuação do computador: ${pontosComputador}`)
   
   
   if(((pontosJogador > 21) || (pontosJogador < pontosComputador)) && pontosComputador <= 21){
      console.log(`O COMPUTADOR VENCEU!`)
   }else if(((pontosComputador > 21) || (pontosComputador < pontosJogador)) && pontosJogador <= 21){
      console.log(`O JOGADOR VENCEU!`)
   }else if(pontosComputador === pontosJogador && pontosComputador <= 21){
      console.log(`TIVEMOS UM EMPATE INICIEM OUTRA RODADA!`)
   }else{
      console.log(`Nenhum jogador venceu :(`)
   }
   
}

console.log(`BEM VINDO AO JOGO BLACKJACK  :) `)

const iniciarJogo = prompt(`Deseja iniciar uma nova Rodada?`)

if(iniciarJogo.toLowerCase() === `não`){
   console.log(`FIM DO JOGO`)


}else if(iniciarJogo.toLowerCase() === `sim`){
   console.log(`INICIO DO JOGO :)`) 
   iniciarRodada()  
   jogarRodada()  
   informarQuemGanhou()
}else{
   console.log(`DIGITE SIM OU NÃO`)
}


