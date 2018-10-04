


function changeBackgroundColorRed() {
    
    
    if (document.body.style.background == "white") {
        document.body.style.background = "red";   
    } else {
        document.body.style.background = "white";
    }



}

function changeBackgroundColorBlack() {
    
    document.body.style.background = "black";
}

function randomBackgroundColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"; 

    document.body.style.background = backgroundColor;
    
}

function hexColor() {
    var red1 = Math.round(Math.random() * 9);
    var red2 = Math.round(Math.random() * 9);
    var green1 = Math.round(Math.random() * 9);
    var green2 = Math.round(Math.random() * 9);
    var blue1 = Math.round(Math.random() * 9);
    var blue2 = Math.round(Math.random() * 9);
    var bghexColor = "#"+ red1 + "" + red2 + "" + green1 + "" + green2 + "" + blue1 + "" + blue2 +"";

    document.body.style.background = bghexColor;
}