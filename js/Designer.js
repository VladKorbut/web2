var Employee = require('./Employee.js');
module.exports = class Designer extends Employee{
	constructor(name, id, salary, experience){
		super(name, id, salary);
		this.experience = experience;
	}
	get prop(){
		return this;
	}
	set prop(experience){
		this.experience = experience;
	}
}