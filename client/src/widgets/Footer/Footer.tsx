import { useState, useEffect } from 'react';
import styles from "../../styles/Footer/Footer.module.css"

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Когда пользователь прокрутил больше, чем на высоту окна (1 скролл)
            if (scrollPosition > windowHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Footer</h1>
                    <p>Ваш контент подвала</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer