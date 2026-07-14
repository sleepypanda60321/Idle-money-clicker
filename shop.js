const printer = document.getElementById("printer");


function getPrinterCost() {
    return 50 + (printers * 5);
}


function updateShop() {

    let cost = getPrinterCost();

    printer.textContent =
        "🖨️ Printer - $" + cost + " (+$1/sec)";
}



printer.onclick = function() {

    let cost = getPrinterCost();


    if (money >= cost) {

        money -= cost;

        income += 1;

        printers++;


        updateDisplay();

        updateShop();

        saveGame();

    }

};



updateShop();
