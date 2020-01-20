class ModalView {
  constructor() {

  }

  static mostrarModal(tagConteudo, titulo, categorias){
    let modalConteudo = `<div id="modalExemplo" class="modal " tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title"><strong id="titulo-modal">${titulo}</strong></h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Valor</span>
                  </div>
                  <input id="input-valor" type="number" min="0" class="form-control" name="" value="">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Categoria</span>
                  </div>
                  <select id="lista-categorias" class="form-control" name="">
                    <option selected>Selecione uma categoria...</option>

                  </select>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Descrição</span>
                  </div>
                  <input id="input-descricao" type="text" class="form-control" name="" value="">
                </div>
              </div>
            </div>
            <div class="mt-2">
              <span id="mensagem"></span>
            </div>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" name="button">Fechar</button>
            <button id="btn-salvar" type="button" class="btn btn-primary" name="button">Salvar</button>
          </div>
        </div>
      </div>
    </div>`

    tagConteudo.find('#modalExemplo').remove();
    tagConteudo.append(modalConteudo);

  }

  static montaCategorias(tagconteudo, categorias){
    categorias.forEach((item) => {
    let novaopcao = $('<option>');
    novaopcao.text(item);
    tagconteudo.find('#lista-categorias').append(novaopcao);
    });
  }






}//fim class
