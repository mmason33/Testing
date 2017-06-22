// // //HANGMANjs

/********************* Version 2 object ***********************/

const wordList = ['boone', 'ken', 'eddie', 'logan', 'josh', 'tony'];


const Hangman = {

	Game (args) {
		return Object.create(this.args[args]);
	},

	args: {

		lives: {
			Lives(){
				let lives = 0;
				document.getElementById('lives').innerHTML = lives;
			}		
		},

		score: {
			Score(){
				let score = 0;
				document.getElementById('score').innerHTML = score;
			}
		},

		currentWord: {
			generateWord(array) {
				for (let i = 0; i <= array.length; i++) {
					let randomWord = array[Math.floor(Math.random() * array.length)];
					console.log(randomWord);
					document.getElementById('random-word').innerHTML = randomWord;
				}
			}
		},
		keyPressed: {
			handleKeypress(){
				
			}		
		},	

		startGame: {
			startGame(height, width, color) {
				let canvas = document.getElementById('hangman-canvas');
				canvas.style.height = height;
				canvas.style.width = width;
				canvas.style.background = color;
				console.log(height, width, color);
			}
		},

		updateGame(){},

		updateScore(){},

		updateLives(){},

		reset(){}

	}

}

const startHangman = Hangman.Game('startGame');
startHangman.startGame('600px', '600px', 'green');

const livesHangman = Hangman.Game('lives');
livesHangman.Lives();

const scoreHangman = Hangman.Game('score');
scoreHangman.Score();

const wordHangman = Hangman.Game('currentWord');
wordHangman.generateWord(wordList);


/*********************** end **********************/



// const Hangman = {

// 	lives: {
// 		Lives(){
// 			let lives = 0;
// 			return lives;
// 		}		
// 	},
// 	score: {
// 		Score(){
// 			let score = 0;
// 			return score;
// 		}
// 	},
// 	currentWord: {
// 		generateWord(array) {
// 			for (let i = 0; i <= array.length; i++) {
// 				let randomWord = array[Math.floor(Math.random() * array.length)];
// 				console.log(randomWord);
// 				return randomWord;
// 			}
// 		}
// 	},
// 	keyPressed: {
// 		handleKeypress(){
			
// 		}		
// 	},	

// 	start(height, width, color) {
// 		let canvas = document.getElementById('hangman-canvas');
// 		canvas.style.height = height;
// 		canvas.style.width = width;
// 		canvas.style.background = color;
// 		console.log(height, width, color);
// 	},

// 	updateGame(){},

// 	updateScore(){},

// 	updateLives(){},

// 	reset(){}
// }







// // // var game = {
// // // 	name: 'HangmanJS',
// // // 	type: 'JavaScript',
// // // 	start: false
// // // };

// // var words = [
// // 	'JavaScript',
// // 	'HTML',
// // 	'CSS',
// // 	'jQuery'
// // ];

// // var keyCodes = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]


// // class Game {
// // 	constructor(props) {
// // 		this.name = 'Hangman';
// // 		this.lives = 0;
// // 		this.start = false;
// // 		this.reset = false;
// // 		this.stop = false;
// // 	}

// // 	gameStart () {
// // 		return this.start = true;
// // 	}

// // 	gameStop () {
// // 		this.stop = true;
// // 	}

// // 	gameReset () {
// // 		this.reset = true;
// // 	}

// // }

// // document.addEventListener('DOMContentLoaded', function () {

// // 	Game.gameStart();

// // });


// // // console.log(game.name, game.type, game.start);

// // // document.addEventListener('keydown', function(e){
// // // 	game.start = true;
// // // 	for (var i = 0; i < keyCodes.length; i++) {
// // // 		if (keyCodes[i] === e.keyCode) {
// // // 			var code = e.keyCode;
// // // 			console.log(fromCharCode(code));
// // // 		}
// // // 	}
// // // });


// // // function handleKey () {

// // // }



// const game = Object.create(Hangman);
// game.start('600px', '600px', 'green');
// game.currentWord;
// document.getElementById('lives').innerHTML = 'Lives: ' + game.lives.value;
// document.getElementById('score').innerHTML = 'Score: ' + game.score;
// console.log(game.handleKeypress());

// //class
// class Hangman {

// 	constructor(height, width, color) {
// 		this.name = "Hangman";
// 		this.height = height;
// 		this.width = width;
// 		this.color = color;
// 	}

// 	start () {
// 		let canvas = document.getElementById('hangman-canvas');
// 		canvas.style.background = this.color;
// 		canvas.style.height = this.height;
// 		console.log(this.color, this.height, this.width);
// 	}
// }


// let game = new Hangman('600px', '600px', 'black');
// game.start();



// let wordList = ['javascript', 'html', 'css', 'constructor'];

// //class

// class generateWord1 {
// 	constructor(array) {
			
// 		this.array = array;	
// 	}

// 	randomWord1 () {

// 		for (let i = 0; i <= this.array.length; i++) {

// 			let list = this.array;
// 			let word = list[Math.floor(Math.random() * list.length)];
// 			return word;
			

// 		}

// 	}
// }

// let word1 = new generateWord1(wordList);
// console.log(word1.randomWord1());

// //"arrow function"

// let randomWord2 = (array) => {

// 		for (let i = 0; i <= array.length; i++) {
// 			let list = array;
// 			let word = list[Math.floor(Math.random() * list.length)];
// 			return word;
			
// 		}
// }

// const word2 = randomWord2(wordList);
// console.log(word2);



// //object?

// const generateWord2 = {

// 	randomwWord (array) {

