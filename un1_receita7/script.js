let isNomeExibido = false
let array = []


const carregarDivCervejas = (array, id="DivTabela", cabecalhos = ["Nome", "Álcool", "Estilo", "Amargor"]) => {
   const div = document.getElementById(id)
   if (isNomeExibido) {
      div.style.opacity = 0;
      setTimeout(() => {
         div.innerHTML = '';
      }, 500);
   } else {
      setTimeout(() => {
         let itensHtml = `
            <tr class="colunas">
               <th>${cabecalhos[0]}</th>
               <th>${cabecalhos[1]}</th>
               <th>${cabecalhos[2]}</th>
               <th>${cabecalhos[3]}</th>
            </tr>
            ${array.map(item =>`
            <tr class="itemRow">
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
      let res = await fetch("https://random-data-api.com/api/v2/beers?size=10")
      array = await res.json()
      carregarDivCervejas(array)
   }catch(err){
      document.getElementById("DivTabela").innerHTML = "Aconteceu alguma problema..."
   }
}

const varBotaoCarregarCervejas = document.getElementById("botaoCarregarCervejas");
varBotaoCarregarCervejas.addEventListener("click", () => carregarCervejas());
