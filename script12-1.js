$(document).ready(function(){
    $('#resultaatKnop').on('click', function(){
        $('#loadResultaat').load('content12.html', () => {
            $('#divAlert').html('Het inladen is klaar!')
        });
    });
});