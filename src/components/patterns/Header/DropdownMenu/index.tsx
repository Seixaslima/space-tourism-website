'use client'

import { useState } from 'react'
import styles from './DropdownMenu.module.css'
import LinksMenu from '../LinksMenu'

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.dropdownMenu}>
      <img src={`/assets/shared/icon-${isOpen ? "close" : "hamburger"}.svg`} onClick={() => setIsOpen(!isOpen)} />
      <div className={`${isOpen ? styles.open : styles.close}`}>
        <nav className={styles.nav}>
          <ul>
            <LinksMenu />
          </ul>
        </nav>

      </div>
    </div>
  )
}