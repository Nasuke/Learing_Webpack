import '../css/index.css'

const message = 'test terser'
console.log(message);

function bar(nums1, nums2) {
    console.log(arguments[0]);
    console.log(arguments[1]);
}

const obj = {
    name:'paul',
    age: '22',
    boy: function (params) {
        console.log('asl');
    }
}
console.log(obj.age);

if(false){
    console.log('asd');
}
class Person {
    
}