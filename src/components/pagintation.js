import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';

export class Paginations extends Component {
  render() {
    return (
      <div>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{7}</Pagination.Item>
          <Pagination.Item>{8}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{9}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    );
  }
}

export default Paginations;
