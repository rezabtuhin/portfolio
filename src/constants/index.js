import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codersher,
  chat,
  pacman,
  OLP,
  c,
} from "../assets";

// import {creator} from "../assets/tech/creator.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Laravel Developer",
    icon: creator,
  },
  {
    title: "ML/AI Enthusiast",
    icon: web,
  },

  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
];

const technologies = [
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Java",
    icon: mongodb,
  },

  {
    name: "Python",
    icon: figma,
  },
  {
    name: "PHP",
    icon: docker,
  },
  {
    name: "Laravel",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Undergraduate Teaching Assistant",
    company_name: "United International University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2023 - June 2023",
    points: [
      "Instruct students on essential web development technologies including HTML, CSS, JavaScript, and PHP.",
      "Graded students on their outcomes.",
      "Conducted class on absence of faculty.",
      "Supervised students on their project works.",
    ],
  },
  {
    title: "Volunteer",
    company_name: "UIU Mars Rover Team",
    icon: tesla,
    iconBg: "#383E56",
    date: "August 2021 - June 2022",
    points: [
      "Collaborated with the software team and developed a DNN model and customdataset for rock detection.",
      "Enhanced the model accuracy up to 80‑90%.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Codersher",
    description:
      "Developed a Programming community system using Laravel full-stack functionality where user can create, solve, and ask queries about programming problems.",
    tags: [
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: codersher,
    source_code_link: "https://github.com/rezabtuhin/code",
  },
  {
    name: "Chat App",
    description:
      "Developed a mobile messaging application using the Native framework of React & Firebase and Firestore for authentication and database.",
    tags: [
      {
        name: "react_native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "firestore",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/rezabtuhin/chatAppV3",
  },
  {
    name: "Pacman",
    description:
      "Recreated a minimal version ofthe popular game ”Pacman” using Java programming language and Swing library.",
    tags: [
      {
        name: "java",
        color: "pink-text-gradient",
      },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: pacman,
    source_code_link: "https://github.com/rezabtuhin/Pacman",
  },

  {
    name: "Online Learning Platform",
    description:
      "Developed an online learning platform where students can purchase courses and watch course videos uploaded by teachers.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: OLP,
    source_code_link: "https://github.com/rezabtuhin/coursera_clone",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
