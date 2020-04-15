
$("#UCLA").on("click", function(e){
    // function code
    console.log("ucla");
    $(".ucla").css("display", "block");
    $(".ncku").css("display", "none");
});

$("#NCKU").on("click", function(e){
    // function code
    console.log("ncku");
    $(".ncku").css("display", "none");
    $(".ucla").css("display", "none");
});