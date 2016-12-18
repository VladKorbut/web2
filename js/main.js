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