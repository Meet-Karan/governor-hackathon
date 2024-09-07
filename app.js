// Function to add a product to the inventory
function addProduct() {
    var productNameInput = document.getElementById('productName');
    var productQuantityInput = document.getElementById('productQuantity');
    var productPriceInput = document.getElementById('productPrice');
    var productName = productNameInput.value.trim();
    var productQuantity = parseInt(productQuantityInput.value);
    var productPrice = parseFloat(productPriceInput.value);
    if (productName && !isNaN(productQuantity) && !isNaN(productPrice)) {
        var newProduct = {
            name: productName,
            quantity: productQuantity,
            price: productPrice,
        };
        addProductToTable(newProduct);
        // Clear input fields
        productNameInput.value = '';
        productQuantityInput.value = '';
        productPriceInput.value = '';
    }
    else {
        alert("Please enter valid product details.");
    }
}
// Function to add product to the HTML table
function addProductToTable(product) {
    var tableBody = document.getElementById('productTableBody');
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.textContent = product.name;
    cell2.textContent = product.quantity.toString();
    cell3.textContent = product.price.toFixed(2);
}
