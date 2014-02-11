/* global describe, it */

(function () {
    'use strict';

    describe('In our todo app', function () {
        describe('when the add button is clicked', function () {
            it('should add a new todo div when the input is populated', function () {
            	$('.js-new-todo-input').val('Get a ride to airport.');

            	$('.js-add-todo').click();

            	var fisrtTodoText = $('.todo-items').first().child('.description').text();

            	expect(firstTodoText).to.contain('Get a ride to airport.');
            });
        });
    });
})();
