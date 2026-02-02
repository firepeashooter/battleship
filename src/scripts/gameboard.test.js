import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";

test('Creating a Gameboard', () => {

	let myGameboard = new Gameboard(5);

	expect(myGameboard.numShips).toBe(0);

	expect(myGameboard.board).toEqual(
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]]);
})

test('Creating a Gameboard 2', () => {

	let myGameboard = new Gameboard(3);

	expect(myGameboard.numShips).toBe(0);

	expect(myGameboard.board).toEqual(
		[[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]]);
})

//------------------------------------------------------------------------------------------------------------------------
//Gameboard.placeShip() Tests

test('Placing one Ship', () => {

	let myGameboard = new Gameboard(10);

	let myShip = new Ship(3);

	let coordinate = [3, 4];
	let direction = 'v';

	//Place the ship
	myGameboard.placeShip(coordinate, direction, myShip);

	//check that the ship is actually where it should be
	expect(myGameboard.board[3][4]).toBe(myShip);
	expect(myGameboard.board[4][4]).toBe(myShip);
	expect(myGameboard.board[5][4]).toBe(myShip);

	//Check that the gameboard tracks the number of ships
	expect(myGameboard.numShips).toBe(1);


})

test('Placing two Ships', () => {

	let myGameboard = new Gameboard(10);

	let myShip = new Ship(3);
	let mySecondShip = new Ship(4);

	let coordinateOne = [5, 5];
	let coordinateTwo = [0, 0];
	let directionOne = 'v';
	let directionTwo = 'h';

	//Place the ships
	myGameboard.placeShip(coordinateOne, directionOne, myShip);
	myGameboard.placeShip(coordinateTwo, directionTwo, mySecondShip);

	//check that the ships are correctly placed
	expect(myGameboard.board[5][5]).toBe(myShip);
	expect(myGameboard.board[6][5]).toBe(myShip);
	expect(myGameboard.board[7][5]).toBe(myShip);

	expect(myGameboard.board[0][0]).toBe(mySecondShip);
	expect(myGameboard.board[0][1]).toBe(mySecondShip);
	expect(myGameboard.board[0][2]).toBe(mySecondShip);
	expect(myGameboard.board[0][3]).toBe(mySecondShip);

	//Check that the gameboard tracks the number of ships
	expect(myGameboard.numShips).toBe(2);
})

test('Placing ships outside the board from within', () => {

	let myGameboard = new Gameboard(5);

	let myShip = new Ship(3);

	let coordinateOne = [4, 3];
	let directionOne = 'h';

	//Place the ships
	expect(() => myGameboard.placeShip(coordinateOne, directionOne, myShip)).toThrow("Ship Placement Out of Bounds");
})

test('Placing ships outside the board from without', () => {

	let myGameboard = new Gameboard(5);

	let myShip = new Ship(3);

	let coordinateOne = [5, 5];
	let directionOne = 'v';

	//Place the ships
	expect(() => myGameboard.placeShip(coordinateOne, directionOne, myShip)).toThrow("Ship Placement Out of Bounds");
})

test('Placing two overlapping ships', () => {

	let myGameboard = new Gameboard(10);

	let myShip = new Ship(3);
	let mySecondShip = new Ship(4);

	let coordinateOne = [2, 2];
	let coordinateTwo = [3, 1];
	let directionOne = 'v';
	let directionTwo = 'h';

	//Place the ships
	myGameboard.placeShip(coordinateOne, directionOne, myShip);

	expect(() => myGameboard.placeShip(coordinateTwo, directionTwo, mySecondShip)).toThrow("Ship Placement Overlaps another Ship");

	//check that the ships are correctly placed
	expect(myGameboard.board[2][2]).toBe(myShip);
	expect(myGameboard.board[3][2]).toBe(myShip);
	expect(myGameboard.board[4][2]).toBe(myShip);

	//The ship did not get placed
	expect(myGameboard.board[0][0]).toBe(0);
	expect(myGameboard.board[0][1]).toBe(0);
	expect(myGameboard.board[0][2]).toBe(0);
	expect(myGameboard.board[0][3]).toBe(0);
})

