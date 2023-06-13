import styles from './Title.module.css'

import type { TTitle } from './types';

export const Title = ({ size = 20, level = 4, children }: TTitle) => {
  const className = [
    styles.title,
    styles[`title-${size}`]
  ]

  const props = {
    className: className.join(' '),
    children,
  }

  switch (level) {
    case 1:
      return <h1 {...props} />
    case 2:
      return <h2 {...props} />
    case 3:
      return <h3 {...props} />
    default:
    case 4:
      return <h4 {...props} />
    case 5:
      return <h5 {...props} />
    case 6:
      return <h6 {...props} />
  }
}