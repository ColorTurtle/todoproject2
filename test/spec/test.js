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

            it('should do something else...');
        });
    });
})();
