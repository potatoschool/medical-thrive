import styles from './DefaultPageLayout.module.css'

import type { TDefaultPageLayout, TDefaultPageLayoutPosition } from './types'

const DefaultPageLayout = ({ children }: TDefaultPageLayout) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
  )
}

DefaultPageLayout.Position = ({ children, jumbotron = false }: TDefaultPageLayoutPosition) => {
	const className = [
		styles.position
	]

	if (jumbotron) className.push(styles['position-jumbotron'])
	
	return (
		<div className={className.join(' ')}>
			{children}
		</div>
	)
}

export { DefaultPageLayout }