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

    function main() {
        button = new createjs.Bitmap('../Assets/images/button.png');
        
        button.regX = button.getBounds().width * 0.5;
        button.regY = button.getBounds().height * 0.5;
        button.scaleX = 0.5;
        button.scaleY = 0.5;
        button.x = screenWidth * 0.5;
        button.y = screenHeight * 0.8;
        stage.addChild(button);

        nameLabel = new createjs.Text("Web Portfolio", "30px Consolas", "#fff");

        nameLabel.regX = nameLabel.getMeasuredWidth() * 0.5;
        nameLabel.regY = nameLabel.getMeasuredWidth() * 0.5;
        nameLabel.x = screenWidth * 0.5;
        nameLabel.y = screenHeight * 0.7;
        stage.addChild(nameLabel);
    }
    
    window.onload = init;


})();

