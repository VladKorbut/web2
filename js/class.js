class Person{
	constructor(name, id) {
		this.name = name;
		this.id=id;
	}
	get prop() {
        return this;
    }
    set prop(name) {
        this.name = name;
    }
}
class Employee extends Person{
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
class Programmer extends Employee{
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
class Senior extends Programmer{
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
class Designer extends Employee{
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