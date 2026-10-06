// Contenu du portfolio, en français et en anglais.
export type Lang = 'fr' | 'en';
export const home = { fr: '/', en: '/en/' } as const;

export const links = {
  email: 'contact@xel-labs.com',
  whatsapp: 'https://wa.me/221772995716',
  linkedin: 'https://www.linkedin.com/in/assane-dia-/',
  github: 'https://github.com/sannassD',
  xellabs: 'https://xel-labs.com',
  cv: { fr: '/cv/assane-dia-cv.pdf', en: '/cv/assane-dia-resume.pdf' },
};

// [clé Simple Icons (null = pas de logo), nom, site officiel]
export const skills = [
  { group: { fr: 'Front-end', en: 'Front-end' }, items: [
    ['siHtml5', 'HTML5', 'https://developer.mozilla.org/docs/Web/HTML'],
    ['siCss', 'CSS3', 'https://developer.mozilla.org/docs/Web/CSS'],
    ['siJavascript', 'JavaScript', 'https://developer.mozilla.org/docs/Web/JavaScript'],
    ['siTypescript', 'TypeScript', 'https://www.typescriptlang.org'],
    ['siReact', 'React', 'https://react.dev'],
    ['siAngular', 'Angular', 'https://angular.dev'],
    ['siTailwindcss', 'Tailwind CSS', 'https://tailwindcss.com'],
  ] },
  { group: { fr: 'Back-end', en: 'Back-end' }, items: [
    ['siNodedotjs', 'Node.js', 'https://nodejs.org'],
    ['siLaravel', 'Laravel', 'https://laravel.com'],
    ['siPhp', 'PHP', 'https://www.php.net'],
    ['siSpringboot', 'Spring Boot', 'https://spring.io/projects/spring-boot'],
    ['siDjango', 'Django', 'https://www.djangoproject.com'],
  ] },
  { group: { fr: 'Data & IA', en: 'Data & AI' }, items: [
    ['siPython', 'Python', 'https://www.python.org'],
    ['siPandas', 'pandas', 'https://pandas.pydata.org'],
    ['siScikitlearn', 'scikit-learn', 'https://scikit-learn.org'],
    ['siTensorflow', 'TensorFlow', 'https://www.tensorflow.org'],
    ['siJupyter', 'Jupyter', 'https://jupyter.org'],
  ] },
  { group: { fr: 'Bases de données & outils', en: 'Databases & tools' }, items: [
    ['siMysql', 'MySQL', 'https://www.mysql.com'],
    ['siPostgresql', 'PostgreSQL', 'https://www.postgresql.org'],
    ['siDocker', 'Docker', 'https://www.docker.com'],
    ['siLinux', 'Linux', 'https://www.kernel.org'],
    ['siGit', 'Git', 'https://git-scm.com'],
    ['siNpm', 'npm', 'https://www.npmjs.com'],
    ['siFigma', 'Figma', 'https://www.figma.com'],
    [null, 'AWS', 'https://aws.amazon.com'],
  ] },
] as const;

export const techCount = skills.reduce((n, g) => n + g.items.length, 0);

