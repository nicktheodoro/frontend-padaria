import React from "react";

import "./index.css";

export default class Details extends React.Component {
  state = {
    produto: {},
  };

  componentDidMount() {
    
  }

  render() {
    const { produto } = this.state;

    return (
      <div className="product-details">
        <h2>{produto.nome}</h2>
        <h3>{produto.quantidade}</h3>
        <h3>{produto.valor}</h3>
        <p>
          <a href={produto.urlImagem}>Imagem</a>
        </p>
      </div>
    );
  }
}
