"use strict";

function iniciarReloj(horaInicio, horaFinal) {
  let cucus = "";

  for (let hora = 1; hora <= 24; hora++) {
    if (hora === 13) {
      cucus = "";
    }

    cucus = cucus + " cucú";

    if (hora >= horaInicio && hora <= horaFinal) {
      console.log(hora + cucus);
    }
  }
}

iniciarReloj(8, 21);
