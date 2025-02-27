// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var cat ={
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
  }
};
return cat;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property]= null; // objeto - clave=property - valor=null
  return objeto;
}
//se accede al parametro de property con brackets[].La propiedad no se llama property puede venir cualquier cosa, entonces los [] toma el parametro que viene por la funcion.
// property es una variable por eso se usa bracket.
function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo] ();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  var result = objetoMisterioso.numeroMisterioso * 5;
  return result;

  // return objetoMisterioso.numeroMisterioso * 5;

}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto [unaPropiedad];
  return objeto;
}
// unaPropiedad viene pasada por parametro. no conocemos lo que tiene adentro.
// unaPropiedad seria la clave o tambien llamada propiedad.
// unaPropiedad es una variable.  

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto ={
    nombre: nombre,
    email: email,
    password: password,
  }
  return objeto;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if(usuario.email != null){ //if the user object has a value (o sea no es null)
    return true;
  }else{
    return false;
  }
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto [propiedad]!=null){
    return true;
  }else{
    return false;
  }
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if(usuario ["password"]=== password){ // if passwords match
    return true;
  }else{
    return false;
  }
}
// la que esta en comillas es la password que esta dentro del objeto usuario y pregunta si coincide con password valor

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
// retornar el usuario objeto con la clave actualizada (nuevaPassword)
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}
// usamos dot notation porque sabemos que usuario tiene esa propiedad.

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  
  for(var i= 0; i<usuarios.length; i++){
    usuarios [i].esPremium = true;
  }
 return usuarios;
}

  //usuarios.map(function(element){
  //  element.esPremium = true;
  //});
  //return usuarios;

// el objeto map ejecuta una accion por cada elemento del array
/*
var usuarios = [
  usuario = {
    esPremium: false,
  },

  usuario = {
    esPremium: false,
  },

  usuario = {
    esPremium: false,
  },
]
*/

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  /*
 usuario {   ===>   es un objeto

   posts: [  ===>   es un array que dentro contiene mas objetos
   post {
     likes: 10,
    }

  post {
      likes: 100,
    }

    post {
      likes: 35,
    }

    post {
      likes: 42,
    }

    post {
      likes: 99,
    }

    ]
 
    }
*/
 var contador = 0; // aca se guarda todo lo que va a contar, o sea la suma de likes
 for(var i = 0; i<usuario.posts.length; i++ ){
   contador = contador + usuario.posts[i].likes;
  }
  return contador;
}

 //usuario.posts.map(function (element){
 //acumulador += element.likes;
 //});
 
 function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") 
  // y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  
  producto.calcularPrecioDescuento = function (){
    var precioConDescuento =
    producto.precio - producto.precio * producto.porcentajeDeDescuento;
    return precioConDescuento;
  };
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
