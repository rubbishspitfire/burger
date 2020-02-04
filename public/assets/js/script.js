$(document).ready(function() {
    $(".devour-form").on("submit", function(event) {
        event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();
        console.log(burger_id)
        $.ajax({
            method: "PUT",
            url: "/burger/" + burger_id
        }).then(function(data) {
            // reload the page to get the updated list
            location.reload();
        })
    })
});