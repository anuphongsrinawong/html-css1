// เลือกตัวองค์ประกอบ HTML ที่คุณต้องการแทรกข้อมูล
const container = document.querySelector("#products"); // เปลี่ยนตาม ID หรือคลาสของคอนเทนเนอร์ของคุณ

// สร้าง HTML สำหรับแต่ละรายการจากข้อมูล JSON

fetch('productData.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.forEach((item) => {
            // console.log(item)

            console.log(item.productDetails)


            const cardDiv = document.createElement("div");
            cardDiv.classList.add("col-sm-12", "col-lg-4", "col-md-6", "my-3");

            cardDiv.innerHTML = `
    <div class="card shadow">
    <img src="${item.productDetails.image}" class="card-img-top mx-auto d-block pt-5" alt="Image" style="object-fit: cover; width: 80%; height: 280px;">
      <div class="card-body text-center">
        <h5 class="card-title">${item.productDetails.productName}</h5>
        <p class="card-text">
          <span>Rating: ${item.productDetails.rating}</span>
          <div class="stars">
            ${generateStars(item.productDetails.stars)}
          </div>
        </p>
        <p>${item.productDetails.description}</p>
        <h3>ติดต่อ : ${item.productDetails.contact}</h3>
        <a href="${item.productDetails.mapLink}" target="_blank" class="btn btn-primary">ดูจุดหมาย</a>
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
    })
    .catch(error => console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error));
