import React from "react";
import { Link } from "react-router-dom";

import API from "../../service/api";
import Produto from "../../model/Produto";

import "./index.css";
export default class Main extends React.Component {
  state = {
    produtos: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await API.get("/api/produtos");
    this.setState({
      produtos: response.data.map((produto) => new Produto(produto)),
    });
  };

  render() {
    const { produtos } = this.state;

    return (
      <div className="container">
        {produtos.map((produto) => (
          <div className="produtos" key={produtos.id}>
            <p>
              <strong>Id:</strong> {produto.id}
            </p>
            <p>
              <strong>Nome:</strong> {produto.nome}
            </p>
            <p>
              <strong>Valor:</strong> {produto.valor}
            </p>
            <p>
              <img src={produto.urlImagem} alt="Sonho" />
            </p>
            <Link to={`/details/${produto.id}`} className="btn-details">Detalhes</Link>
          </div>
        ))}
      </div>
    );
  }
}
