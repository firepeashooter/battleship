
export class ScreenController {

	constructor() {

		this.startBoard;

		this.boards = document.querySelectorAll('.board');

		this.boardDim = 10;





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
