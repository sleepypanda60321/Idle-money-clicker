const backpack = document.getElementById("backpack");
const inventory = document.getElementById("inventory");


backpack.onclick = function(){

    if(inventory.style.display === "block"){

        inventory.style.display = "none";

    } else {

        inventory.style.display = "block";

    }

};


function updateInventory() {

    inventory.innerHTML = "";

    let hasItems = false;


    for (const itemName in items) {

        const item = items[itemName];


        if (item.owned > 0) {

            hasItems = true;


            const itemDisplay =
                document.createElement("div");


            let displayName = itemName;

            // Add spaces to multi-word item names
            displayName =
                displayName.replace(
                    /([a-z])([A-Z])/g,
                    "$1 $2"
                );


            displayName =
                displayName.charAt(0).toUpperCase() +
                displayName.slice(1);


            itemDisplay.textContent =
                displayName +
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
