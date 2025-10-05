// Portfolio Data Management
class PortfolioManager {
    constructor() {
        this.data = null;
        this.init();
    }

    async init() {
        try {
            await this.loadData();
            this.renderPortfolio();
            this.setupEventListeners();
            this.setupAnimations();
        } catch (error) {
            console.error('Portfolio yüklenirken hata oluştu:', error);
            this.showError();
        }
    }

    async loadData() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error('JSON dosyası yüklenemedi');
            }
            this.data = await response.json();
        } catch (error) {
            console.error('Veri yükleme hatası:', error);
            // Fallback data
            this.data = this.getDefaultData();
        }
    }

    getDefaultData() {
        return {
            "personal": {
                "name": "Yazılımcı",
                "title": "Full Stack Developer",
                "description": "Modern web teknolojileri ile yaratıcı çözümler geliştiriyorum.",
                "profileImage": "https://via.placeholder.com/300x300/4f46e5/ffffff?text=Profil",
                "about": "Yazılım geliştirme alanında deneyimli bir geliştiriciyim. Modern teknolojiler kullanarak kullanıcı dostu ve performanslı uygulamalar geliştiriyorum.",
                "stats": {
                    "experience": "3+",
                    "projects": "20+",
                    "clients": "15+"
                }
            },
            "contact": {
                "email": "ornek@email.com",
                "phone": "+90 555 123 45 67",
                "location": "İstanbul, Türkiye",
                "social": [
                    {
                        "name": "GitHub",
                        "url": "https://github.com",
                        "icon": "fab fa-github"
                    },
                    {
                        "name": "LinkedIn",
                        "url": "https://linkedin.com",
                        "icon": "fab fa-linkedin"
                    },
                    {
                        "name": "Twitter",
                        "url": "https://twitter.com",
                        "icon": "fab fa-twitter"
                    }
                ]
            },
            "skills": [
                {
                    "name": "JavaScript",
                    "description": "Modern JavaScript ve ES6+ özellikleri",
                    "icon": "fab fa-js-square"
                },
                {
                    "name": "React",
                    "description": "React ve React Native geliştirme",
                    "icon": "fab fa-react"
                },
                {
                    "name": "Node.js",
                    "description": "Backend geliştirme ve API tasarımı",
                    "icon": "fab fa-node-js"
                },
                {
                    "name": "Python",
                    "description": "Python ile web geliştirme",
                    "icon": "fab fa-python"
                },
                {
                    "name": "HTML/CSS",
                    "description": "Responsive web tasarımı",
                    "icon": "fab fa-html5"
                },
                {
                    "name": "Git",
                    "description": "Versiyon kontrolü ve işbirliği",
                    "icon": "fab fa-git-alt"
                }
            ],
            "projects": [
                {
                    "title": "E-Ticaret Platformu",
                    "description": "Modern e-ticaret platformu, React ve Node.js ile geliştirildi.",
                    "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
                    "image": "fas fa-shopping-cart",
                    "links": {
                        "live": "https://example.com",
                        "github": "https://github.com"
                    }
                },
                {
                    "title": "Blog Uygulaması",
                    "description": "Kişisel blog uygulaması, Next.js ve Sanity CMS ile geliştirildi.",
                    "technologies": ["Next.js", "Sanity", "Tailwind CSS"],
                    "image": "fas fa-blog",
                    "links": {
                        "live": "https://example.com",
                        "github": "https://github.com"
                    }
                },
                {
                    "title": "Mobil Uygulama",
                    "description": "React Native ile geliştirilmiş mobil uygulama.",
                    "technologies": ["React Native", "Firebase", "Redux"],
                    "image": "fas fa-mobile-alt",
                    "links": {
                        "live": "https://example.com",
                        "github": "https://github.com"
                    }
                }
            ]
        };
    }

    renderPortfolio() {
        this.renderPersonalInfo();
        this.renderSkills();
        this.renderProjects();
        this.renderContact();
    }

    renderPersonalInfo() {
        const personal = this.data.personal;
        
        // Update navigation and hero section
        document.getElementById('nav-name').textContent = personal.name;
        document.getElementById('hero-name').textContent = personal.name;
        document.getElementById('hero-title').textContent = personal.title;
        document.getElementById('hero-description').textContent = personal.description;
        document.getElementById('profile-img').src = personal.profileImage;
        document.getElementById('profile-img').alt = `${personal.name} Profil Fotoğrafı`;
        
        // Update about section
        document.getElementById('about-description').textContent = personal.about;
        document.getElementById('experience-years').textContent = personal.stats.experience;
        document.getElementById('projects-count').textContent = personal.stats.projects;
        document.getElementById('clients-count').textContent = personal.stats.clients;
        
        // Update footer
        document.getElementById('footer-name').textContent = personal.name;
    }

    renderSkills() {
        const skillsContainer = document.getElementById('skills-container');
        skillsContainer.innerHTML = '';

        this.data.skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card fade-in';
            skillCard.innerHTML = `
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            `;
            skillsContainer.appendChild(skillCard);
        });
    }

    renderProjects() {
        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = '';

        this.data.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card fade-in';
            
            const techTags = project.technologies.map(tech => 
                `<span class="tech-tag">${tech}</span>`
            ).join('');

            projectCard.innerHTML = `
                <div class="project-image">
                    <i class="${project.image}"></i>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${techTags}
                    </div>
                    <div class="project-links">
                        <a href="${project.links.live}" class="project-link primary" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i> Canlı Demo
                        </a>
                        <a href="${project.links.github}" class="project-link secondary" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    renderContact() {
        const contact = this.data.contact;
        
        // Update contact info
        document.getElementById('contact-email').textContent = contact.email;
        document.getElementById('contact-phone').textContent = contact.phone;
        document.getElementById('contact-location').textContent = contact.location;
        
        // Render social links
        const socialLinksContainer = document.getElementById('social-links');
        socialLinksContainer.innerHTML = '';

        contact.social.forEach(social => {
            const socialLink = document.createElement('a');
            socialLink.href = social.url;
            socialLink.className = 'social-link';
            socialLink.target = '_blank';
            socialLink.rel = 'noopener';
            socialLink.innerHTML = `<i class="${social.icon}"></i>`;
            socialLink.title = social.name;
            socialLinksContainer.appendChild(socialLink);
        });
    }

    setupEventListeners() {
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add fade-in class to sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('fade-in');
            observer.observe(section);
        });
    }

    showError() {
        const errorMessage = document.createElement('div');
        errorMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fee2e2;
            color: #dc2626;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            z-index: 9999;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        `;
        errorMessage.innerHTML = `
            <h3>Hata Oluştu</h3>
            <p>Portfolio verileri yüklenirken bir hata oluştu.</p>
            <p>Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.</p>
        `;
        document.body.appendChild(errorMessage);

        // Remove error message after 5 seconds
        setTimeout(() => {
            if (errorMessage.parentNode) {
                errorMessage.parentNode.removeChild(errorMessage);
            }
        }, 5000);
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
});

// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
