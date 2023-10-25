import Link from "next/link"
import styles from "./TechnologyMarker.module.css"

export default function TechnologyMarker({ id }: { id: string }) {

  const pages = ["1", "2", "3"]
  return (
    <div>
      <ul className={styles.linkList}>
        {
          pages.map(page => {
            return (
              <li >
                <Link className={page === id ? styles.linkSelected : styles.linkItem} href={`./${page}`}>{page}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}