const printer = document.getElementById("printer");


function getPrinterCost() {

    return items.printer.price +
           (items.printer.owned * 5);

}


function updateShop() {

    let cost = getPrinterCost();

    printer.textContent =
        "Printer - $" + formatMoney(cost) + " (+$1/sec)";

}


printer.onclick = function() {

    let cost = getPrinterCost();


    if (money >= cost) {

        money -= cost;

        items.printer.owned++;

        income += items.printer.income;


        updateDisplay();

        updateShop();

        saveGame();

    }

};


updateShop();
