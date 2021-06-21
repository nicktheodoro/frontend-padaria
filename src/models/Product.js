export default class Product {
  
  constructor(obj) {
    obj = obj || {}; // tratamento pra não gerar uma excessão de erro

    this.id = obj.id;
    this.nome = obj.nome;
    this.quantidade = obj.quantidade;
    this.valor = obj.valor;
    this.urlImagem = obj.urlImagem;
  }
}