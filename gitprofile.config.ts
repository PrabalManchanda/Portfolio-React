const CONFIG = {
    github: {
      username: 'Prabal31',
      sortBy: 'stars',
      limit: 12,
      exclude: {
        forks: true,
        projects: [],
      },
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/prabal-manchanda/',
      twitter: '',
      facebook: '',
      instagram: '',
      dribbble: '',
      behance: '',
      medium: '',
      dev: '',
      website: '',
      phone: '',
      email: 'manchandaprabal878@email.com',
    },
    resume: {
      fileUrl: '', // Add your resume link here if available
    },
    skills: [
        'Python',
        'Java',
        'JavaScript',
        'TypeScript',
        'React.js',
        'Node.js',
        'Azure',
        'OpenAI API',
        'MongoDB',
        'Firebase',
        'Spring Boot',
        'MySQL',
        'PHP',
        'Java',
        'Swift',
        'Docker',
        'Tailwind CSS',
    ],
    experiences: [
      {
        company: 'GenieAInow',
        position: 'Software Developer',
        from: 'December 2024',
        to: 'Present',
        companyLink: '',
      },
      {
        company: 'Skill Squirrel',
        position: 'AI Developer',
        from: 'September 2024',
        to: 'December 2024',
        companyLink: '',
      },
      {
        company: 'Zeuty',
        position: 'BackEnd Developer',
        from: 'June 2024',
        to: 'November 2024',
        companyLink: '',
      },
      {
        company: 'Skill Squirrel',
        position: 'Junior Software Developer',
        from: 'January 2024',
        to: 'April 2024',
        companyLink: '',
      },
      {
        company: 'Headstarter AI',
        position: 'Software Developer Fellow',
        from: 'July 2024',
        to: 'Present',
        companyLink: '',
      },
    ],
    certifications: [
      { name: 'Node.js', link: '' },
      { name: 'Python 3', link: '' },
      { name: 'Microsoft Azure', link: '' },
      { name: 'DevOps Course', link: '' },
      { name: 'Ruby', link: '' },
      { name: 'Lua Course', link: '' },
      { name: 'JavaScript', link: '' },
      { name: 'React.js', link: '' },
      { name: 'Data and Programming Foundation for AI', link: '' },
    ],
    educations: [
      {
        institution: 'Sheridan College',
        degree: 'Software Development & Network Engineering',
        from: '2022',
        to: '2025',
      },
    ],
    publications: [],
    blog: {
      source: '',
      username: '',
      limit: 0,
    },
    googleAnalytics: {
      id: '',
    },
    hotjar: {
      id: '',
      snippetVersion: 6,
    },
    projects: {
      github: {
        display: true,
        header: 'GitHub Projects',
        mode: 'automatic',
        automatic: {
          sortBy: 'stars',
          limit: 12,
          exclude: {
            forks: true,
            projects: [],
          },
        },
        manual: {
          projects: [],
        },
      },
      external: {
        header: 'Featured Projects',
        projects: [
          {
            title: 'PhrasePerfect',
            description:
              'React-based app featuring AI-powered text utilities (Paraphraser, Grammar Checker, Summarizer, etc.) built with GeminiAI and hosted on Firebase + MongoDB.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=PhrasePerfect',
            link: 'https://example.com',
          },
          {
            title: 'Portfolio Builder',
            description:
              'Node.js & OpenAI-powered app to generate personal portfolios with an intuitive frontend and GPT-4 integration.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Portfolio+Builder',
            link: 'https://example.com',
          },
          {
            title: 'Virtual Bookstore',
            description:
              'Built using Java Spring Boot + MySQL + Spring Security with user role access and secure REST APIs.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Virtual+Bookstore',
            link: 'https://example.com',
          },
          {
            title: 'Scrabble Game',
            description:
              'Python-based game project focusing on UI interaction, word validation, and scoring with custom logic.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Scrabble+Game',
            link: 'https://example.com',
          },
          {
            title: 'My Portfolio',
            description:
              'Personal portfolio built using Angular, NodeJs, MongoDb. Features real-time updates and dynamic routing.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=My+Portfolio',
            link: 'https://example.com',
          },
        ],
      },
    },
    themeConfig: {
      defaultTheme: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      displayAvatarRing: true,
      themes: [
        'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
        'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween',
        'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy',
        'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn',
        'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
      ],
      customTheme: {
        primary: '#4ade80',
        secondary: '#0ea5e9',
        accent: '#facc15',
        neutral: '#1f2937',
        'base-100': '#ffffff',
        '--rounded-box': '1rem',
        '--rounded-btn': '1rem',
      },
    },
    pageMetadata: {
      title: 'Prabh Manchanda | Portfolio',
      description:
        "Hey there! I'm Prabh Manchanda, a passionate developer crafting next-gen software experiences.",
      imageURL:
        'https://via.placeholder.com/1200x630.png?text=Prabh+Manchanda+Portfolio',
    },
    footer: `Made with ❤️ using <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a>`,
    enablePWA: true,
  };
  
  export default CONFIG;
  