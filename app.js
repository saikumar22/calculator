function insertnumber(p1){
    document.getElementById("result").value += p1;
}

function cleared(){
    document.getElementById("result").value = "";
}

function operate(){
    var operation = document.getElementById("result").value;
    document.getElementById("result").value = eval(operation);
}