import React from "react";
import { Link } from "react-router-dom";

import API from "../../services/api";
import Produto from "../../models/Produto";
import formatForReal from "../../utils/formatMoney";

import "./index.css";

export default class Main extends React.Component {
  state = {
    produtos: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await API.get("/products");
    this.setState({
      produtos: response.data.map((produto) => new Produto(produto)),
    });
  };

  render() {
    const { produtos } = this.state;

    return (
      <div className="container">
        {produtos.map((produto) => (
          <div className="products" key={ produto.id }>
            <div className="product-info">
              <p>
                <strong>Id:</strong> {produto.id}
              </p>
              <p>
                <strong>Nome:</strong> {produto.nome}
              </p>
              <p>
                <strong>Valor:</strong> {formatForReal(produto.valor) }
              </p>
              <Link to={`/details/${produto.id}`} className="btn-details">
                Detalhes
              </Link>
            </div>
            <div className="product-img">
              <p>
                <img src={produto.urlImagem} alt={produto.nome} />
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
