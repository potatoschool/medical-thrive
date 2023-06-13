export type TButton = {
  outlined?: boolean,
  minimal?: boolean,
  after?: React.ReactNode,
  children: string,
  onClick?: () => void
}