const printer =
    document.getElementById("printer");

function getPrinterCost() {

    return items.printer.price +
        (items.printer.owned * 5);

}

function updateShop() {

    let cost = getPrinterCost();

    printer.textContent =
        "Printer - $" +
        formatMoney(cost) +
        " (+$1/sec)";

}

printer.onclick = function() {

    alert("PRINTER CLICK DETECTED");

};

updateShop();

loadGame();
