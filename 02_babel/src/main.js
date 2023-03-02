import React from 'react';
import ReactDom from 'react-dom/client';
import App from './react/App.jsx';

const res = require('./math')
const test = 'test for block'

const tFn = () => {
    console.log('for arrow')
}

const obj = {
    name: 'son',
    age: 14
}
const { name } = obj
// 使用includes方法 引入polyfill的string相关
const st = 'woshi'
st.includes('w')

// React
const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(<App />)

console.log(res)