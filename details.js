/*
async function getDetails() {
     const urlParams = new URLSearchParams(window.location.search);
    const ID = urlParams.get('id'); // قم بتغيير القيمة حسب المنتج الذي تريد عرض تفاصيله
    const response = await fetch(`https://dummyjson.com/products?id=${ID}`);
    const data = await response.json();
    const product = data.products[ID-1]; // افترض أنه هناك منتج واحد يتم استرجاع تفاصيله

    const { title, thumbnail, price, description } = product;

    document.querySelector(".title").textContent = title;
    document.querySelector("img").src = thumbnail;
    document.querySelector("h3").textContent = `${price}$`;
    document.querySelector(".description").textContent = description;
}

getDetails();

*/

/*
async function getDetails() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const ID = urlParams.get('id');
        const response = await axios.get(`https://dummyjson.com/products?id=${ID}`);
        const product = response.data.products[0]; // Assuming there's only one product
        
        const { title, thumbnail, price, description } = product;

        document.querySelector(".title").textContent = title;
        document.querySelector("img").src = thumbnail;
        document.querySelector("h3").textContent = `${price}$`;
        document.querySelector(".description").textContent = description;
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}
getDetails();
*/
async function getDetails() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const ID = urlParams.get('id');
        const { data } = await axios.get("https://dummyjson.com/products?id=" + ID);
        const product = data.products[ID-1]; // Assuming there's only one product
        
        const { title, thumbnail, price, description } = product;

        document.querySelector(".title").textContent = title;
        document.querySelector("img").src = thumbnail;
        document.querySelector("h3").textContent = `${price}$`;
        document.querySelector(".description").textContent = description;
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}
getDetails();
