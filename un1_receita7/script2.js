let isNomeExibido = false
let cervejas = []
//cs é um array de cervejas
const carregarDiv = (cervejasArray, id="cervejasDiv", cabecalhos = ["Nome", "Álcool", "Estilo", "Amargor"]) => {
   const div = document.getElementById(id)
   if (isNomeExibido) {
      div.style.opacity = 0;
      setTimeout(() => {
         div.innerHTML = '';
      }, 500);
   } else {
      setTimeout(() => {
         const itensHtml = cervejasArray.map(({ name, alcohol }) => `<div>${name} -- ${alcohol}</div>`)
         div.innerHTML = `${itensHtml.join("\n")}`
      }, 1);
   };
   isNomeExibido = !isNomeExibido;
}

async function carregarCervejas(){
   try{
      let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
      cervejas = await res.json()
      carregarDiv(cervejas)
   }catch(err){
      document.getElementById("cervejasDiv").innerHTML = "Aconteceu alguma problema..."
   }
}
let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas())