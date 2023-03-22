export function caesar13(input) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const splittedInput = input.split('');

	const result = splittedInput.map((e) => {
		const index = alphabet.indexOf(e.toLowerCase());
		const newIndex = (index + 13) % alphabet.length;

		if (index === -1) {
			return e;
		}

		return e === e.toUpperCase() ? alphabet[newIndex].toLocaleUpperCase() : alphabet[newIndex];
	});

	return result.join('');
}
