import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="accordion">
        <div className="accordion-header">
          <h1 onClick={this.toggleAccordion} className={this.state.isOpen && ("is-open")}>
            {this.props.title}
          </h1>
        </div>
        {this.state.isOpen && (
          <div className="accordion-body">{this.props.children}</div>
        )}
      </div>
    );
  }
}

export default Accordion;