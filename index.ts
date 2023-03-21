import {Roulette} from "./ruleta"
import {Craps} from "./craps"
//import CasinoGame from "./juegoDeCasino"
import {Casino} from "./casino"

const craps1 = new Craps ("Craps", 1500, "Linea de pase");
//console.log(craps1.getInfo());

const roulette1 = new Roulette ("Roulette1", 2000, 5, true);
////console.log(roulette1.getInfo());

const casino01 = new Casino ("Baden-Baden", "Alemania", true, roulette1, craps1)
console.log(casino01.getInfo());



