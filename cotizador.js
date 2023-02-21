var seguirCotizando = "";
do {
    seguirCotizando = ""
    const precioBase = 2000;
    var precioFinal = 0;
    var edadConyugue = 0;
    var edadPersona = 0;
    var cantidadHijos = 0;
    var recargos = 0;

    edadPersona = prompt(`
Bienvenido al cotizador de aseguranza TK-U
Ingresa la edad de la persona
`);

    var nombrePersona = prompt("Ingresa el nombre de la persona");
    var esCasado = prompt(`Si la persona es casada ingrese SI, si la persona es soltera ingrese NO`);
    cantidadHijos = prompt("Si la persona tiene hijos, ingrese la cantidad, si no presione enter");

    if (edadPersona >= 18) {
        try {
            if (esCasado.toLowerCase() == "si") {
                edadConyugue = prompt("Ingresa la edad del conyugue");
                recargos = calcularCostoPorEdad(edadConyugue) + calcularCostoPorEdad(edadPersona);
            } else if (esCasado.toLowerCase() == "no") {
                recargos = calcularCostoPorEdad(edadPersona);
            } else if (esCasado.toLowerCase() != "si" && esCasado.toLowerCase() != "no") {
                throw "No has ingresado correctamente el estado civil de la persona";
            }
            if (typeof cantidadHijos == 'number' || cantidadHijos > 0) {
                recargos += calcularCostoPorNumeroHijos(cantidadHijos)
            }
        } catch (e) {
            alert("No has ingresado correctamente los datos solicitados");
        }
    } else {
        alert("Lo sentimos, la persona debe ser mayor de edad");
    }

    precioFinal = precioBase + recargos

    alert(`Cotizacion para ${nombrePersona}
    Costo de los recargos: ${recargos}
    Costo total de la poliza: ${precioFinal}`)

    seguirCotizando = prompt("Si desea terminar el programa ingrese la palabra SALIR")

    function calcularCostoPorEdad(edad) {
        let costoPorEdad = 0;
        if (edad <= 24) {
            costoPorEdad = (precioBase * 0.1);
        } else if (edad >= 25 && edad <= 49) {
            costoPorEdad = (precioBase * 0.2);
        } else {
            costoPorEdad = (precioBase * 0.3);
        }
        return costoPorEdad;
    }

    function calcularCostoPorNumeroHijos(numeroHijos) {
        return (precioBase * 0.2) * numeroHijos;
    }
} while (seguirCotizando.toLowerCase() != "salir")