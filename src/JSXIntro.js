import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Icon } from 'antd'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

const Content = (props) => (
  <div style={{ marginBottom: 50 }}>
    <h2 className="sub-title"><Icon type="arrow-right" />{ props.title }</h2>
    <hr />
    { props.inner }
  </div>
)

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

export class JSXIntro extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="titile"><a href="https://doc.react-china.org/docs/introducing-jsx.html">JSX介绍</a></h1>
        <Content title='在 JSX 中使用表达式' inner={ element }/>
        <Content title='JSX 本身其实也是一种表达式' inner={ getGreeting(null) }/>
      </div>
    );
  }
}


