
import { Player } from "./player";
import { Gameboard } from "./gameboard";

export class GameController {

	constructor(playerOne = 'PlayerOne', playerTwo = 'Player2') {

		this.players = [new Player(playerOne, 'real'), new Player(playerTwo, 'bot')];
		this.curPlayer = this.players[0];
	}

	/**
	* Switches the current active player to the other player
	*/
	switchPlayerTurn() {

		if (this.curPlayer === this.players[0]) {
			this.curPlayer = this.players[1];
		} else if (this.curPlayer === this.players[1]) {
			this.curPlayer = this.players[0]
		}
	}

	/**
	* Resets the whole game by setting the first player
	* as the active player and reseting both players game boards
	*/
	resetGame() {

		//set the current player to player 1
		this.curPlayer = this.players[0];

		//reset player 1 gameboard
		this.players[0].gameBoard.resetBoard();

		//reset player 2 gameboard
		this.players[1].gameBoard.resetBoard();
	}

	/**
	* Updates a cell or ship on the gameboard
	*
	* @param {GameBoard} board - a gameboard that we want to generate an attack for
	* @returns {array} - [x, y], the coordinate of a valid attack for the board given
	*/
	generateRandomAttack(board) {

		let x;
		let y;
		let key;

		//Generate a random coordinate that is within size and not in the board's visited list

		do {
			x = Math.floor(Math.random() * board.size);
			y = Math.floor(Math.random() * board.size);
			key = `${x},${y}`;

		} while (board.visited.has(key));
		return [x, y];
	}

	/**
	* Plays one round of battleship, using a coordinate to attack the opposing players board
	*
	* @param {array} coordinate - [x, y] desigating the coordinate being attacked.
	* @returns {string} exitCode -  'Hit' if the attack results in a hit
	* 								'Miss' if the attack results in a miss
	* @returns {Player} - 			 Player object of the winning player if all ships are sunk
	*/
	playRound(coordinate) {

		let otherPlayer;
		let exitCode;

		if (this.curPlayer == this.players[0]) {
			otherPlayer = this.players[1];
		} else if (this.curPlayer == this.players[1]) {
			otherPlayer = this.players[0];
		}

		try {
			exitCode = otherPlayer.myGameBoard.recieveAttack(coordinate);
		} catch (error) {
			return 'Invalid Attack';
		}

		if (otherPlayer.myGameBoard.getGameOver()) {
			return this.curPlayer;
		}

		return exitCode;

	}

	getCurrentPlayer() {
		return this.curPlayer;
	}

	getOtherPlayer() {

		if (this.curPlayer = this.players[0]) {
			return this.players[1];
		} else {
			return this.players[0];
		}
	}
}
