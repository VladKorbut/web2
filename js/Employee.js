var Person = require('./Person.js');
module.exports = class Employee extends Person{
	constructor(name, id, salary) {
		super(name, id);
		this.salary = salary;
	}
	get prop(){
		return this;
	}
	set prop(salary){
		this.salary = salary;
	}
}