test('Getting Hit', () => {

	myShip = new Ship();

	myShip.hit();
	myShip.hit();

	expect(myShip.hits).toBe(2);
});


test('Getting Sunk', () => {

	myShip = new Ship();

	myShip.hit();
	myShip.hit();
	myShip.hit();

	expect(myShip.isSunk).toBe(true);
})

test('Not Sunk', () => {

	myShip = new Ship();

	myShip.hit();

	expect(myship.isSunk).toBe(false);
})
