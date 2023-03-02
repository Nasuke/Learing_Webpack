const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()


const UserRouter = new KoaRouter({prefix:'/usr'})

UserRouter.get('/list', (ctx, next) => {
    console.log(ctx.headers);
    ctx.body = [
        {name: 'bob', age: 14},
        {name: 'sam', age: 17}
    ]
})
app.use(UserRouter.routes())
app.listen(9000, () => {
    console.log('WelCome To 9000');
})