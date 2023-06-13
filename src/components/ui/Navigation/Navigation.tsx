import Link from 'next/link'
import styles from './Navigation.module.css'

import type { TNavigation, TNavigationItem } from './types'

const Navigation = ({ children }: TNavigation) => {
  return (
    <nav className={styles.navigation}>
      {children}
    </nav>
  )
}

Navigation.Item = ({ href, label }: TNavigationItem) => {
  return (
    <Link href={href} className={styles.item}>{label}</Link>
  )
}

export { Navigation } 