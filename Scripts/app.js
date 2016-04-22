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

    function init() {
        console.log("Initialization");
        // enable mouseover effects for all buttons
        stage.enableMouseOver(20);

        // set frame rate to 60 fps
        createjs.Ticker.framerate = 60;
        // listen for frame changes and call the animationLoop function
        createjs.Ticker.on("tick", animationLoop);

        // call the main function
        main();
    }

    // runs every frame
    function animationLoop() {

        nameLabel.x += nameLabelMove;

        if (buttonIsGrowing) {
            if (button.scaleX < 1) {
                button.scaleX *= 1.1;
                button.scaleY *= 1.1;
            }
            else {
                buttonIsGrowing = false;
            }
        } else {
            if (button.scaleX >= 0.1) {
                button.scaleX *= 0.9;
                button.scaleY *= 0.9;
            }
            else {
                buttonIsGrowing = true;
            }
        }

        if ((nameLabel.x >= screenWidth) || (nameLabel.x <= 0)) {
            nameLabelMove *= -1;
        }

        // refresh the stage object
        stage.update();
    }


})();

