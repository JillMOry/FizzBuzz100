let app = require('./server');
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

chai.request(app)
.get('/')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'Hello FizzBuzz!', "Response did not have the correct text")
        console.log('All tests for "Hello FizzBuzz" have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/1')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1]', "Response did not have the correct text")
        console.log('All tests for route /1 have passed')
        return
    }
})

chai.request(app)
.get('/2')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2]', "Response did not have the correct text")
        console.log('All tests for route /2 have passed')
        return
    }
})

chai.request(app)
.get('/3')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /3 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/4')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4]', "Response did not have the correct text")
        console.log('All tests for route /4 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/5')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /5 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/6')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /6 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/7')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7]', "Response did not have the correct text")
        console.log('All tests for route /7 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/8')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8]', "Response did not have the correct text")
        console.log('All tests for route /8 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/9')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /9 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/10')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /10 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/11')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11]', "Response did not have the correct text")
        console.log('All tests for route /11 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/12')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /12 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/13')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13]', "Response did not have the correct text")
        console.log('All tests for route /13 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/14')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14]', "Response did not have the correct text")
        console.log('All tests for route /14 have passed YAY!')
        return 
    }
})


chai.request(app)
.get('/15')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]', "Response did not have the correct text")
        console.log('All tests for route /15 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/16')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16]', "Response did not have the correct text")
        console.log('All tests for route /16 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/17')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17]', "Response did not have the correct text")
        console.log('All tests for route /17 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/18')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /18 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/19')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19]', "Response did not have the correct text")
        console.log('All tests for route /19 have passed YAY!')
        return 
    }
})


chai.request(app)
.get('/20')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /20 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/21')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /21 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/22')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22]', "Response did not have the correct text")
        console.log('All tests for route /22 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/23')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23]', "Response did not have the correct text")
        console.log('All tests for route /23 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/24')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /24 have passed YAY!')
        return 
    }
})


chai.request(app)
.get('/25')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /25 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/26')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26]', "Response did not have the correct text")
        console.log('All tests for route /26 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/27')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /27 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/28')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28]', "Response did not have the correct text")
        console.log('All tests for route /28 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/29')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29]', "Response did not have the correct text")
        console.log('All tests for route /29 have passed YAY!')
        return 
    }
})


chai.request(app)
.get('/30')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz"]', "Response did not have the correct text")
        console.log('All tests for route /30 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/31')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31]', "Response did not have the correct text")
        console.log('All tests for route /31 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/32')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32]', "Response did not have the correct text")
        console.log('All tests for route /32 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/33')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /33 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/34')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34]', "Response did not have the correct text")
        console.log('All tests for route /34 have passed YAY!')
        return 
    }
})


chai.request(app)
.get('/35')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /35 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/36')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /36 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/37')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37]', "Response did not have the correct text")
        console.log('All tests for route /37 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/38')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38]', "Response did not have the correct text")
        console.log('All tests for route /38 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/39')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /39 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/40')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /40 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/41')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41]', "Response did not have the correct text")
        console.log('All tests for route /41 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/42')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /42 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/43')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43]', "Response did not have the correct text")
        console.log('All tests for route /43 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/44')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44]', "Response did not have the correct text")
        console.log('All tests for route /44 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/45')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz"]', "Response did not have the correct text")
        console.log('All tests for route /45 have passed YAY!')
        return 
    }
})


chai.request(app)
.get('/46')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46]', "Response did not have the correct text")
        console.log('All tests for route /46 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/47')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47]', "Response did not have the correct text")
        console.log('All tests for route /47 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/48')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /48 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/49')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49]', "Response did not have the correct text")
        console.log('All tests for route /49 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/50')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /50 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/51')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /51 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/52')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52]', "Response did not have the correct text")
        console.log('All tests for route /52 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/53')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53]', "Response did not have the correct text")
        console.log('All tests for route /53 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/54')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /54 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/55')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /55 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/56')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56]', "Response did not have the correct text")
        console.log('All tests for route /56 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/57')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /57 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/58')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58]', "Response did not have the correct text")
        console.log('All tests for route /58 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/59')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59]', "Response did not have the correct text")
        console.log('All tests for route /59 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/60')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz"]', "Response did not have the correct text")
        console.log('All tests for route /60 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/61')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61]', "Response did not have the correct text")
        console.log('All tests for route /61 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/62')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62]', "Response did not have the correct text")
        console.log('All tests for route /62 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/63')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /63 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/64')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64]', "Response did not have the correct text")
        console.log('All tests for route /64 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/65')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /65 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/66')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /66 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/67')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67]', "Response did not have the correct text")
        console.log('All tests for route /67 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/68')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68]', "Response did not have the correct text")
        console.log('All tests for route /68 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/69')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /69 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/70')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /70 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/71')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71]', "Response did not have the correct text")
        console.log('All tests for route /71 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/72')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /72 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/73')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73]', "Response did not have the correct text")
        console.log('All tests for route /73 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/74')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74]', "Response did not have the correct text")
        console.log('All tests for route /74 have passed YAY!')
        return 
    }
})




chai.request(app)
.get('/75')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz"]', "Response did not have the correct text")
        console.log('All tests for route /75 have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/76')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76]', "Response did not have the correct text")
        console.log('All tests for route /76 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/77')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77]', "Response did not have the correct text")
        console.log('All tests for route /77 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/78')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /78 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/79')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79]', "Response did not have the correct text")
        console.log('All tests for route /79 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/80')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /80 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/81')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /81 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/82')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82]', "Response did not have the correct text")
        console.log('All tests for route /82 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/83')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83]', "Response did not have the correct text")
        console.log('All tests for route /83 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/84')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /84 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/85')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /85 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/86')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86]', "Response did not have the correct text")
        console.log('All tests for route /86 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/87')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /87 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/88')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88]', "Response did not have the correct text")
        console.log('All tests for route /88 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/89')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89]', "Response did not have the correct text")
        console.log('All tests for route /89 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/90')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz"]', "Response did not have the correct text")
        console.log('All tests for route /90 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/91')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91]', "Response did not have the correct text")
        console.log('All tests for route /91 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/92')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92]', "Response did not have the correct text")
        console.log('All tests for route /92 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/93')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /93 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/94')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94]', "Response did not have the correct text")
        console.log('All tests for route /94 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/95')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /95 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/96')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /96 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/97')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz",97]', "Response did not have the correct text")
        console.log('All tests for route /97 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/98')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz",97,98]', "Response did not have the correct text")
        console.log('All tests for route /98 have passed YAY!')
        return 
    }
})
chai.request(app)
.get('/99')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz",97,98,"Fizz"]', "Response did not have the correct text")
        console.log('All tests for route /99 have passed YAY!')
        return 
    }
})


chai.request(app)
.get('/100')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz",97,98,"Fizz","Buzz"]', "Response did not have the correct text")
        console.log('All tests for route /100 have passed YAY!')
        return 
    }
})

