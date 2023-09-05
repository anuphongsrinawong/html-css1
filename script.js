// ดึงข้อมูล JSON จากแหล่งข้อมูล (ในกรณีนี้เป็นตัวอย่างเท่านั้น)
const jsonData = {
    "products": [
        {
            "productName": ,
            "productDescription": "รายละเอียดสินค้าที่ 1",
            "productPrice": "$100"
        },
        {
            "productName": "สินค้าที่ 2",
            "productDescription": "รายละเอียดสินค้าที่ 2",
            "productPrice": "$150"
        }
        // เพิ่มข้อมูลสินค้าเพิ่มเติมตรงนี้
    ]
};

// เลือก container โดยใช้ id
const container = document.getElementById("product-container");


// ดึงค่า parameter จาก URL
const urlParams = new URLSearchParams(window.location.search);
const productParam = urlParams.get('product');

console.log(productParam)

// http://127.0.0.1:5500/?product=1

// ตรวจสอบค่า parameter 'product' และแสดงข้อมูลของ product ที่เลือก
if (productParam) {
    // แสดงข้อมูลของ product1

    let num = parseInt(productParam) - 1

    window.productNameOfProduct = jsonData.products[num].productName;
    window.productDesOfProduct = jsonData.products[num].productDescription;
    window.productPriceOfProduct = jsonData.products[num].productPrice;


}
else {
    // หากไม่พบค่า 'product' หรือมีค่าอื่นที่คุณไม่รองรับ
    window.productNameOfProduct = jsonData.products[0].productName;
    window.productDesOfProduct = jsonData.products[0].productDescription;
    window.productPriceOfProduct = jsonData.products[0].productPrice;
    console.log('Product not found');
}


const productHTML = `
        <div class="product">
            <h2 class="product-title">${window.productNameOfProduct}</h2>
            <p class="product-description">${window.productDesOfProduct}</p>
            <p class="product-price">${window.productPriceOfProduct}</p>
        </div>
    `;
container.innerHTML = productHTML;




