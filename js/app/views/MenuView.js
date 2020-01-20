class MenuView {
  constructor() {

  }

  static mostraMenu(tagMenu){
    let menuConteudo = `<div class="row position-fixed list-group bg-info h-100 shadow">
      <a href="#" id="opcao1" class="list-group-item-action mx-auto text-center p-2 menu">
        <img src="img/home.svg" alt="" width="40px">
        <p class="">Dashboard</p>
      </a>
      <a href="#" id="opcao2" class="list-group-item-action mx-auto text-center p-2 menu">
        <img src="img/lista.svg" alt="" width="40px">
        <p>Editar Meses</p>
      </a>
      <a href="#" id="opcao3" class="list-group-item-action mx-auto text-center p-2 menu">
        <img src="img/novo-mes.svg" alt="" width="40px">
        <p>Novo Mês</p>
      </a>
      <a href="#" id="opcao4" class="list-group-item-action mx-auto text-center p-2 menu">
        <img src="img/relatorio.svg" alt="" width="40px">
        <p>Outro</p>
      </a>
    </div>`

    tagMenu.append(menuConteudo);
  }



}//Fim class
