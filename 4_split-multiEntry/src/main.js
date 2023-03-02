const axios = require('axios')
console.log('entry main')

axios.get('/api/user/list').then(res => console.log(res.data, 'asdasd'))