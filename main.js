import './style.css';
import { caesar13 } from './scripts/caesar13.js';

const userInput = document.querySelector('#message');
const userResult = document.querySelector('#encryptedMessage');

userInput.addEventListener('input', (e) => {
	userResult.value = caesar13(e.target.value);
});
