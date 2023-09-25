let cervejas = [
   {
      name: "Guiness",
      alcohol: "10%",
      style: "Red Ale",
      ibu: "15"
   }, 
   {
      name: "Desperados",
      alcohol: "6%",
      style: "English IPA",
      ibu: "30"
   }, 
   {
      name: "Becks",
      alcohol: "5%",
      style: "Imperial Stout",
      ibu: "45"
   },
]


let isNomeExibido = false;


const carregarDiv = (cervejasArray, id="CervejaDiv", cabecalhos = ["Nome", "Álcool", "Estilo", "Amargor"]) =>{
   const CervejaDiv = document.getElementById(id);
   if (isNomeExibido) {
      CervejaDiv.style.opacity = 0;
      setTimeout(() => {
      CervejaDiv.innerHTML = '';
      }, 500);
   } else {
      setTimeout(() => {

      // Modo 2 ↓
      // let itensHtml  = cervejasArray.map(({name,alcohol}) => `<tr><td class="cerveja">${name} -- ${alcohol}</td></tr>` )
      
      // Modo 3 ↓
      // const itensHtml = cervejasArray.map( item => `<tr><td class="cerveja">${item['name']} -- ${item['alcohol']}</td></tr>` )


      let itensHtml = `
         <tr class="cerveja_colunas">
            <th>${cabecalhos[0]}</th>
            <th>${cabecalhos[1]}</th>
            <th>${cabecalhos[2]}</th>
            <th>${cabecalhos[3]}</th>
         </tr>
         ${cervejasArray.map(item =>`
         <tr class="cerveja">
            <td>${item.name}</td>
            <td>${item.alcohol}</td>
            <td>${item.style}</td>
            <td>${item.ibu}</td>
         </tr>`).join('')}
      `;
      CervejaDiv.innerHTML = `<table>${itensHtml}</table>`;
      
      CervejaDiv.style.opacity = 1;
      }, 1);
   }
   isNomeExibido = !isNomeExibido;
}

const carregarCallback = () => {
   const cervejasCopia = [...cervejas]; // Cria uma cópia do vetor original
   carregarDiv(cervejasCopia); // Exibe o vetor original
};

const ordenarCallback = () => {
   const cervejasOrdenadas = [...cervejas]; // Cria uma cópia do vetor original
   cervejasOrdenadas.sort(); // Ordena o vetor de cervejas ordenadas alfabeticamente
   carregarDiv(cervejasOrdenadas); // Exibe o vetor de cervejas ordenadas
}

const embaralharCallback = () => {
   const cervejasEmbaralhadas = [...cervejas]; // Cria uma cópia do vetor original
   cervejasEmbaralhadas.sort(() => Math.random() - 0.5); // Embaralha o vetor aleatoriamente
   carregarDiv(cervejasEmbaralhadas);
}

const botaoCarregar = document.getElementById("botaoCarregar");
botaoCarregar.addEventListener("click", carregarCallback);


const botaoOrdenar = document.getElementById("botaoOrdenar");
botaoOrdenar.addEventListener("click", ordenarCallback);


const botaoEmbaralhar = document.getElementById("botaoEmbaralhar");
botaoEmbaralhar.addEventListener("click", embaralharCallback);

const linkCarregar = document.getElementById("linkCarregar");
linkCarregar.addEventListener("click", carregarCallback);


const linkOrdenar = document.getElementById("linkOrdenar");
linkOrdenar.addEventListener("click", ordenarCallback);

const linkEmbaralhar = document.getElementById("linkEmbaralhar");
linkEmbaralhar.addEventListener("click", embaralharCallback);
