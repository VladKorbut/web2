module.exports = class Company{
	constructor(name){
		this.name = name;
		this.arr = [];
		this.salary = [];
	}
	get prop(){
		return this;
	}
	addEmpoyee(item, salary){
		console.log(item, this.arr, this.salary);
		this.arr.push(parseInt(item));
		this.salary.push(parseInt(salary));
	}
	deleleEmployee(item){
		console.log(item, this.arr, this.salary);
		this.arr.splice(this.arr.indexOf(item), 1);
		this.salary.splice(this.arr.indexOf(item), 1);
	}
	getSalary(){
		var salary = this.salary.reduce(function(sum, current) {
		  return sum + current;
		}, 0);
		return salary;
	}
}