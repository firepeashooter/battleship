
export class Gameboard {

	constructor(size) {
		this.board = Array.from({ length: size }, () => Array(size).fill(0));

		this.numShips = 0;
		this.visited = [];
		this.gameOver = false;
	}

	/**
	* Adds two numbers together.
	*
	* @param {number} a - First number
	* @param {number} b - Second number
	* @returns {number} Sum of a and b
	*/
	placeShip(coordinate, direction, ship) {

	}




}
