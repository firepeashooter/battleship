import { GameController } from "./gameController"
import { Ship } from "./ship";


//Testing Creating GameController

test('Creating a GameController', () => {

	let controller = new GameController('Ben', 'Finnley');

	expect(controller.players[0].name).toBe('Ben');
	expect(controller.players[1].name).toBe('Finnley');

	expect(controller.players[0].gameBoard.getBoard()[1][1]).toBe(0);

})

//Testing switchPlayerTurn()

test('Switching Player Turn', () => {

	let controller = new GameController('Ben', 'Finnley');

	expect(controller.curPlayer).toBe(controller.players[0]);

	controller.switchPlayerTurn();

	expect(controller.curPlayer).toBe(controller.players[1]);

	controller.switchPlayerTurn();

	expect(controller.curPlayer).toBe(controller.players[0]);
})


//Testing resetGame()

test("Resetting Game for Player 1", () => {

	let controller = new GameController('Ben', 'Finnley');

	let myShip = new Ship(3);

	controller.players[0].gameBoard.placeShip([3, 4], 'h', myShip);

	controller.switchPlayerTurn();

	controller.resetGame();

	expect(controller.curPlayer).toBe(controller.curPlayer[0]);

	expect(controller.players[0].gameBoard.getBoard()[3][4]).toBe(0);

	expect(controller.players[0].gameBoard.getBoard()[3][5]).toBe(0);

	expect(controller.players[0].gameBoard.getBoard()[3][6]).toBe(0);
})

test("Resetting Game for Player 2", () => {

	let controller = new GameController('Ben', 'Finnley');

	let myShip = new Ship(2);

	controller.players[1].gameBoard.placeShip([4, 4], 'h', myShip);

	controller.switchPlayerTurn();

	controller.resetGame();

	expect(controller.curPlayer).toBe(controller.curPlayer[0]);

	expect(controller.players[1].gameBoard.getBoard()[3][4]).toBe(0);

	expect(controller.players[1].gameBoard.getBoard()[3][5]).toBe(0);

})










