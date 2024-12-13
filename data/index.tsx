export interface CardProps {
    card: {
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
        link: "/about"
    },
    {
        label: "Projects",
        link: "/projects"
    },
    {
        label: "Blog",
        link: "/blog"
    }
];

import { FaGithub, FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const socialLinks = [
    {
        icon: <FaLinkedin size={25} />,
        link: ""
    },
    {
        icon: <BiLogoGmail size={25} />,
        link: ""
    },
    {
        icon: <FaDiscord size={25} />,
        link: ""
    },
    {
        icon: <FaInstagram size={25} />,
        link: ""
    },
    {
        icon: <FaGithub size={25} />,
        link: ""
    },
];

export const projects = [
    {
        title: "Me2",
        description: "Developed a student chat app that matches users based on shared interests. Features include private chats, global chatrooms, and study groups. Managed data with Firebase.",
        img: "./me2.png",
        tools: ["TypeScript", "React", "Firebase"],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "Verbum",
        description: "Created a Bible verse filtering tool with over 300 verses stored in MongoDB. Users can filter by author or book, view book summaries, and use an AI chatbot powered by the Gemini API.",
        img: "./verbum.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "Versle",
        description: "Developed a Wordle-inspired web app for guessing Bible verses. Used MongoDB for storing daily verses and implemented local storage for tracking user stats.",
        img: "./versle.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "Spotify Clone",
        description: "Developed a Spotify-inspired music app with features like adding songs, creating playlists, and playback controls. Included user account management using Supabase.",
        img: "./spotify_clone.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "Restoring Rainbows",
        description: "Developed a website for the Hearts for Hope non-profit. Added an admin panel to update Firebase backend data and front-end sections like executive members, blogs, and branches.",
        img: "./restoring_rainbows.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "Hearts for Hope",
        description: "Developed a website for the Hearts for Hope non-profit. Added an admin panel to update Firebase backend data and front-end sections like statistics and posts.",
        img: "./hearts_for_hope.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "Simple Work Series",
        description: "Published four mobile apps on the Play Store: a to-do list, pomodoro timer, habit tracker, and daily quote generator (discontinued). The apps were built using Python, Kivy/KivyMD, and packaged with Buildozer, achieving over 500 downloads.",
        img: "./simple_work_series.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "The Impossible Platformer",
        description: "Created a platformer game inspired by Mario using Pygame. Levels are generated from data in Excel sheets using Openpyxl. Published on Itch.io.",
        img: "./the_impossible_platformer.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "Micah Builds",
        description: "The previous iteration of my portfolio, built with React, TailwindCSS, and Next.js. A minimalist design showcasing my work and skills.",
        img: "./micah_builds.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "Facial Recognition",
        description: "Built a face recognition tool with a Kivy interface. Improved the performance of an existing face recognition library.",
        img: "./face_recognition.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
    {
        title: "Flappy Bird Clone",
        description: "Built a Flappy Bird clone using Java and the Graphics library as a final project for the 2024 Raikes Summer Program.",
        img: "./flappy_bird_clone.png",
        tools: [],
        mainUrl: "",
        githubUrl: ""
    },
];