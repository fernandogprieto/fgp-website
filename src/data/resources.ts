export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

export const resourceData: ResourceCategory[] = [
  {
    name: 'SRE, DevOps, Cloud & Containers 🖥️',
    resources: [
      {
        name: 'Developer Roadmap',
        desc: 'guides and other educational content to help guide developers.',
        logo: 'https://roadmap.sh/manifest/favicon.ico',
        href: 'https://roadmap.sh/',
      },
      {
        name: 'Google Cloud Skill Boost',
        desc: 'Choose your learning path, build your skills, and validate your knowledge.',
        logo: '/img/resources/gcp.png',
        href: 'https://www.cloudskillsboost.google/',
      },
      {
        name: 'AWS Skill Builder',
        desc: 'Your learning center to build in-demand cloud skills.',
        logo: '/img/resources/aws.png',
        href: 'https://explore.skillbuilder.aws/learn',
      },
      {
        name: 'Azure Cloud Skills',
        desc: 'Sharpen your cloud skills to accelerate your career and business results',
        logo: '/img/resources/azure.ico',
        href: 'https://azure.microsoft.com/en-us/resources/training-and-certifications/',
      },
      {
        name: 'Oracle University',
        desc: 'Accelerate your cloud adoption and manage continuous change with Oracle Guided Learning',
        logo: '/img/resources/oracle.png',
        href: 'https://education.oracle.com/',
      },
      {
        name: 'Red Hat Training',
        desc: 'Accelerate your cloud adoption and manage continuous change with Oracle Guided Learning',
        logo: '/img/resources/redhat.ico',
        href: 'https://www.redhat.com/en/services/training-and-certification',
      },
      {
        name: 'OpenStack Training',
        desc: 'Open Source Cloud Computing Infrastructure',
        logo: '/img/resources/openstack.png',
        href: 'https://www.openstack.org/marketplace/training/',
      },
      {
        name: 'Linux Foundation Training',
        desc: 'building, maintaining, and managing IT infrastructures of companies',
        logo: '/img/resources/lf.png',
        href: 'https://training.linuxfoundation.org/',
      },
      {
        name: 'Docker',
        desc: 'build images, run containers, use volumes to persist data and mount in source code',
        logo: '/img/resources/docker.png',
        href: 'https://www.docker.com/101-tutorial/',
      },
      {
        name: 'Kubernetes Training',
        desc: 'Accelerate your cloud adoption and manage continuous change with Oracle Guided Learning',
        logo: '/img/resources/k8s.png',
        href: 'https://kubernetes.io/training/',
      },
    ],
  },
  {
    name: 'Infrastructure as a Code (IaaC)',
      resources: [
        {
          name: 'Brainboard',
          desc: ' Standardize IaC, without the learning curve',
          logo: '/img/resources/brainboard.webp',
          href: 'https://www.brainboard.co/',
          tags: ['IaaC'],
        },
      ],
    },
    {
      name: 'Code Hosting',
      resources: [
        {
          name: 'GitHub',
          desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
          logo: 'https://github.githubassets.com/favicons/favicon.svg',
          href: 'https://github.com/',
          tags: ['GitHub', 'Code Hosting'],
        },
        {
          name: 'Gitlab',
          desc: 'Deliver secure code more quickly, deploy to any cloud, and drive business results.',
          logo: 'https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64',
          href: 'https://gitlab.com/',
          tags: ['Code Hosting'],
        },
        {
          name: 'Bitbucket',
          desc: 'Bitbucket Cloud is the native Git tool in Atlassian\'s Open DevOps solution.',
          logo: '/img/resources/bitbucket.png',
          href: 'https://bitbucket.org/',
          tags: ['Code Hosting'],
        },
      ],
    },
  {
  name: 'Website Hosting',
    resources: [
      {
        name: 'Vercel',
        desc: 'Vercel combines the best developer experience with a strong focus on end-user performance',
        logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
        href: 'https://vercel.com',
        tags: ['Website Hosting'],
      },
      {
        name: 'Netlify',
        desc: 'Netlify is a cloud platform for hosting static websites, supporting automatic code retrieval from Github, GitLab, Bitbucket, and other repositories for project packaging and deployment',
        logo: 'https://www.netlify.com/favicon.ico',
        href: 'https://www.netlify.com',
        tags: ['Website Hosting'],
      },
      {
        name: 'GitHub Codespace',
        desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/codespaces',
        tags: ['Website Hosting'],
      },
      {
        name: 'Railway',
        desc: 'Bring your code, leave the rest to us',
        logo: 'https://railway.app/favicon.ico',
        href: 'https://railway.app/',
        tags: ['Website Hosting'],
      },
      {
        name: 'Supabase',
        desc: 'Supabase is an open-source Backend-as-a-Service (BaaS) platform that helps developers quickly build applications without writing backend code.',
        logo: 'https://supabase.com/favicon/favicon-196x196.png',
        href: 'https://supabase.com/',
        tags: ['BaaS'],
      },
      {
        name: 'Gitpod',
        desc: 'Cloud development environments are the fastest,and more secure way, to ship code.',
        logo: '/img/resources/gitpod.png',
        href: 'https://www.gitpod.io/',
        tags: ['Website Hosting'],
      },
    ],
  },
  {
    name: 'Live Coding',
    resources: [
      {
        name: 'CodesandBox',
        desc: 'CodeSandbox is an online code editor and prototyping tool that allows you to create and share web applications faster',
        logo: 'https://codesandbox.io/favicon.ico',
        href: 'https://codesandbox.io/',
        tags: ['Live Coding'],
      },
      {
        name: 'CodePen',
        desc: 'The best place to build, test, and discover front-end code',
        logo: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
        href: 'https://codepen.io/',
        tags: ['Live Coding'],
      },
      {
        name: 'Stackblitz',
        desc: 'Stackblitz maintains an instant development experience throughout the process. No more local storage/pull/installation hours - just click and start coding',
        logo: '/img/resources/stackblitz.png',
        href: 'https://stackblitz.com/',
        tags: ['Live Coding'],
      },
      {
        name: 'vscode.dev',
        desc: 'Online Web version of VSCode provided by the official VSCode team',
        logo: 'https://vscode.dev/static/stable/favicon.ico',
        href: 'https://vscode.dev/',
        tags: ['Live Coding'],
      },
      {
        name: 'Sandpack',
        desc: 'For creating live running code editing experiences',
        logo: 'https://sandpack.codesandbox.io/favicon.ico',
        href: 'https://sandpack.codesandbox.io/',
        tags: ['Live Coding'],
      },
      {
      name: 'onlineGBD',
        desc: 'code. compile. run. debug. share.',
        logo: 'https://www.onlinegdb.com/favicon.ico',
        href: 'https://www.onlinegdb.com/online_python_compiler',
        tags: ['Live Coding'],
      },
    ],
  },
  {
  name: 'Github',
  resources: [
      {
        name: 'Gitstar Ranking',
        desc: 'Unofficial GitHub star rankings for users, organizations, and repositories',
        logo: 'https://gitstar-ranking.com/favicon.ico',
        href: 'https://gitstar-ranking.com/',
        tags: [],
      },
      {
        name: 'Metrics',
        desc: 'An infographics generator with 30+ plugins and 300+ options to display stats about your GitHub account and render them as SVG, Markdown, PDF or JSON!',
        logo: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ca.png',
        href: 'https://github.com/lowlighter/metrics',
        tags: [],
      },
      {
        name: 'GitHub Profile README Generator',
        desc: 'Dynamically generated stats for your github readmes',
        logo: '/img/resources/gh-profile.png',
        href: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
        tags: [],
      },
      {
        name: 'Github readme stats',
        desc: 'Dynamically generated stats for your github readmes',
        logo: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ca.png',
        href: 'https://github.com/anuraghazra/github-readme-stats',
        tags: [],
      },
    ],
  },
]
