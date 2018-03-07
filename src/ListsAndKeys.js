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

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);

const NumberListWithError = (props) => {
    return (
        <div>
            {listItems}
            <p style={{ color: 'red' }}>按f12查看console输出</p>
        </div>
    );
};

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function NumberListWithComp(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
            value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberListInJsx(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                    value={number} />
            )}
        </ul>
    );
}


export class ListsAndKeys extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="titile"><a href="https://doc.react-china.org/docs/lists-and-keys.html">列表和Keys</a></h1>
                <Content title='渲染多个组件' inner={<NumberListWithError />} />
                <Content title='基础列表组件(with key)' inner={<NumberList numbers={numbers} />} />
                <Content title='用keys提取组件' inner={<NumberListWithComp numbers={numbers} />} />
                <Note title="注意">
                    <ul>
                        <li>元素的key只有在它和它的兄弟节点对比时才有意义，比方说，如果你提取出一个ListItem组件，你应该把key保存在数组中的这个ListItem元素上，而不是放在ListItem组件中的li元素上。</li>
                    </ul>
                </Note>
                <Content title='元素的key在他的兄弟元素之间应该唯一' inner={<Blog posts={posts} />} />
                <Note title="注意">
                    <ul>
                        <li>数组元素中使用的key在其兄弟之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的键</li>
                        <li>key会作为给React的提示，但不会传递给你的组件。谨慎使用key作为属性传入</li>
                    </ul>
                </Note>
                <Content title='在JSX中嵌入map()' inner={<NumberListInJsx numbers={numbers}/>} />
            </div>
        );
    }
}


