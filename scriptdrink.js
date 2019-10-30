var proxy = "http://www.chriscastle.com/proxy/thecocktaildb.php?:proxy:";
var ingredient = JSON.parse(localStorage.getItem("alcohol"));
console.log(ingredient);
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
function searchDiv() {
    var search = $("<div>")
    search.attr("id", "searchDiv");
    var textarea = $("<textarea>");
    textarea.attr("name", "textarea");
    textarea.attr("id", "textarea");
    textarea.attr("cols", "54");
    textarea.attr("rows", "2");
    search.append(textarea);
    var button1 = $("<button id='searchDrink'>");
    button1.html("Search");
    search.append(button1);
    $("#tequilaBox").html(search);
};
searchDiv();

$(document).on("click", "#searchDrink", function () {
    event.preventDefault()
    console.log($("#textarea").val().trim());
    var drink = $("#textarea").val().trim();
    if (drinkArray.indexOf(drink) === -1) {
        drinkArray.concat(drink);
        localStorage.setItem("alcohol", JSON.stringify(drink));
    }
    $("#searchDiv").html("");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        if (localStorage.getItem("drinks")) {
            drinkStore = JSON.parse(localStorage.getItem("drinks"));
        }




        
    });
});



var drinkSearch = $("#tequilaBox");
var drinkArray = [];






// Add a search button and push it to the box
// have the user search by alcohol
// use the string from the search bar to search the API
// pull