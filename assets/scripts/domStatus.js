

function Table() {
    var des = document.getElementById("des").value;
    if(des.replace(/\s/g, "").length > 0){
        document.getElementById("skoj").innerHTML = "Problem i trafiken vid " + des + " [Orsaken är tabellfel]";
        document.getElementById("output").innerHTML = "Åker från: " + des;
    } else {
        document.getElementById("skoj").innerHTML = "Inga problem i trafiken";
        document.getElementById("output").innerHTML = "Åker från:";
    }
}

function Gone(){
    document.getElementById("ab").style.display = "none";

}

function Show(){
    
    table = document.getElementById("fillInfo");

    for(var i = 1; i < table.rows.length; i++){

        for(var j = 0; j < table.rows[i].cells.length; j++){

            table.rows[i].cells[j].innerHTML = "";

        }
    } 

    var des = document.getElementById("des").value;

    if(des.replace(/\s/g, "").length > 0){
    var travelInfo = [["53","16:10","16:22"],
                     ["69", "16:30", "16:50"],
                     ["526","16:44","17:50"]],
                     table = document.getElementById("fillInfo");

    for(var i = 1; i < table.rows.length; i++){

        for(var j = 0; j < table.rows[i].cells.length; j++){

            table.rows[i].cells[j].innerHTML = travelInfo[i - 1][j];

        }
    }        
    
    }
    

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