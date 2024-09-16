window.onload = function() {
    const elements = document.querySelectorAll('.bio, .skills, .projects, .social');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'scale(0.9)';
        el.style.transition = 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out';
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = 1;
            el.style.transform = 'scale(1)';
        });
    }, 500);
};
