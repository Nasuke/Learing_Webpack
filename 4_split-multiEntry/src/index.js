const axios = require('axios')
console.log('entry index');

axios.get('/api/user/list').then(res => console.log(res.data))