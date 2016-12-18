var Employee = require('./Employee.js');
module.exports = class Programmer extends Employee{
	constructor(name, id, salary, language){
		super(name, id, salary);
		this.language = language;
		this.experience = "<5";
	}
	get prop(){
		return this;
	}
	set prop(salary){
		this.salary = salary;
	}
}