const CONFIG= {
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
      linkedin: 'prabal-manchanda',
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
      fileUrl: '', // Add your resume URL here
    },
    skills: [
      'Python', 'Java', 'JavaScript', 'TypeScript', 'React.js', 'Node.js',
      'Spring Boot', 'MongoDB', 'MySQL', 'Firebase',
      'Azure', 'OpenAI API', 'Docker', 'Git', 'Tailwind CSS', 'SQL', 'HTML', 'CSS'
    ],
    experiences: [
      {
        company: 'GenieAInow',
        position: 'Software Developer',
        from: 'December 2024',
        to: 'Present',
        companyLink: '',
        description: [
          '🚀 Spearheaded AI/ML innovations using LLMs, Python, Azure, and OpenAI, improving platform performance and engagement.',
          '🛠️ Automated AI deployment pipelines with Azure DevOps, reducing delivery time and enhancing reliability.',
          '⚙️ Fine-tuned models and leveraged cloud computing for faster inference and improved scalability.',
          '🧠 Integrated NLP and deep learning solutions, adding intelligent AI-powered user features.',
          '🧪 Led MLOps architecture planning, boosting system stability and AI deployment efficiency.'
        ]
      },
      {
        company: 'Skill Squirrel',
        position: 'AI Developer',
        from: 'September 2024',
        to: 'December 2024',
        companyLink: '',
        description: [
          '🤖 Integrated OpenAI’s API with React and Azure to power conversational AI features.',
          '🧩 Built serverless apps on Azure Functions with 99.9% uptime and optimized compute cost.',
          '📈 Enhanced NLP features for smarter chatbots and more human-like conversation.',
          '🚦 Refactored APIs to improve response time and system efficiency by 30%.'
        ]
      },
      {
        company: 'Zeuty',
        position: 'BackEnd Developer',
        from: 'June 2024',
        to: 'November 2024',
        companyLink: '',
        description: [
          '🔧 Built REST APIs supporting seamless front-end interactions.',
          '🗃️ Designed and managed scalable Azure SQL databases for dynamic data-driven systems.',
          '📊 Optimized SQL performance for faster queries and analytics.',
          '🔄 Worked in an agile team with Git version control and CI/CD pipelines.'
        ]
      },
      {
        company: 'Skill Squirrel',
        position: 'Junior Software Developer',
        from: 'January 2024',
        to: 'April 2024',
        companyLink: '',
        description: [
          '💡 Researched and applied Node.js APIs and Azure Prompt Flow to streamline new features.',
          '🌐 Built and integrated features into a live production app with an entirely remote team.',
          '🛠️ Maintained dev environments independently, showing strong self-management.',
          '📁 Used GitHub & Jira for team coordination, issue tracking, and deployment tasks.'
        ]
      },
      {
        company: 'Headstarter AI',
        position: 'Software Developer Fellow',
        from: 'July 2024',
        to: 'Present',
        companyLink: '',
        description: [
          '🏅 Selected for a competitive fellowship program for software innovation.',
          '🌍 Contributed to open-source projects, collaborating on GitHub.',
          '🚀 Participated in hackathons, rapidly building prototypes in 24–48 hours.',
          '📈 Working on a startup-focused capstone project involving business + tech solutions.'
        ]
      }
    ],
    certifications: [
      { name: 'Python 3', link: '/Certificates/Python_certificate.pdf' },
      { name: 'JavaScript', link: '/Certificates/JavaScript_Certificate.pdf' },
      { name: 'Microsoft Azure', link: '/Certificates/Microsoft%20Azure_certificate.pdf' }, // encoded space
      { name: 'Node.js', link: '/Certificates/Node_certificate.pdf' },
      { name: 'React.js', link: '/Certificates/React_Certificate.pdf' },
      { name: 'Ruby', link: '/Certificates/Ruby_Certification.pdf' },
      { name: 'Lua', link: '/Certificates/Lua_Certification.pdf' },
      { name: 'DevOps Course', link: '/Certificates/DevOps_Certification.pdf' },
      {
        name: 'Data and Programming Foundation for AI',
        link: '/Certificates/Data_and_Programming_Foundation_for_AI_Certification.pdf',
      },
    ],
    
    
    educations: [
      {
        institution: 'Sheridan College',
        degree: 'Software Development & Network Engineering',
        from: '2022',
        to: '2025'
      }
    ],

    publications: [],
    blog: {
      source: '',
      username: '',
      limit: 0
    },
    googleAnalytics: {
      id: ''
    },
    hotjar: {
      id: '',
      snippetVersion: 6
    },
    projects: {
      github: {
        display: true,
        header: 'GitHub Projects',
        mode: 'manual',
        manual: {
            projects: [
              'Prabal31/My-Portfolio',
              'Prabal31/Portfolio-Builder',
              'rishabhworks/The-Semicolon-Squad',
              'Prabal31/Scrabble',
              'Prabal31/Portfolio-React',
              'Prabal31/Rock-Paper-Scissors',
              'Prabal31/Book-Website',
              'Prabal31/Fitness',
              'Prabal31/Inventory-design',
            ],
          },
      },
      external: {
        header: 'Featured Projects',
        projects: [
          {
            title: 'PhrasePerfect',
            description:
              'React + Gemini AI app with 6 AI-powered tools like paraphrasing, grammar check, summarizer, translator, AI detector, and citation generator. Uses Firebase and MongoDB for real-time performance.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=PhrasePerfect',
            link: 'https://example.com',
          },
          {
            title: 'Portfolio Builder',
            description:
              'Build portfolios using Node.js and GPT-4 with OpenAI integration. Features intuitive form-based UI and custom command generation for quick deployment.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Portfolio+Builder',
            link: 'https://example.com',
          },
          {
            title: 'Deeproot',
            description:
              'Browser extension integrating real-time stock data, market news, and AI-driven insights directly into Chrome/Firefox. Built with React, Flask, Firebase, MongoDB, and OpenAI.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Deeproot',
            link: 'https://example.com',
          },
          {
            title: 'Skeleton',
            description:
              'Streamlines full-stack project setup by generating bash commands based on user input. Built with React, Node.js, Express, dynamic API fetching, and project template database.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Skeleton',
            link: 'https://example.com',
          },
          {
            title: 'WellnessGenie',
            description:
              'A wellness tracker for IT professionals integrating wearable data, mental wellness tips, and AI recommendations. Backed by TAM research, AI-driven alerts, and a sleek UX.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=WellnessGenie',
            link: 'https://example.com',
          },
          {
            title: 'Machilearn Model',
            description:
              'Custom machine learning model trained for AI applications with focus on predictive analytics, automation, and API integration for real-time inference.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Machilearn+Model',
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
        'business', 'acid', 'lemonade', 'night', 'coffee', 'winter'
      ],
      customTheme: {
        primary: '#4ade80',
        secondary: '#0ea5e9',
        accent: '#facc15',
        neutral: '#1f2937',
        'base-100': '#ffffff',
        '--rounded-box': '1rem',
        '--rounded-btn': '1rem'
      }
    },
    pageMetadata: {
      title: 'Prabh Manchanda | Portfolio',
      description:
        "Hi, I'm Prabh Manchanda — a software engineer building scalable, AI-powered solutions with precision and creativity.",
      imageURL:
        'https://via.placeholder.com/1200x630.png?text=Prabh+Manchanda+Portfolio'
    },
    footer: '© 2024 Prabal Manchanda. All rights reserved. | Built with ❤️ using React and Vite.',
    enablePWA: true
  };
  
  export default CONFIG;
  