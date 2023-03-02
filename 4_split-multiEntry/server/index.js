
const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()
const UserRouter = new KoaRouter({prefix: '/user'})


app.use(UserRouter.routes())
app.listen(9000, () => {
    console.log('welcome to 9000');
})

UserRouter.get('/list', (ctx, next) => {
    ctx.body = 'qiahahaha'
})