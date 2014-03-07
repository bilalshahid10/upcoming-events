(function( $ ) {
	
	//Initializing jQuery UI Datepicker
	$( '#uep-event-start-date' ).datepicker({
		dateFormat: 'MM dd, yy',
		onClose: function( selectedDate ){
			$( '#uep-event-end-date' ).datepicker( 'option', 'minDate', selectedDate );
		}
	});
	$( '#uep-event-end-date' ).datepicker({
		dateFormat: 'MM dd, yy',
		onClose: function( selectedDate ){
			$( '#uep-event-start-date' ).datepicker( 'option', 'maxDate', selectedDate );
		}
	});

})( jQuery );