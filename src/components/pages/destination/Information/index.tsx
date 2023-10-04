import styles from './Information.module.css'

interface IInformation {
  title: string,
  text: string
}

export default function Information({title,text}: IInformation) {
  return (
    <div className={styles.Information}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.text} >{text}</p>
    </div>
  )
}
