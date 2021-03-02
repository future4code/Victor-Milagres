   let mensagem = alert("Bem-vindo ao jogo de Blackjack 2⃣1⃣ !!!")
   let rodada = confirm("Quer iniciar uma nova rodada?")
   const carta = comprarCarta();
   let resultadoUsuario
   let resultadoComputador
   let jogoUsuario1
   let jogoUsuario2
   let jogoComputador1
   let jogoComputador2
 
   if(rodada === true){
       jogoUsuario1 = comprarCarta()
       jogoUsuario2 = comprarCarta()
       jogoComputador1 = comprarCarta()
       jogoComputador2 = comprarCarta()
       
       let resultadoUsuario = jogoUsuario1.valor + jogoUsuario2.valor
       let resultadoComputador = jogoComputador1.valor + jogoComputador2.valor
       console.log(`Usuário - cartas: ${jogoUsuario1.texto} ${jogoUsuario2.texto} - Pontuação ${resultadoUsuario}`)
       console.log(`Computador - cartas: ${jogoComputador1.texto} ${jogoComputador2.texto} - Pontuação ${resultadoComputador}`)
       
      if (resultadoUsuario > resultadoComputador) {
         console.log("O usuário ganhou! 😀🤩")
     } else if (resultadoComputador > resultadoUsuario) {
         console.log("O computador ganhou! 😡")
     } else if (resultadoUsuario === resultadoComputador){
         console.log("Empate! 😨")
   }
}
      if (rodada === false){
      alert("Que pena, o jogo acabou!!!!")
   }
