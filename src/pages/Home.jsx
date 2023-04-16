import React, { Component } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Principal from '../components/Principal';
import SidebarMenu from '../components/SidebarMenu';

export default class Home extends Component {
    state = {
      isOpen: false
    };
    toggleAccordion = this.toggleAccordion.bind(this);
  
    toggleAccordion() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

  render() {
    const Style = {width: '100%'}
    return (
        <div className={this.state.isOpen === true ? "container is-open" : "container"}>
            <SidebarMenu toggle={this.state.isOpen && ("is-open")} toggleAccordion={this.toggleAccordion} />
            <div style={Style}>
                <Header toggleAccordion={this.toggleAccordion} toggle={this.state.isOpen && ("is-open")} />
                <div className="container-content">
                    <Principal />
                    <Sidebar />
                </div>
            </div>
        </div>
    )
  }
}
