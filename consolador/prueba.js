function math (a,b, callback){

    var resultado = a + b;

    callback (resultado)
}

function suma (resultado){

    if (resultado >10 ) {

        alert ("El resultado de la suma es muy grande!" + resultado);

    }else{

        alert ("El resultado de la suma es muy pequeño!" + resultado);
    }
}

math (5, 6, suma)

  