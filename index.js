function iniciarJuego() { 
    alert("¡Bienvenido al juego del hombre lobo!");

    const confirmacion = confirm("¿Estàs listo para enfrentar el peligro con el hombre lobo?");

    if (confirmacion) { 
        alert("¡Execelente! Preparate para responder preguntas sobre la pelicula el hombre lobo.");

        //Llamamos a la funciòn para mostrar el primer nivel
        mostrarNivel1();
    }else {
        alert("¡Hasta luego! Si cambias de opiniòn, recarga la pàgina para volver a intental.");
    }
}

function mostrarNivel1() {
    alert("¿Quiénes son los protagonistas principales de la historia?\n1.Juan y Pedro\n2Kessler y Jack.\n3Jorge y  Manuel"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "1") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel2();
    }else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");




        reiniciarJuego(); 
    } else if (respuestaUsuario === "2") {
        alert("Incorrecta. Juan y Pedro");
        reiniciarJuego ();
        }

}

function iniciarJuego() { 
    alert("¡Bienvenido al juego del hombre lobo!");

    const confirmacion = confirm("¿Estàs listo para enfrentar el peligro con el hombre lobo?");

    if (confirmacion) { 
        alert("¡Execelente! Preparate para responder preguntas sobre el hombre lobo.");

        //Llamamos a la funciòn para mostrar el primer nivel
        mostrarNivel1();
    }else {
        alert("¡Hasta luego! Si cambias de opiniòn, recarga la pàgina para volver a intental.");
    }
}

function mostrarNivel2() {
    alert("¿Cómo se describe la actitud de la gente en la aislada zona rural?\n1.Actitud Extraña\n2Malos.\n3Felicesl"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "1") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel3();
    }else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "2") {
        alert("Incorrecta. Malo");
        reiniciarJuego ();
        }
    }


function iniciarJuego() { 
    alert("¡Bienvenido al juego del hombre lobo!");

    const confirmacion = confirm("¿Estàs listo para enfrentar el peligro con el hombre lobo?");

    if (confirmacion) { 
        alert("¡Execelente! Preparate para responder preguntas sobre el hombre lobo.");

        //Llamamos a la funciòn para mostrar el primer nivel
        mostrarNivel3();
    }else {
        alert("¡Hasta luego! Si cambias de opiniòn, recarga la pàgina para volver a intental.");
    }
}

function mostrarNivel3() {
    alert("¿Cuál es el objetivo de los dos jóvenes aventureros en su viaje por Europa?\n1.Recorrer la ciudad\n2 Recorrer toda la regiòn\n3Recorrer la mitad de la provincia"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "2") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel4();
    }else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "1") {
        alert("Incorrecta. Recorrer la ciudad");
        reiniciarJuego ();
        }
    }

    function iniciarJuego() { 
    alert("¡Bienvenido al juego del hombre lobo!");

    const confirmacion = confirm("¿Estàs listo para enfrentar el peligro con el hombre lobo?");

    if (confirmacion) { 
        alert("¡Execelente! Preparate para responder preguntas sobre el hombre lobo.");

        //Llamamos a la funciòn para mostrar el primer nivel
        mostrarNivel3();
    }else {
        alert("¡Hasta luego! Si cambias de opiniòn, recarga la pàgina para volver a intental.");
    }
}

function mostrarNivel4() {
    alert("¿Quién es el director de la película?\n1.John Landis\n2 Luis Miguel\n3Juan Fernandez");  
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "1") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel5();
    }else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "1") {
        alert("Incorrecta. Juan Fernandez");
        reiniciarJuego ();
        }
    }

    function iniciarJuego() { 
    alert("¡Bienvenido al juego del hombre lobo!");

    const confirmacion = confirm("¿Estàs listo para enfrentar el peligro con el hombre lobo?");

    if (confirmacion) { 
        alert("¡Execelente! Preparate para responder preguntas sobre la pelicula el hombre lobo.");

        //Llamamos a la funciòn para mostrar el primer nivel
        mostrarNivel1();
    }else {
        alert("¡Hasta luego! Si cambias de opiniòn, recarga la pàgina para volver a intental.");
    }
}

function mostrarNivel1() {
    alert("¿Quiénes son los protagonistas principales de la historia?\n1.Juan y Pedro\n2Kessler y Jack.\n3Jorge y  Manuel"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "1") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel2();
    }else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "2") {
        alert("Incorrecta. Juan y Pedro");
        reiniciarJuego ();
        }

}

function iniciarJuego() { 
    alert("¡Bienvenido al juego del hombre lobo!");

    const confirmacion = confirm("¿Estàs listo para enfrentar el peligro con el hombre lobo?");

    if (confirmacion) { 
        alert("¡Execelente! Preparate para responder preguntas sobre la pelicula el hombre lobo.");

        //Llamamos a la funciòn para mostrar el primer nivel
        mostrarNivel5();
    }else {
        alert("¡Hasta luego! Si cambias de opiniòn, recarga la pàgina para volver a intental.");
    }
}

function mostrarNivel5() {
    alert("¿¿En qué año se estrenó la película?\n1.2008\n21977\n3.1981"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "3") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel6();
    }else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "2") {
        alert("Incorrecta. 2008");
        reiniciarJuego ();
    }
}

function mostrarNivel6() {
    alert("¿Cuál es el giro sobrenatural que experimentan los dos jóvenes después de ser atacados?\n1.Que se transformaron en muertos vivientes\n2. Se transforman en Zombies\n3.Se transforman en animales"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "1") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel7();
    }else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "3") {
        alert("Incorrecta. 2008");
        reiniciarJuego ();
    }
}


function mostrarNivel7() {
    alert("¿Qué consecuencias sufren los protagonistas después de ser atacados y pedir auxilio sin recibir ayuda?\n1.  son diversas y abarcan tanto aspectos físicos como psicológicos. \n2. Se transforman en Zombies\n3.Se transforman en animales"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "1") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel8();
    }else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "3") {
        alert("Incorrecta. Se transforman en Zombies");
        reiniciarJuego ();
    }
}


function mostrarNivel8() {
    alert("¿Cuál es el título de la película descrita?\n1. La aventura \n2. Zombies\n3.El hombre lobo"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "3") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel9();
    }else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "3") {
        alert("Incorrecta. Se transforman en Zombies");
        reiniciarJuego ();
    }
}

function mostrarNivel9() {
    alert("¿En qué país se encuentran cuando experimentan eventos extraños?\n1. America \n2. Londres\n3. Asia"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "2") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel10();
    }else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "3") {
        alert("Incorrecta. Se transforman en Zombies");
        reiniciarJuego ();
    }
}

function mostrarNivel10() {
    alert("¿Qué suceso sorprendente experimentan los protagonistas durante la noche?\n1. Se convierte en lobo\n2. En zombie\n3. Oveja"); 
    
    const respuestaUsuario = prompt("Elige una opciòn (1, 2 o 3):");
    
    if (respuestaUsuario === "2") {
        alert("¡Correcto! Has pasado al siguente nivel.");
        mostrarNivel11();
    }else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta. ¡El juego ha terminado!");
        reiniciarJuego(); 
    } else if (respuestaUsuario === "3") {
        alert("Incorrecta. Se transforman en Zombies");
        reiniciarJuego ();
    }
}



function reiniciarJuego() {
    const reiniciar = confirm("¿Quieres reiniciar el juego?");
    if (reiniciar) {
      iniciarJuego();
    } else {
      alert("¡Hasta luego! Gracias por jugar.");
    }
  }


  iniciarJuego();