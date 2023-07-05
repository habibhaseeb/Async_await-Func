// We are making a funtion that return a promise in Asynchronous JavaScript.

    function asyncFun() {
        return new Promise((resolved,reject) =>{
            setTimeout(resolved, 500 , "This is 1st statement")
        }
              
       );
    }
    async function random() {
        var message = await asyncFun(); 
        console.log(message);
     return 'This is 2nd statement';
    }

    random().then(
        function(message) {
            console.log(message);
        }
    )
    .then(function(x , y){
         
    if (5 / 3) {

        console.log("This is 3rd statement");
      }

      else{  
        console.log( "This is 4th statement");
      }
    });
      
    