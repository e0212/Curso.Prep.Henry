// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    })  ➞     ➞      ➞     ➞       ➞ [["D", 1], ["B", 2], ["C", 3]]*/
//Escribe tu código aquí.

 var array = []

 for(clave in objeto) {

  array.push ([clave, objeto [clave]])
 }
 return array
}

//return Object.entries(objeto);     ➞ [["D", 1], ["B", 2], ["C", 3]]*/
//}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.   ➞  (es un OBJETO)
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  var objDeLetras = {}

  for( var i = 0; i<string.length; i++) {
    var letra = string [i]

    if ( objDeLetras[letra] === undefined) {
      objDeLetras[letra] = 1 
    } else {
   objDeLetras[letra] += 1
   }
 }
      return objDeLetras
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayus = ""// HENRY
  var min = ""// soy

  for ( var i = 0; i< s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {

      mayus +=  s[i]
  } else {

      min += s[i]
  }
}
    return mayus + min
} 

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var reverseFrase = str.split(" ").map(function(str) {

    let strReversed = ""
  
    for (var i = str.length-1; i>=0; i--) {
    strReversed = strReversed + str[i]
  } 
     return strReversed
 }) 
  return reverseFrase.join(" ")
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  // 12321  ➞ ["1", "2", "3", "2", "1"]  ➞   .toString
  // split separa ➞ reverse los da vuelta ➞ join los vuelve a unir
  // 12321

  let cadena = numero.toString (); 

  let cadenaInvertida = "";

  cadenaInvertida = cadena.split ("").reverse().join("");

  if (cadena === cadenaInvertida ) {
    return "Es capicua";
  
  } else {
    return "No es capicua";
   }  
  } 


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  // abcefgh  ➞   nueva letra = efgh 
  //Escribe tu código aquí
  
  var nuevaletra = ""
  
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c" ) {
      nuevaletra = nuevaletra + cadena[i];
    }
 }
   return nuevaletra
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var ordenado = []
  ordenado = arr.sort(function (a,b) { return a.length - b.length })
  return ordenado
  }


 //for (let i = 0; i < arr.length; i++) {
  
   //for (let j = i+1 ; j < arr.length; j++) {

     
     //if(arr[i].length > arr[j].length) {

     // var auxMayor = arr[i]
      //arr[i] = arr[j];
     // arr[j] = auxMayor;
     
       //}
      //}
     //}
     //return arr
   //}
  
function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  
  var intersección = []
  for (let i = 0; i < arreglo1.length; i++) {
    

    for (let j = 0; j < arreglo2.length; j++) {

      if (arreglo1 [i] === arreglo2 [j])
      intersección.push (arreglo1[i])
      }
    }
    return intersección
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

