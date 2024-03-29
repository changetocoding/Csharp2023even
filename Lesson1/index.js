var calcButton = document.getElementById("btnCalc");
calcButton.addEventListener("click", calculateTotal)

function calculateTotal() {
    var from = document.getElementById("firstComboBox").value;
    var to = document.getElementById("SecondComboBox").value;
    var numPeople = parseInt(document.getElementById("Numberofpeople").value);

    // Prices based on the selected cities
    // An object
    var prices = {
        "New York-New York": 0,
        "New York-London": 600,
        "New York-Beijing": 800,
        "New York-North Korea": 1000,
        "London-London": 0,
        "London-New York": 600,
        "London-Beijing": 1000,
        "London-North Korea": 1200,
        "Beijing-Beijing": 0,
        "Beijing-New York": 800,
        "Beijing-London": 1000,
        "Beijing-North Korea": 1400,
        "North Korea-North Korea": 0,
        "North Korea-New York": 1000,
        "North Korea-London": 1200,
        "North Korea-Beijing": 1400
    };

    debugger;
    var key = from + "-" + to;
    if (prices.hasOwnProperty(key)) {
        var totalPrice = prices[key] * numPeople;
        document.getElementById("totalprice").innerText = "Total Price for " + numPeople + " people: $" + totalPrice;
    } else {
        document.getElementById("totalprice").innerText = "Price information not available for the selected route.";
    }
}


function calcDavidsWay(){
    var from = document.getElementById("firstComboBox").value;
    var to = document.getElementById("SecondComboBox").value;
    var numPeople = parseInt(document.getElementById("Numberofpeople").value);

    var prices = {
        "New York": {
            "London":600,
            "Beijing": 800,
            "North Korea": 1000
        },
        "London": {
            "New York":600,
            "Beijing": 1000,
            "North Korea": 1200
        }
    }
    if (prices.hasOwnProperty(from)) {
        var totalPrice = prices[from][to] * numPeople;
        document.getElementById("totalprice").innerText = "Total Price for " + numPeople + " people: $" + totalPrice;
    }else{
        
        document.getElementById("totalprice").innerText = "Price information not available for the selected route.";
    }
}