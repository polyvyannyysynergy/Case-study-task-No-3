const images = document.querySelectorAll('.slider-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');

let currentIndex = 0;

function updateSlider() {
    // Скрываем все изображения
    images.forEach((img, index) => {
        img.classList.remove('active'); // Убираем класс active у всех изображений
    });
    
    // Добавляем класс active к текущему изображению
    images[currentIndex].classList.add('active');
    
    // Обновляем текст счетчика
    imageCounter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

// Инициализация слайдера
updateSlider();
