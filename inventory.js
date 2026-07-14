const backpack = document.getElementById("backpack");
const inventory = document.getElementById("inventory");
const printerCount = document.getElementById("printerCount");


backpack.onclick = function(){

    if(inventory.style.display === "block"){

        inventory.style.display = "none";

    } else {

        inventory.style.display = "block";

    }

};



function updateInventory(){

    printerCount.textContent = printers;

}
