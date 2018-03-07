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

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class IsolateClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

const clocks = (
    <div>
      <IsolateClock />
      <IsolateClock />
      <IsolateClock />
    </div>
);

export class StateAndLifeCycle extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="titile"><a href="https://doc.react-china.org/docs/state-and-lifecycle.html">State和生命周期</a></h1>
                <Content title='State与生命周期' inner={<Clock />} />
                <Note title="注意">
                    <ul>
                        <li>状态state是私有的，完全受控于当前组件</li>
                        <li>必须在构造函数里初始化this.state</li>
                        <li>一般只把与视觉渲染有关的属性放在state里，如果不需要在render()里用到，则没必要放到state里</li>
                        <li>使用this.setState()来进行状态更新，this.state.comment = 'Hello'无效</li>
                        <li>状态的更新是异步的，你不应该依靠它们的值来计算下一个状态。</li>
                        <li>react会自动合并状态的更新</li>
                    </ul>
                </Note>
                <Content title='数据自顶向下流动' inner={ clocks }/>
                <Note title="注意">
                    <ul>
                        <li>组件可以选择将其状态作为属性传递给其子组件</li>
                        <li>任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。</li>
                    </ul>
                </Note>
            </div>
        );
    }
}
