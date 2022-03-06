"use strict";

function secondsToString(seconds) {
  let numdays = Math.floor(seconds / 86400);
  let numhours = Math.floor((seconds % 86400) / 3600);
  let numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
  let numseconds = ((seconds % 86400) % 3600) % 60;

  return (
    numdays +
    " dias " +
    numhours +
    " horas " +
    numminutes +
    " minutos " +
    numseconds +
    " segundos"
  );
}
function stop(duracion, unidad) {
  let tiempoTotal = 0;
  const tiempo = () => {
    tiempoTotal = tiempoTotal + 5;
    console.log(secondsToString(tiempoTotal));
    if (duracion === tiempoTotal) {
      clearInterval(myInterval);
      console.log("el programa se ha parado");
    }
  };
  if (unidad === "M") {
    duracion = duracion * 60;
  } else if (unidad === "H") {
    duracion = duracion * 3600;
  } else if (unidad === "D") {
    duracion = duracion * 3600 * 24;
  } else if (unidad !== "S") {
    console.error(error);
  }
  const myInterval = setInterval(tiempo, 1000);
}
stop(1, "M");
