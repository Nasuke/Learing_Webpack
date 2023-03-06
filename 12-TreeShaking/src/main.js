import { sum } from './math.js';
import './song.js'
// 在sideEffects配置"*.css"表明这里是副作用代码 才不会treeshaking删掉
import './css/style.css';

const message = 'youhohoho'

function foo(num1, num2) {
    console.log(arguments[0], arguments[1]);
}
const myDiv = document.createElement('div')
myDiv.textContent = 'hhh'
myDiv.className = 'title'
document.querySelector('#root').appendChild(myDiv)

foo()
sum(1,2)