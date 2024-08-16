interface NavItem {
  key: number
  name: string
  to: string
}

export const navItemsList: NavItem[] = [
  {
    key: 0,
    name: 'Home',
    to: '/',
  },
  {
    key: 1,
    name: 'Create Idea',
    to: '/create-idea',
  },
  {
    key: 2,
    name: 'Idea List',
    to: 'idea-list',
  },
]
