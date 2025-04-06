// interfaces/config.ts
export interface Config {
    github: {
      username: string;
      sortBy?: string;
      limit?: number;
      exclude?: {
        forks?: boolean;
        projects?: string[];
      };
    };
    social?: { [key: string]: string };
    resume?: {
      fileUrl?: string;
    };
    skills?: string[];
    experiences?: Array<{
      company?: string;
      position?: string;
      from: string;
      to: string;
      companyLink?: string;
      description?: string[];
    }>;
    certifications?: Array<{
      name?: string;
      link?: string;
      body?: string;
      year?: string;
    }>;
    educations?: Array<{
      institution?: string;
      degree?: string;
      from: string;
      to: string;
    }>;
    publications?: Array<{
      title: string;
      conferenceName?: string;
      journalName?: string;
      authors?: string;
      link?: string;
      description?: string;
    }>;
    projects?: {
      github?: {
        display?: boolean;
        header?: string;
        mode?: string;
        automatic?: {
          sortBy?: string;
          limit?: number;
          exclude?: {
            forks?: boolean;
            projects?: string[];
          };
        };
        manual?: {
          projects?: string[];
        };
      };
      external?: {
        header?: string;
        projects?: {
          title: string;
          description?: string;
          imageUrl?: string;
          link: string;
        }[];
      };
    };
    seo?: {
      title?: string;
      description?: string;
      imageURL?: string;
    };
    googleAnalytics?: {
      id?: string;
    };
    hotjar?: {
      id?: string;
      snippetVersion?: number;
    };
    blog?: {
      username?: string;
      source?: string;
      limit?: number;
    };
    themeConfig?: {
      defaultTheme?: string;
      disableSwitch?: boolean;
      respectPrefersColorScheme?: boolean;
      displayAvatarRing?: boolean;
      themes?: string[];
      customTheme?: {
        primary?: string;
        secondary?: string;
        accent?: string;
        neutral?: string;
        'base-100'?: string;
        '--rounded-box'?: string;
        '--rounded-btn'?: string;
      };
    };
    footer?: string;
    enablePWA?: boolean;
  }
  