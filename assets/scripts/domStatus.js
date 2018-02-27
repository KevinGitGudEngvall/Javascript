

function Table() {
    var des = document.getElementById("des").value;
    document.getElementById("skoj").innerHTML = "Problem i trafiken vid " + des + " [Orsaken är tabellfel]";
    document.getElementById("output").innerHTML = "Åker från: " + des;
}

function Gone(){
    document.getElementById("ab").style.display = "none";

}

/*
function TrainTable(TrainTable) {
    Table.call(this);
}
TrainTable.prototype = 
    Object.create(Table.prototype); 

    
function WeatherTable(WeatherTable) {
        Table.call(this);        
}
WeatherTable.prototype = 
    Object.create(Table.prototype);    
*/ 