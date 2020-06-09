import React, { Component } from 'react';
import Like from './images/like.png';

export class ContadorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  componentDidMount() {
    const results = localStorage.getItem('contador');
    if (results) {
      this.setState({
        contador: JSON.parse(results),
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
        &nbsp;
        {this.state.contador}
        &nbsp;
        <a
          href="#"
          className="btn btn-dark"
          onClick={(event) => {
            this.sumar();
            console.log();
          }}
        >
          <img className="like" src={Like} alt="Like" />
        </a>
      </div>
    );
  }
}

export default ContadorComponent;
