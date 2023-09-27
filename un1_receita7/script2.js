let cervejas = []
      //cs é um array de cervejas
      const carregarDiv = cs => {
         const div = document.getElementById("cervejasDiv")
         const itensHtml = cs.map(({ name, alcohol }) => `<div>${name} -- ${alcohol}</div>`)
         div.innerHTML = `${itensHtml.join("\n")}`
      }
      async function carregarCervejas(){
         let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
         cervejas = await res.json()
         carregarDiv(cervejas)
      }
      let botao = document.getElementById("botaoCarregar")
      botao.addEventListener("click", () => carregarCervejas())