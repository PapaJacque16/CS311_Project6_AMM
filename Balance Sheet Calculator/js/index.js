//I deleted and redid this several times, I will get it soon i really need to see how this is put together though
//using an example.  I wasn't able to build this out and get it work fully. I stopped at this point as I have 
//tried some different methods, but unable ot get the button to click and trnasition to calculating the outputs

// attaching events to buttons
addShowAssFieldsEvent();
addShowCurFieldsEvent();
addShowIntFieldsEvent();
addShowInvFieldsEvent();
addShowLonFieldsEvent();

//current asset label
function addShowAssFieldsEvent() {
    currentAssetsButton.addEventListener("click", ShowAssFields);
}

// function to show current asset fields
function showAssFields() {
    const lineBreak = document.createElement("br");
    let node = document.createElement("P");

    let textCash = document.createTextNode("Cash: $");
    var inputCash = document.createElement("input");
    inputCash.setAttribute("type", "number");
    inputCash.setAttribute("id", "cash");

    let textInventory = document.createTextNode("Inventory: $");
    var inputInventory = document.createElement("input");
    inputInventory.setAttribute("type", "number");
    inputInventory.setAttribute("id", "inventory");

    let textSupplies = document.createTextNode("Supplies: $");
    var inputSupplies = document.createElement("input");
    inputSupplies.setAttribute("type", "number");
    inputSupplies.setAttribute("id", "supplies");

    let textTempInv = document.createTextNode("Temporary Investments: $");
    var inputTempInv = document.createElement("input");
    inputTempInv.setAttribute("type", "number");
    inputTempInv.setAttribute("id", "tempinv");

    let totCurrentAssets = document.createElement("span");
    totCurrentAssets.setAttribute("id", "total-current-assets");
    totCurrentAssets.innerHTML = "Total Current Assets: $";

    // append
    node.appendChild(textCash);
    node.appendChild(inputCash);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(textInventory);
    node.appendChild(inputInventory);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(textSupplies);
    node.appendChild(inputSupplies);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(textTempInv);
    node.appendChild(inputTempInv);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totCurrentAssets);
    document.getElementById("assetsCurrent").appendChild(node).style.textAlign = "right";

  
    document.getElementById("currentAssetsButton").style.display = "none";
}

