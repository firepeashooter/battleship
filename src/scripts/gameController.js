
import { Player } from "./player";
import { Gameboard } from "./gameboard";

export class GameController {

	constructor(playerOne = 'PlayerOne', playerTwo = 'Player2') {

		this.players = [new Player(playerOne, 'real'), new Player(playerTwo, 'real')];
		this.curPlayer = this.players[0];
	}

	switchPlayerTurn() {

		if (this.curPlayer === this.players[0]) {
			this.curPlayer = this.players[1];
		} else if (this.curPlayer === this.players[1]) {
			this.curPlayer = this.players[0]
		}
	}

	resetGame() {

		//set the current player to player 1
		this.curPlayer = this.players[0];

		//reset player 1 gameboard
		this.players[0].gameBoard.resetBoard();

		//reset player 2 gameboard
		this.players[1].gameBoard.resetBoard();
	}

	//Generate a random valid coodinate by looking at board
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

	playRound(coordinate) {

		let otherPlayer;

		if (this.curPlayer == this.players[0]) {
			otherPlayer = this.players[1];
		} else if (this.curPlayer == this.players[1]) {
			otherPlayer = this.players[0];
		}

		let exitCode = otherPlayer.gameBoard.recieveAttack(coordinate);

		if (otherPlayer.gameBoard.getGameOver()) {
			return this.curPlayer;
		}

		return exitCode;

	}

	getCurrentPlayer() {
		return this.curPlayer;
	}
}
