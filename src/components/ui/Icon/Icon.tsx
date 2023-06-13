import styles from './Icon.module.css'

import Collection from './collection'

import type { TIcon } from './types'

export const Icon = ({ name }: TIcon) => {

  const Component = Collection[name] || <></>

  return (
    <i className={styles.icon}>
      <Component />
    </i>
  )
}