export interface CardProps {
    card: {
      index?: number;
      title?: string;
      description?: string;
      img?: string;
      tools?: string[];
      mainUrl?: string;
      githubUrl?: string;
    };
  }

export const navLinks = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Projects",
        href: "/projects"
    },
    {
        label: "Archive",
        href: "/archive"
    }
];

import { FaGithub, FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const socialLinks = [
    {
        icon: <FaLinkedin size={25} />,
        href: "https://www.linkedin.com/in/micah-tidball-a1b28231b/"
    },
    {
        icon: <BiLogoGmail size={25} />,
        href: "mailto:tidball.code@gmail.com"
    },
    {
        icon: <FaDiscord size={25} />,
        href: "https://discord.gg/RsX9EYacmM"
    },
    {
        icon: <FaInstagram size={25} />,
        href: "https://www.instagram.com/micahtid/"
    },
    {
        icon: <FaGithub size={25} />,
        href: "https://github.com/Not-Micah"
    },
];

import { FaPaintBrush, FaGamepad, FaMobile, FaUserGraduate, FaGlobeAsia, FaClipboard } from "react-icons/fa";

export const experiences = [
    {
        title: "Graphic Designer",
        icon: <FaPaintBrush size={15} />,
        date: "2019-2022",
        description: (
            <p>During the pandemic, I grew my <a className="underline" href="https://www.youtube.com/@micah27">Minecraft YouTube channel</a> to a peak of 2.2k subscribers by creating and posting over 40 videos. I designed custom thumbnails for each video, mastering graphic design techniques using <a className="underline" href="https://www.getpaint.net/">Paint.net</a>.</p>
        )
    },
    {
        title: "Game Developer",
        icon: <FaGamepad size={15} />,
        date: "2022",
        description: (
            <p>During the summer of my freshman year, I completed a Python course from <a className="underline" href="https://codewithmosh.com/">Code with Mosh</a>, where I gained a strong foundation in key programming concepts, including object-oriented programming. I applied this knowledge to develop my first project, <a className="underline" href="./projects">'The Impossible Platformer,'</a> a Mario-style game with various unique features, using Pygame and Python.</p>
        )
    },
    {
        title: "Mobile App Developer",
        icon: <FaMobile size={15} />,
        date: "2022-2023",
        description: (
            <p>Following my experience in game development, I transitioned into mobile app development. Utilizing Python and libraries like Kivy and KivyMD, I published four applications on the Google Play Store under <a className="underline" href="./projects">'The Simple Work Series,'</a> a collection of productivity apps. I also explored other programming languages, including Kotlin, to broaden my development expertise.</p>
        )
    },
    {
        title: "A-Level Computer Science Student",
        icon: <FaUserGraduate size={15} />,
        date: "2023-Present",
        description: (
            <p>After completing my IGCSEs and exploring programming independently, I chose Computer Science as one of my A-Level subjects. My dedication led to achieving the <a className="underline" href="./blogs">highest mark in Indonesia for the AS-Level</a>. I am currently completing my A-Levels, which include Mathematics and Physics, further enhancing my analytical and technical skills.</p>
        )
    },
    {
        title: "Web Developer",
        icon: <FaGlobeAsia size={15} />,
        date: "2023-Present",
        description: (
            <p>While I enjoyed game and mobile app development, I discovered a stronger passion for web development. Starting with basic HTML and CSS, I quickly advanced to mastering modern technologies, including React, Next.js, Tailwind CSS, and Firebase/MongoDB. I have collaborated on <a className="underline" href="./projects">various projects</a>, led development teams, and completed internships, and I am currently working on new personal projects.</p>
        )
    },
    {
        title: "Currently Learning",
        icon: <FaClipboard size={15} />,
        date: "2024-Present",
        description: (
            <p>With a growing passion for Computer Science, I am currently exploring new domains, including machine learning, to further enhance my knowledge and skill set.</p>
        )
    },
];


export const projects = [
    {
        index: 0,
        title: "Me2",
        description: "Developed a student chat app that matches users based on shared interests. Features include private chats, global chatrooms, and study groups. Managed data with Firebase.",
        img: "./me2.png",
        tools: ["TypeScript", "React", "TailwindCSS", "Firebase"],
        mainUrl: "https://me2-register.vercel.app/",
        githubUrl: "https://github.com/Not-Micah/Me2"
    },
    {
        index: 1,
        title: "Verbum",
        description: "Created a Bible verse filtering tool with over 300 verses stored in MongoDB. Users can filter by author or book, view book summaries, and use an AI chatbot powered by the Gemini API.",
        img: "./verbum.png",
        tools: ["TypeScript", "React", "TailwindCSS", "MongoDB", "GeminiAPI"],
        mainUrl: "https://verbum-beta.vercel.app/",
        githubUrl: "https://github.com/Not-Micah/verbum"
    },
    {
        index: 2,
        title: "Versle",
        description: "Developed a Wordle-inspired web app for guessing Bible verses. Used MongoDB for storing daily verses and implemented local storage for tracking user stats.",
        img: "./versle.png",
        tools: ["TypeScript", "React", "TailwindCSS", "MongoDB"],
        mainUrl: "https://versle.vercel.app/play",
        githubUrl: "https://github.com/Not-Micah/versle"
    },
    {
        index: 3,
        title: "Spotify Clone",
        description: "Developed a Spotify-inspired music app with features like adding songs, creating playlists, and playback controls. Included user account management using Supabase.",
        img: "./spotify_clone.png",
        tools: ["TypeScript", "React", "TailwindCSS", "Supabase"],
        mainUrl: "",
        githubUrl: "https://github.com/Not-Micah/spotify-clone"
    },
    {
        index: 4,
        title: "Restoring Rainbows",
        description: "Developed a website for the Hearts for Hope non-profit. Added an admin panel to update Firebase backend data and front-end sections like executive members, blogs, and branches.",
        img: "./restoring_rainbows.png",
        tools: ["TypeScript", "React", "TailwindCSS", "Firebase", "InstagramAPI", "GoogleMapsAPI"],
        mainUrl: "https://www.restoringrainbows.org/",
        githubUrl: "https://github.com/Not-Micah/restoring-rainbows"
    },
    {
        index: 5,
        title: "Hearts for Hope",
        description: "Developed a website for the Hearts for Hope non-profit. Added an admin panel to update Firebase backend data and front-end sections like statistics and posts.",
        img: "./hearts_for_hope.png",
        tools: ["TypeScript", "React", "TailwindCSS", "Firebase", "GoogleMapsAPI"],
        mainUrl: "https://hhearts4hope.vercel.app/",
        githubUrl: "https://github.com/Not-Micah/hhearts4hope"
    },
    {
        index: 6,
        title: "Je Ne Sais Pas",
        description: "Created a web platform for IGCSE 0520 French writing, offering AI-driven feedback on translation errors to enhance language skills.",
        img: "./je_ne_sais_pas.png",
        tools: ["TypeScript", "React", "TailwindCSS", "GeminiAPI"],
        mainUrl: "https://je-ne-sais-pas.vercel.app/",
        githubUrl: "https://github.com/Not-Micah/je-ne-sais-pas"
    },
    {
        index: 7,
        title: "Simple Work Series",
        description: "Published four mobile apps on the Play Store: a to-do list, pomodoro timer, habit tracker, and daily quote generator (discontinued). The apps were built using Python, Kivy/KivyMD, and packaged with Buildozer, achieving over 500 downloads.",
        img: "./simple_work_series.png",
        tools: ["Python", "Kivy", "KivyMD", "Buildozer"],
        mainUrl: "https://play.google.com/store/apps/developer?id=Coder27&hl=en",
        githubUrl: ""
    },
    {
        index: 8,
        title: "The Impossible Platformer",
        description: "Created a platformer game inspired by Mario using Pygame. Levels are generated from data in Excel sheets using Openpyxl. Published on Itch.io.",
        img: "./the_impossible_platformer.png",
        tools: ["Python", "Pygame", "Openpyxl"],
        mainUrl: "https://notmicah.itch.io/the-impossible-platformer",
        githubUrl: "https://github.com/Not-Micah/platformer"
    },
    {
        index: 9,
        title: "Micah Builds",
        description: "The previous iteration of my portfolio, built with React, TailwindCSS, and Next.js. A minimalist design showcasing my work and skills.",
        img: "./micah_builds.png",
        tools: ["TypeScript", "React", "TailwindCSS"],
        mainUrl: "https://micah-builds.vercel.app/",
        githubUrl: "https://github.com/Not-Micah/latest-portfolio"
    },
    {
        index: 10,
        title: "Facial Recognition",
        description: "Built a face recognition tool with a Kivy interface. Improved the performance of an existing face recognition library.",
        img: "./face_recognition.png",
        tools: ["Python", "Tkinter"],
        mainUrl: "",
        githubUrl: "https://github.com/Not-Micah/py-face-recognition"
    },
    {
        index: 11,
        title: "Flappy Bird Clone",
        description: "Built a Flappy Bird clone using Java and the Graphics library as a final project for the 2024 Raikes Summer Program.",
        img: "./flappy_bird_clone.png",
        tools: ["Java", "Graphics"],
        mainUrl: "https://drive.google.com/file/d/1ZMYd_0RLmwQZFd4AQv71bPHDsaOYxLjP/view",
        githubUrl: ""
    },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

type ArchiveFile = {
    type: "file";
    star?: boolean;
    title: string;
    file: string;
  };
  
type ArchiveFolder = {
type: "folder";
title: string;
items: ArchiveItem[]; 
};

type ArchiveItem = ArchiveFolder | ArchiveFile;
  
export const archive: ArchiveItem[] = [
{
    type: "folder",
    title: "Academics",
    items: [
    {
        type: "folder",
        title: "Grades",
        items: [
        { type: "file", star: true, title: "IGCSE Grades", file: "https://drive.google.com/file/d/1nJK6WSWLWgPpC-ShXYs7sMWULa5B8lkn/view" },
        { type: "file", star: true, title: "AS-Level Grades", file: "https://drive.google.com/file/d/1gKJ0JIFkBcMmvZMIQb6xkfbU5RkB-jtL/view" },
        { type: "file", title: "SAT Report", file: "https://drive.google.com/file/d/1bv4Po27kogfg7L6550gKqGFp6sDm7P1k/view" }
        ],
    },
    {
        type: "folder",
        title: "Honors",
        items: [
        { type: "file", star: true, title: "Highest Mark in Indonesia for IGCSE Global Perspectives", file: "https://drive.google.com/file/d/1mB7bh5zUEtK_ta1uw44kMNy_HjZjRbb5/view" },
        { type: "file", star: true, title: "Highest Mark in Indonesia for AS-Level Computer Science", file: "" },
        { type: "file", title: "French, English Literature and Physical Education Student of the Month", file: "" }
        ],
    },
    ],
},
{
    type: "folder",
    title: "Extracurriculars",
    items: [
    {
        type: "folder",
        title: "Inventions",
        items: [
        { type: "file", title: "STEM Club's Maurice's Machine", file: "https://drive.google.com/drive/folders/1bCklmb_C8uMz7_FPmOMJswpEOwqBbYfg?usp=drive_link" },
        { type: "file", title: "Robotic's Club Mars Rover", file: "https://drive.google.com/drive/folders/1AI35gBubdA2GVmqpVqwqDsl6At2fetFx?usp=drive_link" },
        ],
    },
    {
        type: "folder",
        title: "Organized Events",
        items: [
        { type: "file", title: "SES Prom 2023", file: "https://www.instagram.com/surabayaeuropeanschool/reel/Ct83j2Xh2hL/" },
        { type: "file", title: "SES STEM Club NJIS", file: "https://www.instagram.com/surabayaeuropeanschool/reel/C0d8m4ZB0_U/" },
        { type: "file", title: "SES Halloween Parade 2023", file: "https://www.instagram.com/reel/CzXW8buBOdc/" },
        { type: "file", title: "SES Fun Day 2024", file: "https://www.instagram.com/surabayaeuropeanschool/reel/C9U2HHKyGNz/" },
        { type: "file", star: true, title: "SES Science Fair 2024", file: "https://www.instagram.com/surabayaeuropeanschool/reel/C2qt6y7hmmm/" },
        { type: "file", star: true, title: "SES International Day 2024", file: "https://www.instagram.com/reel/C5qTSkOBLMz/" },
        { type: "file", title: "SES Local Science Fair 2025", file: "" },
        ],
    },
    {
        type: "folder",
        title: "Awards",
        items: [
        { type: "file", title: "Python Course Completion (CS)", file: "https://drive.google.com/file/d/10OxzMB7x_nEKyYH8yKNZF2el-jPjbr_v/view" },
        { type: "file", title: "HTML & CSS Course Completion (CS)", file: "https://drive.google.com/file/d/1uALeeopxeM_C4q3JDZ_Kq1giRWZHDnQI/view" },
        { type: "file", title: "NodeJS Course Completion (CS)", file: "https://drive.google.com/file/d/1hSAQnKFyMxT8FLDgKm5TnYsdmkZkqOka/view" },
        { type: "file", star: true, title: "Restoring Rainbows Internship Certificate (CS)", file: "https://drive.google.com/file/d/1tNAmcyEdU-xKXT2XYBvU9Pv1cnsgLjcd/view" },
        { type: "file", star: true, title: "Hearts for Hope Internship Certificate (CS)", file: "https://drive.google.com/file/d/1PfUCpSO-GJ77vPvUE7JDop8eWkhBp6P9/view" },
        { type: "file", title: "UKMT Bronze Award (Math)", file: "" },
        { type: "file", title: "AMO Bronze Award (Math)", file: "https://drive.google.com/file/d/1prXsFKgxnr7Gv5oprqe9G60nSw3AVoh0/view" },
        { type: "file", title: "MMWC School Topper (Math)", file: "https://drive.google.com/file/d/1Z1LuYsSmxly-6OaxglI7KbS_pOJk5rLC/view" },
        { type: "file", star: true, title: "MMWC Grandfinalist Placement (Math)", file: "https://drive.google.com/file/d/1QANdOB5bJAlreYmyI0_FdHQzfLp2lny1/view" },
        { type: "file", title: "SIS Participation Award (Swimming)", file: "https://drive.google.com/file/d/1varsoGbQS3cltgsaVJ6dMsR53t9SwMNg/view" },
        { type: "file", title: "Rocca 2023 Breaststroke Placement (Swimming)", file: "https://drive.google.com/file/d/109xTztARQaQ0Z-ojgtAFAn8RdAx1rGUe/view" },
        { type: "file", title: "SIS 2023 Freestyle Placement (Swimming)", file: "https://drive.google.com/file/d/1WOfrariW60m4LjNqJAfSpzZFRK3KjpVJ/view" },
        { type: "file", title: "SIS 2024 Freestyle Placement (Swimming)", file: "https://drive.google.com/file/d/1chColOg64vgk80rR0KAqhwRr_UkayZmW/view" },
        { type: "file", title: "SES Swim Gala 2024 Placement (Swimming)", file: "https://drive.google.com/file/d/1WzqoI_7odqfT6TeU6JNtt2CRxKvEVYDR/view" },
        { type: "file", title: "IAYP Bronze (Misc)", file: "" },
        ],
    },
    ],
},
];
