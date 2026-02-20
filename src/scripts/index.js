import "../styles.css";
import { Player } from "./player";
import { ScreenController } from "./ScreenController";
import { Ship } from "./ship";

let myShip = new Ship(3);
let myNewShip = new Ship(3);


let myScreen = new ScreenController()

myScreen.controller.players[0].myGameBoard.placeShip([0, 0], 'v', myShip);
myScreen.controller.players[1].myGameBoard.placeShip([2, 1], 'v', myNewShip);



myScreen.initialGameRender()

let continueButton = document.querySelector('.continue--button');

continueButton.addEventListener("click", () => {
	myScreen.hideModal(myScreen.modals[1]);
	myScreen.updateScreen();
	console.log(`${myScreen.controller.getCurrentPlayer().name}'s Turn`)
	myScreen.curBoardDiv.addEventListener("click", clickHandelerBoard)

})


function clickHandelerBoard(e) {

	//Only ever affects board one (what the cur player can see)
	let row = e.target.dataset.row;
	let col = e.target.dataset.col

	let returnCode = myScreen.controller.playRound([row, col]);
	console.log(returnCode);

	if (returnCode == 'Invalid Attack') {
		return;
	} else if (returnCode instanceof Player) {
		returnCode = 'Hit';
		myScreen.controller.getCurrentPlayer().visibleOppGameBoard.getBoard()[row][col] = returnCode;
		console.log('Game Over');
		myScreen.updateScreen();
		return;
	} else {

		myScreen.controller.getCurrentPlayer().visibleOppGameBoard.getBoard()[row][col] = returnCode;
		myScreen.updateScreen();
	}



	myScreen.controller.switchPlayerTurn();
	myScreen.renderModal(myScreen.modals[1])
}


myScreen.curBoardDiv.addEventListener("click", clickHandelerBoard)


