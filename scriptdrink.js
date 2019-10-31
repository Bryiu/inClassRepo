var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/search.php?i=" + drinkSearch,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "e0e1e4769dmsh8df7e164bd04d88p19749ajsn9d07d9615af6"
    }
}


var drinkSearch=$("#tequilaBox");


$.ajax(settings).done(function (response) {
    console.log(response);
});

function searchDiv(){
    var search = $("<div>")
    search.attr("id","searchDiv");
    var textarea = $("<textarea>");
    textarea.attr("name","textarea");
    textarea.attr("id","textarea");
    textarea.attr("cols", "56");
    textarea.attr("rows", "2");

    search.append(textarea);

    var button1 = $("<button id='searchDrink'>");
    button1.html("Search");

    search.append(button1);

    $("#tequilaBox").html(search);
};

$(document).on("click", "#searchDrink", function(){
    console.log("test");
    console.log($("#textarea").val().trim());
    $("#searchDiv").html("");
});


searchDiv();

function populate2(){
$("#textarea")
};
populate2()

function populate3(){

};
// $.ajax(settings).done(function (response) {
//     console.log(response);
// $(".").text("<div>"+drinkSearch+"</div>");
// $(".").append();

// });


// Add a search button and push it to the box
// have the user search by alcohol
// use the string from the search bar to search the API
// pull
