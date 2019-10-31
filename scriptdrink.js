var proxy = "http://www.chriscastle.com/proxy/thecocktaildb.php?:proxy:";
var ingredient = JSON.parse(localStorage.getItem("alcohol"));
var queryURL1 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
var drinkSearch = $("#tequilaBox");
var drinkArray = [];
var numberArray = [];
function searchDiv() {
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

$(document).on("click", "#searchDrink", function () {
    event.preventDefault()
    var drink = $("#textarea").val().trim();
    if (drinkArray.indexOf(drink) === -1) {
        drinkArray.concat(drink);
        localStorage.setItem("alcohol", JSON.stringify(drink));
    }
    $("#searchDiv").html("");

    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var randomNumber = Math.floor((Math.random() * response.drinks.length) + 0);
        drinkName = response.drinks[randomNumber].strDrink;

        console.log(drinkName);

    });

$(document).on("click", "#searchDrink", function(){
    console.log("test");
    console.log($("#textarea").val().trim());
    $("#searchDiv").html("");
});

function populate2() {
    var button2 = $("<button>");
    button2.html(drinks[randomNumber].strDrink);
    button2.append(drinkSearch);
    $("#tequilaBox").append(button2);
}

searchDiv();

<<<<<<< HEAD

















// Add a search button and push it to the box
// have the user search by alcohol
// use the string from the search bar to search the API
// pull
// var proxy = "http://www.chriscastle.com/proxy/thecocktaildb.php?:proxy:";
// var ingredient = JSON.parse(localStorage.getItem("alcohol"));
// console.log(ingredient);
// var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
// function searchDiv() {
//     var search = $("<div>")
//     search.attr("id", "searchDiv");
//     var textarea = $("<textarea>");
//     textarea.attr("name", "textarea");
//     textarea.attr("id", "textarea");
//     textarea.attr("cols", "54");
//     textarea.attr("rows", "2");
//     search.append(textarea);
//     var button1 = $("<button id='searchDrink'>");
//     button1.html("Search");
//     search.append(button1);
//     $("#tequilaBox").html(search);
// };
// searchDiv();

// $(document).on("click", "#searchDrink", function () {
//     event.preventDefault()
//     console.log($("#textarea").val().trim());
//     var drink = $("#textarea").val().trim();
//     if (drinkArray.indexOf(drink) === -1) {
//         drinkArray.concat(drink);
//         localStorage.setItem("alcohol", JSON.stringify(drink));
//     }
//     $("#searchDiv").html("");

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//         if (localStorage.getItem("drinks")) {
//             drinkStore = JSON.parse(localStorage.getItem("drinks"));
//         }





//     });
// });



// var drinkSearch = $("#tequilaBox");
// var drinkArray = [];

=======
// function populate2(){
// $("#textarea")
// };
// populate2()
// >>>>>>> e92091c970e00e249eb32cda8ac1e51e96480c7c

// function populate3(){

// };
// $.ajax(settings).done(function (response) {
//     console.log(response);
// $(".").text("<div>"+drinkSearch+"</div>");
// $(".").append();

// });


// Add a search button and push it to the box
// have the user search by alcohol
// use the string from the search bar to search the API
// pull
