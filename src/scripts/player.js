import { Gameboard } from "./gameboard";

export class Player {

	constructor(name, type) {
		this.name = name;
		this.type = type;
		this.myGameBoard = new Gameboard(10);
		this.visibleOppGameBoard = new Gameboard(10);
	}


}
