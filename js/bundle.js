(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
},{"./Employee.js":3}],3:[function(require,module,exports){
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
},{"./Person.js":4}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{"./Employee.js":3}],6:[function(require,module,exports){
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
},{"./Programmer.js":5}],7:[function(require,module,exports){
var Person = require('./Person.js');
var Employee = require('./Employee.js');
var Designer = require('./Designer.js');
var Programmer = require('./Programmer.js');
var Senior = require('./Senior.js');
var Company = require('./Company.js');
let arr=[], id=0;
let addUser = function(id){
	$('#container').append(
		`<div id="`+arr[id].id+`" class="col-sm-6 col-md-4">
			<div class="thumbnail">
				<div class="caption">
				<div class="form-group">
			<label for="name">Имя:</label>
			<input id="name" type="text" class="form-control" value="`+arr[id].name+`">
			<label for="salary">Зарплата:</label>
			<input id="salary" type="text" class="form-control" value ="`+arr[id].salary+`">
			<label for="language">Язык:</label>
			<input id="language" type="text" class="form-control" value ="`+(arr[id].language ? arr[id].language : '')+`">
			<label for="experience">Опыт:</label>
			<input id="experience" type="text" class="form-control" value ="`+(arr[id].experience? arr[id].experience : '')+`">
		</div>
		<p>
			<a id="`+arr[id].id+`" href="#" class="btn btn-primary apply" role="button">Сохранить</a>
			<a id="`+arr[id].id+`" href="#" class="btn btn-danger cancel" role="button">Отмена</a>
		 </p>
				 </div>
				</div>
				</div>`
	);
	bindCancel();
	bindApply(id);
}
let bindApply = function(id){
	$('.apply').bind('click', function(){
		applyModification(id);
	})
}
let bindDelete = function(){
	$(".delete").bind('click', function(event){
		deleteUser(event.target.id);
	});
}

var deleteUser = function(id){
	arr[id[id]]=null;
	company.deleleEmployee(id);
	$("#"+id).detach();
	calculateSalary();
}
let bindModify = function(){
	$(".modify").bind('click', function(event){
		modifyUser(event.target.id);
	});
}
let bindCancel = function(){
	$(".cancel").bind('click', function(event){
		deleteUser(event.target.id);
	});
}
let company = new Company("SoftCo");
let bindAddToCompany = function(){
	$(".addToCompany").bind('click', function(event){
		addToCompany(event.target.id);
	});
}
let calculateSalary =function(){
	console.log(company.getSalary());
	$('.salary').html(company.getSalary());
}
let addToCompany = function(id){
	company.addEmpoyee(id, arr[id].salary);
	calculateSalary();
}

var applyModification = function(id){
	if (!($('#'+id+' #name').val() && $('#'+id+' #salary').val())){
		alert('Поля имя и зарплата должны быть заполнены');
	}else{
		arr[id].name = $('#'+id+' #name').val();
		arr[id].salary = $('#'+id+' #salary').val();
		arr[id].language = $('#'+id+' #language').val();
		arr[id].experience = $('#'+id+' #experience').val();
		$('#'+id+' > .thumbnail > .caption').html(
			`<h3>`+arr[id].name+`<a id="`+arr[id].id+`" class='btn btn-default pull-right addToCompany'>+</a></h3>
						<p>Зарплата:`+arr[id].salary+`</p>
					   <p>
					   Язык программирования:`+(arr[id].language ? arr[id].language : 'не задано')+`</p>
					   <p>
					   Опыт работы:`+(arr[id].experience? arr[id].experience : 'не задано')+`</p>
					   <p>
					   		<a id="`+arr[id].id+`" href="#" class="btn btn-primary modify" role="button">Изменить</a>
					   		<a id="`+arr[id].id+`" href="#" class="btn btn-danger delete" role="button">Удалить</a>
					   </p>`
		)
		bindModify(id);
		bindDelete();
		bindAddToCompany();
	}
}
var modifyUser = function(id){
	$('#'+id+' > .thumbnail > .caption').html(
		`<div class="form-group">
			<label for="name">Name:</label>
			<input id="name" type="text" class="form-control" value="`+arr[id].name+`">
			<label for="salary">salary:</label>
			<input id="salary" type="text" class="form-control" value ="`+arr[id].salary+`">
			<label for="language">language:</label>
			<input id="language" type="text" class="form-control" value ="`+(arr[id].language ? arr[id].language : 'не задано')+`">
			<label for="experience">experience:</label>
			<input id="experience" type="text" class="form-control" value ="`+(arr[id].experience? arr[id].experience : 'не задано')+`">
		</div>
		<p>
			<a id="`+arr[id].id+`" href="#" class="btn btn-primary apply" role="button">Сохранить</a>
		 </p>`
	);
	bindCancel();
	bindApply(id);
}
document.addEventListener("DOMContentLoaded", function(){
	$("#employee").click( function(){
		let item = new Employee('', id , '');
		arr[id]=item;
		addUser(id++);
		bindModify();
		bindDelete();
	});
	$("#designer").click( function(){
		let item = new Designer('', id , '', '');
		arr[id]=item;
		addUser(id++);
		bindModify();
		bindDelete();
	});
	$("#programmer").click( function(){
		let item = new Programmer('', id , '', '');
		arr[id]=item;
		addUser(id++);
		bindModify();
		bindDelete();
	});
});
},{"./Company.js":1,"./Designer.js":2,"./Employee.js":3,"./Person.js":4,"./Programmer.js":5,"./Senior.js":6}]},{},[7])