const skillsData = {
  dev: [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ],
  ui: [
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Prototyping", logo: "https://www.svgrepo.com/show/354202/prototype.svg" },
    { name: "Sitemap", logo: "https://www.svgrepo.com/show/494853/sitemap.svg" },
    { name: "Wireframing", logo: "https://www.svgrepo.com/show/501551/wireframe.svg" },
    { name: "User Research", logo: "https://www.svgrepo.com/show/497404/research.svg" }
  ],
  data: [
    { name: "Power BI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Tableau", logo: "https://www.svgrepo.com/show/374118/tableau.svg" },
    { name: "Excel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/excel/excel-original.svg" }
  ]
};

const projectsData = [
  { title: "Responsive Web App", category: "dev", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
  { title: "E-Commerce Site", category: "dev", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
  { title: "Portfolio Website", category: "dev", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
  { title: "Sales Dashboard", category: "data", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
  { title: "Data Visualization", category: "data", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
  { title: "Customer Analytics", category: "data", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3d43?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
  { title: "Mobile App Design", category: "ui", img: "https://images.unsplash.com/photo-1462556791646-c201b8241a94?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
  { title: "Landing Page UI", category: "ui", img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
];

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = document.querySelectorAll('.menu li a');
const mobileLinks = mobileMenu.querySelectorAll('a');

hamburger.onclick = () => {
  mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
  document.body.classList.toggle('noscroll', mobileMenu.classList.contains('active'));
};

mobileLinks.forEach(link => {
  link.onclick = () => {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.classList.remove('noscroll');
  };
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.classList.remove('noscroll');
  }
});

// Skills section
const catBtns = document.querySelectorAll('.cat-btn');
const skillsList = document.getElementById('skills-list');
function renderSkills(category) {
  skillsList.style.opacity = 0;
  setTimeout(() => {
    skillsList.innerHTML = '';
    skillsData[category].forEach(skill => {
      const el = document.createElement('div');
      el.className = 'skill-item';
      el.tabIndex = 0;
      el.innerHTML = `
        <img class="skill-logo" src="${skill.logo}" alt="${skill.name}">
        <span class="skill-name">${skill.name}</span>
      `;
      skillsList.appendChild(el);
    });
    skillsList.style.opacity = 1;
  }, 180);
}
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.cat-btn.active').classList.remove('active');
    btn.classList.add('active');
    renderSkills(btn.dataset.category);
  });
});
renderSkills('dev');

// Projects section
const projBtns = document.querySelectorAll('.proj-btn');
const projectsList = document.getElementById('projects-list');
function renderProjects(category) {
  projectsList.style.opacity = 0;
  setTimeout(() => {
    projectsList.innerHTML = '';
    projectsData.filter(p => category === 'all' ? true : p.category === category)
      .forEach(project => {
        const el = document.createElement('div');
        el.className = 'project-card';
        el.tabIndex = 0;
        el.innerHTML = `
          <img class="project-img" src="${project.img}" alt="${project.title}">
          <div class="project-title">${project.title}</div>
          <div class="project-buttons">
            <a class="project-btn" href="${project.preview}" target="_blank">Preview</a>
            <a class="project-btn" href="${project.github}" target="_blank">GitHub</a>
          </div>
        `;
        projectsList.appendChild(el);
      });
    projectsList.style.opacity = 1;
  }, 180);
}
projBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.proj-btn.active').classList.remove('active');
    btn.classList.add('active');
    renderProjects(btn.dataset.category);
  });
});
renderProjects('all');

// Scrollspy for menu highlighting
function setActiveLink() {
  const sections = ['intro', 'profile', 'skills', 'projects', 'contact'];
  let current = '';
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (window.scrollY + 120 >= section.offsetTop) current = id;
  });
  menuLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) link.classList.add('active');
  });
  mobileLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) link.classList.add('active');
  });
}
window.addEventListener('scroll', setActiveLink);

// Smooth scroll
[...menuLinks, ...mobileLinks].forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dummy contact form
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! (Form not functional in demo)');
  this.reset();
});