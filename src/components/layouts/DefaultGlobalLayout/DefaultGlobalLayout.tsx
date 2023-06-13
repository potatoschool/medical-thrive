import { Header } from '@/components/containers/Header';
import styles from './DefaultGlobalLayout.module.css'
import { TDefaultGlobalLayout, TDefaultGlobalLayoutPosition } from './types';

const DefaultGlobalLayout = ({ children }: TDefaultGlobalLayout) => {
  return (
    <div className={styles.container}>
      <DefaultGlobalLayout.Position header>
        <Header />
      </DefaultGlobalLayout.Position>
      <DefaultGlobalLayout.Position>
        {children}
      </DefaultGlobalLayout.Position>
      <DefaultGlobalLayout.Position shapeRight>
        <svg viewBox="0 0 530 271" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H530V271L137.703 195.242C106.448 189.206 79.9333 168.65 66.2998 139.885L0 0Z" fill="#B888F8" />
        </svg>
      </DefaultGlobalLayout.Position>
      <DefaultGlobalLayout.Position shapeLeft>
        <svg viewBox="0 0 892 760" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H842.332L888.567 341.346C901.966 440.268 865.281 539.376 790.704 605.734L703.343 683.468C636.102 743.299 545.552 769.778 456.67 755.602L0 682.767V0Z" fill="#B888F8" />
        </svg>
      </DefaultGlobalLayout.Position>
    </div>
  )
}

DefaultGlobalLayout.Position = ({
  children,
  header = false,
  shapeRight = false,
  shapeLeft = false
}: TDefaultGlobalLayoutPosition) => {
  const className = [
    styles.position
  ]

  if (header) className.push(styles['position-header'])
  else if (shapeRight) className.push(styles['position-shape-right'])
  else if (shapeLeft) className.push(styles['position-shape-left'])

  return (
    <div className={className.join(' ')}>
      {children}
    </div>
  );
}


export { DefaultGlobalLayout }