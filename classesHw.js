//number 1

class Pet {
	constructor(name){
		this.name = name;
		this.owner = '';
	}
	setOwner(dud){
		this.owner = dud;
		console.log(this)
	}
}

const bobbyThePug = new Pet('Bobby');

bobbyThePug.setOwner('Gio')





//number 2


class Dog extends Pet {
	constructor(name, price){
		super(name);
		this.price = price;
	}
	bark(){
		console.log('bark')
	}
	chaseTail(){
		console.log('oh boy oh boy oh boy')
	}
	getPrice(){
		return this.price
	}
}



//number 3

const sparky = new Dog('Sparky', 15.99);

sparky.bark();
sparky.chaseTail();
sparky.getPrice();



//number 4

class Cat extends Pet {
	constructor(name, price){
		super(name);
		this.price = price;
	}
	purr(){
		console.log('purrrrrrr')
	}
	clean(){
		console.log('cleaning')
	}
	getPrice(){
		return this.price
	}
}


// number 5

const sprinkles = new Cat('Sprinkles', 'free')


sprinkles.purr();
sprinkles.clean();
sprinkles.getPrice();



