//------------------------------------------------------------------------------------------------------------------------
//Gameboard.receiveAttack() Tests

test('Testing Misses', () => {

	//Create a board with a ship
	let myGameboard = new Gameboard(10);

	let myShip = new Ship(3);
	let coordinate = [3, 3];
	let direction = 'v';


	myGameboard.placeShip(coordinate, direction, myShip);

	expect(myGameboard.recieveAttack([0, 0])).toBe('Miss');
	expect(myGameboard.recieveAttack([8, 7])).toBe('Miss');

	expect(myGameboard.board[0][0]).toBe('Miss');
	expect(myGameboard.board[8][7]).toBe('Miss');
})

test('Testing Hits', () => {

	//Create a board with a ship
	let myGameboard = new Gameboard(10);

	let myShip = new Ship(3);
	let coordinate = [3, 3];
	let direction = 'v';

	myGameboard.placeShip(coordinate, direction, myShip);

	//Check to see if the ship hits get updated.
	expect(myShip.hits).toBe(0);

	expect(myGameboard.recieveAttack([3, 3])).toBe('Hit');
	expect(myGameboard.recieveAttack([4, 3])).toBe('Hit');

	expect(myShip.hits).toBe(2);

})

test('Testing Sinking', () => {
	//
	//Create a board with a ship
	let myGameboard = new Gameboard(10);

	let myShip = new Ship(2);
	let mySecondShip = new Ship(3);

	myGameboard.placeShip([3, 3], 'v', myShip);
	myGameboard.placeShip([8, 1], 'h', mySecondShip);

	expect(myShip.hits).toBe(0);

	expect(myGameboard.recieveAttack([3, 3])).toBe('Hit');
	expect(myGameboard.recieveAttack([4, 3])).toBe('Hit');

	expect(myShip.hits).toBe(2);

	expect(myShip.isSunk()).toBe(true);

	expect(myGameboard.numShips).toBe(1);



})

test('Testing Tracking Coords', () => {

	let myGameboard = new Gameboard(5);

	myGameboard.recieveAttack([3, 3]);
	myGameboard.recieveAttack([2, 4]);

	expect(myGameboard.visited).toContainEqual([3, 3]);
	expect(myGameboard.visited).toContainEqual([2, 4]);

})

test('Testing all Ships Sunk', () => {
	//
	//Create a board with a ship
	let myGameboard = new Gameboard(10);

	let myShip = new Ship(2);
	let mySecondShip = new Ship(3);

	myGameboard.placeShip([3, 3], 'v', myShip);
	myGameboard.placeShip([8, 1], 'h', mySecondShip);

	expect(myGameboard.recieveAttack([3, 3])).toBe('Hit');
	expect(myGameboard.recieveAttack([4, 3])).toBe('Hit');

	expect(myGameboard.recieveAttack([8, 1])).toBe('Hit');
	expect(myGameboard.recieveAttack([8, 2])).toBe('Hit');
	expect(myGameboard.recieveAttack([8, 3])).toBe('Hit');

	expect(myShip.isSunk()).toBe(true);
	expect(mySecondShip.isSunk()).toBe(true);

	expect(myGameboard.numShips).toBe(0);
	expect(myGameboard.gameOver).toBe(true);
})


//------------------------------------------------------------------------------------------------------------------------
//gameboard.resetBoard() tests


test('Resetting the Gameboard', () => {

	//Create a board with a ship
	let myGameboard = new Gameboard(10);

	let myShip = new Ship(2);
	let mySecondShip = new Ship(3);

	myGameboard.placeShip([3, 3], 'v', myShip);
	myGameboard.placeShip([8, 1], 'h', mySecondShip);

	expect(myGameboard.recieveAttack([3, 3])).toBe('Hit');

	expect(myGameboard.recieveAttack([1, 1])).toBe('Hit');
	e

	expect(myGameboard.getBoard()[1][1]).toBe('Miss');

	expect(myGameboard.getBoard()[3][3]).toBe('Hit');

	myGameboard.resetBoard();

	expect(myGameboard.getBoard()[1][1]).toBe(0);
	expect(myGameboard.getBoard()[3][3]).toBe(0);



})















