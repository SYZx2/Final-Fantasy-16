document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // ฟังก์ชันที่อัปเดตการเลื่อนสไลด์
    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // ฟังก์ชันสำหรับการแสดงสไลด์ถัดไป
    function showNextSlide() {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    }

    // ฟังก์ชันสำหรับการแสดงสไลด์ก่อนหน้า
    function showPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    }

    // ตั้งค่าให้ปุ่มคลิกทำงาน
    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Optional: เปลี่ยนสไลด์อัตโนมัติทุก ๆ 5 วินาที
    setInterval(() => {
        showNextSlide();
    }, 5000); // 5000ms = 5 seconds

    // แสดงสไลด์แรกเมื่อเริ่มต้น
    updateSlidePosition();
});
