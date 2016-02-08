/**
 * 
 */

$(document).ready(function() {
	var fromDate = $('#fromDate');
	var toDate = $('#toDate');
	var firstName = $('#firstName');
	var lastName = $('#lastName');
	var email = $('#email');
	var phone = $('#phone');
	var counter = 0;
	var chosenDestinations = $(".dropped");
	
	//jQUERY UI ELEMENTS 'ACTIVATION'
	$( "#fromDate" ).datepicker();
	$( "#toDate" ).datepicker();
	$( ".draggable" ).draggable({ 
		revert: "invalid",
		drop: function (event, ui) {
			$(event.target).addClass('dropped');
		}
	});

	$("#droppable").droppable({
		drop: function( event, ui ) {
			counter++;
			console.log(counter);
		}
	});
	$( "#spinner" ).spinner();
	$('button').button();


	$('#submit').on('click', function() {	
		notEmptyInput(fromDate);
		notEmptyInput(toDate);
		notEmptyInput(firstName);
		notEmptyInput(lastName);
		notEmptyInput(email);

		notEmptyInput(phone);

		
		onlyNumbers(phone);
		onlyLetters(firstName);
		onlyLetters(lastName);

		
		checkDays();
		


		
	});
});