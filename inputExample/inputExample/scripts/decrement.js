

var oranges = 12;
var pears = 7;
var apples = 3;

var oranges2 = 0;
var pears2 = 0;
var apples2 = 0;


function decrementOrangeF() {   
    if (oranges == 0) {
        alert("No hay naranjas"); }
    else {
        oranges = oranges - 1;
        oranges2 = oranges2 + 1;
        document.getElementById("orangesO").value = oranges2;
        document.getElementById("txOrangesId").value = oranges;
    }
  //  document.getElementById('myField').value = product(2, 3);
}


function decrementPearF() {    
    if (pears == 0) {
        alert("No hay peras");
    }
    else {
        pears = pears - 1;
        pears2++;
        document.getElementById("pearsO").value = pears2;
        document.getElementById("txPearsId").value = pears;
    }
}

function decrementAppleF() {    
    if (apples == 0) {
        alert("No hay manzanas");
    }
    else {
        apples = apples - 1;
        apples2++;
        document.getElementById("applesO").value = apples2;
        document.getElementById("txApplesId").value = apples;
    }
}