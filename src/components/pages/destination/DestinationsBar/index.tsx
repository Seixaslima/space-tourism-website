import { IResponseDestination } from "@/interface/Iresponse"
import styles from "./DestinationBar.module.css"
import Link from "next/link"

export async function getData(): Promise<IResponseDestination[]> {
  const baseURL = process.env.DB_URL
  const fetchURL = baseURL + "destinations/"
  const res = await fetch(fetchURL)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    //  This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const list = res.json()



  return list
}
interface IDestinationBar {
  selected: string
}

export default async function DestinationBar({ selected }: IDestinationBar) {
  const destinations = await getData()
  const destinationNames = destinations.map(destin => ({ id: destin.id, name: destin.name }))
  return (
    <div className={styles.DestinationBar}>
      <ul className={styles.DestinationList}>
        {destinationNames.map(destin => {
          return (
            <li
              key={destin.id}
              className={`${styles.DestinationLink} ${(destin.id === Number(selected)) ? styles.selected : ""}`}
            >
              <Link href={`/destination/${destin.id}`}>{destin.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
