const cervejas = ["Guiness", "Desperados", "Becks"]

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
      let cervejasHtml = cervejasArray.map(item =>`<tr><td class="cerveja">${item}</td></tr>`) 
      CervejaDiv.innerHTML = `<table>${cervejasHtml.join("")}</table>`;
      
      CervejaDiv.style.opacity = 1;
      }, 1);
   }
   isNomeExibido = !isNomeExibido;
}

const botaoCarregar = document.getElementById("botaoCarregar");
botaoCarregar.addEventListener("click", () => {
   const cervejasCopia = [...cervejas]; // Cria uma cópia do vetor original
   carregarDiv(cervejasCopia); // Exibe o vetor original
});


const botaoOrdenar = document.getElementById("botaoOrdenar");
botaoOrdenar.addEventListener("click", () => {
   const cervejasOrdenadas = [...cervejas]; // Cria uma cópia do vetor original
   cervejasOrdenadas.sort(); // Ordena o vetor de cervejas ordenadas alfabeticamente
   carregarDiv(cervejasOrdenadas); // Exibe o vetor de cervejas ordenadas
});


const botaoEmbaralhar = document.getElementById("botaoEmbaralhar");
botaoEmbaralhar.addEventListener("click", () => {
   const cervejasEmbaralhadas = [...cervejas]; // Cria uma cópia do vetor original
   cervejasEmbaralhadas.sort(() => Math.random() - 0.5); // Embaralha o vetor aleatoriamente
   carregarDiv(cervejasEmbaralhadas); // Exibe o vetor de cervejas embaralhadas
});