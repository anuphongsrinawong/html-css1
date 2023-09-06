// ดึงค่า parameter จาก URL
// http://127.0.0.1:5500/?product=1
const urlParams = new URLSearchParams(window.location.search);
let productParam = parseInt(urlParams.get('product'));


fetch('productData.json')
    .then(response => response.json())
    .then(data => {
        productData = data;
        // console.log(productData)
        let productDataToUse;

        if (productParam > 0 || productParam <= productData.length) {
            productDataToUse = productData[productParam - 1];
            // console.log(productParam)
        } else {
            productDataToUse = productData[0];
            productParam = 1
            // console.log(productParam)
        }

        // console.log(productDataToUse)

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


        // ใส่ข้อมูลเกี่ยวกับสินค้า
        const productName = document.querySelector(".font-size-14");
        productName.textContent = productDataToUse.productDetails.productName;

        const originText = document.querySelector("#origin");
        originText.textContent = "ที่มา " + productDataToUse.productDetails.origin;

        const productionLocationText = document.querySelector("#productionLocation");
        productionLocationText.textContent = "สถานที่ผลิต " + productDataToUse.productDetails.productionLocation;


        const link = document.querySelector("#detail");
        link.href = "detail.html?product=" + productParam;


        // หา DOM element ที่มี id="productList"
        const productList = document.getElementById('productList');

        // สร้างรายการสินค้าและแทรกลงใน HTML
        data.forEach((product, index) => {

            if (index == productParam - 1) {
                return; //ข้ามช่องที่ index หรือ ช่องที่เป็นรูปภาพใหญ่ที่เปิด
            } else if (index >= 5) {
                return; //ข้ามถ้ามีอื่นๆ ครบ 5 แล้ว
            };

            const productDiv = document.createElement('div');
            productDiv.className = 'col-6 col-md-6 col-lg-12 my-3';

            productDiv.innerHTML = `
                <div class="news-right-pic pic_program">
                <a href="?product=${index + 1}">
                    <img style="width: 80%; height: 160px;" src="${product.productDetails.image}" alt="${product.productDetails.productName}">
                </a>
                <br>
                <a href="?product=${index + 1}">${product.productDetails.productName} (ดู : ${product.productDetails.views})</a>
                </div>
            `;

            productList.appendChild(productDiv);
        });

    })
    .catch(error => console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error));

// console.log(productData.length)

// console.log(productParam)
