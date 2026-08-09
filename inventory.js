const backpack = document.getElementById("backpack");
const inventory = document.getElementById("inventory");


backpack.onclick = function(){

    if(inventory.style.display === "block"){

        inventory.style.display = "none";

    } else {

        inventory.style.display = "block";

    }

};


function updateInventory(){

    inventory.innerHTML = "";

    let hasItems = false;


    for (const itemName in items) {

        const item = items[itemName];


        if (item.owned > 0) {

            hasItems = true;


            const itemDisplay =
                document.createElement("div");

            itemDisplay.textContent =
                itemName.charAt(0).toUpperCase() +
                itemName.slice(1) +
                " × " +
                item.owned;


            inventory.appendChild(itemDisplay);

        }

    }


    if (!hasItems) {

        inventory.textContent =
            "📦 INVENTORY EMPTY";

    }

}
