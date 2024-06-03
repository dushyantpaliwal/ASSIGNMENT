$(document).ready(function() {
    // Handle read more button click
    $('#read-more').click(function() {
        window.open('https://www.fylehq.com', '_blank');
    });

    // Handle contact us button click
    $('#contact-button').click(function() {
        $('#contact-modal').modal('show');
    });

    // Handle project details click
    $('#project-details li').click(function() {
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });

    // Form submission handler
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        alert('Form submitted!');
        $('#contact-modal').modal('hide');
    });
});
