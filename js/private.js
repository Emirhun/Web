const privateTeaProducts = [
    { name: "DOĞUŞ KARADENİZ EXPORT KUTU", image: "img/51.jpg", description: "500 GR" },
    { name: "GÜRÇAY İNCEBEL KUTU", image: "img/52.jpg", description: "500 GR" },
    { name: "BEYÇAY WALANDA KUTU", image: "img/53.jpg", description: "500 GR" },
    { name: "BEYÇAY AYDER ÇAMLIHEMŞİN HEDİYELİK KUTU", image: "img/54.jpg", description: "500 GR" },
    { name: "ÖZGÜR ÇAY KUŞLU KUTU", image: "img/55.jpg", description: "500 GR" },
    { name: "VEGAÇAY ALTINDEM PREMİUM KUTU", image: "img/56.jpg", description: "500 GR" },
    { name: "NURÇAY GOLD KUTU", image: "img/57.jpg", description: "500 GR" },
    { name: "ÖZÇAY ALTIN SEÇİM ELEKALTI KUTU", image: "img/58.jpg", description: "500 GR" },
    { name: "ÖZÇAY HEDİYE KUTU", image: "img/59.jpg", description: "500 GR" },
    { name: "ÖZÇAY ÇAY FİLİZİ KUTU", image: "img/60.jpg", description: "500 GR" },
    { name: "ÖZÇAY HEDİYELİK", image: "img/61.jpg", description: "500 GR" },
    { name: "ŞÖLEN MAYIS SERİSİ HEDİYELİK", image: "img/62.jpg", description: "500 GR" },
    { name: "OFÇAY HAZİNE", image: "img/63.jpg", description: "500 GR" },
    { name: "GÜRÇAY İNCEBEL", image: "img/64.jpg", description: "500 GR" },
    { name: "GÜRÇAY FİLİZ", image: "img/65.jpg", description: "500 GR" },
    { name: "EFOR FİLİZ", image: "img/66.jpg", description: "500 GR" },
    { name: "ŞÖLEN FİLİZ", image: "img/67.jpg", description: "500 GR" },
    { name: "DOĞUŞ KARADENİZ EXPORT", image: "img/68.jpg", description: "500 GR" },
    { name: "EFOR HARMAN", image: "img/69.jpg", description: "500 GR" },
    { name: "DOĞUŞ GURME", image: "img/70.jpg", description: "500 GR" },
    { name: "OFÇAY EFSANE", image: "img/71.jpg", description: "500 GR" },
    { name: "AKFA FİLİZ", image: "img/72.jpg", description: "500 GR" },
    { name: "NURÇAY ALTIN BAŞAK", image: "img/73.jpg", description: "500 GR" },
    { name: "SÜRÇAYSAN ÖZEL HEDİYELİK", image: "img/74.jpg", description: "500 GR" },
    { name: "NURÇAY FİLİZ", image: "img/75.jpg", description: "500 GR" },
    { name: "NURÇAY RİZE EXPORT", image: "img/76.jpg", description: "500 GR" },
    { name: "ÖZÇAY YENİ HARMAN", image: "img/77.jpg", description: "500 GR" },
    { name: "KARALİ ALTENRATİF", image: "img/78.jpg", description: "500 GR" },
    { name: "KARALİ FİLİZ", image: "img/79.jpg", description: "500 GR" },
    { name: "TR28 TİREBOLU", image: "img/80.jpg", description: "500 GR" },
    { name: "ÖZÇAY koop. ÇAY FİLİZİ", image: "img/81.jpg", description: "500 GR" },
    { name: "GÜRÇAY İNCEBEL", image: "img/82.jpg", description: "1 KG" },
    { name: "TR28 TİREBOLU", image: "img/83.jpg", description: "1 KG" },
    { name: "DOĞUŞ GELENKSEL RİZE", image: "img/84.jpg", description: "1 KG" },
    { name: "BETA TEA KIZIL DEM", image: "img/85.jpg", description: "1 KG" },
    { name: "OFÇAYSAN ÇAMLICA FİLİZİ", image: "img/86.jpg", description: "1 KG" },
    { name: "OFÇAY HAZİNE", image: "img/87.jpg", description: "1 KG" },
    { name: "OFÇAY EFSANE", image: "img/88.jpg", description: "1 KG" },
    { name: "OFÇAY TİRYAKİSİNE ", image: "img/89.jpg", description: "1 KG" },
    { name: "EFOR PLATİUM", image: "img/90.jpg", description: "1 KG" },
    { name: "GÜRÇAY DEMLİK SÜZEN POŞET", image: "img/91.jpg", description: "50 ADET 20 GR" },
    { name: "GÜRÇAY DEMLİK SÜZEN POŞET BERGAMOTLU", image: "img/92.jpg", description: "50 ADET 20 GR" },
    { name: "DOĞUŞ KARADENİZ EXPORT KUTU", image: "img/93.jpg", description: "3 KG" },
    { name: "GÜRÇAY İNCEBEL KUTU", image: "img/94.jpg", description: "2 KG" },
    // Özel çay ürünleri dizisi burada
];

const privateTeaProductsContainer = document.getElementById("private-tea-products");

for (let product of privateTeaProducts) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productDescription);

    privateTeaProductsContainer.appendChild(productDiv);
}