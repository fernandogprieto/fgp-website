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
    name: 'Developer🖥️',
    resources: [
      {
        name: 'Developer Roadmap',
        desc: 'Roadmap to becoming a web developer.',
        logo: '/img/resource/roadmap.png',
        href: 'https://roadmap.sh/',
      },
    ],
  },
]
