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
				   		<a href="#" class="btn btn-primary modify" role="button">Изменить	</a> <a id="`+arr[id].id+`" href="#" class="delete" role="button">Удалить</a>
				   </p>
				 </div>
				</div>
				</div>`
	);
}
var deleteUser = function(id){
	arr[id]=null;
	$("#"+id).detach();
	console.log(arr, id);
}
var modifyUser = function(id){
	arr[id]
}
$(document).ready(function(){
		$(".delete").bind('click', function(){
			console.log("1");
			deleteUser(event.target.id);
		});
		$(".modify").bind('click', function(){
			modifyUser(event.target.id);
		});
	$("#employee").click( function(){
		let item = new Employee("Vlad",id , 50);
		arr[id]=item;
		console.log(arr);
		addUser(id++);

	});
	$("#designer").click( function(){
		let item = new Designer("Evgen",id , 77, 5);
		arr[id]=item;
		console.log(arr)
		addUser(id++);
	});
	$("#programmer").click( function(){
		let item = new Programmer("Masha",id , 85, "c++");
		arr[id]=item;
		console.log(arr)
		addUser(id++);
	});
	
});
	