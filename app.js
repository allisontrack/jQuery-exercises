$( document ).ready( function() {
    console.log("Let's get ready to ...");
});

$('article > img').addClass('.image-center');

$('p:eq(-1)').remove();

$('#title').css('font-size' , function() {
    return Math.floor(Math.random() * 100);
});

$('ol').append('<li>Puppies are great.</li>');

$('aside').empty().append(
    '<p>Actually that list was dumb, I\'m really sorry here\'s a p instead. Cute puppy though. Lorem ipsum blart.'
    );


$('input').change(function () {
    $('body').css('background-color', function () {
        let r = $('#red').val();
        const b = $('#blue').val();
        const g = $('#green').val();
        return `rgb(${r},${g},${b}`;
    });
});


$('img').click(function() {
    $(this).remove();
})
