import React from "react";
import { Link } from "react-router-dom";

import API from "../../services/api";
import Product from "../../models/Product";
import formatForReal from "../../utils/formatMoney";

import "./index.css";

export default class Products extends React.Component {
  state = {
    produtos: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await API.get("/api/produtos");
    this.setState({
      produtos: response.data.map((product) => new Product(product)),
    });
  };

  render() {
    const { produtos } = this.state;

    return (
      <div className="container-products">
        <Link to={"/products/register"} className="btn-add"> + Adicionar</Link>
        <div className="container-product">
          {produtos.map((product) => (
            <div className="products" key={product.id}>
              <div className="product-info">
                <p>
                  <strong>Id:</strong> {product.id}
                </p>
                <p>
                  <strong>Nome:</strong> {product.nome}
                </p>
                <p>
                  <strong>Valor:</strong> {formatForReal(product.valor)}
                </p>
                <Link
                  to={`products/${product.id}/details`}
                  className="btn-details"
                >
                  Detalhes
                </Link>
              </div>
              <div className="product-img">
                <p>
                  <img src={product.urlImagem} alt={product.nome} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
