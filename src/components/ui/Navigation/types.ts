export type TNavigation = {
  children: React.ReactElement<TNavigationItem>[]
}

export type TNavigationItem = {
  href: string,
  label: string
}