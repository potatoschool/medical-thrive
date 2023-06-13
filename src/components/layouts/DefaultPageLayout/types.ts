export type TDefaultPageLayout = {
  children: React.ReactElement<TDefaultPageLayoutPosition>[] | React.ReactElement<TDefaultPageLayoutPosition>
}

export type TDefaultPageLayoutPosition = {
  children: React.ReactNode,
  jumbotron?: boolean
}