"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) =>
  setTimeout(
    () => resolve(Math.round(Math.random() * 100)),
    Math.random() * 1000
  )
);

const tiposEdad = (a) => {
  return new Promise((resolve, reject) => {
    if (a < 18) {
      reject(new TypeError(a + " es menor."));
    } else if (a % 2 === 0) {
      setTimeout(() => {
        resolve(a + " es par");
      }, 1000);
    } else {
      setTimeout(() => {
        resolve(a + " es impar");
      }, 1000);
    }
  });
};

tiposEdad(17)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.error("Error: " + err.message);
  });
