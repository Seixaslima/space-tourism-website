import { IResponseDestination } from "@/interface/Iresponse"
import styles from "./DestinationBar.module.css"
import Link from "next/link"
import { getList } from "@/web"

interface IDestinationBar {
  selected: string
}

export default async function DestinationBar({ selected }: IDestinationBar) {
  const destinations = await getList<IResponseDestination>("destinations")
  const destinationNames = destinations.map(destin => ({ id: destin.id, name: destin.name }))
  return (
    <div className={styles.DestinationBar}>
      <ul className={styles.DestinationList}>
        {destinationNames.map(destin => {
          return (
            <li
              key={destin.id}
              className={`${styles.DestinationLink} ${(destin.id === Number(selected)) ? styles.selected : styles.notSelected}`}
            >
              <Link href={`/destination/${destin.id}`}>{destin.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
