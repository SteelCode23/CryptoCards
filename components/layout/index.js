import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Header } from '../header'
import styles from './layout.module.scss'

export function Layout({children}) {
    return (
        <div className={styles.layout}>
            {/* <img className={styles.bg_top} src="/assets/bg.svg" /> */}
            {/* <img className={styles.bg_bottom} src="/assets/bg.svg" /> */}
            <Header/>
            <div className={styles.layout_content}>
                {children}
            </div>
        </div>
    )
}
