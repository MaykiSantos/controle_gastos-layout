class NovoMesView {
  constructor() {

  }

  static mostraNovoMes(tagconteudo){
    let novoMesConteudo = `<div class="container">
      <div class="row">
        <div id="receita" class="col-12 border rounded shadow bg-white mt-4">
          <div class="row mt-4">
            <h1 id="mes-ano">Dezembro/2020</h1>

          </div>


          <div class="text-center my-4">
            <button id="btn-addicionar-receita" class="btn btn-lg btn-success ml-3" type="button" name="button">Adicionar Receita</button>
            <button id="btn-addicionar-despesas" class="btn btn-lg btn-danger ml-3" type="button" name="button">Adicionar Despesa</button>
            <button id="btn-addicionar-reserva" class="btn btn-lg btn-primary ml-3" type="button" name="button">Adicionar Reserva</button>

          </div>



        </div>

        <div id="receita" class="col-12 border rounded shadow bg-white mt-4 py-2">

          <h2 class="text-success"><strong>Receitas</strong></h2>
          <table class="table table-bordered">
            <thead class="thead-light">
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Aluguel</td>
                <td>Casa da Praia</td>
                <td>R$ 345,00</td>
                <td class="text-right">Editar | Excluir</td>
              </tr>
              <tr>
                <td>Salario</td>
                <td>Recebimento empresa</td>
                <td>R$ 1750,00</td>
                <td class="text-right">Editar | Excluir</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="receita" class="col-12 border rounded shadow bg-white mt-4 py-2">

          <h2 class="text-danger"><strong>Despesas</strong></h2>
          <table class="table table-bordered">
            <thead class="thead-light">
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Moradia</td>
                <td>Aluguel casa</td>
                <td>R$ 205,00</td>
                <td class="text-right">Editar | Excluir</td>
              </tr>
              <tr>
                <td>Alimentação</td>
                <td>Feira do mês</td>
                <td>R$ 350,00</td>
                <td class="text-right">Editar | Excluir</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="receita" class="col-12 border rounded shadow bg-white mt-4 py-2">

          <h2 class="text-primary"><strong>Banco</strong></h2>
          <table class="table table-bordered">
            <thead class="thead-light">
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Poupança</td>
                <td>Reserva do mês</td>
                <td>R$ 400,00</td>
                <td class="text-right">Editar | Excluir</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </div>`

    tagconteudo.append(novoMesConteudo);

  }


}//Fim class
