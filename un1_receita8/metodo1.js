async function carregarCervejas(){
   try{
      let res = await fetch("https://random-data-api.com/api/v2/beers?size=10")
      array = await res.json()
      carregarDivGenerico(array, opcao = 1)
   }catch(err){
      document.getElementById("DivTabela").innerHTML = "Aconteceu alguma problema..."
   }
}

async function carregarCafes(){
   try{
      let res = await fetch("https://random-data-api.com/api/coffee/random_coffee?size=10")
      array = await res.json()
      carregarDivGenerico(array, opcao = 2)
   }catch(err){
      document.getElementById("Divtabela").innerHTML = "Aconteceu alguma problema..."
   }
}

async function carregarNacoes(){

   try{
      let res = await fetch("https://random-data-api.com/api/nation/random_nation?size=10")
      array = await res.json()
      carregarDivGenerico(array, opcao = 3)
   }catch(err){
      document.getElementById("DivTabela").innerHTML = "Aconteceu alguma problema..."
   }
}
