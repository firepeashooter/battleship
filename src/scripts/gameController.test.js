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

	expect(controller.curPlayer).toBe(controller.players[0]);

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

	expect(controller.curPlayer).toBe(controller.players[0]);

	expect(controller.players[1].gameBoard.getBoard()[3][4]).toBe(0);

	expect(controller.players[1].gameBoard.getBoard()[3][5]).toBe(0);

})


//Testing generateRandomAttack(){

test('Testing Generating a Random Attack for P1', () => {

	let controller = new GameController('Ben', 'Finnley');

	controller.players[1].gameBoard.visited.add('3,4')
	controller.players[1].gameBoard.visited.add('3,5')

	//generate 10 random coords and make sure they adhere to the rules -- 

	for (let i = 0; i < 10; i++) {

		//Generates a coordinate for player 2s board
		let randCoord = controller.generateRandomAttack(controller.players[1].gameBoard);

		let x = randCoord[0]
		let y = randCoord[1]
		const key = `${x},${y}`;


		//Generated Coordinate isn't in players visited set
		expect(controller.players[1].gameBoard.visited.has(key)).toBe(false);

		//Generated Coordinate is within bounds of the board
		expect(x >= 0 && y >= 0).toBe(true);
		expect(x < controller.players[0].gameBoard.size && y < controller.players[0].gameBoard.size).toBe(true);

	}


})

test('Testing Generating a Random Attack for P2', () => {

	let controller = new GameController('Ben', 'Finnley');

	controller.players[0].gameBoard.visited.add('3,4')
	controller.players[0].gameBoard.visited.add('3,5')
	controller.players[0].gameBoard.visited.add('3,6')
	controller.players[0].gameBoard.visited.add('3,7')
	controller.players[0].gameBoard.visited.add('3,8')

	//generate 10 random coords and make sure they adhere to the rules -- 

	for (let i = 0; i < 10; i++) {

		//Generates a coordinate for player 2s board
		let randCoord = controller.generateRandomAttack(controller.players[0].gameBoard);

		let x = randCoord[0]
		let y = randCoord[1]
		const key = `${x},${y}`;


		//Generated Coordinate isn't in players visited set
		expect(controller.players[0].gameBoard.visited.has(key)).toBe(false);

		//Generated Coordinate is within bounds of the board
		expect(x >= 0 && y >= 0).toBe(true);
		expect(x < controller.players[0].gameBoard.size && y < controller.players[0].gameBoard.size).toBe(true);
	}
})

function createActiveGame() {

	const controller = new GameController('Ben', 'Finnley');

	const bensShip = new Ship(2);
	const finnleysShip = new Ship(3);

	controller.players[0].gameBoard.placeShip([2, 2], 'v', bensShip);

	controller.players[1].gameBoard.placeShip([5, 5], 'h', finnleysShip);

	return controller;
}

//Testing playRound()

test('Testing Normal Play Round with Miss return', () => {

	//Should return an active game with two placed ships
	controller = createActiveGame();
	//Should be a miss because there is a miss on finnley's board
	expect(controller.playRound([2, 2])).toBe('Miss');

	expect(controller.players[1].gameBoard.getBoard()[2][2]).toBe('Miss');


})

test('Testing Normal Play Round with Hit return', () => {

	//Should return an active game with two placed ships
	controller = createActiveGame();
	//Should be a miss because there is a miss on finnley's board
	expect(controller.playRound([5, 5])).toBe('Hit');

})

test('Testing Normal Play Round with Hit return for player 2', () => {

	//Should return an active game with two placed ships
	controller = createActiveGame();
	controller.switchPlayerTurn();
	//Should be a miss because there is a miss on ben's board
	expect(controller.playRound([2, 2])).toBe('Hit');
})


test('Testing Normal Play Round with Winning Player return for player 1', () => {

	//Should return an active game with two placed ships
	controller = createActiveGame();
	//Should be a miss because there is a miss on finnley's board
	expect(controller.playRound([5, 5])).toBe('Hit');
	expect(controller.playRound([5, 6])).toBe('Hit');
	expect(controller.playRound([5, 7])).toBe('PlayerOne Wins!');

})

test('Testing Normal Play Round with Winning Player return for player 2', () => {

	//Should return an active game with two placed ships
	controller = createActiveGame();
	controller.switchPlayerTurn();
	//Should be a miss because there is a miss on finnley's board
	expect(controller.playRound([2, 2])).toBe('Hit');
	expect(controller.playRound([2, 3])).toBe('PlayerTwo Wins!');

})


