
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')

btn1.textContent = 'about'
btn2.textContent = 'category'

document.body.appendChild(btn1)
document.body.appendChild(btn2)

btn1.onclick = () => {
    // 魔法注释 改变[name]占位符的值
    import(/* webpackChunkName: "about" */'./router/about').then(res => {
        console.log(res.about());
        console.log(res.default);
    })
}
btn2.onclick = () => {
    import(/* webpackChunkName: "categoty" */'./router/category')
}