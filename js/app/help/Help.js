class Help {
  constructor() {

  }

  static apagaConteudo(){
    $('#conteudo').html('');
  }

  static avisoSucesso(tagdocumento, localAviso, mensagem){
    let estruturaMensagem = `<div class="alert alert-success" role="alert">${mensagem}</div>`;

    tagdocumento.find(localAviso).append(estruturaMensagem);
  }



}//Fim class
