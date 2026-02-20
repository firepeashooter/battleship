import { GameController } from "./gameController";
import { Ship } from "./ship";

export class ScreenController {

	constructor() {

		this.startBoard;
		this.controller = new GameController("Ben", "Finnley")
		this.boards;
		this.main = document.querySelector('.main');
		this.boardDim = 10;
		this.modals = document.querySelectorAll('.dialog');
		this.curBoardDiv;

	}


	initialGameRender() {
		this.updateScreen();
	}

	//Helper function to render an individual modal (based on which we need)
	renderModal(modal) {

		modal.showModal();
		modal.classList.add("show");

		//if the modal is the one that displays the player turn we need to get the player name
		if (modal.id === "passer") {
			const playerNameDisplay = document.querySelector("#player--name")

			const playerName = this.controller.curPlayer.name

			playerNameDisplay.textContent = playerName
		}
	}

	hideModal(modal) {

		modal.classList.remove("show");
		modal.close();
	}

	//Helper function to render an indivdual board
	renderBoard(board) {

		const cellMap = { 'Miss': '#F8F6F2', 0: '#87CEEB', 'Hit': '#FF6666', 'Ship': '#808080' }

		//if left board
		if (board === this.curBoardDiv) {

			for (let i = 0; i < this.boardDim; i++) {
				for (let j = 0; j < this.boardDim; j++) {

					const cell = document.createElement("div");
					cell.classList.add("cell");
					cell.dataset.row = i;
					cell.dataset.col = j;

					//render opponents board from controller
					let val = this.controller.getCurrentPlayer().visibleOppGameBoard.getBoard()[i][j]

					cell.style.backgroundColor = cellMap[val];



					board.appendChild(cell);

				}
			}


		} else {

			for (let i = 0; i < this.boardDim; i++) {
				for (let j = 0; j < this.boardDim; j++) {

					const cell = document.createElement("div");
					cell.classList.add("cell");
					cell.dataset.row = i;
					cell.dataset.col = j;

					//render opponents board from controller
					let val = this.controller.getCurrentPlayer().myGameBoard.getBoard()[i][j]
					const key = `${i},${j}`;


					if (val instanceof Ship) {
						cell.style.backgroundColor = cellMap['Ship'];

						//if opponents board has visited that square
						if (this.controller.getCurrentPlayer().myGameBoard.visited.has(key)) {
							//if that ship square has been attacked make it red
							cell.style.backgroundColor = cellMap['Hit'];
						}
					} else {

						cell.style.backgroundColor = cellMap[val];
					}


					board.appendChild(cell);

				}
			}
		}



	}


	//Renders the start board to place ships
	renderPlaceShips() {
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
		//clear main
		this.main.textContent = '';

		//rerender the board
		const board1 = document.createElement("div")
		board1.classList.add("board")
		this.main.appendChild(board1);

		const board2 = document.createElement("div")
		board2.classList.add("board")
		this.main.appendChild(board2);


		this.boards = document.querySelectorAll('.board');
		this.curBoardDiv = document.querySelector('.board');


		for (let i = 0; i < this.boards.length; i++) {
			this.renderBoard(this.boards[i])
		}


	}

	switchCurrentBoard





}
