// All portfolio content lives here, so edit this file to update the site.

export const profile = {
  name: "Shashika Kulasekara",
  fullName: "Shashika Nisansala Kulasekara",
  shortName: "Shashika",
  role: "Full-Stack Developer",
  email: "sashikanisansala845@gmail.com",
  github: "https://github.com/shashikaNis",
  linkedin: "https://www.linkedin.com/in/sashika-nisansala-0a1055323/",
  cv: "/cv.pdf",
  photo: "/profile.webp",
  availability: "Seeking a paid internship for industrial training",
};

export const stats = [
  { value: "4", label: "Projects built" },
  { value: "2", label: "Solo end-to-end projects" },
  { value: "10", label: "Developers on my team project" },
  { value: "2027", label: "Expected HNDIT completion" },
];

export type SkillIcon = "mobile" | "database" | "code" | "tool";

export const skills: { title: string; icon: SkillIcon; items: string[] }[] = [
  {
    title: "Mobile",
    icon: "mobile",
    items: ["Flutter (Dart)", "Android (Java)", "Android (Kotlin)", "View Binding", "FusedLocationProvider", "Google Maps SDK"],
  },
  {
    title: "Backend & Cloud",
    icon: "database",
    items: ["Firebase Auth", "Firestore", "Cloud Messaging", "Cloud Functions", "NestJS", "Node.js", "MySQL", "REST APIs", "JWT"],
  },
  {
    title: "Languages",
    icon: "code",
    items: ["Dart", "Java", "Kotlin", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "XML"],
  },
  {
    title: "Frameworks & Tools",
    icon: "tool",
    items: ["React", "Next.js", "TypeORM", "Figma", "Android Studio", "Git & GitHub", "Docker"],
  },
];

export const featuredProject = {
  kicker: "Featured · Personal full-stack project",
  title: "Fuel Station Management System",
  summary:
    "An inventory-linked fuel reservation platform I architected and built independently, end to end, with a web app for vehicle owners and a mobile app for station staff.",
  flow: [
    "Vehicle owner checks the live stock map and pre-books fuel",
    "A token is issued only once the volume is reserved in the tank",
    "Pump attendant scans the licence plate with on-device OCR",
    "Tank levels update and stream live to station staff",
  ],
  highlights: [
    "Validation logic issues a token only when the requested volume is actually reserved in a station's tank, which closes off overbooking",
    "Flutter app for station managers and pump attendants with on-device licence-plate OCR",
    "React / Next.js web app for vehicle owners with a stock map and pre-booking",
    "NestJS + TypeORM backend (auth, vehicles, stations, reservations) with JWT/bcrypt security, Firestore real-time stock streaming and Docker deployment",
  ],
  tags: ["Flutter", "NestJS", "TypeORM", "MySQL", "Firestore", "React", "Next.js", "Google Maps API", "Docker", "Figma"],
  link: "https://github.com/shashikaNis",
};

export type ProjectIcon = "pin" | "calendar" | "globe";

export const projects: { title: string; meta: string; icon: ProjectIcon; description: string; tags: string[] }[] = [
  {
    title: "Stay Safe Route (SSR)",
    meta: "Individual · HNDIT",
    icon: "pin",
    description:
      "Two connected Android apps, a child-device Beacon app and a Parent app, for real-time GPS tracking, safe-route deviation alerts and multi-child profiles. It uses a battery-optimised foreground location service, the Google Maps SDK and Firebase (Auth, Firestore, Cloud Messaging, Cloud Functions). I carried it solo from requirements to testing.",
    tags: ["Java", "XML", "Android Studio", "Firebase", "Google Maps API", "Figma"],
  },
  {
    title: "Expire Guard",
    meta: "Team of 10",
    icon: "calendar",
    description:
      "An app that tracks household product expiry dates. I built the Android screens (registration/login, add/edit product, home list) in Kotlin with Firebase Auth and Firestore. I also wrote scheduled Cloud Functions in TypeScript that run three times a day and send personalised FCM push alerts for products expiring within a week.",
    tags: ["Kotlin", "View Binding", "Firebase", "Cloud Functions", "TypeScript", "Node.js"],
  },
  {
    title: "Personal Portfolio Website",
    meta: "Personal · This site",
    icon: "globe",
    description:
      "The site you're looking at: a responsive single-page portfolio built with Next.js (App Router) and TypeScript. It has a dark/light theme that remembers your choice, scroll-reveal animations and optimised images and fonts. All content is driven from a single data file, and it's deployed on Vercel with automatic deploys from GitHub.",
    tags: ["Next.js", "React", "TypeScript", "CSS", "Vercel", "Git & GitHub"],
  },
];

export const education = [
  {
    date: "Now",
    title: "Seeking an industrial training placement",
    org: "Paid internship · Full-stack / Mobile / Web",
    text: "Academic coursework is complete, and I'm looking for a placement to complete my mandatory industrial training.",
  },
  {
    date: "2023 · 2027 (expected)",
    title: "Higher National Diploma in Information Technology (HNDIT)",
    org: "SLIATE, ATI Anuradhapura · Department of Information Technology",
    text: "Studying software development, databases, and web and mobile application development. Includes the individual ICT project Stay Safe Route.",
  },
];
