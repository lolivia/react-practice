import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Icon } from 'antd';
import { Note } from './Note';

const Content = (props) => (
    <div style={{ marginBottom: 50 }}>
        <h2 className="sub-title"><Icon type="arrow-right" />{props.title}</h2>
        <hr />
        {props.inner}
    </div>
)

class WithoutThis extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        console.log('this is:', this);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Click me
                </button>
                <span>按F12查看控制台输出</span>
            </div>
        );
    }
}

class ThisInConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('this is:', this);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Click me
                </button>
                <span>按F12查看控制台输出</span>
            </div>
        );
    }
}

class BindThisWhenInvork extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>
                    Click me
                </button>
                <span>按F12查看控制台输出</span>
            </div>
        );
    }
}

class BindThisUsingArrow extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>
                    Click me
                </button>
                <span>按F12查看控制台输出</span>
            </div>
        );
    }
}

class BindUsingInitialize extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Click me
                </button>
                <span>按F12查看控制台输出</span>
            </div>
        );
    }
}

export class AboutThis extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="titile"><a href="https://doc.react-china.org/docs/introducing-jsx.html">JSX介绍</a></h1>
                <Content title='不绑定this' inner={<WithoutThis />} />
                <Content title='在构造函数中使用bind绑定this' inner={<ThisInConstructor />} />
                <Content title='在调用的时候使用bind绑定this' inner={<BindThisWhenInvork />} />
                <Content title='在调用的时候使用箭头函数绑定this' inner={<BindThisUsingArrow />} />
                <Content title='使用属性初始化器语法绑定this(实验性)' inner={<BindUsingInitialize />} />
                <Note title='比较'>
                    <p><b>方式2</b>和<b>方式3</b>都是在调用的时候再绑定this。</p>
                    <p><b>优点：</b>写法比较简单，当组件中没有state的时候就不需要添加类构造函数来绑定this</p>
                    <p><b>缺点：</b>每一次调用的时候都会生成一个新的方法实例，因此对性能有影响，并且当这个函数作为属性值传入低阶组件的时候，这些组件可能会进行额外的重新渲染，因为每一次都是新的方法实例作为的新的属性传递。</p>
                    <p><b>方式1</b>在类构造函数中绑定this，调用的时候不需要再绑定</p>
                    <p><b>优点：</b>只会生成一个方法实例，并且绑定一次之后如果多次用到这个方法也不需要再绑定。</p>
                    <p><b>缺点：</b>即使不用到state，也需要添加类构造函数来绑定this，代码量多一点。。。</p>
                    <p><b>方式4</b>利用属性初始化语法，将方法初始化为箭头函数，因此在创建函数的时候就绑定了this。</p>
                    <p><b>优点：</b>创建方法就绑定this，不需要在类构造函数中绑定，调用的时候不需要再作绑定。结合了方式1、方式2、方式3的优点</p>
                    <p><b>缺点：</b>目前仍然是实验性语法，需要用babel转译</p>
                </Note>
            </div>
        );
    }
}
