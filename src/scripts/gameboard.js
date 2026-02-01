import { Ship } from "./ship";

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
	/**
	* Updates a cell or ship on the gameboard
	*
	* @param {array} coordinate - [x, y] coordinate array
	* @returns {String} - 'Miss' if the attack is a miss
	* 					- 'Hit' if the attack is a hit
	*/
	recieveAttack(coordinate) {

		let x = coordinate[0];
		let y = coordinate[1];

		if (x < 0 || y < 0) {
			throw new Error("Attack is out of Bounds");
		}
		if (x >= this.size || y >= this.size) {
			throw new Error("Attack is out of Bounds");
		}

		this.visited.push(coordinate);

		//Attack misses
		if (this.board[x][y] === 0) {
			this.board[x][y] = 'Miss';
			return 'Miss';
		}

		//Attack hits
		if (this.board[x][y] instanceof Ship) {
			this.board[x][y].hit();
			//if sunk then decrement number of ships on the board
			if (this.board[x][y].isSunk()) {
				this.numShips--;

				//check to see if the game is over
				if (this.numShips === 0) {
					this.gameOver = true;
				}
			}
		}
		return 'Hit';
	}

	gameOver() {
		return this.gameOver;
	}

	getBoard() {
		return this.board;
	}
}





