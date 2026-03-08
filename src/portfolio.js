/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Assane DIA",
  title: "Salut, je suis Assane",
  subTitle: emoji(
    "Un développeur Full Stack passionné 🚀 ayant une expérience dans la création d'applications Web et Mobile avec Laravel / Angular / Python / Reactjs  et d'autres bibliothèques et frameworks sympas."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_ocyfjF45ZUcEcebpF-PHU0W6gOAdBgd/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sannassD",
  linkedin: "https://www.linkedin.com/in/assane-dia-/",
  gmail: "diaassane604@gmail.com",
  Instagram: "https://www.instagram.com/sann.diah/",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  
  //Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "DÉVELOPPEUR FULL STACK FOU QUI VEUT EXPLORER TOUS LES TECH STACKS",
  skills: [
    emoji(
      "⚡ Développez des interfaces utilisateur / front-ends hautement interactifs pour vos applications web et mobiles"
    ),
    emoji("⚡ Applications Web Progressives (PWA) dans les piles normales et SPA"),
    emoji(
      "⚡ Intégration de services tiers pour les hebergements"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
   /* {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },*/
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
   /* {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },*/
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    /*{
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }*/
  ],
  display: true // Set false to hide this section, defaults to true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Université Iba Der Thiam",
      logo: require("./assets/images/UIDT.png"),
      subHeader: "Master : Ingénierie des Données et Intelligence Artificielle",
      duration: "2025 - En cours",
      desc: "Formation axée sur l'analyse des données, l'intelligence artificielle et les technologies avancées de traitement de données.",
      descBullets: [
        "Analyse et traitement de données",
        "Introduction à l'intelligence artificielle et au machine learning",
        "Conception de systèmes intelligents et gestion de bases de données"
      ]
    },
    {
      schoolName: "Université Iba Der Thiam",
      logo: require("./assets/images/UIDT.png"),
      subHeader: "Licence en Génie Logiciel",
      duration: "Février 2021 - Avril 2025",
      desc: "Formation en génie logiciel axée sur le développement d'applications web, la conception de systèmes informatiques et la gestion des bases de données.",
      descBullets: [
        "Développement d'applications web avec différentes technologies modernes",
        "Conception et gestion de bases de données relationnelles",
        "Étude des systèmes d'exploitation et de l'architecture des systèmes informatiques",
        "Introduction à la sécurité web et aux bonnes pratiques de développement"
      ]
    },
    {
      schoolName: "Lycée Malick SY",
      logo: require("./assets/images/lyceemalicksy.jpg"),
      subHeader: "Baccalauréat en Sciences Expérimentales",
      duration: "Octobre 2016 - Juillet 2020",
      desc: "Formation scientifique axée sur les sciences fondamentales et le développement des capacités d'analyse et de raisonnement.",
      descBullets: [
        "Étude approfondie des mathématiques et des sciences physiques",
        "Cours de sciences de la vie et de la terre",
        "Développement des compétences en analyse scientifique et résolution de problèmes",
        "Travaux pratiques et expérimentations en laboratoire"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Développeur",
      company: "Université Iba Der Thiam",
      companylogo: require("./assets/images/UIDT.png"),
      date: "2023 – 2024",
      desc: "Développement d'applications et de plateformes web pour l'université.",
      descBullets: [
        "Développement d'une plateforme de gestion de cours et de notes",
        "Développement d’une application de gestion de stock pour la comptabilité matière",
        "Création de sites web dynamiques"
      ]
    },
    {
      role: "Administrateur Système",
      company: "Université Iba Der Thiam",
      companylogo: require("./assets/images/UIDT.png"),
      date: "2023 – 2024",
      desc: "Gestion et administration des systèmes informatiques de l'université.",
      descBullets: [
        "Gestion des sauvegardes avec Veeam Backup",
        "Administration des serveurs Windows Server"
      ]
    },
    {
      role: "Gérant",
      company: "Boissons et Cake (PRIMO, LANA, ACE)",
      companylogo: require("./assets/images/PRIMO.png"),
      date: "2022 – Présent",
      desc: "Gestion d'une activité de distribution de boissons et produits alimentaires.",
      descBullets: [
        "Gestion de la distribution des produits",
        "Organisation de la logistique et des livraisons",
        "Suivi des ventes et des relations clients"
      ]
    },
    {
      role: "Secrétaire Général & Responsable Communication Digitale",
      company: "RUE PUBLIC DU CŒUR",
      companylogo: require("./assets/images/RPC.jpeg"),
      date: "2020 – Présent",
      desc: "Gestion de la communication et de la coordination digitale de l'organisation.",
      descBullets: [
        "Supervision de la communication digitale",
        "Coordination des activités numériques",
        "Gestion de la présence en ligne et des réseaux sociaux"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Grands Projets",
  subtitle: "Certaines startups et entreprises que j'ai aidées à créer leur technologie",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "EventManager",
      projectDesc: "Application de gestion d'événements avec Laravel API et Angular.",
      footerLink: [
        {
          name: "visiter le depot",
          url: "https://github.com/sannassD/ProjetEvent.git"
        }
        //  you can add extra buttons here.
      ]
    },
     {
      image: require("./assets/images/SET.jpeg"),
      projectName: "StockSET",
      projectDesc: "Application de gestion de stock matiere avec Laravel API et Angular.",
      footerLink: [
        {
          name: "visiter le depot",
          url: "https://github.com/sannassD/Gestion-de-stock-matiere.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/educationsn.webp"),
      projectName: "BFEEM",
      projectDesc: "Gestion des epreuves du BFEEM au Sénegal avec Python, Django et Mysql",
      footerLink: [
        {
          name: "visiter le depot",
          url: "https://github.com/sannassD/PROJET.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Apprentissage & Ressources",
  subtitle:
    "Quelques technologies et ressources que j'utilise pour améliorer mes compétences en développement logiciel.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://laravel.com/docs",
      title: "Laravel Documentation",
      description:
        "Documentation officielle que j'utilise pour développer des APIs et applications web avec Laravel."
    },
    {
      url: "https://angular.io/docs",
      title: "Angular Framework",
      description:
        "Framework frontend puissant que j'utilise pour développer des applications web dynamiques."
    },
    {
      url: "https://react.dev/",
      title: "React",
      description:
        "Bibliothèque JavaScript que j'utilise pour créer des interfaces utilisateur modernes et interactives."
    },
    {
      url: "https://www.djangoproject.com/",
      title: "Django Framework",
      description:
        "Framework Python que j'utilise pour développer des applications web sécurisées et performantes."
    },
    {
      url: "https://dev.mysql.com/doc/",
      title: "MySQL Database",
      description:
        "Système de gestion de base de données relationnelle utilisé dans mes projets web."
    },
    {
      url: "https://getbootstrap.com/docs/",
      title: "Bootstrap",
      description:
        "Framework CSS que j'utilise pour créer des interfaces web modernes et responsive."
    },
    {
      url: "https://git-scm.com/doc",
      title: "Git & GitHub",
      description:
        "Outils de gestion de version que j'utilise pour collaborer et gérer mes projets."
    },
    {
      url: "https://docs.docker.com/",
      title: "Docker",
      description:
        "Technologie de conteneurisation que j'utilise pour déployer et gérer les applications."
    }
  ],
  display: true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Vous voulez discuter d'un projet ou simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "+221772995716",
  email_address: "diaassane604@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
