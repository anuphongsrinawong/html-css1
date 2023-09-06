// ดึงค่า parameter จาก URL
// http://127.0.0.1:5500/?product=1
const urlParams = new URLSearchParams(window.location.search);
let productParam = parseInt(urlParams.get('product'));


fetch('productData.json')
    .then(response => response.json())
    .then(data => {
        productData = data;
        console.log(productData)
        let productDataToUse;

        if (productParam > 0 || productParam <= productData.length) {
            productDataToUse = productData[productParam - 1];
            console.log(productParam)
        } else {
            productDataToUse = productData[0];
            productParam = 1
            console.log(productParam)
        }

        console.log(productDataToUse)

        // ใส่ข้อมูลรูปภาพใน Carousel
        const carouselImagesContainer = document.querySelector(".carousel-inner");
        carouselImagesContainer.innerHTML = "";

        productDataToUse.imageLinks.forEach((imageSrc, index) => {
            const carouselItem = document.createElement("div");
            carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");
            carouselItem.innerHTML = `
    <img src="${imageSrc}" class="d-block w-100" alt="Image ${index + 1}">
  `;
            carouselImagesContainer.appendChild(carouselItem);
        });

        // ใส่ข้อมูลรูปภาพในรายการรูปภาพแบบราว
        const imageRow = document.querySelector(".row.mt-4");
        imageRow.innerHTML = "";

        productDataToUse.imageLinks.forEach((imageSrc, index) => {
            const imageColumn = document.createElement("div");
            imageColumn.className = "col-md-4";
            imageColumn.innerHTML = `
    <img src="${imageSrc}" class="img-fluid cursor" alt="Image ${index + 1}">
  `;
            imageRow.appendChild(imageColumn);
        });

        // ใส่ข้อมูลเกี่ยวกับสินค้า
        const productName = document.querySelector(".font-size-14");
        productName.textContent = productDataToUse.productDetails.productName;

        const originText = document.querySelector("#origin");
        originText.textContent = "ที่มา " + productDataToUse.productDetails.origin;

        const productionLocationText = document.querySelector("#productionLocation");
        productionLocationText.textContent = "สถานที่ผลิต " + productDataToUse.productDetails.productionLocation;


        const link = document.querySelector("#detail");
        link.href = "detail.html?product=" + productParam;

    })
    .catch(error => console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error));

// console.log(productData.length)

// console.log(productParam)
