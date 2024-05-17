const delicatessenProducts = [
    { name: "KAYMAK TEREYAĞI", image: "img/95.jpg"},
    { name: "KÖY TEREYAĞI", image: "img/96.jpg"},
    { name: "BAYBURT TEREYAĞI", image: "img/97.jpg" },
    { name: "BAYBURT TELLİ PEYNİR", image: "img/98.jpg"},
    { name: "TRABZON TULUM PEYNİRİ", image: "img/99.jpg"},
    { name: "SÜRMENE AHO PEYNİRİ", image: "img/100.jpg"},
    { name: "KARS ESKİ KAŞAR", image: "img/101.jpg" },
    { name: "AYDIN TEPE TAZE KAŞAR", image: "img/102.jpg" },
    { name: "T&R TEL PEYNİR", image: "img/103.jpg" },
    { name: "ÇİÇEK BALI", image: "img/104.jpg"},
    { name: "KESTANE BALI", image: "img/105.jpg" },
    { name: "KEÇİBOYNUZU ÖZÜ", image: "img/106.jpg" },
    { name: "DUT PEKMEZİ", image: "img/107.jpg" },
    { name: "KÖY YUMURTASI", image: "img/108.jpg" },
    { name: "YAKUP GÜNCAN SİYAH ZEYTİN", image: "img/109.jpg", description: "900 GR" },
    { name: "MUSTAFA KILIÇ ÇİZİK YEŞİL ZEYTİN", image: "img/110.jpg", description: "1 KG" },
    { name: "YAZICI SİYAH ZEYTİN", image: "img/111.jpg", description: "2 KG" },
    { name: "PAŞA AYVALIK SIZMA ZEYTİNYAĞI", image: "img/112.jpg", description: "5 L" },
    { name: "ÜÇEL SADE TAHİN HELVASI", image: "img/113.jpg" },
    { name: "ÜÇEL KAKAOLU TAHİN HELVASI", image: "img/114.jpg" },
    { name: "DOMATES SALÇASI", image: "img/115.jpg"},
    { name: "ACI BİBER SALÇASI", image: "img/116.jpg"},
    { name: "TATLI BİBER SALÇASI", image: "img/117.jpg"},
    { name: "NOHUT", image: "img/118.jpg"},
    { name: "KURU FASÜLYE", image: "img/119.jpg"},
    { name: "BARBUNYA", image: "img/120.jpg" },
    { name: "ARPA", image: "img/121.jpg"},
    { name: "BALDO PRİNÇ", image: "img/122.jpg" },
    { name: "BULGUR", image: "img/123.jpg" },
    { name: "KIRIK MISIR", image: "img/124.jpg"},
    { name: "MERCİMEK", image: "img/125.jpg"},
    { name: "BUĞDAY", image: "img/126.jpg"},
    { name: "ESMER BULGUR", image: "img/127.jpg"},
    { name: "BULGUR", image: "img/128.jpg"},
    { name: "YERLİ MISIR UNU", image: "img/129.jpg"},
    { name: "KALIN ZİRAAT MISIR UNU", image: "img/130.jpg" },
    { name: "İNCE ZİRAAT MISIR UNU", image: "img/131.jpg"},
    { name: "ÇOK ACI PUL BİBERİ", image: "img/132.jpg"},
    { name: "HALİS NORMAL ACI PUL BİBER", image: "img/133.jpg"},
    { name: "TATLI PUL BİBER", image: "img/134.jpg"},
    { name: "KARABİBER", image: "img/135.jpg" },
    { name: "İSOT", image: "img/136.jpg" },
    { name: "TARHANA", image: "img/137.jpg"},
    { name: "NANE", image: "img/138.jpg"},
    { name: "SUMAK", image: "img/139.jpg",}
    // Şarküteri ürünleri dizisi burada
];

const delicatessenProductsContainer = document.getElementById("delicatessen-products");

for (let product of delicatessenProducts) {
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

    delicatessenProductsContainer.appendChild(productDiv);
}
