var jugador01 = prompt("Elige piedra, papel o tijera: ");

var jugador02 = prompt("Elige piedra, papel o tijera: ");


if (jugador01 === jugador02) {console.log("Es un empate!")}

    else {

        switch (jugador01) {
            case "piedra":
                if (jugador02 === "papel") {console.log("Gana el jugador 02");}
                    else if (jugador02 === "tijera") {console.log("Gana el jugador 01");}
        }

        switch (jugador01) {
            case "papel":
                if (jugador02 === "tijera") {console.log("Gana el jugador 02");}
                    else if (jugador02 === "piedra") {console.log("Gana el jugador 01");}
        }

        switch (jugador01) {
            case "tijera":
                if (jugador02 === "piedra") {console.log("Gana el jugador 02");}
                    else if (jugador02 === "papel") {console.log("Gana el jugador 01");}
        }

    }