$(document).ready(function() {
$("form#survey").submit(function(event) { 
    event.preventDefault();
    const city = $("input:radio[name=place]:checked").val();
    if (city === "Portland") {
        $("#ruby").show();
        $("#c").hide();
        $('#j').hide();
    } else if (city === "Seattle") {
        $("#c").show();
        $("#ruby").hide();
        $("#j").hide();
    } else if (city === "Other") {
        $("#j").show();
        $("#ruby").hide();
        $("#c").hide();
    } else {
        alert("No Value Selected!");
    }

        
    });
});

