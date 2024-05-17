const products = [
    { name: "RİZE HEDİYELİK", image: "img/5.jpg", description: "500 GR" },
    { name: "TİREBOLU 42", image: "img/6.jpg", description: "500 GR" },
    { name: "ORGANİK HEMŞİN KARTON KUTU", image: "img/7.jpg", description: "400 GR" },
    { name: "ORGANİK RİZE KARTON KUTU", image: "img/8.jpg", description: "400 GR" },
    { name: "MEZOPOTAMYA", image: "img/9.jpg", description: "400 GR" },
    { name: "ANADOLU FİLİZ", image: "img/10.jpg", description: "400 GR" },
    { name: "GAP", image: "img/11.jpg", description: "400 GR" },
    { name: "HEDİYELİK", image: "img/12.jpg", description: "400 GR" },
    { name: "ALTINBAŞ KLASİK", image: "img/13.jpg", description: "500 GR" },
    { name: "ALTINBAŞ", image: "img/14.jpg", description: "500 GR" },
    { name: "FİLİZ", image: "img/15.jpg", description: "500 GR" },
    { name: "ÇAY ÇİÇEĞİ", image: "img/16.jpg", description: "500 GR" },
    { name: "ORGANİK RİZE", image: "img/17.jpg", description: "500 GR" },
    { name: "ELEKALTI 2 NUMARA", image: "img/18.jpg", description: "500 GR" },
    { name: "TİRYAKİ", image: "img/19.jpg", description: "500 GR" },
    { name: "RİZE TURİST", image: "img/20.jpg", description: "500 GR" },
    { name: "KAMELYA", image: "img/21.jpg", description: "500 GR" },
    { name: "FİLİZ", image: "img/22.jpg", description: "1 KG" },
    { name: "TİRYAKİ", image: "img/23.jpg", description: "1 KG" },
    { name: "RİZE TURİST", image: "img/24.jpg", description: "1 KG" },
    { name: "ÇAYCI", image: "img/25.jpg", description: "1 KG" },
    { name: "KARADENİZ", image: "img/26.jpg", description: "1 KG" },
    { name: "TAMDEM BERGAMOTLU", image: "img/27.jpg", description: "1 KG" },
    { name: "ORGANİK RİZE", image: "img/28.jpg", description: "200 GR" },
    { name: "ALTINBAŞ KLASİK", image: "img/29.jpg", description: "200 GR" },
    { name: "TİREBOLU 42", image: "img/30.jpg", description: "200 GR" },
    { name: "ORHANİK HEMŞİN", image: "img/31.jpg", description: "200 GR" },
    { name: "RİZE TURİST", image: "img/32.jpg", description: "200 GR" },
    { name: "ÇAY ÇİÇEĞİ", image: "img/33.jpg", description: "200 GR" },
    { name: "FİLİZ", image: "img/34.jpg", description: "200 GR" },
    { name: "YEŞİL ÇAY", image: "img/35.jpg", description: "150 GR" },
    { name: "TOMURCUK", image: "img/36.jpg", description: "200 GR" },
    { name: "NANELİ YEŞİL ÇAY", image: "img/37.jpg", description: "200 GR" },
    { name: "ORGANİK ZÜMRÜT YEŞİL ÇAY", image: "img/38.jpg", description: "125 GR" },
    { name: "NADİDEM", image: "img/39.jpg", description: "200 GR" },
    { name: "NADİDEM", image: "img/40.jpg", description: "100 GR" },
    { name: "ALTIN SÜZEN POŞET", image: "img/41.jpg", description: "25 ADET 50 GR" },
    { name: "ALTIN SÜZEN DEMLİK POŞET", image: "img/42.jpg", description: "40 ADET 200 GR" },
    { name: "ALTINBAŞ TOMURCUKLU BERGAMOT AROMALI", image: "img/43.jpg", description: "40 ADET 200 GR" },
    { name: "ALTINBAŞ KLASİK", image: "img/44.jpg", description: "20 ADET 40 GR" },
    { name: "TRABZON UZUNGÖL", image: "img/45.jpg", description: "80 GR" },
    { name: "ELEKALTI EFSANE", image: "img/46.jpg", description: "80 GR" },
    { name: "TOMURCUK", image: "img/47.jpg", description: "125 GR" },
    { name: "YEŞİL ÇAY SÜZEN POŞET LİMONLU", image: "img/48.jpg", description: "40 GR" },
    { name: "YEŞİL ÇAY SÜZEN POŞET NANELİ", image: "img/49.jpg", description: "40 GR" },
    { name: "YEŞİL ÇAY SÜZEN POŞET", image: "img/50.jpg", description: "40 GR" },
   
    
    // Diğer ürünler burada
];

// Ürünleri sayfaya eklemek için bir döngü kullanma
const teaProductsContainer = document.getElementById("tea-products");

for (let product of products) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image; // Resim yolu burada kullanılıyor
    productImage.alt = product.name;

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productDescription);

    teaProductsContainer.appendChild(productDiv);
}
