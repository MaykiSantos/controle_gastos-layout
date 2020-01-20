class NovoMesController {
  constructor() {

  }

  static aplicaModal(){
    /*aplica e chama modal Receitas*/
    marcador.documento.on('click', '#btn-addicionar-receita',function() {
      ModalView.mostrarModal(marcador.conteudo, 'Adicionar Receita');
      ModalView.montaCategorias(marcador.documento, categoriasReceita);
      $('#modalExemplo').modal();
    })
    /*aplica e chama modal Despesas*/
    marcador.documento.on('click', '#btn-addicionar-despesas',function() {
      ModalView.mostrarModal(marcador.conteudo, 'Adicionar Despesa');
      ModalView.montaCategorias(marcador.documento, categoriasDespesas);
      $('#modalExemplo').modal();
    })
    /*aplica e chama modal Reserva*/
    marcador.documento.on('click', '#btn-addicionar-reserva',function() {
      ModalView.mostrarModal(marcador.conteudo, 'Adicionar Reserva');
      ModalView.montaCategorias(marcador.documento, categoriasReserva);
      $('#modalExemplo').modal();
    })
  }

static salvaInformacoes(tagdocumento){
  tagdocumento.on('click', '#btn-salvar', function() {
    let tituloModal = tagdocumento.find('#titulo-modal').text();
    let inputValor = tagdocumento.find('#input-valor').val();
    let inputCategoria = tagdocumento.find('#lista-categorias').val();
    let inputDescricao = tagdocumento.find('#input-descricao').val();

    console.log(`Titulo: ${tituloModal}
      Valor: ${inputValor}
      Categoria: ${inputCategoria}
      Descrição: ${inputDescricao}`);
      Help.avisoSucesso(marcador.documento, '#mensagem', 'Adicionado com sucesso')
      setTimeout(function() {
        $('#modalExemplo').modal('hide');
      },500);




  });

}



}//Fim class
