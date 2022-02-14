function sumaTodosImpares(array) {
    var impares = [];
    var sumaTodosImpares = 0;
  
    for (let i = 0; i < array.length; i++) {
          if(array[i] % 2 === 1){
            impares.push(array[i]);
            sumaTodosImpares = sumaTodosImpares + array[i];
             
          }
          
    }
    console.log(array);
     return sumaTodosImpares ; 
     
     
  }
  
  
  

  