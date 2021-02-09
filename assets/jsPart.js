//retrieve data from input
$("input[type='text']").keypress(function(event) {
    if(event.which === 13 && $(this).val() !== "") {
        var text = $(this).val();
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span>" + text +  "</li>");
        $(this).val("");
    }
});

$(".fa-edit").click(function() {
    $("input[type='text']").fadeToggle();
})