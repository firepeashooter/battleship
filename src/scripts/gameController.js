
import { Player } from "./player";
import { Gameboard } from "./gameboard";

export class GameController {

	constructor(playerOne = 'PlayerOne', playerTwo = 'Player2') {

		this.players = [new Player(playerOne, 'real'), new Player(playerTwo, 'real')];

		this.curPlayer = this.players[0];

	}
}
