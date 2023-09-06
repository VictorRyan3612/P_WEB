let cervejas = [
   {
      name: "Guiness",
      alcohol: "10%"           
   }, 
   {
      name: "Desperados",

      alcohol: "6%"               
   }, 
   {
      name: "Becks",
      alcohol: "5%"               
   }
]


let isNomeExibido = false;
const CervejaDiv = document.getElementById("nomeCervejaDiv");


const carregarDiv = (cervejasArray) =>{
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


      let itensHtml  = cervejasArray.map(item =>`<tr><td class="cerveja">${item.name} -- ${item.alcohol}</td></tr>`) 
      CervejaDiv.innerHTML = `<table>${itensHtml.join("")}</table>`;
      
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
