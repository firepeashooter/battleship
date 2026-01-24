import { Ship } from "./ship.js";

test('Getting Hit', () => {

	let myShip = new Ship(5);

	myShip.hit();
	myShip.hit();

	expect(myShip.hits).toBe(2);
});


test('Getting Sunk Exactly', () => {

	let myShip = new Ship(3);

	myShip.hit();
	myShip.hit();
	myShip.hit();

	expect(myShip.isSunk).toBe(true);
})

test('Getting Sunk Overkill', () => {

	let myShip = new Ship(1);

	myShip.hit();
	myShip.hit();
	myShip.hit();

	expect(myShip.isSunk).toBe(true);
})


test('Not Sunk', () => {

	let myShip = new Ship(5);

	myShip.hit();

	expect(myShip.isSunk).toBe(false);
})
