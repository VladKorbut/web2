"use strict"
let arr=[], id=0;
let addUser = function(id){
	$('#container').append(
		`<div id="`+arr[id].id+`" class="col-sm-6 col-md-4">
			<div class="thumbnail">
				<div class="caption">
				<div class="form-group">
			<label for="name">Name:</label>
			<input id="name" type="text" class="form-control" value="`+arr[id].name+`">
			<label for="salary">salary:</label>
			<input id="salary" type="text" class="form-control" value ="`+arr[id].salary+`">
			<label for="language">language:</label>
			<input id="language" type="text" class="form-control" value ="`+(arr[id].language ? arr[id].language : '')+`">
			<label for="experience">experience:</label>
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
	arr[id]=null;
	$("#"+id).detach();
}
let bindModify = function(){
	$(".modify").bind('click', function(event){
		modifyUser(event.target.id);
	});
}
let bindCancel = function(){
	console.log(arr);
	$(".cancel").bind('click', function(event){
		deleteUser(event.target.id);
	});
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
		bindModify(id);
		bindDelete();
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

	
	
	