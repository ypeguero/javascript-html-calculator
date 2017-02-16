function clearDisplay(){
    document.getElementById("display-bar").innerHTML = "";
}

function display(UserInput){
    document.getElementById("display-bar").innerHTML +=  UserInput;
}

function calculate(){
    var answer = eval(document.getElementById("display-bar").innerHTML);
    document.getElementById("display-bar").innerHTML = answer;
}