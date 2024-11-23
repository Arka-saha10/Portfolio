import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Associate System Engineer",
    company: "IBM India",
    description: `Developed an ERP Tracker Website which works hands-on with SAP Systems. It keeps track of the end-to-end processes of Procurement, Sales & Distribution and Finance. Design, Implement and Maintain real-time data processing and Messaging system to handle high volume of Transaction Data. Achieved an Integrated System which cut the manual labour of Data Storing by 90% and has given Global and Shared 
Platform for data storage.`,
    technologies: ["Node.js", "React.js", "Springboot", "MongoDB"],
  },
  {
    year: "Sept 2023 - Dec 2023",
    role: "Software Developer",
    company: "Selegic India Pvt Ltd",
    description: `Worked in developing Attenta backend using MERN Stack and implemented new features as well as maintained APIs and database. Owned and Developed the backend of the whole social media feed Feature of the Attenta App which is already implemented on US market and has been used by more than 10k+ users all over the world. Also worked in the Remote Tooling Backend Team, which is implemented to make our client’s life easier using salesforce CPQ `,
    technologies: ["Node.js", "MongoDB", "Angular.js", "PostgreSQL"],
  },
  {
    year: "Jan 2023 - July 2023",
    role: "Developer Intern",
    company: "UiPath Inc.",
    description: `○ Worked in development of UiPath Studio and Orchestrator. Developed packages using C# and ASP.NET which has implemented in the later updates of UiPath Enterprise Studio. Optimized the complex Automation processes using Dedicated Cloud Platform and Remote Access of Orchestrator which Reduced the cost manual labour for day to day complex processes by 85% `,
    technologies: ["C#", "ASP.NET", "UiPath Studio", "UiPath Orchestrator"],
  },
  {
    year: "Jan 2022 - Dec 2022",
    role: "Software Developer Intern",
    company: "HighRadius Technologies",
    description: `Worked for the Development of Accounts Payable Portal and dotOne using Springboot for backend and React.js as Frontend. Accounts Payable is a product developed to help Big as well as Mid-Size Businesses for record keeping. Implemented an AI enable system which will monitor past transactions and able to predict an expected date for Payment. AI Model was Integrated using Flask which enhanced the result population process throughout the product.   `,
    technologies: ["Springboot", "React.js", "MySQL", "Selenium", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "BlackBox Chatting Website",
    image: project1,
    description:
      "This product brings privacy to a different level while having a private chat with an individual or a team. It is simply a website where one can chat freely which gets clears as soon as the user Logs out of their system. It leverages Node.js and React.js library to achieve a serverless website where one can join a room using unique room code. Cookies are being accessed to store the messages temporarily which takes out the question of Server out of the equation.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "Web-Socket"],
  },
  {
    title: "Blogging Website with Google OAuth 2.0",
    image: project2,
    description:
      "Developed a full-fledged Blogging Website from scratch using MERN Stack and Hosted the same using Heroku. Technologies used were React, React Router, Node.js, Material UI, Google OAuth 2.0, Google Cloud Console, MongoBD Atlas, Github Actions. The also had high responsiveness and was mobile, desktop and tablet responsive. Implemented features like social logins, authentication, authorization, session management, state management etc.",
    technologies: ["MongoDB", "Express", "Node.js", "React.js","Google OAuth"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind-CSS", "React.js", "Bootstrap"],
  },
  {
    title: "dotOne | HighRadius Winter Intern Project",
    image: project4,
    description:
      "Developed a full-fledged MVC model and AI Integrated Website using Springboot and React to handle huge amount of Transaction data for the fintech company from scratch. Developed under strict supervision of HighRadius Technologies, so it was developed with Corporate Coding Standards and with proper Authentication and Authorization.",
    technologies: ["React.js", "JDBC", "Python", "Flask", "mySQL"],
  },
];

export const CONTACT = {
  address: "Sodepur, Kolkata - 700114",
  phoneNo: "+91 7439266509",
  email: "sahaarka10@gmail.com",
};
