var jugador01 = prompt("Elige piedra, papel o tijera: ");

var jugador02 = prompt("Elige piedra, papel o tijera: ");


if (jugador01 != 'piedra' || 'papel' || 'tijera' && jugador02 != 'piedra' || 'papel' || 'tijera') {console.log('No es válido')}

else if (jugador01 === jugador02) {console.log("Es un empate!")}

    switch (jugador01) {
        case 'piedra':
            switch (jugador02) {case 'papel': console.log ('Gana el jugador 02.'); break}
            switch (jugador02) {case 'tijera': console.log ('Gana el jugador 01.'); break}
    }

    switch (jugador01) {
        case 'papel':
            switch (jugador02) {case 'piedra': console.log ('Gana el jugador 01.'); break}
            switch (jugador02) {case 'tijera': console.log ('Gana el jugador 02.'); break}
    }

        switch (jugador01) {
        case 'tijera':
            switch (jugador02) {case 'piedra': console.log ('Gana el jugador 02.'); break}
            switch (jugador02) {case 'papel': console.log ('Gana el jugador 01.'); break}
    }






