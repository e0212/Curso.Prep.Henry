// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  const nombresAsociados = ['John', 'Peter', 'Sara', 'Samuel'];
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoElemento = array.length - 1;
  return array [ultimoElemento];
}

// se puede resolver tambien con return array [array.length-1];

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1 (aca se usa la bolsa, porque necesita meter el nuevoArray)
  // y devuelve el array
  // Tu código:
  var nuevoArray =[]; // la bolsa
  for (var i = 0; i < array.length; i++) { // itinera dentro de todo lo que sea array.
    nuevoArray[i] = array[i] +1; // Aumenta .Que comience a buscar en la posicion 0 y se vaya incrementando en 1.
  }
  return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento; // con = agrega porque es asignacion, un nuevo elemento llamado "elemento" al final del array.
  return array;
}
 // se puede resolver con array.push (elemento);
 // return array;

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
 }

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i=0; i<array.length; i++){
    if(array[i]===elemento){ // array en la posicion i === elemento .le dice basicamente itinera dentro de array hasta encontrar elemento.
      return true;
      }
     }
    return false;
  }

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var suma =0;
  for(var i=0; i<numeros.length; i++){ // numeros.length toma de arriba donde declara la funcion. (ver otros ejercicios que toma array.length)
    suma = suma + numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

//  [2,4,3,1,5]=== 15     (var suma)
//  length= 5             var totalDeElementos = resultadosTest.length
//  promedio= 3           suma/total

// var totalDeElementos = resultadosTest.length;
// var suma = 0;
// for (var i = 0; i<resultadosTest.length; i++){
//   suma = suma + resultadosTest[i];    (sumalos y metelos adentro)
// }
// var promedio = suma / totalDeElementos;
// return promedio;
// }

  var acum = 0;
  for(var i=0; i<resultadosTest.length;i++){ 
    acum = acum + resultadosTest[i];
}
var prom = acum / i;
return prom;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande (var mayor)
  // Tu código:
  // la busqueda del mayor

  var mayor = numeros[0]; // tomo numero subcero el primer elemento como el mayor, y comienzo a iterar.
  for(var i=0; i<numeros.length;i++){
  if(numeros[i]>mayor){ // empiezo a preguntar, si lo que tiene numeros sub i es > a mayor, luego voy a decir...
    mayor = numeros[i];  //  que a mayor le asigne lo que encontro como mayor ahora que es numeros sub i                   
    }                     // cuando salga del for lo que va tener es el mayor encontrado.
  }
  return mayor;
}



function multiplicarArgumentos() {
// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
// Escribe tu código aquí:

  if (arguments.length===0){ 
    return 0;
  }
  if (arguments.length===1){ 
  return 1;
  }
  var m = 1; // multiplicacion =1 => aca arranca
  for(var i=0; i<arguments.length;i++){ 
    m = m*arguments[i];
  }
  return m;
  }

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // pide esto: [9,9,18,22] = 1 => solo el 22 es mayor a 18
  
  var cant=0;
  for(var i=0;i<arreglo.length;i++){ 
    if(arreglo[i]>18){  // se usa para preguntar la condicion que sea mayor a 18, si es mayor a 18 contalo sino no.
      cant++;
       }
      }
      return cant;
    }

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
   if(numeroDeDia===1 || numeroDeDia===7){ 
     return "Es fin de semana"
      }else{ 
        return "Es dia Laboral";
      }
  }

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // 95
  // var str = "95"  "9"
  var cadena = n.toString()

  if(cadena[0]==="9"){ // convierte el caracter 9 y lo trae a string en posicion [0]
    return true;
    }
    return false;
}
// empiezaConNueve(95)
// empiezaConNueve (145) no - saltea true y devuelve false

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  // [2,2,2,2,2,2,87] 2 en la posicion 0 es distinto al que le sigue? no, entonces sigue iterando. En estos casos que vemos lo que esta por delante, cortamos antes de 87 para no salirnos del arreglo. Porque despues de 87 no hay nada.
  // === exactamente igual
  // !== distinto

  for(var i=0; i<arreglo.length-1;i++){ 
    if(arreglo[i]!==arreglo[i+1]){ //comparamos el elemento en el que estamos parados [i] con el elemento que le sigue a ese.  si la primera posicion es distina a la siguiente
      return false;
    } 
  } 
  return true;
 }

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArreglo =[]
  for(var i = 0; i<array.length; i++){ 
    if(array[i] ==="Enero"  || array[i] ==="Marzo"  || array[i] ==="Noviembre"){
      nuevoArreglo.push(array[i]);
  }
  }
  if(nuevoArreglo.length ===3){ 
          return nuevoArreglo;
        }
        return "No se encontraron los meses pedidos";
      }
       



function mayorACien(array) {

  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
 // [100, 4, 56, 78, 200, 120, 7, 160, 148, 22]  

  var mayores100 = [];  // [200, 120, 160, 148] declaramos un array vacio para saber si lo podemos llenar o no (o sea si encuentra numeros mayores a 100). 
  for(var i = 0; i < array.length; i++){ 
    if(array[i] > 100) { 
      mayores100.push (array[i]); // array en la posicion i [i] va buscando hasta encontrar los mayores a 100 y los mete en la bolsa.
      }
     }
     return mayores100;
    }

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.(cuando dice esto nos da la pauta que usemos el array vacio - bolsa para iniciar). 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  // 52 = 0, no
  // 54 = 1, no. aca no se corta porque nunca coincide la iteracion con el numero.
  // -4 si, seria cuando llega a 2. coincide con la iteracion.
  var arreglo =[];
  var vueltas = 0;
  for(var i = 0; i < 10; i++) {
    numero = numero + 2;
    arreglo.push(numero)
    vueltas = vueltas + 1;

    if(vueltas === numero){ // frena porque valor de suma y el numero de iteraciones coinciden ( === )
      break;
      }
    }
     if (vueltas < 10) {
 return "Se interrumpió la ejecución";
  }
return arreglo;
}
// ejm: recibe el 50 [52,54,56,58,60,62,64,66,68,70]
// ejm: recibe el -4 [-2, 0, 2, 4, 6, 8, 10, 12, 14] aca se corta porque 2 === 2
//                    0, 1, 2

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  // nunca alcanza el valor 5. 
  // expect(continueStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68]); 9 veces
  // expect(continueStatement(-4)).toEqual([-2, 0, 2, 4, 6, 8, 10, 12, 14]); 9 veces
  
  var arreglo = [];
  for(var i = 0; i < 10; i++){ 
    
    if( i === 5){ 
      continue;
       }
       numero = numero + 2;
       arreglo.push(numero);
      }
       return arreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
