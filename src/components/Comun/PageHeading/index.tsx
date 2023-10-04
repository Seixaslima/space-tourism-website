import styles from './PageHeading.module.css'

interface IPageHeading {
  stage: String,
  title: String
}

export default function PageHeading({ stage, title }: IPageHeading) {
  return <h3 className={styles.PageHeading}>
    <span className={styles.stage} >{stage}</span>
    {title}
  </h3>
}