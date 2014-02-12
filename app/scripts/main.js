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
	description: 'Get a ride to the airport',
	done: false,
	id: _.uniqueId('todo')
}

];

// Template from index
var todoTemplate = _.template($('.todo-template').text())

_.each(todoList, function(item){
	$('.todo-items').prepend(todoTemplate(item));
})

$('.js-add-todo').click(function(){

// pull the data from the user's input
	var description = $('.js-new-todo-input').val();

// push the user's input into an object
var todo = {
	description: description,
	done: false,
	id: _.uniqueId('todo')
}

// Push the user's data into a template using our template function
var renderedTemplate = todoTemplate(todo);

$('.todo-items').prepend(renderedTemplate);

(todoList).push(todo)

// $('.todo-input-box').trigger("reset");  
// Not resetting - do I need to add a form tag for reset to work properly?

});