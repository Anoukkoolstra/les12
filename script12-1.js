$(document).ready(function(){
    $('#resultaatKnop').on('click', function(){
        $('#loadResultaat').load('content12.html', function(responseTxt, statusTxt, xhr){
            if (statusTxt == "success") {
                alert('Het inladen is klaar');
            } else if (statusTxt == "error") {
                alert('Er is een fout opgetreden');
            }
        });
    });
});