
const productData = [{
    // สินค้า1
    imageLinks: [
        "image/มะเขือราชินีอบแห้ง.jpg",
        "image/มะเขือราชินีอบแห้ง3.jpg",
        "image/มะเขือราชินีอบแห้ง7.jpg"
    ],
    productDetails: {
        productName: "มะเขือราชินีอบแห้ง",
        origin: "กลุ่มมะเขือเทศราชินีดำเนินงานจัดตั้งเมื่อปีพ.ศ. 2549...",
        productionLocation: "65 หมู่ที่ 5 ตำบลดอนตูม อำเภอบางเลน จังหวัดนครปฐม"
    }
},

{
    // สินค้า2
    imageLinks: [
        "image/มะเขือราชินีอบแห้ง.jpg",
        "image/มะเขือราชินีอบแห้ง3.jpg",
        "image/มะเขือราชินีอบแห้ง7.jpg"
    ],
    productDetails: {
        productName: "มะเขือราชินีอบแห้ง",
        origin: "กลุ่มมะเขือเทศราชินีดำเนินงานจัดตั้งเมื่อปีพ.ศ. 2549...",
        productionLocation: "65 หมู่ที่ 5 ตำบลดอนตูม อำเภอบางเลน จังหวัดนครปฐม"
    }
},
{
    // สินค้า3
    imageLinks: [
        "image/ขนมเปี๊ยะกุหลาบ1.jpg",
        "image/ขนมเปี๊ยะกุหลาบ2.jpg",
        "image/ขนมเปี๊ยะกุหลาบ3.jpg"
    ],
    productDetails: {
        productName: "ขนมเปี๊ยะกุหลาบ",
        origin: "กลุ่มผลิตขนมทุ่งบัว เริ่มจัดตั้งกลุ่มขึ้นเมื่อ ปี พ.ศ.2541 สมาชิกเริ่มแรก จำนวน 5 คน จนมาถึงปัจจุบัน มีสมาชิก 26 คน มีการปันผลให้กับสมาชิกทุสิ้นปี สมาชิกอยู่ในตำบลทุ่งบัว ยามว่างจากงานในไร่ จะมาร่วมกันทำขนม จะเปลี่ยนมาทำรายได้ ชั่วโมงละ 15 บาท มีการระดมหุ้นจนปัจจุบันกลุ่มได้เกิดความเข้มแข็ง",
        productionLocation: "สถานที่ผลิต 51 หมู่ที่ 1 ตำบลทุ่งบัว อำเภอกำแพงแสน  จังหวัดนครปฐม "

    }
}

];

// ดึงค่า parameter จาก URL
const urlParams = new URLSearchParams(window.location.search);
const productParam = parseInt(urlParams.get('product'));
// http://127.0.0.1:5500/?product=1
// console.log(productData.length)

// console.log(productParam)
let productDataToUse;

if (productParam > 0 || productParam <= productData.length) {
    productDataToUse = productData[productParam - 1];
} else {
    productDataToUse = productData[0];
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
