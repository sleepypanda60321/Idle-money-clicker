const printer = document.getElementById("printer");


printer.onclick = function(){

    if(money >= 50){

        money -= 50;

        income += 1;

        printers++;

        updateDisplay();

        saveGame();

    }

};