const fr = {
  meta: {
    title: 'Assane DIA — Développeur full stack, data & IA | Fondateur de Xel Labs',
    description: 'Portfolio d’Assane DIA, développeur full stack spécialisé en applications web et mobiles, data et intelligence artificielle. Fondateur de Xel Labs, Dakar – Thiès, Sénégal.',
    locale: 'fr_SN',
  },
  skip: 'Aller au contenu',
  nav: [
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'formation', label: 'Formation' },
  ],
  cta: 'Me contacter',
  menu: 'Ouvrir le menu',
  navLabel: 'Navigation principale',
  switchLabel: 'English version',
  hero: {
    available: 'Disponible pour de nouveaux projets',
    hello: 'Assane DIA · Développeur full stack, data & IA',
    title: ['Des applications web, mobiles et IA,', 'pensées pour durer.'],
    facts: ['projets web, mobiles et data', 'technologies maîtrisées', 'langues de travail : français, anglais'],
    trust: 'Ils m’ont fait confiance',
    kicker: 'Développeur full stack · Data & IA',
    text: 'Je conçois des applications web et mobiles, ainsi que des solutions data et IA. Fondateur de Xel Labs, studio technologique basé au Sénégal.',
    cv: 'Télécharger mon CV',
    location: 'Dakar – Thiès, Sénégal · Disponible à distance',
    photo: 'Portrait d’Assane DIA',
  },
  services: {
    kicker: 'Ce que je fais',
    title: 'Du design à la mise en production',
    items: [
      { title: 'Interfaces web et mobiles', text: 'Des interfaces rapides, accessibles et pensées pour le mobile, avec React, Angular et Tailwind CSS.' },
      { title: 'Back-ends et API', text: 'Des API robustes et sécurisées avec Spring Boot, Laravel et Node.js, sur MySQL ou PostgreSQL.' },
      { title: 'Data & intelligence artificielle', text: 'Analyse de données, tableaux de bord et modèles de machine learning avec Python, pandas et scikit-learn.' },
    ],
  },
  skillsTitle: { kicker: 'Compétences', title: 'Les technologies que j’utilise' },
  experience: {
    kicker: 'Expérience',
    title: 'Parcours professionnel',
    items: [
      { logo: 'xellabs', company: 'Xel Labs', role: 'Fondateur · Concepteur & Développeur', date: '2026 – aujourd’hui', text: 'Studio technologique basé entre Dakar et Thiès : sites, applications, data et IA pour les entreprises, au Sénégal et à distance.', link: 'https://xel-labs.com' },
      { logo: 'uidt', company: 'Université Iba Der Thiam', role: 'Développeur', date: '2023 – 2024', text: 'Développement d’une plateforme de gestion des cours et des notes, d’une application de comptabilité matière et de sites web dynamiques.' },
      { logo: 'uidt', company: 'Université Iba Der Thiam', role: 'Administrateur système', date: '2023 – 2024', text: 'Administration des serveurs Windows Server et gestion des sauvegardes avec Veeam Backup.' },
      { logo: 'primo', company: 'Boissons et Cake (PRIMO, LANA, ACE)', role: 'Gérant', date: '2022 – aujourd’hui', text: 'Gestion d’une activité de distribution : logistique, livraisons, suivi des ventes et relation client.' },
      { logo: 'rpc', company: 'Rue Public du Cœur', role: 'Secrétaire général & responsable communication digitale', date: '2020 – aujourd’hui', text: 'Supervision de la communication digitale, coordination des activités numériques et gestion des réseaux sociaux.' },
    ],
  },
  projects: {
    kicker: 'Projets',
    title: 'Projets sélectionnés',
    featured: { tag: 'Plateforme web', title: 'Plateforme multiservices', text: 'Application unique réunissant immobilier, véhicules (location et vente) et boutique en ligne, avec authentification partagée, back-office complet et gestion des rôles.', stack: ['React', 'TypeScript', 'Tailwind', 'Spring Boot', 'PostgreSQL'], shot: 'Page d’accueil de la plateforme multiservices' },
    items: [
      { tag: 'Éducation · UIDT', title: 'Gestion des cours et des notes', text: 'Plateforme de gestion des enseignements et des évaluations développée pour l’Université Iba Der Thiam de Thiès.', stack: ['Web', 'MySQL'] },
      { tag: 'Santé · application desktop', title: 'Système de gestion médicale', text: 'Application de bureau pour la gestion des dossiers et des consultations, à l’architecture modulaire.', stack: ['Python', 'Tkinter', 'MySQL'] },
      { tag: 'Événementiel · web', title: 'EventManager', text: 'Application de gestion d’événements avec une API Laravel et un front-end Angular.', stack: ['Laravel', 'Angular'] },
      { tag: 'Gestion · web', title: 'StockSET', text: 'Gestion de stock matière : entrées, sorties et inventaires, avec une API Laravel et Angular.', stack: ['Laravel', 'Angular'] },
      { tag: 'Éducation · application desktop', title: 'BFEEM', text: 'Application de bureau de gestion du BFEM au Sénégal : candidats, notes, délibération, jurys et exports.', stack: ['Python', 'PyQt5', 'SQLite'], link: 'https://github.com/sannassD/PROJET' },
    ],
    code: 'Voir le code',
    next: 'Et si le prochain projet était le vôtre ?',
    stackLabel: 'Technologies',
  },
  legal: 'Mentions légales',
  education: {
    kicker: 'Formation',
    title: 'Parcours académique',
    items: [
      { logo: 'uidt', school: 'Université Iba Der Thiam, Thiès', degree: 'Master Ingénierie des données et intelligence artificielle', date: '2025 – en cours', text: 'Analyse et traitement de données, machine learning, conception de systèmes intelligents.' },
      { logo: 'uidt', school: 'Université Iba Der Thiam, Thiès', degree: 'Licence Génie logiciel', date: '2021 – 2025', text: 'Développement d’applications web, bases de données relationnelles, systèmes d’exploitation et sécurité web.' },
      { logo: 'lycee', school: 'Lycée Malick Sy, Thiès', degree: 'Baccalauréat scientifique, sciences expérimentales', date: '2016 – 2020', text: 'Mathématiques, sciences physiques et sciences de la vie et de la terre.' },
    ],
  },
  contact: {
    title: 'Travaillons ensemble.',
    text: 'Un projet, une mission ou une simple question ? Écrivez-moi, je réponds en français ou en anglais.',
    whatsapp: 'WhatsApp',
    studio: 'Pour un projet d’entreprise, découvrez aussi Xel Labs',
  },
  footer: { rights: 'Tous droits réservés.' },
};

