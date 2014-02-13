/* global describe, it */

(function () {
    'use strict';

    describe('In our todo app', function () {
        describe('when the add button is clicked', function () {
            it('should add a new todo div when the input is populated', function () {
            	$('.js-new-todo-input').val('Grab some beer.');
            	$('.js-add-todo').click();
            	var firstTodoText = $('.todo-item').first().children('.todo-description').text();
            	// var firstTodoText = 'Grab some beer.';
            	expect(firstTodoText).to.contain('Grab some beer.');
            	// expect(true).to.equal(true);
            });

            it('should increase the array size by 1', function(){
            	$('.js-new-todo-input').val('Grab some beer.');
            	$('.js-add-todo').click();
            	var firstTodoText = $('.todo-item').first().children('.todo-description').text();
            	expect(todoList.length).to.equal(5);
            });
        });
        
        describe('when the remove button is clicked', function () {
        		it('should remove the corresponding parent div', function(){
        			($('#todo1').children($('.js-remove-button'))).click();
                    var deletedTodo = _.findWhere(todoList, function(item){return item.id == todo1});
                    expect(deletedTodo).to.equal('undefined')
        		});
        		it('should remove the corresponding object from the array');

        });
    });
})();