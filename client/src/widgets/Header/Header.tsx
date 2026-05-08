import { useState } from "react";
import { Link } from 'react-router-dom'
import styles from "../../styles/Header/Header.module.css";
import avatar from "../../assets/avatar.jpeg";
import notifications from "../../assets/notifications.svg";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        // В реальном приложении здесь будет открытие модалки или редирект на страницу входа
        setIsLoggedIn(true);
    };

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Link to="/"><h1>Autli</h1></Link>
                </div>
                <div className={styles.right}>
                    <div className={styles.push}>
                        <img src={notifications} alt="Notifications" />
                    </div>

                    {isLoggedIn ? (
                        <div className={styles.profile}>
                            <div className={styles.left}>
                                <p>Hey, Nikita</p>
                            </div>
                            <div className={styles.right}>
                                <img src={avatar} alt="Avatar" />
                            </div>
                        </div>
                    ) : (
                        <button className={styles.loginButton} onClick={handleLoginClick}>
                            Войти
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;