//Create my Object
function createMyObject() {
  return {
		foo: 'bar',
		answerToUniverse: 42,
		'olly olly': 'oxen free',
		sayHello: ()=> {return 'hello'},
	}
}
console.log(createMyObject());

//Object updater
function updateObject(obj){
	obj.foo = 'foo';
	obj.bar = 'bar';
	obj.bizz = 'bizz';
	obj.bang = 'bang';
	return obj;
}
let uber = {};
console.log(updateObject(uber));

//Self reference
function personMaker(){
	var person = {
		firstName: 'Paul',
		lastName: 'Jones',
		fullName: ()=> {return `${this.firstName} ${this.lastName}`},
	};
	return person;
}

console.log(personMaker());

//Deleting keys

var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang'
};
function keyDeleter(obj){
	delete obj.foo;
	delete obj.bar;
	return obj;
}
console.log(keyDeleter(sampleObj));