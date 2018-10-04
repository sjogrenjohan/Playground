


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
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var backgroundColor = "rgb(" + x + "," + y + "," + z + ")"; 

    document.body.style.background = backgroundColor;
    
}