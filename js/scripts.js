$(document).ready(function() {
$("form#survey").submit(function(event) { 
    event.preventDefault();
    const city = $("input:radio[name=place]:checked").val();
    if (city === "Portland") {
        $("#ruby").toggle();
    } else if (city === "Seattle") {
        $("#c").toggle();
    } else if (city === "Other") {
        $("#j").toggle();
    } else {
        alert("No Value Selected!");
    }
});
});

