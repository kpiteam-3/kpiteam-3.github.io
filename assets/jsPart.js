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

// check off specific Todos By Clicking
$("ul").on("click", "li", function() {
    if($(this).css("color") === "rgb(128, 128, 128)") {
        $(this).css({
            color: "#666",
            textDecoration: "none"
        })
    }
   else { 
       $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
}
});