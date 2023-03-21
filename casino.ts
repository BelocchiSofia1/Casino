import {Roulette} from "./ruleta"
import {Craps} from "./craps"

export class Casino{
    private nameCasino: string;
    private adressCasino: string;
    private isOpen: boolean;
    private roulette: Roulette;
    private craps: Craps

    constructor(nameCasino: string, adressCasino: string, isOpen: boolean, roulette: Roulette, craps: Craps){
        this.nameCasino = nameCasino;
        this.adressCasino = adressCasino;
        this.isOpen = isOpen;
        this.roulette = roulette;
        this.craps = craps 
    }

    getInfo(): Casino{
        return this;
    }

 //   SetRoulette(Roulette){
  //     return this;
//}
 //   SetCarps(Craps){
 //   return this;
//}
}