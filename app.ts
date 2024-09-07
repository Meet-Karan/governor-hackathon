// Interface for Product
interface Product {
    name: string;
    quantity: number;
    price: number;
}

// Function to add a product to the inventory
function addProduct(): void {
    const productNameInput = document.getElementById('productName') as HTMLInputElement;
    const productQuantityInput = document.getElementById('productQuantity') as HTMLInputElement;
    const productPriceInput = document.getElementById('productPrice') as HTMLInputElement;

    const productName = productNameInput.value.trim();
    const productQuantity = parseInt(productQuantityInput.value);
    const productPrice = parseFloat(productPriceInput.value);

    if (productName && !isNaN(productQuantity) && !isNaN(productPrice)) {
        const newProduct: Product = {
            name: productName,
            quantity: productQuantity,
            price: productPrice,
        };

        addProductToTable(newProduct);

        // Clear input fields
        productNameInput.value = '';
        productQuantityInput.value = '';
        productPriceInput.value = '';
    } else {
        alert("Please enter valid product details.");
    }
}

// Function to add product to the HTML table
function addProductToTable(product: Product): void {
    const tableBody = document.getElementById('productTableBody') as HTMLTableSectionElement;
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = product.name;
    cell2.textContent = product.quantity.toString();
    cell3.textContent = product.price.toFixed(2);
}
