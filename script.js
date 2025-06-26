const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const buttonsDiv = document.querySelector('.buttons');
const containerDiv = document.querySelector('.container');
const catIcon = document.getElementById("catIcon");

const messages = [
  "KHÔNG",
  "Bạn chắc chứ?",
  "Nghĩ lại đi mà",
  "Không được chọn cái này",
  "Mình sẽ buồn lắm đó",
  "Không đượcccc"
];

// Danh sách các ảnh mèo tương ứng với từng lần bấm (không có thư mục images)
const catIcons = [
  "meo1.png",
  "meo2.png",
  "meo3.png",
  "meo4.png",
  "meo5.png",
  "meo6.png"
];

// Luôn hiển thị hình meo1.png khi load trang
catIcon.src = catIcons[0];

let noClickCount = 0;
let yesBtnScale = 1;

noBtn.addEventListener("click", () => {
  if (noClickCount < messages.length - 1) {
    noClickCount++;
    noBtn.innerText = messages[noClickCount];
    yesBtnScale += 0.6;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
    // Đổi hình mèo tương ứng
    if (catIcons[noClickCount]) {
      catIcon.src = catIcons[noClickCount];
    }
    if (noClickCount === messages.length - 1) {
      noBtn.style.display = 'none';
      containerDiv.style.background = 'none';
      containerDiv.style.boxShadow = 'none';
      containerDiv.style.padding = '0';
      containerDiv.style.minWidth = '0';
      containerDiv.style.borderRadius = '0';
      yesBtn.classList.add("fullscreen");
      yesBtn.innerText = "CÓ";
      question.style.display = 'none';
      buttonsDiv.style.justifyContent = 'center';
    }
  }
});

yesBtn.addEventListener("click", () => {
  // Khi ấn vào CÓ, hiển thị thông điệp và ẩn cả 2 button
  buttonsDiv.style.display = 'none';
  question.innerHTML = 'ANH CŨNG YÊU EM ❤️';
  question.classList.add('love-message');
  question.style.display = '';
  containerDiv.style.background = '';
  containerDiv.style.boxShadow = '';
  containerDiv.style.padding = '';
  containerDiv.style.minWidth = '';
  containerDiv.style.borderRadius = '';
  // Nếu có ảnh mèo vui, đổi sang ảnh đó
  if (catIcons[6]) {
    catIcon.src = catIcons[6];
  }
});
