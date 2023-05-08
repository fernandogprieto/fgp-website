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
        desc: 'Guides and other educational content to help guide developers.',
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
        desc: 'Building, maintaining, and managing IT infrastructures of companies',
        logo: '/img/resources/lf.png',
        href: 'https://training.linuxfoundation.org/',
      },
      {
        name: 'Docker',
        desc: 'Build images, run containers, use volumes to persist data and mount in source code',
        logo: '/img/resources/docker.png',
        href: 'https://www.docker.com/101-tutorial/',
      },
      {
        name: 'Kubernetes Training',
        desc: 'Accelerate your cloud adoption and manage continuous change with Oracle Guided Learning',
        logo: '/img/resources/k8s.png',
        href: 'https://kubernetes.io/training/',
      },
      {
        name: 'Nginx Training',
        desc: 'Fundamentals to advanced load balancing, advanced caching, security, and more.',
        logo: '/img/resources/nginx.png',
        href: 'https://www.nginx.com/learn/nginx-training/',
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
        {
          name: 'Terraform',
          desc: 'Infrastructure automation to provision and manage resources in any cloud or data center.',
          logo: 'https://www.terraform.io/favicon.ico',
          href: 'https://www.terraform.io/',
          tags: ['IaaC'],
        },
        {
          name: 'Jenkins',
          desc: 'Automate the parts of software development related to building, testing, and deploying, CI/CD ',
          logo: 'https://www.jenkins.io/apple-touch-icon.png',
          href: 'https://www.jenkins.io/',
          tags: ['IaaC'],
        },
        {
          name: 'Vault',
          desc: 'Manage Secrets & Protect Sensitive Data',
          logo: '/img/resources/vault.png',
          href: 'https://www.vaultproject.io/',
          tags: ['IaaC'],
        },
        {
          name: 'Azure DevOps',
          desc: ' Plan smarter, collaborate better, and ship faster with a set of modern dev services',
          logo: '/img/resources/azure-devops.webp',
          href: 'Plan smarter, collaborate better, and ship faster with a set of modern dev services',
          tags: ['IaaC'],
        },
        {
          name: 'Terrascan',
          desc: 'Detect compliance and security violations across',
          logo: '/img/resources/terrascan.png',
          href: 'https://www.brainboard.co/',
          tags: ['IaaC'],
        },
        {
          name: 'Infracost',
          desc: 'Cloud cost estimates for Terraform in pull requests',
          logo: '/img/resources/infracost.webp',
          href: 'https://www.infracost.io/',
          tags: ['IaaC'],
        },
        {
          name: 'Aqua Tfsec',
          desc: 'Security scanner for your Terraform code',
          logo: '/img/resources/aqua-tfsec.webp',
          href: 'https://github.com/aquasecurity/tfsec',
          tags: ['IaaC'],
        },
        {
          name: 'Webhook.site',
          desc: 'Lets you easily inspect, test and automate any incoming HTTP request or e-mail.',
          logo: '/img/resources/webhook-site.webp',
          href: 'https://webhook.site/',
          tags: ['IaaC'],
        },
        {
          name: 'Checkov',
          desc: 'Policy as a code .',
          logo: '/img/resources/checkov.webp',
          href: 'https://www.checkov.io/',
          tags: ['IaaC'],
        },
        {
          name: 'Open Policy Agent',
          desc: 'Policy-based control for cloud native environments',
          logo: '/img/resources/openpolicy.webp',
          href: 'https://www.openpolicyagent.org/',
          tags: ['IaaC'],
        },
        {
          name: 'Pulumi',
          desc: 'Build infrastructure intuitively on any cloud using familiar languages.',
          logo: 'https://www.pulumi.com/images/favicon.ico',
          href: 'https://www.pulumi.com/',
          tags: ['IaaC'],
        },
        {
          name: 'Ansible',
          desc: 'Build infrastructure intuitively on any cloud using familiar languages.',
          logo: '/img/resources/ansible_logo.svg_.png',
          href: 'https://www.ansible.com/',
          tags: ['IaaC'],
        },
        {
          name: 'Vagrant',
          desc: 'Creation and configuration of lightweight, reproducible, and portable development environments.',
          logo: '/img/resources/vagrant.webp',
          href: 'https://www.vagrantup.com/',
          tags: ['IaaC'],
        },
      ],
    },
    {
      name: 'Python 🐍',
      resources: [
        {
          name: 'The Python Package Index (PyPI)',
          desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
          logo: 'https://pypi.org/static/images/logo-small.2a411bc6.svg',
          href: 'https://pypi.org/',
          tags: ['Python']
        },
        {
          name: 'Psutil',
          desc: 'Cross-platform lib for process and system monitoring in Python.',
          logo: '/img/resources/psutil-logo.png',
          href: 'https://pypi.org/project/psutil/',
          tags: ['Python']
        },
        {
          name: 'Os module',
          desc: 'Miscellaneous operating system interfaces.',
          logo: '/img/resources/python-module.png',
          href: 'https://docs.python.org/3/library/os.html',
          tags: ['Python']
        },
        {
          name: 'Subprocess',
          desc: 'Subprocess management.',
          logo: '/img/resources/python-module.png',
          href: 'https://docs.python.org/3/library/subprocess.html',
          tags: ['Python']
        },
        {
          name: 'Sys',
          desc: 'System-specific parameters and functions.',
          logo: '/img/resources/python-module.png',
          href: 'https://docs.python.org/3/library/sys.html',
          tags: ['Python']
        },
        {
          name: 'Re',
          desc: 'Regular expression operations.',
          logo: '/img/resources/python-module.png',
          href: 'https://docs.python.org/3/library/re.html',
          tags: ['Python']
        },
        {
          name: 'Scapy',
          desc: 'An Interactive packet manipulation program and library',
          logo: '/img/resources/scapy.png',
          href: 'https://pypi.org/project/scapy/',
          tags: ['Python']
        },
        {
          name: 'Requests',
          desc: 'A simple, yet elegant, HTTP library',
          logo: '/img/resources/requests.webp',
          href: 'https://pypi.org/project/requests/',
          tags: ['Python']
        },
        {
          name: 'Urllib3',
          desc: 'A powerful, user-friendly HTTP client for Python',
          logo: 'https://urllib3.readthedocs.io/en/stable/_static/banner.svg',
          href: 'https://pypi.org/project/urllib3/',
          tags: ['Python']
        },
        {
          name: 'Logging',
          desc: 'Provide a standard error logging mechanism in Python as per PEP 282.',
          logo: '/img/resources/python-module.png',
          href: 'https://pypi.org/project/logging/',
          tags: ['Python']
        },
        {
          name: 'Getpass',
          desc: 'Portable password input.',
          logo: '/img/resources/python-module.png',
          href: 'https://docs.python.org/3/library/getpass.html',
          tags: ['Python']
        },
        {
          name: 'Boto3',
          desc: 'Is the Amazon Web Services (AWS) Software Development Kit (SDK) for Python.',
          logo: '/img/resources/python-module.png',
          href: 'https://pypi.org/project/boto3/',
          tags: ['Python']
        },
        {
          name: 'Paramiko',
          desc: 'A Python implementation of SSHv2.',
          logo: '/img/resources/python-module.png',
          href: 'https://www.paramiko.org/',
          tags: ['Python']
        },
        {
          name: 'JSON',
          desc: 'Encoder and decoder.',
          logo: '/img/resources/python-module.png',
          href: 'https://docs.python.org/3/library/json.html',
          tags: ['Python']
        },
        {
          name: 'PyYaml',
          desc: 'Is a YAML parser and emitter for Python.',
          logo: '/img/resources/python-module.png',
          href: 'https://pyyaml.org/wiki/PyYAMLDocumentation',
          tags: ['Python']
        },
        {
          name: 'Smtplib',
          desc: 'SMTP protocol client.',
          logo: '/img/resources/python-module.png',
          href: 'https://pyyaml.org/wiki/PyYAMLDocumentation',
          tags: ['Python']
        },
      ],
    },
    {
      name: 'Scripting',
      resources: [
        {
          name: 'Bash',
          desc: 'Bash is the GNU Project\'s shell—the Bourne Again SHell.',
          logo: '/img/resources/bash.png',
          href: 'https://www.gnu.org/software/bash/',
          tags: ['Scripting'],
        },
        {
          name: 'Powershell',
          desc: 'Microsoft-built framework for Windows task automation and configuration management, featuring a command-line interface and scripting language.',
          logo: '/img/resources/power-shell.webp',
          href: 'https://www.gnu.org/software/bash/',
          tags: ['Scripting'],
        },
        {
          name: 'Go',
          desc: 'An open-source programming language supported by Google.',
          logo: '/img/resources/go-lang.png',
          href: 'https://go.dev/',
          tags: ['Scripting'],
        },
        {
          name: 'Lua',
          desc: 'Is a powerful, efficient, lightweight, embeddable scripting language.',
          logo: '/img/resources/lua.png',
          href: 'https://www.gnu.org/software/bash/',
          tags: ['Scripting'],
        },
      ],
    },
    /*{
      name: 'Study',
      resources: [
        {
          name: 'AcloudGuru',
          desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
          logo: 'https://github.githubassets.com/favicons/favicon.svg',
          href: 'https://github.com/',
          tags: ['GitHub', 'Code Hosting'],
        },
      ],
    },
    {
      name: 'Recommend',
      resources: [
        {
          name: 'AcloudGuru',
          desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
          logo: 'https://github.githubassets.com/favicons/favicon.svg',
          href: 'https://github.com/',
          tags: ['GitHub', 'Code Hosting'],
        },
      ],
    },
    {
      name: 'Repository',
      resources: [
        {
          name: 'AcloudGuru',
          desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
          logo: 'https://github.githubassets.com/favicons/favicon.svg',
          href: 'https://github.com/',
          tags: ['GitHub', 'Code Hosting'],
        },
      ],
    },
    {
      name: 'Tools',
      resources: [
        {
          name: 'AcloudGuru',
          desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
          logo: 'https://github.githubassets.com/favicons/favicon.svg',
          href: 'https://github.com/',
          tags: ['GitHub', 'Code Hosting'],
        },
      ],
    },*/
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
        desc: 'Code. compile. run. debug. share.',
        logo: 'https://www.onlinegdb.com/favicon.ico',
        href: 'https://www.onlinegdb.com/online_python_compiler',
        tags: ['Live Coding'],
      },
    ],
  },
  {
    name: 'Site Generation',
    resources: [
      {
      name: 'VitePress',
      desc: 'A static site generator driven by Vue and built with Vite',
      logo: 'https://vuepress.vuejs.org/hero.png',
      href: 'https://vitepress.vuejs.org',
      tags: ['frontend', 'Vue', 'static site'],
      },
      {
      name: 'VuePress',
      desc: 'A static site generator driven by Vue',
      logo: 'https://vuepress.vuejs.org/hero.png',
      href: 'https://vuepress.vuejs.org',
      tags: ['frontend', 'Vue', 'static site'],
      },
      {
      name: 'Docusaurus',
      desc: 'Quickly build content-centric best websites',
      logo: '/img/resources/docusaurus.svg',
      href: 'https://docusaurus.io',
      tags: ['frontend', 'React', 'static site'],
      },
      {
      name: 'Hexo',
      desc: 'A fast, simple, and efficient blogging framework',
      logo: 'https://hexo.io/favicon.ico',
      href: 'https://hexo.io',
      tags: ['frontend', 'static site'],
      },
      {
      name: 'GitBook',
      desc: 'GitBook helps you publish beautiful documentation for your users and centralize your team\'s knowledge for advanced collaboration',
      logo: '/img/resources/gitbook.png',
      href: 'https://www.gitbook.com/',
      tags: ['frontend', 'static site'],
      },
      {
      name: 'Docsify',
      desc: 'docsify can quickly help you generate documentation websites',
      logo: 'https://docsify.js.org/_media/icon.svg',
      href: 'https://docsify.js.org',
      tags: ['frontend', 'static site'],
      },
      {
        name: 'WordPress',
        desc: 'WordPress is open-source software that enables you to create excellent websites, blogs, or applications',
        logo: 'https://s.w.org/images/wmark.png',
        href: 'https://cn.wordpress.org/',
        tags: ['frontend', 'site'],
        },
      {
      name: 'Nextra',
      desc: 'Simple, powerful and flexible site generation framework',
      logo: 'https://nextra.site/favicon.svg',
      href: 'https://nextra.site/docs',
      tags: ['frontend', 'site'],
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
        desc: 'Generate GitHub profile README easily with the latest add-ons like visitors count, GitHub stats, etc using minimal UI',
        logo: '/img/resources/gh-profile.png',
        href: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
        tags: [],
      },
      {
        name: 'Github readme stats',
        desc: 'Dynamically generated stats for your github readmes',
        logo: '/img/resources/gh-readme.png',
        href: 'https://github.com/anuraghazra/github-readme-stats',
        tags: [],
      },
    ],
  },
  /*{
    name: 'Communities',
    resources: [
      {
        name: 'AcloudGuru',
        desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', 'Code Hosting'],
      },
    ],
  },
  {
    name: 'Academyc Papers',
    resources: [
      {
        name: 'AcloudGuru',
        desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', 'Code Hosting'],
      },
    ],
  },
  {
    name: 'Maths',
    resources: [
      {
        name: 'AcloudGuru',
        desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', 'Code Hosting'],
      },
    ],
  },
  {
    name: 'AI',
    resources: [
      {
        name: 'AcloudGuru',
        desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', 'Code Hosting'],
      },
    ],
  },
  {
    name: 'MLops',
    resources: [
      {
        name: 'AcloudGuru',
        desc: 'The world\'s largest software project hosting platform, discover high-quality open-source projects.',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', 'Code Hosting'],
      },
    ],
  },*/
]
