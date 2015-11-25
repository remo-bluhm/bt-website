        $(function() {
        	
            $.datepicker.regional['de'] = {clearText: 'löschen', clearStatus: 'aktuelles Datum löschen',
                    closeText: 'schließen', closeStatus: 'ohne Änderungen schließen',
                    prevText: 'zurück', prevStatus: 'letzten Monat zeigen',
                    nextText: 'Vor', nextStatus: 'nächsten Monat zeigen',
                    currentText: 'heute', currentStatus: '',
                    monthNames: ['Januar','Februar','März','April','Mai','Juni',
                    'Juli','August','September','Oktober','November','Dezember'],
                    monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
                    'Jul','Aug','Sep','Okt','Nov','Dez'],
                    monthStatus: 'anderen Monat anzeigen', yearStatus: 'anderes Jahr anzeigen',
                    weekHeader: 'Wo', weekStatus: 'Woche des Monats',
                    dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
                    dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
                    dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
                    dayStatus: 'Setze DD als ersten Wochentag', dateStatus: 'Wähle D, M d',
                    dateFormat: 'dd.mm.yy', firstDay: 1, 
                    initStatus: 'Wähle ein Datum', isRTL: false};
            $.datepicker.setDefaults($.datepicker.regional['de']);
        	
     
//            $( ".dp" ).datepicker({
//            	changeMonth: true,
//            	dateFormat:"d MM, yy",
//            	minDate: 0, maxDate: "+1Y",
//            	changeYear: true
//            }).regional[ "de" ];
        
            $( "#dp-from" ).datepicker({
            	navigationAsDateFormat: true, nextText: 'MM', prevText: 'MM',
                defaultDate: "+1w",
                changeMonth: true,
                changeYear: true,
                showButtonPanel: true,
                numberOfMonths: 1,
                minDate: 0, maxDate: "+1Y",
                onClose: function( selectedDate ) {
                  $( "#dp-to" ).datepicker( "option", "minDate", selectedDate );
                }
            });
            $( "#dp-to" ).datepicker({
            	navigationAsDateFormat: true, nextText: 'MM', prevText: 'MM',
                defaultDate: "+1w",
                changeMonth: true,
                changeYear: true,
                showButtonPanel: true,
                numberOfMonths: 1,
                minDate: 0, maxDate: "+1Y",
                onClose: function( selectedDate ) {
                  $( "#dp-from" ).datepicker( "option", "maxDate", selectedDate );
                }
              });
        
        
        });
        
        
        

