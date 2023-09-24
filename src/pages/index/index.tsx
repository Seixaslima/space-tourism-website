import Link from "next/link"
import styles from "./index.module.css"

export default function Index() {
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <h3 className={styles.subTitle}>so, you whant to travel to</h3>
        <h1 className={styles.title}>Space</h1>

        <p className={styles.text}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className={styles.buttonContainer}>

        <Link href="/destination">
          <button type="button" >Explore</button>
        </Link>

      </div>
    </main>
  )
}