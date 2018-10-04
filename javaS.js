


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
    var red1 = convertToHex(Math.round(Math.random() * 15));
    var red2 = convertToHex(Math.round(Math.random() * 15));
    var green1 = convertToHex(Math.round(Math.random() * 15));
    var green2 = convertToHex(Math.round(Math.random() * 15));
    var blue1 = convertToHex(Math.round(Math.random() * 15));
    var blue2 = convertToHex(Math.round(Math.random() * 15));



    var bghexColor = "#"+ red1 + "" + red2 + "" + green1 + "" + green2 + "" + blue1 + "" + blue2 +"";
    console.log(bghexColor);

    document.body.style.background = bghexColor;
}

function convertToHex(value) {
    if (value == 10) {
        return "A";
    } else if (value == 11) {
        return "B";
    } else if (value == 12) {
        return "C";
    } else if (value == 13) {
        return "D";
    } else if (value == 14) {
        return "E";
    } else if (value == 15) {
        return "F";
    } else {
        return value;
    }
}