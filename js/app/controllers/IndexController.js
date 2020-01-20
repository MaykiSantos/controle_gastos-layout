/*----------------- Marcadores da pagina -----------------*/
class IndexController {
  constructor() {
    this.menu=$('#menu-lateral');
    this.conteudo=$('#conteudo');
    this.menu_menu=$('.menu');
    this.menu_opcao1=$('#opcao1');
    this.documento = $(document);
  }
}
/*--------------- Instancia dos marcadores ---------------*/
var marcador = new IndexController;
/*--------------- Variaveis Globais ---------------*/
var categoriasReceita = ['Salario', 'Ferias', 'Aluguel', 'Presente'];
var categoriasDespesas = ['Alimentação', 'Educação', 'Lazer', 'Moradia', 'Pagamentos', 'Roupa', 'Saude', 'Transporte'];
var categoriasReserva = ['Polpança'];
var listaReceitas = [];
var listaDespesas = [];
var listaReservas = [];

/*-------- Códigos executados ao carregar a pagina --------*/
$(function() {

  MenuView.mostraMenu(marcador.menu);
  ResumoSuperiorView.mostraResumo(marcador.conteudo);
  AreaGraficosView.mostraCardGraficos(marcador.conteudo);
  eventoMenu(marcador.documento);
  marcaOpcao1();

})
/*------------------------ Eventos ------------------------*/

function eventoMenu(tagDocumento) {
  //controle Dashboard
  tagDocumento.on('click', '#opcao1', function (event) {
    event.preventDefault();
    $('.menu').removeClass('bg-white');
    $(this).addClass('bg-white');
    Help.apagaConteudo();
    ResumoSuperiorView.mostraResumo(marcador.conteudo);
    AreaGraficosView.mostraCardGraficos(marcador.conteudo);
  });

  //controle Editar Meses
  tagDocumento.on('click', '#opcao2', function (event) {
    event.preventDefault();
    $('.menu').removeClass('bg-white');
    $(this).addClass('bg-white');
  });

  //controle Novo Mês
  tagDocumento.on('click', '#opcao3', function (event) {
    event.preventDefault();
    $('.menu').removeClass('bg-white');
    $(this).addClass('bg-white');
    Help.apagaConteudo();
    NovoMesView.mostraNovoMes(marcador.conteudo);
    NovoMesController.aplicaModal();
    NovoMesController.salvaInformacoes(marcador.conteudo);

  });

  //controle Outro
  tagDocumento.on('click', '#opcao4', function (event) {
    event.preventDefault();
    $('.menu').removeClass('bg-white');
    $(this).addClass('bg-white');
  });

}//Fim função eventoMenu

function marcaOpcao1() {
  $('#opcao1').addClass('bg-white');
}
