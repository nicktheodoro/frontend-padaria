import React from "react";
import Product from "../../../models/Product";
import { Link } from "react-router-dom";

import API from "../../../services/api";

import "./index.css";

const product = new Product();

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = { product };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    product[name] = target.value;

    this.setState({ product });
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      await API.post("/api/produtos", product);
      alert("Produto cadastrado com sucesso!");

      // Limpa os campos
      this.setState({
        product: new Product({
          nome: "",
          quantidade: "",
          valor: "",
          urlImagem: "",
        }),
      });
    } catch (error) {
      console.log(error);
      alert("Ops, não foi possivel cadastrar este produto.");
    }
  }

  render() {
    return (
      <div className="container-register">
        <form onSubmit={this.handleSubmit}>
          <div className="grupo">
            <label htmlFor="nome">Nome:</label>
            <input
              name="nome"
              type="text"
              value={this.state.product.nome}
              onChange={this.handleChange}
            />
          </div>

          <div className="grupo">
            <label htmlFor="quantidade">Quantidade:</label>
            <input
              name="quantidade"
              type="number"
              value={this.state.product.quantidade}
              onChange={this.handleChange}
            />
          </div>

          <div className="grupo">
            <label htmlFor="valor">Valor:</label>
            <input
              name="valor"
              type="text"
              value={this.state.product.valor}
              onChange={this.handleChange}
            />
          </div>

          <div className="grupo">
            <label htmlFor="url">Url da imagem:</label>
            <input
              name="urlImagem"
              type="text"
              value={this.state.product.urlImagem}
              onChange={this.handleChange}
            />
          </div>

          <div className="grupo-btn">
            <input type="submit" value="Cadastrar" />
            <input type="reset" value="Limpar" />
          </div>
        </form>

        <Link to={"/products"} className="btn-back">
          Voltar
        </Link>
      </div>
    );
  }
}
