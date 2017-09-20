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





//number 6

class Person {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.weight = 0;
		this.mood = 0;
		this.pets = [];
		this.bankAccount = 100;
	}
	getName(){
		return this.name
	}
	getAge(){
		return this.age
	}
	getWeight(){
		return this.weight
	}
	greet(otherPerson){
		alert('Hi ' + otherPerson + ' how are you?!')
	}
	eat(){
		this.weight += 5;
		this.mood += 100;
	}
	exercise(){
		this.weight -= 1
	}
	aging(){
		this.age += 1;
		this.weight +=3;
		this.mood -=20;
		this.bankAccount +=10;

	}
	buyPet(animalName){
		this.pets.push(animalName);
		let cost = animalName.getPrice();
		return this.bankAccount - cost;

	}

}


//number 7

const jill = new Person('Jill');
jill.getName();
jill.getAge();
jill.getWeight();
jill.greet('Gio');
jill.eat();
jill.exercise();
jill.aging();
jill.buyPet(sparky);

jill //<----to double check



