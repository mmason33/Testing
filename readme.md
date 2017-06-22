
# Personal Reference Repo

This is just a reference guide for myself - over time as progress as a programmer, I like to save references of the stuff I have learned. For now this repo is specifically focused around JavaScript. I will add/change markup in the README as I learn new things. 

### Classes, Arrow Functions & Factory Functions

```javascript
let wordList = ['javascript', 'html', 'css', 'constructor'];

class Hangman {

	constructor(height, width, color) {
		this.name = "Hangman";
		this.height = height;
		this.width = width;
		this.color = color;
	}

	start () {
		let canvas = document.getElementById('hangman-canvas');
		canvas.style.background = this.color;
		canvas.style.height = this.height;
		console.log(this.color, this.height, this.width);
	}
}

let game = new Hangman('600px', '600px', 'black');
game.start();

//class

class generateWord1 {
	constructor(array) {
		this.array = array;	
	}

	randomWord1 () {

		for (let i = 0; i <= this.array.length; i++) {
				let list = this.array;
				let word = list[Math.floor(Math.random() * list.length)];
				return word;

		}
	}
}

let word1 = new generateWord1(wordList);
console.log(word1.randomWord1());

//"arrow function"

let randomWord2 = (array) => {

		for (let i = 0; i <= array.length; i++) {
				let list = array;
				let word = list[Math.floor(Math.random() * list.length)];
				return word;
			
		}

}

const word2 = randomWord2(wordList);
console.log(word2);



//object

const generateWord2 = {

	randomwWord (array) {

		for (let i = 0; i <= array.length; i++) {
			let list = array;
			let word = list[Math.floor(Math.random() * list.length)];
			return word;
			
		}

	}

}

const word3 = Object.create(generateWord2);
console.log(word3.randomwWord(wordList));
```