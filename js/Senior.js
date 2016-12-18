var Programmer = require('./Programmer.js');
module.exports = class Senior extends Programmer{
	constructor(name, id, salary, language, experience){
		super(name, id, salary, language);
		this.experience = experience;
	}
	get prop(){
		return this;
	}
	set prop(experience){
		this.experience = experience;
	}
}