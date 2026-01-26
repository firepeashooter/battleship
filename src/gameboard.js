import { Ship } from "./scripts/ship";

export class Gameboard {

	constructor(size) {
		this.board = Array.from({ length: size }, () => Array(size).fill(0));
		this.size = size;
		this.numShips = 0;
		this.visited = [];
		this.gameOver = false;
	}

	/**
	* Places a ship on the gameboard
	*
	* @param {array} coordinate - [x, y] coordinate array
	* @param {string} direction - 'v' for vertical direction, 'h' for horizontal direction
	* @param {object} - ship object
	* @returns {None} 
	*/
	placeShip(coordinate, direction, ship) {

		const isValidCoord = (x, y) => {
			if (x >= this.size || y >= this.size) {
				throw new Error("Ship Placement Out of Bounds");
			}
			if (x < 0 || y < 0) {
				throw new Error("Ship Placement Out of Bounds");
			}
			if (this.board[x][y] instanceof Ship) {
				throw new Error("Ship Placement Overlaps another Ship");
			}
			return true;
		}

		let x = coordinate[0];
		let y = coordinate[1];


		for (let i = 0; i < ship.length; i++) {

			if (direction === 'h') {

				if (isValidCoord(x, y + i)) {
					this.board[x][y + i] = ship;
				}
			} else {
				if (isValidCoord(x + i, y)) {
					this.board[x + i][y] = ship;
				}
			}
		}
		this.numShips++;
	}




}
