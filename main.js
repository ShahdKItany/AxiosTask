/*
// main.js
async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
 
    const result = data.products.map(function(product) {
        return `
            <div class="product">
                <h2 class="title">${product.title}</h2>
                <img src="${product.thumbnail}"/>
                <h3 class="price">${product.price}$</h3>
                <a href="details.html?id=${product.id}" class="detailsButton">Details</a>
            </div>
        `;
    }).join(""); 
    document.querySelector(".products").innerHTML = result;
}
getProducts();
*/
/*

async function getProducts() {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        const data = response.data;
     
        const result = data.products.map(function(product) {
            return `
                <div class="product">
                    <h2 class="title">${product.title}</h2>
                    <img src="${product.thumbnail}"/>
                    <h3 class="price">${product.price}$</h3>
                    <a href="details.html?id=${product.id}" class="detailsButton">Details</a>
                </div>
            `;
        }).join(""); 
        document.querySelector(".products").innerHTML = result;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}
getProducts();
*/


async function getProducts() {
    try {
        const { data } = await axios.get("https://dummyjson.com/products");
        const result = data.products.map(function(product) {
            return `
                <div class="product">
                    <h2 class="title">${product.title}</h2>
                    <img src="${product.thumbnail}"/>
                    <h3 class="price">${product.price}$</h3>
                    <a href="details.html?id=${product.id}" class="detailsButton">Details</a>
                </div>
            `;
        }).join(""); 
        document.querySelector(".products").innerHTML = result;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}
getProducts();
