
$('document').ready(function() {
    $('button').on('click', function(event) {
        event.preventDefault();
        
        const title = $('#title').val();
        const rating = $('#rating').val();

        $('#movies-list').append("<li>" + title + " is rated " + rating + "</li>");
        $('li').append('<button class="delete">Delete</button>')

    });
});


$('ul').on('click', '.delete', function() {
    let listItem = $(this).parent();
    console.log($(this).parent());
    listItem.remove();
})