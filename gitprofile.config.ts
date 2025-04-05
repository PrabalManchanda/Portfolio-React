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
        displayAvatarRing: true, // optional
        themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
      
        // optional, remove or customize
        customTheme: {
          primary: "#570df8",
          secondary: "#f000b8",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
        },
      },
      
    pageMetadata: {
        title: "Prabh Manchanda", 
        description: "My developer portfolio",
        imageURL: "https://via.placeholder.com/1200x630.png?text=Prabh+Manchanda+Portfolio"
    },
      
  };
  
  export default CONFIG;
  