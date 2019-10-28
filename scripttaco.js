var queryURL = "http://taco-randomizer.herokuapp.com/random/";
var shell = "";
var baseLayer = "";
var seasoning = "";
var mixin = "";
var condiment = "";
var favShells = JSON.parse(localStorage.getItem("favShells"));
if(favShells == null){
    favShells = []
}
var favBases = JSON.parse(localStorage.getItem("favBases"));
if(favBases == null){
    favBases = []
}
var favSeasonings = JSON.parse(localStorage.getItem("favSeasonings"));
if(favSeasonings == null){
    favSeasonings = []
}
var favMixins = JSON.parse(localStorage.getItem("favMixins"));
if(favMixins == null){
    favMixins = []
}
var favCondiments = JSON.parse(localStorage.getItem("favCondiments"));
if(favCondiments == null){
    favCondiments = []
}
var favTacos = JSON.parse(localStorage.getItem("favTacos"));
if(favTacos == null){
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
    if(favShells.includes($("#shellName").text()) == false){
        favShells.push($("#shellName").text());
        localStorage.setItem("favShells", JSON.stringify(favShells));
    }
})
$("#favBase").on("click", function(){
    if(favBases.includes($("#baseName").text()) == false){
        favBases.push($("#baseName").text());
        localStorage.setItem("favBases", JSON.stringify(favBases));
    }
})
$("#favSeasoning").on("click", function(){
    if(favSeasonings.includes($("#seasoningName").text()) == false){
        favSeasonings.push($("#seasoningName").text());
        localStorage.setItem("favSeasonings", JSON.stringify(favSeasonings));
    }
})
$("#favMixin").on("click", function(){
    if(favMixins.includes($("#mixinName").text()) == false){
        favMixins.push($("#mixinName").text());
        localStorage.setItem("favMixins", JSON.stringify(favMixins));
    }
})
$("#favCondiment").on("click", function(){
    if(favCondiments.includes($("#condimentName").text()) == false){
        favCondiments.push($("#condimentName").text());
        localStorage.setItem("favCondiments", JSON.stringify(favCondiments));
    }
})
function tacoDisplay(){
    $("#tacoBox").append($("<div class='box' id='shellDiv'>"));
    $("#shellDiv").append($("<div class='name' id='shellName'>"));
    $("#shellDiv").append($("<div class='recipe' id='shellRecipe'>"));
    $("#shellDiv").append($("<button class='tacoBtn' id='newShell'>"));
    $("#newShell").text("New Shell");
    $("#shellDiv").append($("<button class='tacoBtn favorites' id='favShell'>"));
    $("#favShell").text("Add to Favorites");
    $("#tacoBox").append($("<div class='box' id='baseDiv'>"));
    $("#baseDiv").append($("<div class='name' id='baseName'>"));
    $("#baseDiv").append($("<div class='recipe' id='baseRecipe'>"));
    $("#baseDiv").append($("<button class='tacoBtn' id='newBase'>"));
    $("#newBase").text("New Base");
    $("#baseDiv").append($("<button class='tacoBtn' id='favBase'>"));
    $("#favBase").text("Add to Favorites");
    $("#tacoBox").append($("<div class='box' id='seasoningDiv'>"));
    $("#seasoningDiv").append($("<div class='name' id='seasoningName'>"));
    $("#seasoningDiv").append($("<div class='recipe' id='seasoningRecipe'>"));
    $("#seasoningDiv").append($("<button class='tacoBtn' id='newSeasoning'>"));
    $("#newSeasoning").text("New Seasoning");
    $("#seasoningDiv").append($("<button class='tacoBtn' id='favSeasoning'>"));
    $("#favSeasoning").text("Add to Favorites");
    $("#tacoBox").append($("<div class='box' id='mixinDiv'>"));
    $("#mixinDiv").append($("<div class='name' id='mixinName'>"));
    $("#mixinDiv").append($("<div class='recipe' id='mixinRecipe'>"));
    $("#mixinDiv").append($("<button class='tacoBtn' id='newMixin'>"));
    $("#newMixin").text("New Mixin'");
    $("#mixinDiv").append($("<button class='tacoBtn' id='favMixin'>"));
    $("#favMixin").text("Add to Favorites");
    $("#tacoBox").append($("<div class='box' id='condimentDiv'>"));
    $("#condimentDiv").append($("<div class='name' id='condimentName'>"));
    $("#condimentDiv").append($("<div class='recipe' id='condimentRecipe'>"));
    $("#condimentDiv").append($("<button class='tacoBtn' id='newCondiment'>"));
    $("#newCondiment").text("New Condiment");
    $("#condimentDiv").append($("<button class='tacoBtn' id='favCondiment'>"));
    $("#favCondiment").text("Add to Favorites");
}
// To do:  Combine tacoHeader on click with all the new on clicks and make them a single dry function with a for loop that checks id and val and pulls from an array
// To do:  Make tacoDisplay() a dry function with a for loop going through an array (or two?)
// To do:  Make the favorite buttons into a single dry function
// To do:  Discuss the favorites tab and make it work