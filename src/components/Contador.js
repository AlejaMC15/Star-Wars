import React, { Component } from 'react';

export class ContadorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  componentDidMount() {
    const results = localStorage.getItem(this.props.storageKey);
    if (results) {
      this.setState({
        contador: JSON.parse(results),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.storageKey, //acceder a una propiedad de localStorage de forma dinámica
      JSON.stringify(this.state.contador)
    );
  }

  crearNuevoRegistro = (datos) => {
    const contador = [...this.state.contador, datos];
    this.setState({
      contador,
    });
  };

  cambiarContador(n) {
    this.setState({ contador: n }); //guardar en el state
  }

  sumar() {
    this.cambiarContador(this.state.contador + 1);
  }

  render() {
    return (
      <div>
        {this.state.contador}
        <a
          href="#"
          className="btn btn-dark"
          onClick={(event) => {
            this.sumar();
          }}
        >
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default ContadorComponent;
