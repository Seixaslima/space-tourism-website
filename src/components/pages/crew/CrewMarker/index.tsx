import Link from "next/link";
import styles from "./CrewMarker.module.css"

export function CrewMarker({ id }: { id: string }) {
  const pages = ["1", "2", "3", "4"]


  return (
    <div className={styles.crewMarker} >
      <ul className={styles.linkList} >
        {pages.map((page, index) => {
          return (
            <li>
              <Link
                className={`${styles.link}  ${id === page ? styles.active : ""}`}
                href={`./${page}`}></Link>
            </li>
          )
        })}

      </ul>

    </div >
  )
}