const printer =
    document.getElementById("printer");

function getPrinterCost() {

    return items.printer.price +
        (items.printer.owned * 5);

}

function updateShop() {

    let cost = getPrinterCost();

    alert("Updated printer cost: $" + cost);

    printer.textContent =
        "Printer - $" + formatMoney(cost) + " (+$1/sec)";

    alert("Printer button value: " + printer.textContent);

}
}

printer.onclick = function () {

    let cost = getPrinterCost();

    if (money >= cost) {

        money -= cost;

        items.printer.owned++;

        updateInventory();
        updateDisplay();
        updateShop();

        saveGame();

    }

};

updateShop();

loadGame();
