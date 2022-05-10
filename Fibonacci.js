

const fs = require("fs");
code = "number.txt";

fs.readFile(code, 'utf8', (error, datos) => {
if (error) {
    console.error(err);
    return;
}
let x = fibonacci(datos);
console.log(x);
});

function fibonacci(y){
   if (y < 2){
       return y
   }
   else{
       return fibonacci(y-1) + fibonacci(y-2)
   }

}