// 		for (let i = 0; i <= array.length; i++) {
// 			let list = array;
// 			let word = list[Math.floor(Math.random() * list.length)];
// 			return word;
			
// 		}

// 	}

// }

// const word3 = Object.create(generateWord2);
// console.log(word3.randomwWord(wordList));

// randomwWord(wordList);
// 'use strict';

// // Example 1: Creating a new class (declaration-form)
// // ===============================================================

// // A base class is defined using the new reserved 'class' keyword
// class Polygon {
//   // ..and an (optional) custom class constructor. If one is
//   // not supplied, a default constructor is used instead:
//   // constructor() { }
//   constructor(height, width) {
//     this.name = 'Polygon';
//     this.height = height;
//     this.width = width;
//   }

//   // Simple class instance methods using short-hand method
//   // declaration
//   sayName() {
//     console.log('Hi, I am a ', this.name + '.');
//   }

//   sayHistory() {
//     console.log('"Polygon" is derived from the Greek polus (many) ' +
//       'and gonia (angle).');
//   }

//   // We will look at static and subclassed methods shortly
// }

// // Classes are used just like ES5 constructor functions:
// let p = new Polygon(300, 400);
// p.sayName();
// console.log('The width of this polygon is ' + p.width);
// console.log(p.sayHistory());

// // Example 2: Creating a new class (expression-form)
// // ===============================================================

// // Our Polygon class above is an example of a Class declaration.
// // ES6 classes also support Class expressions - just another way
// // of defining a new class. For example:
// const MyPoly = class Poly {
//   getPolyName() {
//     console.log('Hi. I was created with a Class expression. My name is ' +
//       Poly.name);
//   }
// };

// let inst = new MyPoly();
// inst.getPolyName();

// // Example 3: Extending an existing class
// // ===============================================================

// // Classes support extending other classes, but can also extend
// // other objects. Whatever you extend must be a constructor.
// //
// // Let's extend the Polygon class to create a new derived class
// // called Square.
// class Square extends Polygon {
//   constructor(length) {
//     // The reserved 'super' keyword is for making super-constructor
//     // calls and allows access to parent methods.
//     //
//     // Here, it will call the parent class' constructor with lengths
//     // provided for the Polygon's width and height
//     super(length, length);
//     // Note: In derived classes, super() must be called before you
//     // can use 'this'. Leaving this out will cause a reference error.
//     this.name = 'Square';
//   }

//   // Getter/setter methods are supported in classes,
//   // similar to their ES5 equivalents
//   get area() {
//     return this.height * this.width;
//   }

//   set area(value) {
//     this.area = value;
//   }
// }

// let s = new Square(5);

// s.sayName();
// console.log('The area of this square is ' + s.area);

// // Example 4: Subclassing methods of a parent class
// // ===============================================================

// class Rectangle extends Polygon {
//   constructor(height, width) {
//     super(height, width);
//     this.name = 'Rectangle';
//   }
//   // Here, sayName() is a subclassed method which
//   // overrides their superclass method of the same name.
//   sayName() {
//     console.log('Sup! My name is ', this.name + '.');
//     super.sayHistory();
//   }
// }

// let r = new Rectangle(50, 60);
// r.sayName();

// // Example 5: Defining static methods
// // ===============================================================

// // Classes support static members which can be accessed without an
// // instance being present.
// class Triple {
//   // Using the 'static' keyword creates a method which is associated
//   // with a class, but not with an instance of the class.
//   static triple(n) {
//     n = n || 1;
//     return n * 3;
//   }
// }

// // super.prop in this example is used for accessing super-properties from
// // a parent class. This works fine in static methods too:
// class BiggerTriple extends Triple {
//   static triple(n) {
//     return super.triple(n) * super.triple(n);
//   }
// }

// console.log(Triple.triple());
// console.log(Triple.triple(6));
// console.log(BiggerTriple.triple(3));
// // var tp = new Triple();
// // console.log(tp.triple()); tp.triple is not a function

// // Example 6: Subclassing built-in classes and DOM
// // ===============================================================

// // Extend Date built-in
// class MyDate extends Date {
//   constructor() {
//     super();
//   }

//   getFormattedDate() {
//     var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
//       'Oct', 'Nov', 'Dec'];
//     return this.getDate() + '-' + months[this.getMonth()] + '-' +
//       this.getFullYear();
//   }
// }

// var aDate = new MyDate();
// console.log(aDate.getTime());
// console.log(aDate.getFormattedDate());

// // Extend Uint8Array
// class ExtendedUint8Array extends Uint8Array {
//   constructor() {
//     super(10);
//     this[0] = 255;
//     this[1] = 0xFFA;
//   }
// }

// var eua = new ExtendedUint8Array();
// console.log(eua.byteLength);

// // Extend DOM Audio element
// class MyAudio extends Audio {
//   constructor() {
//     super();
//     this._lyrics = '';
//   }

//   get lyrics() {
//     return this._lyrics;
//   }

//   set lyrics(str) {
//     this._lyrics = str;
//   }
// }

// var player = new MyAudio();
// player.controls = true;
// player.lyrics = 'Never gonna give you up';
// document.querySelector('body').appendChild(player);
// console.log(player.lyrics);

// // Note: The V8 in Chrome 42 supports subclassing built-ins but Arrays.
// // Subclassing arrays supported in Chrome 43.

// class Stack extends Array {
//   constructor() {
//     super();
//   }

//   top() {
//     return this[this.length - 1];
//   }
// }

// var stack = new Stack();
// stack.push('world');
// stack.push('hello');
// console.log(stack.top());
// console.log(stack.length);