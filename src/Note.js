import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class Note extends Component {
  render() {
    return (
      <div className="App" style={{ marginBottom: '50px' }}>
        <article style={{ textAlign: 'left', paddingLeft: 20, paddingRight: 20 }}>
          <h1 style={{ background: '#6CA6CD', padding: 10, color: 'white', margin: 0 }}>
            {this.props.title}
          </h1>
          <div style={{ padding: 20, border: '1px solid #6CA6CD' }}>
            {this.props.children}
          </div>
        </article>
      </div>
    );
  }
}
