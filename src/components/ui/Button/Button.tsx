import styles from './Button.module.css'

import type { TButton } from './types'

export const Button = ({ 
  outlined = false, 
  minimal = false, 
  after, 
  children, 
  onClick 
}: TButton) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const className = [
    styles.container
  ]

  if (outlined) className.push(styles['container--outlined'])
  else if (minimal) className.push(styles['container--minimal'])
  else className.push(styles['container--default']);

  if (after) className.push(styles['container-after'])

  return (
    <div className={className.join(' ')} onClick={handleClick}>
      <div className={`${styles.position} ${styles['position-text']}`}>
        <span className={styles.text}>{children}</span>
      </div>
      {after ? (
        <div className={`${styles.position} ${styles['position-after']}`}>
          <div className={styles.after}>
            {after}
          </div>
        </div>
      ) : ""}
    </div>
  )
}