// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    "use strict";
    //global variables
    var screenWidth = 300;
    var screenHeight = 250;

    // reference to canvas element
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth.toString());
    canvas.setAttribute("height", screenHeight.toString());

    // create a stage container object
    var stage = new createjs.Stage(canvas);

    var nameLabel = null;
    var nameLabelMove = 1;

    var button = null;
    var buttonIsGrowing = true;

})();

