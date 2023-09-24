import DropdownMenu from './DropdownMenu'
import styles from './Header.module.css'
import LinksMenu from './LinksMenu'

function Header() {


  return (
    <header className={styles.Header} >
      <div className={styles.logo}>
        <img src="/assets/shared/logo.svg" alt="Logo" />
      </div>

      <div className={styles.dropdownMenu}>
        <DropdownMenu />
      </div>
      <div className={styles.menu}>
        <ul className={styles.menu_list}>
          <LinksMenu />
        </ul>
      </div>

    </header>
  )
}

export default Header