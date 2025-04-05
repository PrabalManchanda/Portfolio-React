const CONFIG = {
    github: {
      username: "Prabal31", // REQUIRED
      sortBy: "stars",
      limit: 10,
      exclude: {
        forks: true,
        projects: [],
      },
    },
    social: {
      linkedin: "https://www.linkedin.com/in/prabal-manchanda/",
      twitter: "",
      facebook: "",
      instagram: "",
      dribbble: "",
      behance: "",
      medium: "",
      dev: "",
      website: "",
      phone: "",
      email: "manchandaprabal878@email.com",
    },
    resume: {
      fileUrl: "", // optional
    },
    skills: ["JavaScript", "React", "Node.js", "Tailwind CSS"],
    experiences: [],
    education: [],
    externalProjects: [],
    blog: {
      source: "", // medium | dev.to | hashnode
      username: "",
      limit: 2,
    },
    themeConfig: {
      defaultTheme: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    pageMetadata: {
      title: "Prabh Manchanda", 
      description: "My developer portfolio",
    },
  };
  
  export default CONFIG;
  