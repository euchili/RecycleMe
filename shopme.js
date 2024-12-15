const categoryImages = {
    Dairy: [
        "butter.png",
        "organic-milk.png",
        "cheese.png"
    ],
    Clothing: [
        "clothing1.png",
        "clothing2.png",
        "clothing3.png"
    ],
    Makeup: [
        "makeupbrush.png",
        "makeup2.png",
        "cream1.png",
        "lipstic.png",
        "blush.png"
    ],
    Stationery: [
        "pens.png",
        "ecostationary1.png",
        "pensils.png"

    ],
    Toothbrushes: [
        "toothbruch.png",
        "toothbrushes.png"
    ],
    Packaging: [
        "eecopack.png",
        "ecobag.png",
        "ecopackaging.png",
        "ecopacks.png"

    ]
};

if (products[category]) {
    products[category].forEach(product => {
        // Create a container div for each product
        const productDiv = document.createElement("div");
        productDiv.className = "product-card";
        productDiv.style.textAlign = "center";
        productDiv.style.marginBottom = "20px";

        // Create an image element
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.className = "category-image";
        img.style.maxWidth = "100%";
        img.style.height = "auto";

        // Create a name element
        const name = document.createElement("p");
        name.textContent = product.name;
        name.style.margin = "5px 0 0 0";
        name.style.fontSize = "14px";
        name.style.color = "#333";


        // Append image and name to the product div
        productDiv.appendChild(img);
        productDiv.appendChild(name);

        // Append product div to results
        categoryResults.appendChild(productDiv);
    });
} else {
    categoryResults.innerHTML = `<p>No products available in this category.</p>`;
}


// Function to handle category clicks
function filterProducts(category) {
    const resultsDiv = document.getElementById("category-results");

    // Clear previous results
    resultsDiv.innerHTML = "";

    if (categoryImages[category] && categoryImages[category].length > 0) {
        categoryImages[category].forEach(imageSrc => {
            const img = document.createElement("img");
            img.src = imageSrc;
            img.alt = `${category} product`;
            img.classList.add("category-image");
            resultsDiv.appendChild(img);
        });
    } else {
        resultsDiv.innerHTML = `<p>No images available for ${category}.</p>`;
    }
}
