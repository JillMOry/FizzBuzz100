let express = require('express');


let app = express();
app.listen(8080);

//id = 65
//i = 64
//a = [1,2,"Fizz",4,"Buzz"]
function fizzBuzz (id) {
    a = [];
    // console.log("req.params ", id);
    for (let i = 0; i < id; i += 1){
      console.log("i & id ",  i, id);
        // console.log("i ", i);   
      b = i + 1;//
        if(b % 3 === 0 && b % 5 === 0){
          a = a.concat("FizzBuzz");
        }
        else if(b % 3 === 0){
            a = a.concat("Fizz");
            
        }
        else if(b % 5 === 0){
            a = a.concat("Buzz");

        }
       else{
      a = a.concat(b)
      console.log("a ", a);
        }
    }
    return a;
}

app.get('/', (request, response) => {
    response.send('Hello FizzBuzz!')
});

app.get('/:id', (request, response) => {
    response.json(fizzBuzz(request.params.id))
})

module.exports = app;


