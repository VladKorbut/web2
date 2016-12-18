module.exports = class Person{
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