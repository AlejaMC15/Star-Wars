import React, { Component } from 'react';
import DontLike from './images/dontlike.png';

export class ContadorComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  componentDidMount() {
    const result = localStorage.getItem('contador');
    if (result) {
      this.setState({
        contador: JSON.parse(result),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contador', JSON.stringify(this.state.contador));
  }

  crearNuevoRegistro = (datos) => {
    const contador = [...this.state.contador, datos];
    this.setState({
      contador,
    });
  };

  cambiarContador(n) {
    this.setState({ contador: n });
  }

  sumar() {
    this.cambiarContador(this.state.contador + 1);
  }

  render() {
    return (
      <div>
        <a
          href="#"
          className="btn btn-dark"
          onClick={(event) => {
            this.sumar();
            console.log();
          }}
        >
          <img className="dontlike" src={DontLike} alt="DontLike" />
        </a>
        &nbsp;
        {this.state.contador}
        &nbsp;
      </div>
    );
  }
}

export default ContadorComponent2;
