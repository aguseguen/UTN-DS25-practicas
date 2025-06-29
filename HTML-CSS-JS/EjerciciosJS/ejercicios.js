/** Ejercicio 1 */
function ejercicio1() {
    let valorInicial = 10;
    let cantidadASumar = 5;
    let resultado = valorInicial + cantidadASumar;
    console.log("El resultado del ejercicio 1 es:", resultado);
}

/** Ejercicio 2 */
function ejercicio2() {
    let nombreUsuario = "Profe";
    let parte1 = "Hola, ";
    let parte2 = ". ¡Bienvenido!";
    let frase = parte1 + nombreUsuario + parte2;
    console.log("El mensaje del ejercicio 2 es:", frase);
}

/** Ejercicio 3 */
function ejercicio3() {
    let valor1 = 5;
    let valor2 = 8;

    if (valor1 > valor2) {
        console.log("El primer valor es el más grande.");
    } else if (valor2 > valor1) {
        console.log("El segundo valor es el más grande.");
    } else {
        console.log("Ambos valores son iguales.");
    }
}

/** Ejercicio 4 */
function ejercicio4() {
    let numeroDeGrupo = 5;
    console.log("Evaluando el número de grupo:", numeroDeGrupo);

    if (numeroDeGrupo >= 1 && numeroDeGrupo <= 3) {
        console.log("Corresponde al Grupo 1.");
    } else if (numeroDeGrupo >= 4 && numeroDeGrupo <= 6) {
        console.log("Corresponde al Grupo 2.");
    } else if (numeroDeGrupo >= 7 && numeroDeGrupo <= 10) {
        console.log("Corresponde al Grupo 3.");
    } else {
        console.log("El número está fuera de los rangos definidos.");
    }
}

/** Ejercicio 5 */
function ejercicio5() {
    let totalSuma = 0;
    for (let i = 1; i <= 10; i++) {
        totalSuma = totalSuma + i;
    }
    console.log("La suma de los números del 1 al 10 es:", totalSuma);
}

/** Ejercicio 6 */
function ejercicio6() {
    let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let resultadoProducto = 1;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        resultadoProducto = resultadoProducto * listaDeNumeros[i];
    }
    console.log("El producto de todos los números es:", resultadoProducto);
}

/** Ejercicio 7 */
function ejercicio7() {
    function realizarMultiplicacion(factor1, factor2) {
        return factor1 * factor2;
    }
    let resultado = realizarMultiplicacion(3, 4);
    console.log("El resultado de la multiplicación es:", resultado);
}

/** Ejercicio 8 */
function ejercicio8() {
    function juntarTextos(textoA, textoB) {
        return textoA + textoB;
    }
    let textoFinal = juntarTextos("Hola ", "mundo");
    console.log("El resultado de unir las cadenas es:", textoFinal);
}

/** Ejercicio 9 */
function ejercicio9() {
    function evaluarNumeros(x, y) {
        if (x > y) {
            return "El primer número es mayor.";
        } else if (y > x) {
            return "El segundo número es mayor.";
        } else {
            return "Los números son iguales.";
        }
    }
    let resultadoComparacion = evaluarNumeros(10, 5);
    console.log("Resultado de la comparación:", resultadoComparacion);
}

/** Ejercicio 10 */
function ejercicio10() {
    function dibujarLinea(longitud) {
        let linea = "";
        for (let i = 0; i < longitud; i++) {
            linea += "*";
        }
        console.log(linea);
    }
    console.log("Dibujando línea de 7 asteriscos:");
    dibujarLinea(7);
}

/** Ejercicio 11 */
function ejercicio11() {
    function calcularPrecioFinal(precio, formaDePago) {
        let descuentoAplicado = 0;

        if (precio > 400) {
            descuentoAplicado = 0.40;
        } else if (precio >= 200 && formaDePago === "E") {
            descuentoAplicado = 0.30;
        } else if (precio >= 200 && formaDePago === "D") {
            descuentoAplicado = 0.20;
        } else if (precio >= 200 && formaDePago === "C") {
            descuentoAplicado = 0.10;
        }
        
        let montoADescontar = precio * descuentoAplicado;
        return precio - montoADescontar;
    }
    let montoFinal = calcularPrecioFinal(350, "E");
    console.log("El monto final a pagar es:", montoFinal);
}

/** Ejercicio 12 */
function ejercicio12() {
    function dibujarArbolito(pisos) {
        for (let i = 1; i <= pisos; i++) {
            let fila = "";
            for (let j = 1; j <= i; j++) {
                fila += "*";
            }
            console.log(fila);
        }
    }
    console.log("Dibujando árbol de 7 pisos:");
    dibujarArbolito(7);
}

/** Ejercicio 13 */
function ejercicio13() {
    function obtenerDiaDeLaSemana(numeroDia) {
        switch (numeroDia) {
            case 1: return "Lunes";
            case 2: return "Martes";
            case 3: return "Miércoles";
            case 4: return "Jueves";
            case 5: return "Viernes";
            case 6:
            case 7:
                return "Es fin de semana";
            default:
                return "Número de día no válido";
        }
    }
    console.log("El día 6 es:", obtenerDiaDeLaSemana(6));
}

/** Ejercicio 14 */
function ejercicio14() {
    let cantNumerosStr = prompt("¿Cuántos números quiere promediar?");
    let cantNumeros = Number(cantNumerosStr);

    let sumaDeValores = 0;
    for (let i = 0; i < cantNumeros; i++) {
        let valorStr = prompt("Ingrese el número " + (i + 1) + ":");
        sumaDeValores += Number(valorStr);
    }

    let promedioFinal = sumaDeValores / cantNumeros;
    console.log("El promedio de los números ingresados es:", promedioFinal);
}

/** Ejercicio 15 */
function ejercicio15() {
    function construirArbolUsuario() {
        let alturaStr = prompt("Ingresa la altura para el árbol:");
        let altura = parseInt(alturaStr);

        if (altura > 0) {
            for (let i = 1; i <= altura; i++) {
                let piso = "";
                for (let j = 0; j < i; j++) {
                    piso = piso + "*";
                }
                console.log(piso);
            }
        } else {
            alert("Por favor, ingresa un número positivo.");
        }
    }
    construirArbolUsuario();
}