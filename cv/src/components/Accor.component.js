import React, { Component } from 'react';
import './Accor.component.css';


class Accor extends Component {
  state = {
    clicked : false,
  }

handleClick = () => {
  this.setState({clicked : !this.state.clicked})
}


renderContent = () => this.props.data.map((item) => (
  <ul key={item.id}>
      <li>
        <p><strong>{item.name}</strong></p>
        <p>{item.content}</p>
      </li>
  </ul>
));

  render() {
    return (
      <div>
        <div className="contactStyle">
          <button onClick={this.handleClick}>{this.props.title}</button>
          { this.state.clicked ? this.renderContent() : null }
        </div>
      </div>
    );
  }
}

export default Accor;
