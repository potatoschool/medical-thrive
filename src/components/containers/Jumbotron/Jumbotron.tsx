import styles from './Jumbotron.module.css'

import { Title } from '@/components/ui/Title'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'


export const Jumbotron = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.position} ${styles['position-welcome']}`}>
        <div className={styles.welcome}>
          <div className={styles['welcome__position']}>
            <Title level={5} size={16}>Join Us</Title>
          </div>
          <div className={styles['welcome__position']}>
            <Title level={1} size={58}>A Great Place to Receive Care</Title>
          </div>
          <div className={`${styles['welcome__position']} ${styles['welcome__position-description']}`}>
            <Title level={4} size={20}>
              DentalCare is most focused in helping you discover your most beauiful smile
            </Title>
          </div>
          <div className={styles['welcome__position']}>
            <div className={styles.actions}>
              <div className={styles['actions__position']}>
                <Button>Join Us</Button>
              </div>
              <div className={styles['actions__position']}>
                <Button outlined>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.position} ${styles['position-circle']}`}>
        <div className={styles.circle} />
      </div>
      <div className={`${styles.position} ${styles['position-girl']}`}>
        <img src="/static/girl.png" className={styles.girl} alt="This is a tech girl" />
      </div>
      <div className={`${styles.position} ${styles['position-calendar']}`}>
        <img src="/static/calendar.png" className={styles.girl} alt="This is a tech girl" />
      </div>
      <div className={`${styles.position} ${styles['position-graph']}`}>
        <img src="/static/graph.png" className={styles.girl} alt="This is a tech girl" />
      </div>
      <div className={`${styles.position} ${styles['position-icon-graph']}`}>
        <div className={styles.icon}>
          <div className={styles['icon__svg']}>
            <Icon name="graph" />
          </div>
        </div>
      </div>
    </div>
  )
}
