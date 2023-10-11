function carregarCervejas2(){
   fetch("https://random-data-api.com/api/v2/beers?size=10").then(
      res => res.json()
   ).then(
      json => carregarDivGenerico(json, opcao=1)
   ).catch(
      err => document.getElementById("DivTabela").innerHTML = `Fudeu... ${err}`
   )
   
   document.getElementById("DivTabela").innerHTML = `Fazendo requisição`          
}

function carregarCafes2(){
   fetch("https://random-data-api.com/api/coffee/random_coffee?size=10").then(
      res => res.json()
   ).then(
      json => carregarDivGenerico(json, opcao=2)
   ).catch(
      err => document.getElementById("DivTabela").innerHTML = `Fudeu... ${err}`
   )
   
   document.getElementById("DivTabela").innerHTML = `Fazendo requisição`          
}

function carregarNacoes2(){
   fetch("https://random-data-api.com/api/nation/random_nation?size=10").then(
      res => res.json()
   ).then(
      json => carregarDivGenerico(json, opcao=3)
   ).catch(
      err => document.getElementById("DivTabela").innerHTML = `Fudeu... ${err}`
   )
   
   document.getElementById("DivTabela").innerHTML = `Fazendo requisição`          
}
