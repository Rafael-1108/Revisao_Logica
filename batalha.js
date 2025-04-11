//Definindo a vida de cada;
let vidaPicachu = 80;
let vidaCharmander = 80;

//Criando ataque para ambos;
let ChoquedoTrovão = 0;
let ChamaArdente = 0;

//Criando as rodadas;
let rodadas = 0;

//Criando um laço de repetição que é feito até que um dos pokémons morra;
while (vidaCharmander >= 0 && vidaPicachu >= 0){
    
    //Aumentando o número de rodadas a cada laço
    rodadas++
    console.log("🔁 Rodada: " + rodadas)
    
    //Definindo o ataque do Charmander e do Picachu e exibindo;
    ChamaArdente = Math.floor(Math.random() * 25)
    ChoquedoTrovão = Math.floor(Math.random() * 25)
    console.log("Charmander usou 🔥Chama Ardente caucou "+ ChamaArdente + " de dano")
    console.log("Picachu usou ⚡Choque do Trovão e causou "+ ChoquedoTrovão + " de dano")

    //Definindo a vida de cada pokémon após o ataque recebido e exibindo;
    vidaCharmander -= ChoquedoTrovão
    vidaPicachu -= ChamaArdente
    console.log("Vida Picachu: " + vidaPicachu + ' ❤️')
    console.log("Vida Charmander: " + vidaCharmander + ' ❤️')
    console.log("-----------------------------------")
}

    //Definindo o vencedor (único vivo) ou empate
    if (vidaPicachu > vidaCharmander && vidaPicachu > 0){
    console.log("Picachu é o vencedor 🏆")
    }
    else if (vidaPicachu < vidaCharmander && vidaCharmander > 0){
        console.log("Charmander é o vencedor 🏆")
    }
    else {
        console.log("Empate na batalha!")
    }
    