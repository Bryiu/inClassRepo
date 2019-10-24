var queryURL = "http://taco-randomizer.herokuapp.com/random/";
var shell = "";
var baseLayer = "";
var seasoning = "";
var mixin = "";
var condiment = "";

//add on click effect for whole taco button and each layer
$("#tacoBout").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                shell = response.shell;
                baseLayer = response.base_layer;
                seasoning = response.seasoning;
                mixin = response.mixin;
                condiment = response.condiment;
            }
      })
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
})
$("#newShell").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                shell = response.shell;
            }
      })
    $("#shellName").text(shell.name);
    $("#shellRecipe").text(shell.recipe);
})
$("#newBase").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                baseLayer = response.base_layer;
            }
      })
    $("#baseName").text(baseLayer.name);
    $("#baseRecipe").text(baseLayer.recipe);
})
$("#newSeasoning").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                seasoning = response.seasoning;
            }
      })
    $("#seasoningName").text(seasoning.name);
    $("#seasoningRecipe").text(seasoning.recipe);
})
$("#newMixin").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                mixin = response.mixin;
            }
      })
    $("#mixinName").text(mixin.name);
    $("#mixinRecipe").text(mixin.recipe);
})
$("#newCondiment").on("click", function(){
    $.ajax({
        url: queryURL,
        type: "GET",
            success: function(response){
                condiment = response.condiment;
            }
      })
    $("#condimentName").text(condiment.name);
    $("#condimentRecipe").text(condiment.recipe);
})