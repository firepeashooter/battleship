import { GameController } from "./gameController";

export class ScreenController {

	constructor() {

		this.startBoard;
		this.controller = new GameController("Ben", "Finnley")
		this.boards;
		this.main = document.querySelector('.main');
		this.boardDim = 10;
		this.modal = document.querySelectorAll('.dialog')

	}


	//Helper function to render an individual modal (based on which we need)
	renderModal(modal) {

		modal.showModal()

		//if the modal is the one that displays the player turn we need to get the player name
		if (modal.id === "passer") {
			const playerNameDisplay = document.querySelector("#player--name")

			const playerName = this.controller.curPlayer.name

			playerNameDisplay.textContent = playerName

		}

	}

	//Helper function to render an indivdual board
	renderBoard(board) {

		for (let i = 0; i < this.boardDim; i++) {
			for (let j = 0; j < this.boardDim; j++) {

				const cell = document.createElement("div");
				cell.classList.add("cell");
				board.appendChild(cell);

			}
		}
	}


	//Renders the start board to place ships
	renderStart() {
		const startBoard = document.createElement("div")
		startBoard.classList.add("board")
		this.main.appendChild(startBoard);
		this.boards = document.querySelectorAll('.board');
		this.renderBoard(this.boards[0])


		const shipContainer = document.createElement("div");
		shipContainer.classList.add("ship--container");
		this.main.appendChild(shipContainer);

	}

	//Rerenders both boards with updated visuals
	updateScreen() {

		for (let i = 0; i < this.boards.length; i++) {
			this.renderBoard(this.boards[i])
		}

	}






}
