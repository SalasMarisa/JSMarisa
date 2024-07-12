let pelicula
let formato
alert("Bienvenido a Cines Buenos Ratos");
do {
    pelicula = parseInt(prompt("Menú de peliculas\n\n1. Mi villano favorito 4\n2. Intensamente 2\n3. Tornados\n4. Un lugar en silencio\n5. Deadpool Wolverine\n\n0. Para salir"));
    if (pelicula === 0){
        alert("Gracias por visitarnos, vuelve pronto");
    }else if (pelicula === 1){
        formato = parseInt(prompt("Formatos:\n\n1. 2D\n2. 3D\n3. 4D\n\n ELIGE EL FORMATO"));
            if (formato === 1){
                alert("Valor de cada entrada $1000");
            }else if (formato === 2){
                alert("Esta pelicula no cuenta con este formato");
            }else if (formato === 3){
                alert("Valor de cada entrada $2200");
            }else{ 
                alert("Elige una opcion valida")
            }
    }else if (pelicula === 2){
        formato = parseInt(prompt("Formatos:\n\n1. 2D\n2. 3D\n3. 4D\n\n ELIGE EL FORMATO"));
            if (formato === 1){
                alert("Valor de cada entrada $1000");
            }else if (formato === 2){
                alert("Valor de cada entrada $1500");
            }else if (formato === 3){
                alert("Valor de cada entrada $2200");
            }else{ 
                alert("Elige una opcion valida");
            }
    }else if (pelicula === 3){
        formato = parseInt(prompt("Formatos:\n\n1. 2D\n2. 3D\n3. 4D\n\n ELIGE EL FORMATO"));
            if (formato === 1){
                alert("Valor de cada entrada $1000");
            }else if (formato === 2){
                alert("Valor de cada entrada $1500");
            }else if (formato === 3){
                alert("Valor de cada entrada $2200");
            }else{ 
                alert("Elige una opcion valida")
            }
    }else if (pelicula === 4){
        formato = parseInt(prompt("Formatos:\n\n1. 2D\n2. 3D\n3. 4D\n\n ELIGE EL FORMATO"));
            if (formato === 1){
                alert("Valor de cada entrada $1000");
            }else if (formato === 2){
                alert("Esta pelicula no cuenta con este formato");
            }else if (formato === 3){
                alert("Esta pelicula no cuenta con este formato");
            }else{ 
                alert("Elige una opcion valida");
            }
    }else if (pelicula === 5){
            alert("Ups! Todavia no se estreno");
    }else{
        alert("Opcion invalida")
    }
}
while (opcion !== 0);
    
/*     }else if(pelicula !== 0 || pelicula !== 1 || pelicula !== 2 || pelicula !== 3 || pelicula !== 4 || pelicula !== 5){
        alert("Opción inválida. Ingresá una opción válida");
    } */


