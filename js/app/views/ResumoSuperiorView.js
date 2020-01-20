class ResumoSuperiorView {
  constructor() {

  }

  static mostraResumo(tagConteudo){
    let resumoConteudo = `<div class="container">
      <div class="row">
        <div class="col icone-resumos">
            <img src="img/icone-caixa-entrada.svg" alt="" class="mx-2 mt-4 imagem-resumo">
            <p class="descricao-resumo-saldo">Saldo Atual</p>
            <p class="texto-resumo"><strong>R$ </strong>1.045,00</p>
        </div>

        <div class="col icone-resumo">
            <img src="img/icone-grafico-mais.svg" alt="" class="mx-2 mt-4 imagem-resumo">
            <p class="descricao-resumo-receita">Receita</p>
            <p class="texto-resumo"><strong>R$ </strong>3.045,00</p>
        </div>

        <div class="col icone-resumo">
            <img src="img/icone-grafico-menos.svg" alt="" class="mx-2 mt-4 imagem-resumo">
            <p class="descricao-resumo-despesas">Despesas</p>
            <p class="texto-resumo"><strong>R$ </strong>1.932,80</p>
        </div>

        <div class="col icone-resumo">
            <img src="img/icone-caixa-reserva.svg" alt="" class="mx-2 mt-4 imagem-resumo">
            <p class="descricao-resumo-banco">Banco</p>
            <p class="texto-resumo"><strong>R$ </strong>12.045,00</p>
        </div>
      </div>
    </div>`

    tagConteudo.append(resumoConteudo);

  }
}//Fim class
