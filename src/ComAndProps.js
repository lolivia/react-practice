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

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const WelcomeCompose = (
    <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
    </div>
);

const warning = (
    <div>
        <Icon type="warning" style={{ color: 'yellow' }}/>
        <span>注意</span>
    </div>
)

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name} />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export class ComAndProps extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="titile"><a href="https://doc.react-china.org/docs/components-and-props.html">组件 和 Props</a></h1>
                <Content title='组件渲染' inner={<Welcome name="Ling" />} />
                <Content title='组件组合' inner={WelcomeCompose} />
                <Content 
                    title='组件提取'
                    inner={
                        <Comment
                            date={comment.date}
                            text={comment.text}
                            author={comment.author} />} />
                <Note title={ warning }>
                    <ul>
                        <li>组件名称必须以大写字母开头。</li>
                        <li>组件的返回值只能有一个根元素。通常用一个'div'元素包裹其他元素</li>
                        <li>props通常用于父组件向子组件传递属性，他是<b style={{ color: 'red' }}>只读的，不可改变的</b></li>
                        
                    </ul>
                </Note>
            </div>
        );
    }
}


