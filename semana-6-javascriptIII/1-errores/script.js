"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

// let width = 12;      // variable width
// let height = 'test'; // variable height
// ​
// function calculateArea(width, height)
//   try {
//     let area = width * height; // Intenta calcular el area
//     if (!isNaN(area)) {        // Si es un número
//       return area;             // Devuelve el área
// } else {                       // De lo contrario, arroja un error
//     throw new Error('calculateArea() received invalid number');
//  } catch(e) {                  // Si existe un error
//    console.log(e.name + ' ' + e.message);  // Se muestra en la consola
//    return 'No fue posible calcular el área.'; // Muestra un mensaje al usuario
//   }
// }

let DNI = "09444349-c";

function comprobarDni(DNI) {
  try {
    if (DNI.length === 10) {
      console.log("longitud correcta");
    } else {
      throw new Error("longitud incorrecta");
    }
  } catch (e) {
    console.error(e.message);
  }

  //ej 2
  const guion = DNI.split("-");
  console.log(guion);
  try {
    if (guion.length === 2) {
      console.log("correcto");
    } else {
      throw new Error("demasiados guiones");
    }
  } catch (e) {
    console.error(e.message);
  }

  //ej 3

  try {
    if (!isNaN(guion[0])) {
      console.log("correcto");
    } else {
      throw new Error("esto no es un numero");
    }
  } catch (e) {
    console.error(e.message);
  }

  //ej 4
  try {
    if (isNaN(guion[1]) && guion[1].length === 1) {
      console.log("correcto");
    } else {
      throw new Error("esto no es una letra");
    }
  } catch (e) {
    console.error(e.message);
  }

  //ej 5
  let letraDni;
  let resto = guion[0] % 23;

  letraDni = letras[resto];

  guion[1] = guion[1].toUpperCase();
  try {
    if (guion[1] === letraDni) {
      console.log(" es un DNI válido");
    } else {
      throw new Error("se ha producido un error");
    }
  } catch (e) {
    console.error(e.message);
  }
}

comprobarDni(DNI);
