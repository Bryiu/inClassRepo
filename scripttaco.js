var queryURL = "http://taco-randomizer.herokuapp.com/random/";
var shell = "";
var baseLayer = "";
var seasoning = "";
var mixin = "";
var condiment = "";
tacoDisplay();
$("#tacoHeader").on("click", function(){
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
    console.log("hello");
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
function tacoDisplay(){
    $("#tacoBox").append($("<div id='shellDiv'>"));
    $("#shellDiv").append($("<div id='shellName'>"));
    $("#shellDiv").append($("<div id='shellRecipe'>"));
    $("#shellDiv").append($("<button class='btn' id='newShell'>"));
    $("#newShell").text("New Shell");
    $("#tacoBox").append($("<div id='baseDiv'>"));
    $("#baseDiv").append($("<div id='baseName'>"));
    $("#baseDiv").append($("<div id='baseRecipe'>"));
    $("#baseDiv").append($("<button class='btn' id='newBase'>"));
    $("#newBase").text("New Base");
    $("#tacoBox").append($("<div id='seasoningDiv'>"));
    $("#seasoningDiv").append($("<div id='seasoningName'>"));
    $("#seasoningDiv").append($("<div id='seasoningRecipe'>"));
    $("#seasoningDiv").append($("<button class='btn' id='newSeasoning'>"));
    $("#newSeasoning").text("New Seasoning");
    $("#tacoBox").append($("<div id='mixinDiv'>"));
    $("#mixinDiv").append($("<div id='mixinName'>"));
    $("#mixinDiv").append($("<div id='mixinRecipe'>"));
    $("#mixinDiv").append($("<button class='btn' id='newMixin'>"));
    $("#newMixin").text("New Mixin");
    $("#tacoBox").append($("<div id='condimentDiv'>"));
    $("#condimentDiv").append($("<div id='condimentName'>"));
    $("#condimentDiv").append($("<div id='condimentRecipe'>"));
    $("#condimentDiv").append($("<button class='btn' id='newCondiment'>"));
    $("#newCondiment").text("New Condiment");
}