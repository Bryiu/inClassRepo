var queryURL = "http://taco-randomizer.herokuapp.com/random/";
var taco = {};
var shell = "";
var baseLayer = "";
var seasoning = "";
var mixin = "";
var condiment = "";
var layers = ["shell", "base", "seasoning", "mixin", "condiment"];
var layersUpper = ["Shell", "Base", "Seasoning", "Mixin", "Condiment"];
var favShells = [];
var favBases = [];
var favSeasonings = [];
var favMixins = [];
var favCondiments = [];
var favorites = JSON.parse(localStorage.getItem("favorites"));
if(favorites == undefined){
    favorites = [favShells, favBases, favSeasonings, favMixins, favCondiments];
}
$("#newTaco").on("click", function(){
    tacoDisplay();
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                shell = response.shell;
                baseLayer = response.base_layer;
                seasoning = response.seasoning;
                mixin = response.mixin;
                condiment = response.condiment;
                $("#shellName").text(shell.name);
                $("#shellRecipe").text(shell.recipe);
                $("#baseName").text(baseLayer.name);
                $("#baseRecipe").text(baseLayer.recipe);
                $("#seasoningName").text(seasoning.name);
                $("#seasoningRecipe").text(seasoning.recipe);
                $("#mixinName").text(mixin.name);
                $("#mixinRecipe").text(mixin.recipe);
                $("#condimentName").text(condiment.name);
                $("#condimentRecipe").text(condiment.recipe);
            }
      })
})
$("#newShell").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                shell = response.shell;
                $("#shellName").text(shell.name);
                $("#shellRecipe").text(shell.recipe);
            }
      })
})
$("#newBase").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                baseLayer = response.base_layer;
                $("#baseName").text(baseLayer.name);
                $("#baseRecipe").text(baseLayer.recipe);
            }
      })
})
$("#newSeasoning").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                seasoning = response.seasoning;
                $("#seasoningName").text(seasoning.name);
                $("#seasoningRecipe").text(seasoning.recipe);
            }
      })
})
$("#newMixin").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                mixin = response.mixin;
                $("#mixinName").text(mixin.name);
                $("#mixinRecipe").text(mixin.recipe);
            }
      })
})
$("#newCondiment").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                condiment = response.condiment;
                $("#condimentName").text(condiment.name);
                $("#condimentRecipe").text(condiment.recipe);
            }
      })
})
$(".favorites").on("click", function(){
    var i = $(this).val();
    if(favorites[i].includes($("#" + layers[i] + "Name").text()) == false){
        favorites[i].push($("#" + layers[i] + "Name").text());
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
})
function tacoDisplay(){
    for(var i = 0; i < layers.length; i++){
        $("#tacoBox").append($("<div class='box' id='" + layers[i] + "Div'>"));
        $("#" + layers[i] + "Div").append($("<div class='name' id='" + layers[i] + "Name'>"));
        $("#" + layers[i] + "Div").append($("<div class='recipe' id='" + layers[i] + "Recipe'>"));
        $("#" + layers[i] + "Div").append($("<button class='tacoBtn' id='new" + layersUpper[i] + "'>"));
        $("#new" + layersUpper[i]).text("New " + layersUpper[i]);
        $("#" + layers[i] + "Div").append($("<button class='tacoBtn favorites' id='fav" + layersUpper[i] + "' value=" + i + ">"));
        $("#fav" + layersUpper[i]).text("Add to Favorites");
    }
}
// To do:  Combine tacoHeader on click with all the new on clicks and make them a single dry function with a for loop that checks id and val and pulls from an array
// To do:  Discuss the favorites tab and make it work
// To do:  Weird equals signs and HTML in the recipe