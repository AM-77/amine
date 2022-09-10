import { atom } from "nanostores";

const works = [
  // {
  //   "title": "Nyno-UI",
  //   "description": "A complete CSS framework based on flexbox.",
  //   "links": {
  //     "source_code": "https://github.com/AM77-Dev/Nyno-UI",
  //     "demo": "https://docs.medamine.now.sh/"
  //   },
  //   "tags": ["SCSS"],
  //   "date": "May/2019"
  // },
  {
    title: "Read Me (WIP)",
    description: "An Algerian books selling plateform",
    links: {
      source_code: "https://github.com/ReadMe-dz/readme",
      "Screen Shots": "https://amine.js.org/readme/screenshots.html",
    },
    tags: [
      "Node",
      "Express",
      "MongoDB",
      "React",
      "SCSS",
      "JavaScript",
      "TypeScript",
    ],
    date: "Jan/2020",
  },
  {
    title: "SOS Animals DZ",
    description: "A web platform for helping animals in Algerian.",
    links: {
      source_code: "https://github.com/sos-animals-dz/sos-animals",
      demo: "https://sos-animals.vercel.app/",
    },
    tags: ["Firebase", "React", "CSS", "TypeScript"],
    date: "Dec/2020",
  },
  {
    title: "Rigel",
    description: "A Free portfolio template for developers and designers.",
    links: {
      source_code: "https://github.com/AM-77/rigel",
      demo: "https://rigel.vercel.app/",
    },
    tags: ["React", "i18next", "styled-components"],
    date: "Dec/2020",
  },
  {
    title: "react-datepickerrz",
    description:
      "With double r & z, a customizable, zero-dependency datepicker component for React",
    links: {
      source_code: "https://github.com/AM-77/react-datepickerrz",
      demo: "https://am-77.github.io/react-datepickerrz/",
    },
    tags: ["React", "JavaScript"],
    date: "May/2020",
  },
  {
    title: "react-coder",
    description:
      "A lightweight, reusable code wrapper & editor component for react.",
    links: {
      source_code: "https://github.com/AM-77/react-coder",
      demo: "https://am-77.github.io/react-coder/",
    },
    tags: ["React", "TypeScript"],
    date: "May/2020",
  },
  {
    title: "react-floating-buttons",
    description:
      "A lightweight (zero-dependency), customizable and animated react floating buttons",
    links: {
      source_code: "https://github.com/AM-77/react-floating-buttons",
      demo: "https://am-77.github.io/react-floating-buttons-demo/",
    },
    tags: ["React", "JavaScript"],
    date: "Apr/2020",
  },
  {
    title: "el-mesa",
    description:
      "A peer to peer chat room with react, node, express and socket.io,",
    links: {
      client_side: "https://github.com/AM-77/el-mesa",
      server_side: "https://github.com/AM-77/el-mesa-server",
      demo: "https://el-mesa.netlify.app/",
    },
    tags: ["Node", "Express", "SocketIO", "React", "JavaScript"],
    date: "Jun/2020",
  },
  {
    title: "lil-urls",
    description:
      "A Custom URL Shortener, with node, express, sqlite3, typescript & react.",
    links: {
      client_side: "https://github.com/AM-77/lil-urls",
      server_side: "https://github.com/AM-77/lil-urls-server",
      demo: "https://lil-urls.vercel.app/",
    },
    tags: ["Node", "Express", "SQLite3", "React", "JavaScript"],
    date: "Jul/2020",
  },
  {
    title: "savednotes",
    description:
      "A web app to save & share notes. w/ node, express, react & MySQL. (It might take sometime to load, due to the server hibernating - 🤷  free heroku - )",
    links: {
      source_code: "https://github.com/AM-77/savednotes",
      demo: "https://savednotes.vercel.app",
    },
    tags: ["Node", "Express", "MySQL", "React"],
    date: "Jan/2020",
  },
  {
    title: "letra",
    description:
      "A Lyrics application. (It might take sometime to load, due to the server hibernating - 🤷  free heroku - )",
    links: {
      client_side: "https://github.com/AM-77/letra",
      server_side: "https://github.com/AM-77/letra-server",
      demo: "https://letra-one.vercel.app",
    },
    tags: ["Node", "Express", "React", "JavaScript"],
    date: "Jul/2020",
  },
  {
    title: "border-radius-generator",
    description: "A border-radius generator with react.",
    links: {
      source_code: "https://github.com/AM-77/border-radius-generator",
      demo: "https://am-77.github.io/border-radius-generator/",
    },
    tags: ["React", "TypeScript"],
    date: "Jun/2020",
  },
  {
    title: "DET",
    description:
      "'Distribution Des Equipments' A web app for selling industrial equipments.",
    links: {
      source_code: "https://github.com/AM-77/DET",
      demo: "http://det-distribution.dz",
    },
    tags: ["Java", "SpringBoot", "MySQL", "JavaScript"],
    date: "Apr/2020",
  },
  {
    title: "Liam",
    description: "A portfolio template for professional photographer.",
    links: {
      source_code: "https://github.com/AM-77/HTML5-Templates/tree/master/Liam",
      demo: "https://liam-iota.vercel.app",
    },
    tags: ["Template"],
    date: "Aug/2020",
  },
  {
    title: "laoders",
    description:
      "A collection of open source, animated, simple and easy to use CSS loaders.",
    links: {
      source_code: "https://github.com/AM-77/loaders",
      demo: "https://loaders.vercel.app/",
    },
    tags: ["React", "TypeScript", "SCSS"],
    date: "Nov/2020",
  },
];

export const worksStore = atom(works);

export default worksStore;
