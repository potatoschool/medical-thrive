import { Button } from '@/components/ui/Button/Button'
import styles from './Header.module.css'
import { Logo } from '@/components/ui/Logo'
import { Navigation } from '@/components/ui/Navigation/Navigation'
import { Icon } from '@/components/ui/Icon/Icon'

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.position}>
        <Logo />
      </div>
      <div className={styles.position}>
        <Navigation>
          <Navigation.Item href="/" label="Home" />
          <Navigation.Item href="/" label="Product" />
          <Navigation.Item href="/" label="Pricing" />
          <Navigation.Item href="/" label="Contact" />
        </Navigation>
      </div>
      <div className={styles.position}>
        <div className={styles.action}>
          <div className={styles['action__position']}>
            <Button minimal>Login</Button>
          </div>
          <div className={styles['action__position']}>
            <Button after={<Icon name="arrow-right" />}>Join Us</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