const en: typeof fr = {
  meta: {
    title: 'Assane DIA — Full-stack developer, data & AI | Founder of Xel Labs',
    description: 'Portfolio of Assane DIA, a full-stack developer specialising in web and mobile applications, data and artificial intelligence. Founder of Xel Labs, Dakar – Thiès, Senegal.',
    locale: 'en_US',
  },
  skip: 'Skip to content',
  nav: [
    { id: 'projets', label: 'Projects' },
    { id: 'competences', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'formation', label: 'Education' },
  ],
  cta: 'Get in touch',
  menu: 'Open menu',
  navLabel: 'Main navigation',
  switchLabel: 'Version française',
  hero: {
    available: 'Available for new projects',
    hello: 'Assane DIA · Full-stack developer, data & AI',
    title: ['Web, mobile and AI applications,', 'built to last.'],
    facts: ['web, mobile and data projects', 'technologies', 'working languages: English, French'],
    trust: 'Organisations I have worked with',
    kicker: 'Full-stack developer · Data & AI',
    text: 'I build web and mobile applications, along with data and AI solutions. Founder of Xel Labs, a technology studio based in Senegal.',
    cv: 'Download my CV',
    location: 'Dakar – Thiès, Senegal · Available remotely',
    photo: 'Portrait of Assane DIA',
  },
  services: {
    kicker: 'What I do',
    title: 'From design to production',
    items: [
      { title: 'Web and mobile interfaces', text: 'Fast, accessible, mobile-first interfaces built with React, Angular and Tailwind CSS.' },
      { title: 'Back-ends and APIs', text: 'Robust, secure APIs with Spring Boot, Laravel and Node.js, on MySQL or PostgreSQL.' },
      { title: 'Data & artificial intelligence', text: 'Data analysis, dashboards and machine learning models with Python, pandas and scikit-learn.' },
    ],
  },
  skillsTitle: { kicker: 'Skills', title: 'The technologies I work with' },
  experience: {
    kicker: 'Experience',
    title: 'Work experience',
    items: [
      { logo: 'xellabs', company: 'Xel Labs', role: 'Founder · Designer & Developer', date: '2026 – present', text: 'Technology studio based in Dakar and Thiès: websites, apps, data and AI for businesses in Senegal and remotely worldwide.', link: 'https://xel-labs.com/en/' },
      { logo: 'uidt', company: 'Iba Der Thiam University', role: 'Developer', date: '2023 – 2024', text: 'Built a course and grade management platform, an inventory accounting application and dynamic websites.' },
      { logo: 'uidt', company: 'Iba Der Thiam University', role: 'System administrator', date: '2023 – 2024', text: 'Administered Windows Server machines and managed backups with Veeam Backup.' },
      { logo: 'primo', company: 'Boissons et Cake (PRIMO, LANA, ACE)', role: 'Manager', date: '2022 – present', text: 'Running a distribution business: logistics, deliveries, sales tracking and customer relations.' },
      { logo: 'rpc', company: 'Rue Public du Cœur (non-profit)', role: 'General secretary & digital communications lead', date: '2020 – present', text: 'Leading digital communications, coordinating online activities and managing social media.' },
    ],
  },
  projects: {
    kicker: 'Projects',
    title: 'Selected projects',
    featured: { tag: 'Web platform', title: 'Multi-service platform', text: 'A single app combining real estate, vehicles (rental and sales) and an online store, with shared authentication, a full back-office and role management.', stack: ['React', 'TypeScript', 'Tailwind', 'Spring Boot', 'PostgreSQL'], shot: 'Home page of the multi-service platform' },
    items: [
      { tag: 'Education · UIDT', title: 'Course and grade management', text: 'A platform to manage courses and assessments, built for Iba Der Thiam University in Thiès, Senegal.', stack: ['Web', 'MySQL'] },
      { tag: 'Healthcare · desktop app', title: 'Medical management system', text: 'Desktop application to manage patient records and consultations, with a modular architecture.', stack: ['Python', 'Tkinter', 'MySQL'] },
      { tag: 'Events · web', title: 'EventManager', text: 'Event management application with a Laravel API and an Angular front-end.', stack: ['Laravel', 'Angular'] },
      { tag: 'Operations · web', title: 'StockSET', text: 'Inventory management: stock intake, outflow and audits, with a Laravel API and Angular.', stack: ['Laravel', 'Angular'] },
      { tag: 'Education · desktop app', title: 'BFEEM', text: 'Desktop application to manage Senegal’s BFEM national exam: candidates, grades, deliberation, juries and exports.', stack: ['Python', 'PyQt5', 'SQLite'], link: 'https://github.com/sannassD/PROJET' },
    ],
    code: 'View code',
    next: 'Could your project be next?',
    stackLabel: 'Technologies',
  },
  legal: 'Legal notice',
  education: {
    kicker: 'Education',
    title: 'Academic background',
    items: [
      { logo: 'uidt', school: 'Iba Der Thiam University, Thiès', degree: 'Master’s in Data Engineering and Artificial Intelligence', date: '2025 – ongoing', text: 'Data analysis and processing, machine learning, intelligent systems design.' },
      { logo: 'uidt', school: 'Iba Der Thiam University, Thiès', degree: 'Bachelor’s in Software Engineering', date: '2021 – 2025', text: 'Web application development, relational databases, operating systems and web security.' },
      { logo: 'lycee', school: 'Lycée Malick Sy, Thiès', degree: 'Scientific baccalaureate, experimental sciences', date: '2016 – 2020', text: 'Mathematics, physics and life sciences.' },
    ],
  },
  contact: {
    title: 'Let’s work together.',
    text: 'A project, a contract or just a question? Write to me, in English or French.',
    whatsapp: 'WhatsApp',
    studio: 'For a business project, also check out Xel Labs',
  },
  footer: { rights: 'All rights reserved.' },
};

export const t = { fr, en };
