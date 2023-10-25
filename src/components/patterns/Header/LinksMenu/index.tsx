'use client'

import Link from 'next/link'
import styles from './LinksMenu.module.css'
import { usePathname } from 'next/navigation'

export default function LinksMenu() {
  const menus = [
    { name: "Home", path: '/' },
    { name: "Destination", path: '/destination/1' },
    { name: "Crew", path: '/crew/1' },
    { name: "Technology", path: '/technology/1' }
  ]
  const path = usePathname()

  return (
    menus.map((menu, index) => {
      return (
        <li key={index} className={(path.split("/")[1] === menu.path.split("/")[1] ? styles.active : "")}>
          <Link href={menu.path} className={`${styles.link}`}>
            <p className={styles.index}>0{index}</p>
            <p>{menu.name}</p>
          </Link>
        </li>
      )
    })
  )
}