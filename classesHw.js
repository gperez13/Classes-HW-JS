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



const sparky = new Dog('Sparky', 15.99);

sparky.bark();
sparky.chaseTail();
sparky.getPrice();
































