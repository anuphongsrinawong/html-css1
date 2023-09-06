// ดึงค่า parameter จาก URL
// http://127.0.0.1:5500/detail.html?product=1
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
        console.log(productDataToUse['imageLinks'][0])

        let srcImg = productDataToUse['imageLinks'][0];
        console.log(typeof (srcImg))


        const imageProduct = document.querySelector("#imageProduct");
        imageProduct.innerHTML = "";
        imageProduct.innerHTML = `
    <img src="${srcImg}" class="d-block w-100" alt="Image">`

    })
    .catch(error => console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error));

// console.log(productData.length)

// console.log(productParam)
