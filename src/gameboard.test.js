
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
	let mySeconrdShip = new Ship(4);

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



















