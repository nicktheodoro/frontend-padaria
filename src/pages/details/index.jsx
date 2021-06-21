import React from "react";
import { Link } from "react-router-dom";

import Product from "../../models/Product";
import API from "../../services/api";
import formatForReal from "../../utils/formatMoney";

import "./index.css";

export default class Details extends React.Component {
  state = {
    produto: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await API.get("/api/produtos/" + id);
    this.setState({ produto: new Product(response.data) });
  }

  render() {
    const { produto } = this.state;

    return (
      <div className="product-details">
        <h2>{produto.nome}</h2>
        <h3>{formatForReal(produto.valor)}</h3>
        <img src={produto.urlImagem} alt={produto.nome}></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit
          quo totam, voluptatem praesentium laudantium maiores ea libero
          perferendis rem debitis ipsum quibusdam quos. Nemo sint nobis
          cupiditate magnam vel.
        </p>
        <span>
        <Link to={"/products"} class="btn-back">Voltar</Link>
        </span>
      </div>
    );
  }
}
