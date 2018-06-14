$(document).ready( function() {
    console.log("JS good to go, sir!");
    // PUT
    $('#edit').on('submit', function(e) {
        e.preventDefault();
        var newData = $(this).serialize();
        var url = $(this).attr('action');
        $.ajax({
            method: 'PUT',
            url: url,
            data: newData
        }).done( function(data){
            console.log('updated with: ', data);
            window.location = '/games';
        })
    })

    // DELETE
    $('a.delete').on('click', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        console.log(url);
        $.ajax({
            method: 'DELETE',
            url: url
        }).done( function(data) {
            console.log('deleted ', data);
            window.location = '/games';
        })

    })

})