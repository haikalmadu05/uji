document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-music');

    // Mulai audio setelah pengguna berinteraksi dengan halaman
    document.body.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        }
    });

    // Smooth scroll to section
    document.querySelectorAll('.scroll-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mengatur slider untuk berulang tanpa batas
    const slides = document.querySelectorAll('.slider-photo');
    let currentIndex = 0;

    function startSliderLoop() {
        setInterval(() => {
            const currentSlide = slides[currentIndex];
            const nextIndex = (currentIndex + 1) % slides.length;
            const nextSlide = slides[nextIndex];

            // Hapus semua kelas animasi sebelumnya
            currentSlide.classList.remove('enter-left', 'enter-right', 'active');

            // Tentukan arah masuk dan keluar
            if (currentIndex % 2 === 0) {
                currentSlide.style.animation = 'slideOutLeft 1s forwards'; // Gaya keluar ke kiri
                nextSlide.style.animation = 'slideInRight 1s forwards'; // Gaya masuk dari kanan
            } else {
                currentSlide.style.animation = 'slideOutRight 1s forwards'; // Gaya keluar ke kanan
                nextSlide.style.animation = 'slideInLeft 1s forwards'; // Gaya masuk dari kiri
            }

            setTimeout(() => {
                currentSlide.classList.remove('active'); // Hilangkan gambar saat ini
                nextSlide.classList.add('active'); // Tampilkan gambar berikutnya
                currentIndex = nextIndex; // Update indeks gambar
            }, 3000); // Durasi waktu total untuk stay dan transisi
        }, 4000); // Interval waktu antar slide
    }

    startSliderLoop();
});

// Countdown Timer
const countdownDate = new Date("September 29, 2024 00:00:00").getTime();
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = `
        <div class="countdown-item">
            <div class="countdown-number">${days}</div>
            <div class="countdown-label">Hari</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-number">${hours}</div>
            <div class="countdown-label">Jam</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-number">${minutes}</div>
            <div class="countdown-label">Menit</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-number">${seconds}</div>
            <div class="countdown-label">Detik</div>
        </div>
    `;
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "The wedding day is here!";
    }
}, 1000);

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fade-out');
            entry.target.classList.add('active', 'fade-in');
            entry.target.style.animation = 'fadeInUp 1s forwards';
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
            entry.target.style.animation = 'fadeOutDown 1s forwards';
        }
    });
}, observerOptions);

// Apply observer to each animate-on-scroll element
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Teks berhasil disalin: ' + text);
    }, function(err) {
        console.error('Gagal menyalin teks: ', err);
    });
}
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    
    if (name) {
        const invitationText = document.querySelector('.invitation-text');
        invitationText.innerHTML = `Kepada Yth. <br>Bapak/Ibu/Sdr/i<br>${name}<br>di Tempat`;
    }
};

