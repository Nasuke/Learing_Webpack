const axios = require('axios')
const a = 123

const b = () => {
    console.log(1);
}

axios.get('/api/usr/list').then(res => {
    console.log(res.data);
})