
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

	expect(myGameboard.board[0][0]).toBe(myShip);
	expect(myGameboard.board[0][1]).toBe(myShip);
	expect(myGameboard.board[0][2]).toBe(myShip);
	expect(myGameboard.board[0][3]).toBe(myShip);
})

test('Placing ships outside the board from within', () => {

	let myGameboard = new Gameboard(5);

	let myShip = new Ship(3);

	let coordinateOne = [4, 3];
	let directionOne = 'h';

	//Place the ships
	expect(myGameboard.placeShip(coordinateOne, directionOne, myShip)).toThrow("Ship Placement Out of Bounds");
})

test('Placing ships outside the board from without', () => {

	let myGameboard = new Gameboard(5);

	let myShip = new Ship(3);

	let coordinateOne = [5, 5];
	let directionOne = 'v';

	//Place the ships
	expect(myGameboard.placeShip(coordinateOne, directionOne, myShip)).toThrow("Ship Placement Out of Bounds");
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

	expect(myGameboard.placeShip(coordinateTwo, directionTwo, mySecondShip)).toThrow("Ship Placement Overlaps another Ship");

	//check that the ships are correctly placed
	expect(myGameboard.board[5][5]).toBe(myShip);
	expect(myGameboard.board[6][5]).toBe(myShip);
	expect(myGameboard.board[7][5]).toBe(myShip);

	//The ship did not get placed
	expect(myGameboard.board[0][0]).toBe(0);
	expect(myGameboard.board[0][1]).toBe(0);
	expect(myGameboard.board[0][2]).toBe(0);
	expect(myGameboard.board[0][3]).toBe(0);
})




















