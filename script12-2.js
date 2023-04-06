$(document).ready(function(){
    $('#resultaatKnop').on('click', function(){
        $.ajax({
            url: 'content12.html',
            success: function(data) {
                $('#loadResultaat').html(data);
                alert('De pagina is ingeladen');
            },
            error: function(xhr, status, error) {
                alert('Er is een fout opgetreden')
            }
        })
    })
})