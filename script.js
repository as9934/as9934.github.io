// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}

// Collapsing nav on scroll
const nav = document.querySelector('.nav');
if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    }, { passive: true });
}

// Scroll-triggered fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply fade-in to common elements across all pages
const fadeTargets = [
    '.publication-group', '.award', '.about-hero', '.about-text',
    '.timeline-item', '.work-note', '.featured-card', '.contact-card'
];

document.querySelectorAll(fadeTargets.join(', ')).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger story animations within each publication group
document.querySelectorAll('.publication-group').forEach(group => {
    const stories = group.querySelectorAll('.story');
    stories.forEach((story, i) => {
        story.classList.add('fade-in');
        story.style.transitionDelay = `${i * 0.05}s`;
        observer.observe(story);
    });
});

// Stagger award animations
document.querySelectorAll('.award').forEach((award, i) => {
    award.style.transitionDelay = `${i * 0.05}s`;
});

// Stagger featured cards
document.querySelectorAll('.featured-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
});
