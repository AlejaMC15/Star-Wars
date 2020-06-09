import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  open() {
    this.setState({ expanded: !this.state.expanded });
  }

  close() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const information = this.props.info;
    if (!this.state.expanded) {
      return <p></p>;
    }
    return <div></div>;
  }
}

export default Info;
