import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// not working as react has defined way to create elements
const reactElement = {
    type: "a",
    props: {
      href: "https://google.com",
      target: "_blank",
    },
    children: "Click me to visit GOOGLE",
};

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit GOOGLE</a>
)

const anotherUser = "JSingh31";

const reactEle = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click to visit GOOGLE - ',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactEle
    // <App />
    // anotherElement
)

// <App /> it is basically a fn. which is executed by react
 