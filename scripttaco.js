var queryURL = "http://taco-randomizer.herokuapp.com/random/";
var layers = ["shell", "base_layer", "seasoning", "mixin", "condiment"];
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
var firstTaco = true;
$("#newTaco").val(6);
$("#newTaco").addClass("new");
onClickEvents();
function tacoDisplay(){
    for(var i = 0; i < layers.length; i++){
        $("#tacoBox").append($("<div class='box' id='" + layers[i] + "Div'>"));
        $("#" + layers[i] + "Div").append($("<div class='name' id='" + layers[i] + "Name'>"));
        $("#" + layers[i] + "Div").append($("<div class='recipe' id='" + layers[i] + "Recipe'>"));
        $("#" + layers[i] + "Div").append($("<button class='tacoBtn new' id='new" + layersUpper[i] + "' value=" + i + ">"));
        $("#new" + layersUpper[i]).text("New " + layersUpper[i]);
        $("#" + layers[i] + "Div").append($("<button class='tacoBtn favorites' id='fav" + layersUpper[i] + "' value=" + i + ">"));
        $("#fav" + layersUpper[i]).text("Add to Favorites");
    }
    onClickEvents()
}
function onClickEvents(){
    $(".favorites").on("click", function(){
        var i = $(this).val();
        if(favorites[i].includes($("#" + layers[i] + "Name").text()) == false){
            favorites[i].push($("#" + layers[i] + "Name").text());
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    })
    $(".new").on("click", function(){
        if(firstTaco==true){
            tacoDisplay();
            firstTaco=false;
            $("#newTaco").css("display", "none");
       }
        if($(this).val()<6){
            var layer = layers[$(this).val()];
            $.ajax({
                url: queryURL,
                type: "GET",
                    success: function(response){
                        $("#" + layer + "Name").text(response[layer].name);
                        $("#" + layer + "Recipe").text(response[layer].recipe);
                    }
            })
        }
        else{
            $.ajax({
                url: queryURL,
                type: "GET",
                    success: function(response){
                        for(var i = 0; i < layers.length; i++){
                            $("#" + layers[i] + "Name").text(response[layers[i]].name);
                            $("#" + layers[i] + "Recipe").text(response[layers[i]].recipe);
                        }
                    }
            })
        }
    })
}
// To do:  Discuss the favorites tab and make it work
// To do:  Weird equals signs and HTML in the recipe