
test('Creating a Gameboard', () => {

	myGameboard = new Gameboard(5);

	expect(myGameboard.numShips).toBe(0);

	expect(myGameboard.board).toEqual(
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]]);
})

test('Creating a Gameboard 2', () => {

	myGameboard = new Gameboard(3);

	expect(myGameboard.numShips).toBe(0);

	expect(myGameboard.board).toEqual(
		[[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]]);
})


test('Placing one Ship', () => {




})
