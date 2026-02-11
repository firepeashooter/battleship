import { GameController } from "./gameController";

export class ScreenController {

	constructor() {

		this.startBoard;

		this.controller = new GameController("Ben", "Finnley")

		this.boards = document.querySelectorAll('.board');

		this.boardDim = 10;
		this.modal = document.querySelectorAll('.dialog')

	}


	renderModal(modal) {

		modal.showModal()

		//if the modal is the one that displays the player turn we need to get the player name
		if (modal.id === "passer") {
			const playerNameDisplay = document.querySelector("#player--name")

			const playerName = this.controller.curPlayer.name

			playerNameDisplay.textContent = playerName

		}

	}

	renderBoard(board) {

		for (let i = 0; i < this.boardDim; i++) {
			for (let j = 0; j < this.boardDim; j++) {

				const cell = document.createElement("div");
				cell.classList.add("cell");
				board.appendChild(cell);

			}
		}
	}

	updateScreen() {



		for (let i = 0; i < this.boards.length; i++) {
			this.renderBoard(this.boards[i])

		}

	}






}
