import { GameController } from "./gameController"


//Testing Creating GameController

test('Creating a Gameboard', () => {

	let controller = new GameController('Ben', 'Finnley');

	expect(controller.players[0].name).toBe('Ben');
	expect(controller.players[1].name).toBe('Finnley');

	expect(controller.players[0].gameBoard.getBoard()[1][1]).toBe(0);

})
