
export class ScreenController {

	constructor() {

		this.startBoard;

		this.boardOne = document.querySelector('.left--board');
		this.boardTwo = document.querySelector('.right--board');

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


		this.renderBoard(this.boardOne);
		this.renderBoard(this.boardTwo);

	}






}
