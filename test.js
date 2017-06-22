let wordList = ['javascript', 'html', 'css', 'constructor'];

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



//object?

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
