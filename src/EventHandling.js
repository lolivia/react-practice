import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Icon } from 'antd'
import { Note } from './Note';

const Content = (props) => (
    <div style={{ marginBottom: 50 }}>
        <h2 className="sub-title"><Icon type="arrow-right" />{props.title}</h2>
        <hr />
        {props.inner}
    </div>
)

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }
    
    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }
    
    render(){
        return (
            <div>
                <p>hello</p>
                {/* Pass params via bind() method. */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        );
    }
}

export class EventHandling extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="titile"><a href="https://doc.react-china.org/docs/handling-events.html">事件处理</a></h1>
                <Content title='事件处理' inner={<Toggle />}/>
                <Note title="注意">
                    <ul>
                        <li>React事件绑定属性的命名采用驼峰式写法</li>
                        <li>如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串</li>
                        <li>执行事件处理函数时，会默认传入参数e，e 是一个合成事件</li>
                        <li>需为事件处理函数绑定this<a href='/about-this'>关于this</a></li>
                    </ul>
                </Note>
                <Content title='向事件处理函数中传参数' inner={<Popper />}/>
                <Note title="注意">
                    <ul>
                        <li>可通过 arrow functions 和 Function.prototype.bind 来为特定事件类型添加事件处理程序</li>
                        <li>如果通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面</li>
                    </ul>
                </Note>
            </div>
        );
    }
}


