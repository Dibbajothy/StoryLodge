
document.addEventListener('DOMContentLoaded', function() {
    const big_background = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ];

    const frame_images = [
        'bride2.jpg',
        'bride3.jpg',
        'bride1.jpg'
    ];

    let bigBackIndex = 0;
    let frameImage_index = 0;

    const body = document.querySelector('.main-content');
    const dots = document.querySelectorAll('.dot');
    const frame = document.querySelector('.frame');

    function chngBigBack(index) {
        body.style.backgroundImage = `url('${big_background[index]}')`;
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        bigBackIndex = index;
    }

    function chngFrameBack(index) {
        frame.style.backgroundImage = `url('${frame_images[index]}')`;
        frameImage_index = index;
    }

    // Automatic slideshow every 3.5 seconds
    function startSlideshow() {
        setInterval(() => {
            bigBackIndex = (bigBackIndex + 1) % big_background.length;
            frameImage_index = (frameImage_index + 1) % frame_images.length;
            chngFrameBack(frameImage_index);
            chngBigBack(bigBackIndex);
        }, 3500);
    }

    // Manual selection with dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            chngBigBack(index);
        });
    });


    startSlideshow();


    // Smooth scrolling (from your original code)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect (adjusted for your design - optional)
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'transparent';
        }
    });

    // Section animation (if you have sections - optional)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });



});
