import 'antd/dist/antd.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { ThinkingInReact } from './ThinkingInReact.js';
import { JSXIntro } from './JSXIntro.js';
import { AboutThis } from './AboutThis.js';
import { ComAndProps } from './ComAndProps.js';
import { StateAndLifeCycle } from './StateAndLIfeCycle.js'
import { EventHandling } from './EventHandling.js'
import { ConditionRender } from './ConditionRender';
import { ListsAndKeys } from './ListsAndKeys'

const { Header, Sider, Content } = Layout;
const Slider = (props) => (
  <Layout style={{height: '100%'}}>
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">React学习</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/jsx">JSX介绍</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/about-props">组件和Props</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/about-state">State 和生命周期</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/about-event">事件处理</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/condition-render">条件渲染</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/lists-keys">列表和keys</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to="/thinking">React理念</Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/about-this">事件处理中的this</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: '0 0 0 12px', textAlign: 'left' }}>
        <Icon
          className="trigger"
          type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={props.toggle}
        />
      </Header>
      <Content>
        {props.children}
      </Content>
    </Layout>
</Layout>
)

class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div style={{height: '100%'}}>
            <Slider collapsed={this.state.collapsed} toggle={this.toggle}>
              <Route path="/jsx" component={JSXIntro} />
              <Route path="/about-props" component={ComAndProps} />
              <Route path="/about-state" component={StateAndLifeCycle} />
              <Route path="/about-event" component={EventHandling} />
              <Route path="/condition-render" component={ConditionRender} />
              <Route path="/lists-keys" component={ListsAndKeys} />                           
              <Route path="/thinking" component={ThinkingInReact} />
              <Route path="/about-this" component={AboutThis} />
            </Slider>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
