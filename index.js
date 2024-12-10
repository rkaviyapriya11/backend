console.log('hello world');

// types build-in , custom-modules , third party-modules

const os = require('os');

console.log(os.homedir());

// custom modules 

const add = (a,b)=>{
    return a*b
}

console.log(add(3,4));
