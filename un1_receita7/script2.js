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
         let itensHtml = `
            <tr class="cerveja_colunas">
               <th>${cabecalhos[0]}</th>
               <th>${cabecalhos[1]}</th>
               <th>${cabecalhos[2]}</th>
               <th>${cabecalhos[3]}</th>
            </tr>
            ${cervejasArray.map(item =>`
            <tr class="cerveja">
               <td>${item.name || ''}</td>
               <td>${item.alcohol || ''}</td>
               <td>${item.style || ''}</td>
               <td>${item.ibu || ''}</td>
            </tr>`).join('')}
         `;
         div.innerHTML = `<table>${itensHtml}</table>`;
         div.style.opacity = 1;
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

const botaoCarregar = document.getElementById("botaoCarregar");
botaoCarregar.addEventListener("click", () => carregarCervejas());
