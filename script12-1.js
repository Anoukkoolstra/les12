$(document).ready(function(){
    $('#resultaatKnop').on('click', function(){
        $('#loadResultaat').load('content12.html', function() {
            alert('Test');
        });
    });
});