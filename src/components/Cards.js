import React, { Component } from 'react';
import './cards.css';
import axios from 'axios';
import Luke from './images/luke-skywalker.jpg';
import ContadorComponent from './Contador1';
import ContadorComponent2 from './Contador2';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };

    this.getPeople = this.getPeople.bind(this);
  }

  getPeople() {
    return axios.get('https://swapi.dev/api/people').then((response) => {
      console.log(response.data.results);
      this.setState({ people: response.data.results });
    });
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {
    return (
      <div className="body">
        <div>
          {this.state.people.map((people) => (
            <div className="cards">
              <div className="container-fluid d-flex justify-content-center mr-5 p-3">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                    <div className="card" style={{ width: '18rem' }}>
                      <img src={Luke} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {people.name}
                        </h5>
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                        <div className="d-flex justify-content-around">
                          <ContadorComponent />
                          <ContadorComponent2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav aria-label="Page navigation example p-3">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Cards;
