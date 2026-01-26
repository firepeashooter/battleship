import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

test('Creating a player', () => {

	let myPlayer = new Player('Real');

	expect(myPlayer.gameBoard instanceof Gameboard);

	expect(myPlayer.gameBoard.board).toEqual(
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]]);

	expect(myPlayer.type === 'Real');

})

test('Creating a bot', () => {

	let myBot = new Player('Bot');

	expect(myBot.gameBoard instanceof Gameboard);

	expect(myBot.gameBoard.board).toEqual(
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]]);

	expect(myBot.type === 'Bot');




})
