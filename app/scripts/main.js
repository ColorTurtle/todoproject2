console.log('You can do this!');

var todoList = [
	{
		description: 'Pack for Texas',
		done: false,
		id: _.uniqueId('todo')
	},

	{
		description: 'Drink some wine',
		done: false,
		id: _.uniqueId('todo')
	},

	{
		description: 'Grab a ride to the airport',
		done: false,
		id: _.uniqueId('todo')
	}

];

$(document).ready(function(){

	// Template from index
	var todoTemplate = _.template($('.todo-template').text());
	var todoEditTemplate = _.template($('.todoEditTemplate').text());

	_.each(todoList, function(item){
		$('.todo-items').prepend(todoTemplate(item));
	});
// This function is not working 
	$('.todo-items').on('mouseenter mouseleave', '.todo-item', function(){
		console.log('Hover function for todo-item working.');
		$(this).children('.edit-button').toggleClass('visible');
	});

	$('.todo-items').on('mouseenter mouseleave', '.todo-item', function(){
		console.log('Hover function for todo-item working.');
		$(this).children('.remove-button').toggleClass('visible');
	});


	$('.js-add-todo').click(function(){

		// pull the data from the user's input
		var description = $('.js-new-todo-input').val();

		// push the user's input into an object
		var todo = {
			description: description,
			done: false,
			id: _.uniqueId('todo')
		};

		// Push the user's data into a template using our template function
		var renderedTemplate = todoTemplate(todo);

		$('.todo-items').prepend(renderedTemplate);

		(todoList).push(todo);

		// $('.todo-input-box').trigger("reset");  
		// Not resetting - do I need to add a form tag for reset to work properly?

	});



	$('.todo-items').on('click', '.js-remove-button', function(){
		console.log('About to take this sucka out.');
		var parentId = $(this).parent().attr('id');
		console.log('About to remove ',parentId);
		console.log('Array length before removal is ', todoList.length);
		todoList = _.reject(todoList, function(item){return item.id == parentId;});
		console.log('Array length after removal is', todoList.length);
		$(this).parent().remove();
		console.log('Removed ',$(this).parent())
	});

	$('.todo-items').on('click', '.js-done-button', function(){
		console.log('About to make this done.');
		var parentId = $(this).parent().attr('id');
		console.log('Grabbing parent ID:', parentId)
		todoArrayItem = _.findWhere(todoList, function(item){return item.id == parentId});
		newDoneStatus = !todoArrayItem.done;
		todoArrayItem.done = newDoneStatus;
		console.log('Done status changed for ', parentId);
		$(this).toggleClass('done');
		console.log('Changed the done-button.');
		$(this).siblings('.todo-description').toggleClass('done');
		console.log('Changed the todo-description.');
	});

	$('.todo-items').on('click', '.js-edit-button', function(){
		$(this).siblings('.todo-description').replaceAll(todoEditTemplate);
		console.log('Input should replace description');

	});

$('.todo-items').on('click', '.js-update-button', function(){
		var parentId = $(this).parent().attr('id');
		console.log('About to update', parentId);

		todoArrayItem = _.findWhere(todoList, function(item){return item.id == parentId});

		var editedTemplate = todoEditTemplate(todo);

		var newDescription = $('.edit-input').val();

		todoArrayItem.description = newDescription;
		console.log('New description should be put into array.');
		$(this).children('.todo-description').replaceAll(editTemplate);
		console.log('Input should replace .description');

	});


});
