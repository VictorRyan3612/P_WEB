let isNomeExibido = false
let array = []
let cabecalhos = []


const carregarDivGenerico = (array, opcao= 1, id="DivTabela") => {
   const div = document.getElementById(id)
   if (isNomeExibido) {
      div.style.opacity = 0;
      setTimeout(() => {
         div.innerHTML = '';
      }, 500);
   } else {
      // Cervejas
      if (opcao == 1){
         cabecalhos = ["Nome", "Álcool", "Estilo", "Amargor"]
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

      // Cafe 
      if (opcao == 2){
         cabecalhos = ["Nome", "Origem", "Variedade", "Intensificador"]
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
                  <td>${item.blend_name || ''}</td>
                  <td>${item.origin || ''}</td>
                  <td>${item.variety || ''}</td>
                  <td>${item.intensifier || ''}</td>
               </tr>`).join('')}
            `;
            div.innerHTML = `<table>${itensHtml}</table>`;
            div.style.opacity = 1;
         }, 1);
      }

      // Nações
      if (opcao === 3){
         cabecalhos = ["Nationalidade", "Lingua", "Capital", "Esporte nacional"]
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
                  <td>${item.nationality || ''}</td>
                  <td>${item.language || ''}</td>
                  <td>${item.capital || ''}</td>
                  <td>${item.national_sport || ''}</td>
               </tr>`).join('')}
            `;
            div.innerHTML = `<table>${itensHtml}</table>`;
            div.style.opacity = 1;
         }, 1);
      }
   }
   isNomeExibido = !isNomeExibido;
}
      

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

let urlLink="https://random-data-api.com/api/nation/random_nation"
async function carregarNacoes(){

   try{
      let res = await fetch("https://random-data-api.com/api/nation/random_nation?size=10")
      array = await res.json()
      carregarDivGenerico(array, opcao = 3)
   }catch(err){
      document.getElementById("DivTabela").innerHTML = "Aconteceu alguma problema..."
   }
}


function chegouRespostaDoJson(json){
   cervejas = json
   carregarDivGenerico(cervejas, opcao=1)         
}

function chegouRespostaDoFetch(res){
   let p = res.json()
   p.then(chegouRespostaDoJson)
}

function carregarCervejas2(){
   let p = fetch("https://random-data-api.com/api/v2/beers?size=10")
   p.then(chegouRespostaDoFetch)
   document.getElementById("DivTabela").innerHTML = `Fazendo requisição`          
}

const varBotaoCarregarCervejas2 = document.getElementById("botaoCarregarCervejas2");
varBotaoCarregarCervejas2.addEventListener("click", () => carregarCervejas2());

const varBotaoCarregarCervejas = document.getElementById("botaoCarregarCervejas");
varBotaoCarregarCervejas.addEventListener("click", () => carregarCervejas());


const varBotaoCarregarCafes = document.getElementById("botaoCarregarCafes");
varBotaoCarregarCafes.addEventListener("click", () => carregarCafes());

const varBotaoCarregarNacoes = document.getElementById("botaoCarregarNacoes");
varBotaoCarregarNacoes.addEventListener("click", () => carregarNacoes());