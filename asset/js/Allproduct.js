const product = [
    {
        "title": "ขนมเปี๊ยะกุหลาบ",
        "image": "image/ขนมเปี๊ยะกุหลาบ1.jpg",
        "rating": "8.5/10",
        "stars": 4.5,
        "description": "จุดเด่นของขนมเปี๊ยะกุหลาบ คือ สีสันสวยงาม ผลิตจากวัตถุดิบคุณภาพ ผสานกับภูมิปัญญาท้องถิ่น รสชาติหอม เนื้อนุ่ม ได้รับรางวัล OTOP ระดับ 5 ดาว ปี 2553",
        "contact": "081-436-7119",
        "mapLink": "https://goo.gl/maps/VUAPvwajpiaSayUe6"
    },
    {
        "title": "มะเขือราชินีอบแห้ง",
        "image": "image/มะเขือราชินีอบแห้ง.jpg",
        "rating": "8.5/10",
        "stars": 4.5,
        "description": "มาตรฐานและรางวัลที่ได้รับ - รางวัลบรรจุภัณฑ์ดีเด่นปี 2551(กรมส่งเสริมสหกรณ์)- รางวัลสถานที่ผลิตผลิตภัณฑ์ชุมชนดีเด่น จังหวัดนครปฐม ปี2551 - ได้รับการคัดสรรเป็นผลิตภัณฑ์ระดับสี่ดาว",
        "contact": "034-275-665",
        "mapLink": "https://goo.gl/maps/WryT5PsQhJYr1K4u7"
    },
    {
        "title": "เบญจรงค์ประยุกต์",
        "image": "image/เบญจรงค์ประยุกต์.jpg",
        "rating": "8.5/10",
        "stars": 4.5,
        "description": "จุดเด่นเบญจรงค์ประยุกต์ คือ รูปแบบการเขียนลวดลายให้ร่วมสมัยกับปัจจุบันและโบราณโดยการนำลายโบราณมาผสาน และประยุกต์ให้เข้ากับสมัยใหม่เพื่อเพิ่มกลุ่มลูกค้าให้กว้างขึ้น ส่วนรูปทรงก็จะมีการประยุกต์ให้เป็นเอกลักษณ์ของตัวเอง",
        "contact": "085-397-8427",
        "mapLink": "https://goo.gl/maps/EeLz4p5rGvZZKPMr6"
    },
    {
        "title": "จักสานผักตบชวา",
        "image": "https://www.tcdcmaterial.com/uploads/material/MI00524-01/images/M055-01.jpg",
        "rating": "8.5/10",
        "stars": 4.5,
        "description": "จักสานผักตบชวา ได้รับการคัดสรรผลิตภัณฑ์ OTOP 5 ดาว สถานที่จำหน่ายผลิตภัณฑ์ คือ 166 หมู่ที่ 5 ตำบลศรีมหาโพธิ์ อำเภอนครชัยศรี จังหวัดนครปฐม 73120 และผลิตตามใบสั่ง ตามความต้องการของลูกค้าทั้งในประเทศ และต่างประเทศ",
        "contact": "081-924-4414",
        "mapLink": "https://goo.gl/maps/yugtAqgaFYMAQEPT7"
    },
    {
        "title": "กะละแม",
        "image": "https://puechkaset.com/wp-content/uploads/2016/07/%E0%B8%81%E0%B8%B0%E0%B8%A5%E0%B8%B0%E0%B9%81%E0%B8%A1.jpg",
        "rating": "9/10",
        "stars": 4.5,
        "description": "จุดเด่นของกาละแมลุงพร สูตร ธัญพืช รสชาติอร่อย เหนียวนุ่ม บรรจุในรูปลักษณ์ที่ห่อเหมือนข้าวต้มมัดห่อเล็กๆพอดีคำมากด้วยคุณค่าทาง โภชนาการ",
        "contact": "081-007-1777",
        "mapLink": "https://goo.gl/maps/YCZmojxqyvo2wFy18"
    }
]




// เลือกตัวองค์ประกอบ HTML ที่คุณต้องการแทรกข้อมูล
const container = document.querySelector("#products"); // เปลี่ยนตาม ID หรือคลาสของคอนเทนเนอร์ของคุณ

// สร้าง HTML สำหรับแต่ละรายการจากข้อมูล JSON
product.forEach((item) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col-sm-12", "col-lg-4", "col-md-6", "my-3");

    cardDiv.innerHTML = `
    <div class="card shadow">
    <img src="${item.image}" class="card-img-top mx-auto d-block pt-5" alt="Image" style="object-fit: cover; width: 80%; height: 280px;">
      <div class="card-body text-center">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
          <span>Rating: ${item.rating}</span>
          <div class="stars">
            ${generateStars(item.stars)}
          </div>
        </p>
        <p>${item.description}</p>
        <h3>ติดต่อ : ${item.contact}</h3>
        <a href="${item.mapLink}" target="_blank" class="btn btn-primary">ดูจุดหมาย</a>
      </div>
    </div>
  `;
    container.appendChild(cardDiv);
});

// ฟังก์ชันสร้างรูปดาวตามคะแนน
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let starsHTML = "";
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i> ';
    }
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i> ';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i> ';
    }

    return starsHTML;
}
