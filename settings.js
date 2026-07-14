const settingsTab = document.getElementById("settingsTab");
const settings = document.getElementById("settings");
const shop = document.getElementById("shop");

const saveButton = document.getElementById("saveButton");

const deleteButton = document.getElementById("deleteButton");

const deletePopup = document.getElementById("deletePopup");

const closeDelete = document.getElementById("closeDelete");

const cancelDelete = document.getElementById("cancelDelete");

const confirmDelete = document.getElementById("confirmDelete");



settingsTab.onclick = function(){

    shop.style.display = "none";

    settings.style.display = "block";

};



saveButton.onclick = function(){

    saveGame();

};



deleteButton.onclick = function(){

    deletePopup.style.display = "flex";

};



closeDelete.onclick = function(){

    deletePopup.style.display = "none";

};



cancelDelete.onclick = function(){

    deletePopup.style.display = "none";

};



confirmDelete.onclick = function(){

    localStorage.clear();

    location.reload();

};
