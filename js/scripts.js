$(document).ready(function() {
$("form#currentPlace").submit(function(event) { 
    const city = $("input:radio[name=place]:checked").val();
    if (city === "Portland") {
        $("#ruby").show();
    } else if (city === "Seattle") {
        $("#c").show();
    } else if (city === "SomewhereElse") {
        $("#javscript").show();
    } else {
        alert("No Value Selected!");
    }

    event.preventDefault();
});
});

