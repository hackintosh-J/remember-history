function setLanguage(lang) {
    // 1. Update active button state
    const buttons = document.querySelectorAll('.language-switcher button');
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(lang === 'zh' ? '中文' : lang === 'en' ? 'english' : '日本語')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Hide all language content
    const allContent = document.querySelectorAll('.lang-content');
    allContent.forEach(el => {
        el.style.display = 'none';
    });

    // 3. Show selected language content
    const selectedContent = document.querySelectorAll(`.lang-content.${lang}`);
    selectedContent.forEach(el => {
        el.style.display = 'block';
    });

    // 4. Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'jp' ? 'ja' : 'en';
}

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Stop observing once visible if you don't want it to fade out again
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroOverlay = document.querySelector('.hero-overlay');
    if (heroOverlay) {
        heroOverlay.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('zh');

    // Observe all elements with fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
});
