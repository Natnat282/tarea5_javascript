function calcular() {
    const input = document.getElementById("numero").value;
    let numero;

    // Manejo de errores con try/catch/throw
    try {
        numero = Number(input);
        if (isNaN(numero)) {
            throw new Error("Por favor, introduce un número válido.");
        }

        // Usando el objeto Math
        const raizCuadrada = Math.sqrt(numero);
        const potencia = Math.pow(numero, 2);

        // Control de flujo con if...else
        let resultadoTexto = "";
        if (numero < 0) {
            resultadoTexto += "El número es negativo.<br>";
        } else if (numero === 0) {
            resultadoTexto += "El número es cero.<br>";
        } else {
            resultadoTexto += "El número es positivo.<br>";
        }

        // switch
        switch (true) {
            case (numero < 10):
                resultadoTexto += "El número es menor que 10.<br>";
                break;
            case (numero >= 10 && numero < 20):
                resultadoTexto += "El número está entre 10 y 19.<br>";
                break;
            case (numero >= 20):
                resultadoTexto += "El número es 20 o mayor.<br>";
                break;
        }

        // Bucle for
        let tabla = "Tabla de multiplicar de " + numero + ":\n";
        for (let i = 1; i <= 10; i++) {
            tabla += `${numero} x ${i} = ${numero * i}\n`;
        }
        resultadoTexto += "<pre>" + tabla + "</pre>";

        // Bucle while
        let contador = 0;
        let suma = 0;
        while (contador < numero) {
            suma += contador;
            contador++;
        }
        resultadoTexto += "La suma de los números desde 0 hasta " + (numero - 1) + " es " + suma + ".<br>";

        // Usando el objeto Date
        const fechaActual = new Date();
        resultadoTexto += "La fecha y hora actual es: " + fechaActual.toLocaleString() + "<br>";
        resultadoTexto += "El año actual es: " + fechaActual.getFullYear() + "<br>";
        resultadoTexto += "El mes actual es: " + (fechaActual.getMonth() + 1) + "<br>"; 
        
        // Mostrar resultados
        resultadoTexto += "La raíz cuadrada de " + numero + " es " + raizCuadrada.toFixed(2) + ".<br>";
        resultadoTexto += "El cuadrado de " + numero + " es " + potencia + ".<br>";

        document.getElementById("resultado").innerHTML = resultadoTexto;

    } catch (error) {
        document.getElementById("resultado").innerHTML = "<span style='color: red;'>" + error.message + "</span>";
    }
}

function mostrarElementos() {
    // Encontrar elementos HTML por nombre de clase
    const elementos = document.getElementsByClassName("item");
    const resultados = []; 

    
    for (let i = 0; i < elementos.length; i++) {
        resultados.push(elementos[i].textContent); 
    }

    
    const resultadoDiv = document.getElementById("resultado2");
    resultadoDiv.innerHTML = ""; 

    // Mostrar los resultados en el div
    resultados.forEach((texto, index) => {
        const nuevoElemento = document.createElement("div");
        nuevoElemento.textContent = `Elemento ${index + 1}: ${texto}`;
        
        resultadoDiv.appendChild(nuevoElemento);
    });

    // Arreglo tipado (TypedArray) para almacenar números
    const numeros = new Uint8Array([10, 20, 30, 40, 50]);
    const suma = calcularSuma(numeros);
    const sumaElemento = document.createElement("div");
    sumaElemento.textContent = `La suma de los números es: ${suma}`;
    resultadoDiv.appendChild(sumaElemento);
}

// Función para calcular la suma de un arreglo
function calcularSuma(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}