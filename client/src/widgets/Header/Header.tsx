import styles from "../../styles/Header/Header.module.css"

import avatar from "../../assets/avatar.jpeg"
import notifications from "../../assets/notifications.svg"

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1>Autli</h1>
                </div>
                <div className={styles.right}>
                    <div className={styles.push}>
                        <img src={notifications} alt="" />
                    </div>
                    <div className={styles.profile}>
                        <div className={styles.left}>
                            <p>Hey, Nikita</p>
                        </div>
                        <div className={styles.right}>
                            <img src={avatar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header