"use strict"
let arr=[], id=0;
let getInfo = function(){
	
}
let addUser = function(id){
	$('#container').append(
		`<div id="`+arr[id].id+`" class="col-sm-6 col-md-4">
			<div class="thumbnail">
				<div class="caption">
					<h3>`+arr[id].name+`</h3>
					<p>Зарплата:`+arr[id].salary+`</p>
				   <p>
				   Язык программирования:`+(arr[id].language ? arr[id].language : 'не задано')+`</p>
				   <p>
				   Опыт работы:`+(arr[id].experience? arr[id].experience : 'не задано')+`</p>
				   <p>
				   		<a id="`+arr[id].id+`" href="#" class="btn btn-primary modify" role="button">Изменить</a>
				   		<a id="`+arr[id].id+`" href="#" class="btn btn-danger delete" role="button">Удалить</a>
				   </p>
				 </div>
				</div>
				</div>`
	);
}
var deleteUser = function(id){
	arr[id]=null;
	$("#"+id).detach();
}
var applyModification = function(id, name, salary, language, experience){
	arr[id].name = name;
	arr[id].salary = salary;
	arr[id].language = language;
	arr[id].experience = experience;
	$('#'+id+' > .thumbnail > .caption').html(
		`<h3>`+arr[id].name+`</h3>
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
	$('.apply').bind('click', function(){
		applyModification(id, $('#'+id+' #name').val(), $('#'+id+' #salary').val(), parseInt($('#'+id+' #language').val()), parseInt($('#'+id+' #experience').val()));
	})
	
}
document.addEventListener("DOMContentLoaded", function(){
	$("#employee").click( function(){
		let item = new Employee("Vlad",id , 50);
		arr[id]=item;
		addUser(id++);
		$(".delete").bind('click', function(event){
			deleteUser(event.target.id);
		});
		$(".modify").bind('click', function(event){
			modifyUser(event.target.id);
		});
	});
	$("#designer").click( function(){
		let item = new Designer("Evgen",id , 77, 5);
		arr[id]=item;
		addUser(id++);
		$(".delete").bind('click', function(event){
			deleteUser(event.target.id);
		});
		$(".modify").bind('click', function(event){
			modifyUser(event.target.id);
		});
	});
	$("#programmer").click( function(){
		let item = new Programmer("Masha",id , 85, "c++");
		arr[id]=item;
		addUser(id++);
		$(".delete").bind('click', function(event){
			deleteUser(event.target.id);
		});
		$(".modify").bind('click', function(event){
			modifyUser(event.target.id);
		});
	});
});
	
	
	