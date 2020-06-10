import React, { Component } from 'react';
import './Cards.css';
import axios from 'axios';
import ContadorComponent from './Contador';
import Like from './images/like.png';
import DontLike from './images/dontlike.png';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      people: [],
    };

    this.getPeople = this.getPeople.bind(this);
  }

  pagination(state) {
    this.setState({ currentPage: state }, () => {
      this.getPeople();
    });
  }
  pagPrev() {
    this.pagination(this.state.currentPage - 1);
  }

  pagNext() {
    this.pagination(this.state.currentPage + 1);
  }

  getPeople() {
    return axios
      .get(`https://swapi.dev/api/people/?page=${this.state.currentPage}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ people: response.data.results });
      });
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {
    return (
      <div className="body img-fluid">
        <div>
          {this.state.people.map((people, index) => {
            const like = `like-card-${index}`;
            const dontLike = `dontLike-card-${index}`;
            return (
              <div>
                <div className="container-fluid d-flex justify-content-center mr-5 p-3">
                  <div className="row row-cols-3">
                    <div className="col-sm-12 col-md-4 col-lg-4 p-0">
                      <div className="card" style={{ width: '18rem' }}>
                        <div className="cardcolor">
                          <h5 className="card-title text-center p-2">
                            {people.name}
                          </h5>
                          <ul>
                            <li>
                              <p className="card-text">
                                Birth Year: {people.birth_year}
                              </p>
                            </li>
                            <li>
                              <p className="card-text">
                                Eyes Color: {people.eye_color}
                              </p>
                            </li>
                            <li>
                              <p className="card-text">
                                Gender: {people.gender}
                              </p>
                            </li>
                            <li>
                              <p className="card-text">
                                Hair Color: {people.hair_color}
                              </p>
                            </li>
                            <li>
                              <p className="card-text">
                                Height: {people.height}
                              </p>
                            </li>
                            <li>
                              <p className="card-text">Mass: {people.mass}</p>
                            </li>
                            <li>
                              <p className="card-text">
                                Skin Color: {people.skin_color}
                              </p>
                            </li>
                            <li>
                              <p className="card-text">
                                Created: {people.created}
                              </p>
                            </li>
                            <li>
                              <p className="card-text">
                                Edited: {people.edited}
                              </p>
                            </li>
                          </ul>
                          <div className="d-flex justify-content-around p-2">
                            <ContadorComponent storageKey={like}>
                              <img className="like" src={Like} alt="Like" />
                            </ContadorComponent>
                            <ContadorComponent storageKey={dontLike}>
                              <img className="like" src={DontLike} alt="Like" />
                            </ContadorComponent>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <nav aria-label="Page navigation">
            <ul className="pagination d-flex justify-content-center">
              <li className="page-item">
                <a
                  className="page-link text-white bg-dark"
                  onClick={(event) => {
                    this.pagPrev();
                  }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-white bg-dark"
                  onClick={(event) => {
                    this.pagNext();
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Cards;
