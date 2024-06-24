$(document).ready(function() {
    UserForm.render();

    $('#logo').on('click', function() {
        $('#user-list-container').hide();
        $('#user-details-container').hide();
        $('#user-form-container').show();
        UserForm.render();
    });
});
