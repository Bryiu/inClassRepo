var queryURL = "http://taco-randomizer.herokuapp.com/random/";
var shell = "";
var baseLayer = "";
var seasoning = "";
var mixin = "";
var condiment = "";
var favShells = localStorage.getItem("favShells");
if(favShells = null){
    favShells = []
}
var favBases = localStorage.getItem("favBases");
if(favBases = null){
    favBases = []
}
var favSeasonings = localStorage.getItem("favSeasonings");
if(favSeasonings = null){
    favSeasonings = []
}
var favMixins = localStorage.getItem("favMixins");
if(favMixins = null){
    favMixins = []
}
var favCondiments = localStorage.getItem("favCondiments");
if(favCondiments = null){
    favCondiments = []
}
var favTacos = localStorage.getItem("favTacos");
if(favTacos = null){
    favTacos = []
}

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
$("#favShell").on("click", function(){
    localStorage.setItem("favShells", favShells)
})
$("#favBase").on("click", function(){
    localStorage.setItem("favBases", favBases)
})
$("#favSeasoning").on("click", function(){
    localStorage.setItem("favSeasonings", favSeasonings)
})
$("#favMixin").on("click", function(){
    localStorage.setItem("favMixin", favMixin)
})
$("#favCondiment").on("click", function(){
    localStorage.setItem("favCondiments", favCondiment)
})
function tacoDisplay(){
    $("#tacoBox").append($("<div class='box' id='shellDiv'>"));
    $("#shellDiv").append($("<div class='name' id='shellName'>"));
    $("#shellDiv").append($("<div class='recipe' id='shellRecipe'>"));
    $("#shellDiv").append($("<button class='btn' id='newShell'>"));
    $("#newShell").text("New Shell");
    $("#shellDiv").append($("<button class='btn favorites' id='favShell'>"));
    $("#favShell").text("Favorite This Shell");
    $("#tacoBox").append($("<div class='box' id='baseDiv'>"));
    $("#baseDiv").append($("<div class='name' id='baseName'>"));
    $("#baseDiv").append($("<div class='recipe' id='baseRecipe'>"));
    $("#baseDiv").append($("<button class='btn' id='newBase'>"));
    $("#newBase").text("New Base");
    $("#baseDiv").append($("<button class='btn' id='favBase'>"));
    $("#favBase").text("Favorite This Base");
    $("#tacoBox").append($("<div class='box' id='seasoningDiv'>"));
    $("#seasoningDiv").append($("<div class='name' id='seasoningName'>"));
    $("#seasoningDiv").append($("<div class='recipe' id='seasoningRecipe'>"));
    $("#seasoningDiv").append($("<button class='btn' id='newSeasoning'>"));
    $("#newSeasoning").text("New Seasoning");
    $("#seasoningDiv").append($("<button class='btn' id='favSeasoning'>"));
    $("#favSeasoning").text("Favorite This Seasoning");
    $("#tacoBox").append($("<div class='box' id='mixinDiv'>"));
    $("#mixinDiv").append($("<div class='name' id='mixinName'>"));
    $("#mixinDiv").append($("<div class='recipe' id='mixinRecipe'>"));
    $("#mixinDiv").append($("<button class='btn' id='newMixin'>"));
    $("#newMixin").text("New Mixin");
    $("#mixinDiv").append($("<button class='btn' id='favMixin'>"));
    $("#favMixin").text("Favorite This Mixin");
    $("#tacoBox").append($("<div class='box' id='condimentDiv'>"));
    $("#condimentDiv").append($("<div class='name' id='condimentName'>"));
    $("#condimentDiv").append($("<div class='recipe' id='condimentRecipe'>"));
    $("#condimentDiv").append($("<button class='btn' id='newCondiment'>"));
    $("#newCondiment").text("New Condiment");
    $("#condimentDiv").append($("<button class='btn' id='favCondiment'>"));
    $("#favCondiment").text("Favorite This Condiment");
}