console.log('You can do this!');

var todoList = [
	{
		description: 'Pack for Texas',
		done: false,
		id: _.uniqueId('todo'),
		descId: _.uniqueId('descId')
	},

	{
		description: 'Drink some wine',
		done: false,
		id: _.uniqueId('todo'),
		descId: _.uniqueId('descId')
	},

	{
		description: 'Grab a ride to the airport',
		done: false,
		id: _.uniqueId('todo'),
		descId: _.uniqueId('descId')
	}

];

$(document).ready(function(){

	// Templates from index
	var todoTemplate = _.template($('.todo-template').text());
	var todoEditTemplate = _.template($('.todoEditTemplate').text());
	var todoCompletedEditTemplate = _.template($('.todoCompletedEditTemplate').text());

	_.each(todoList, function(item){
		$('.todo-items').prepend(todoTemplate(item));
	});

	$('.todo-items').on('mouseenter mouseleave', '.todo-item', function(){
		$(this).children('.edit-button').toggleClass('visible');
	});

	$('.todo-items').on('mouseenter mouseleave', '.todo-item', function(){
		$(this).children('.remove-button').toggleClass('visible');
	});

	$('.js-todoCountNumber').append(todoList.length);
	console.log('Lenth of items calculated to be ' + todoList.length);

	$('.js-add-todo').click(function(){

		// pull the data from the user's input
		var description = $('.js-new-todo-input').val();

		// push the user's input into an object
		var todo = {
			description: description,
			done: false,
			id: _.uniqueId('todo'),
			descId: _.uniqueId('descId')
		};

		// Push the user's data into a template using our template function
		var renderedTemplate = todoTemplate(todo);

		$('.todo-items').prepend(renderedTemplate);

		(todoList).push(todo);
		console.log('Item added, now array has ' + todoList.length + ' items.')
		console.log('Replace item count with ' + todoList.length);
		$( ".js-todoCountNumber" ).html(function() {
			var newCount = todoList.length;
			return newCount;
		});

		// $('.todo-input-box').trigger("reset");  
		// Not resetting - do I need to add a form tag for reset to work properly?

	});

// Get form to submit upon 'return' key

	$('.todo-items').on('click', '.js-remove-button', function(){
		console.log('About to take this sucka out.');
		var parentId = $(this).parent().attr('id');
		console.log('About to remove ',parentId);
		console.log('Array length before removal is ', todoList.length);
		todoList = _.reject(todoList, function(item){return item.id == parentId;});
		console.log('Array length after removal is', todoList.length);
		$(this).parent().remove();
		console.log('Removed ',$(this).parent())

		console.log('Item removed, now array has ' + todoList.length + ' items.')
		console.log('Replace item count with ' + todoList.length);
		$( ".js-todoCountNumber" ).html(function() {
			var newCount = todoList.length;
			return newCount;
		});

	});

	$('.todo-items').on('click', '.js-done-button', function(){
		var parentId = $(this).parent().attr('id');
		todoArrayItem = _.findWhere(todoList, function(item){return item.id == parentId});
		newDoneStatus = !todoArrayItem.done;
		todoArrayItem.done = newDoneStatus;
		$(this).toggleClass('done');
		$(this).siblings('.todo-description').toggleClass('done');
	});

	$('.todo-items').on('click', '.js-edit-button', function(){
		console.log('Edit mode class is being exchanged on edit-button.');
		$(this).toggleClass('js-editmode-button');
		$(this).toggleClass('js-edit-button');
		$(this).parent().toggleClass('editmodeOn');
		$(this).parent().toggleClass('editmodeOff');
		var parentId = $(this).parent().attr('id');
		console.log(parentId);

		console.log(document.getElementById(parentId));
		// STill not working, but getting closer.
		// $("<input>").replaceAll($(this).siblings($('.descriptionContent')));
		// $("<input>").replaceAll($('.descriptionContent'));
		var todoEditItem = _.findWhere(todoList, {id: parentId});
		console.log(todoEditItem);
		var descId = todoEditItem.descId;
		var descToEdit = todoEditItem.description;
		var todoEdit = {
			descToEdit: descToEdit
		}
		console.log(descId);
		console.log(descToEdit);
		var divToEdit = document.getElementById(descId);
		console.log('Captured div to edit.');
		renderedEditTemplate = todoEditTemplate(todoEdit);
		console.log('Created template with new data.');
		$(renderedEditTemplate).replaceAll($(this).siblings('.todo-description'));
		console.log('Replaced template.');		
	});

	$('.todo-items').on('click', '.js-editmode-button', function(){
		console.log('Edit class is being replaced on edit-button.');
		$(this).toggleClass('js-editmode-button');
		$(this).toggleClass('js-edit-button');
		$(this).parent().toggleClass('editmodeOn');
		$(this).parent().toggleClass('editmodeOff');

		var newDescription = $('.editmode-input').val();
		console.log('Pulled value from the input as ' + newDescription);
		var todoEdited = {
			description: newDescription
		}
		console.log('Pushed new value into new object literal');
		var parentId = $(this).parent().attr('id');
		console.log('Identified this div parentId as ' + parentId);
		// Grabbing wrong item from the todoList - grabs last item entered
		var todoToChange = _.findWhere(todoList, {id: parentId});
		console.log('Pulled corresponding item from todoList array as ' + todoToChange);
		console.log(todoToChange.description);
		todoToChange.description = newDescription;
		console.log('replaced ' + todoToChange.description + ' with ' + newDescription);
		renderedEditTemplate = todoCompletedEditTemplate(todoToChange);
		$(renderedEditTemplate).replaceAll($(this).siblings('.todo-description'));
	});

$('.todo-items').on('click', '.js-todoAll', function(){
		$( ".todo-items" ).html(null);

		replaceAction = function(){
			_.each(todoList, function(item){
				$('.todo-items').prepend(todoTemplate(item));
			});
		};

		replaceAction()
		})


});

// $('.todo-items').on('click', '.js-todoActive', function(){
// 		$( ".todo-items" ).html(null);

// 		replaceAction = function(){
// 			_.each(todoList, function(item){
// 				$('.todo-items').prepend(todoTemplate(item));
// 			});
// 		};

// 		replaceAction()
// 		})


// });
