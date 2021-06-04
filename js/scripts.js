$(document).ready(function() {
$("form#survey").submit(function(event) { 
    const city = $("input:radio[name=place]:checked").val();
    if (city === "Portland") {
        $("#ruby").show();
    } else if (city === "Seattle") {
        $("#c").show();
    } else if (city === "Other") {
        $("#j").show();
    } else {
        alert("No Value Selected!");
    }

    event.preventDefault();
});
});

