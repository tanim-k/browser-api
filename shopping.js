const addItem = () => {
    const nameField = document.getElementById('product-name');
    // display in the ui
    // add to local storage
    // 
    nameField.value = ''; 
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}