'use client'

import Link from 'next/link'
import styles from './LinksMenu.module.css'
import { usePathname } from 'next/navigation'

export default function LinksMenu() {
  const menus = [
    { name: "Home", path: '/' },
    { name: "Destination", path: '/destination' },
    { name: "Crew", path: '/crew' },
    { name: "Technology", path: '/technology' }
  ]
  const path = usePathname()

  return (
    menus.map((menu, index) => {
      return (
        <li key={index} className={(path === menu.path ? styles.active : "")}>
          <Link href={menu.path} className={`${styles.link}`}>
            <p className={styles.index}>0{index}</p>
            <p>{menu.name}</p>
          </Link>
        </li>
      )
    })
  )
}