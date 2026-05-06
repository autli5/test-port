import { useState } from 'react';
import styles from "../../styles/HomePage/HomePage.module.css"

import house from "../../assets/house.svg"
import about from "../../assets/about.svg"
import projects from "../../assets/projects.svg"

import person from "../../assets/person.png"

export const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const navItems = [
        { icon: house, label: 'Home' },
        { icon: about, label: 'About' },
        { icon: projects, label: 'Projects' },
    ];
    
    return (
        <>
        <div className={styles.container}>
            <div className={styles.navigation}>
                <ul>
                    {navItems.map((item, index) => (
                        <li 
                        key={index}
                        className={activeIndex === index ? styles.active : ''}
                        onClick={() => setActiveIndex(index)}
                        >
                            <img src={item.icon} alt={item.label} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className={styles.welcome}>
            <div className={styles.top}>
                <h1>Full Stack Developer</h1>
            </div>
        </div>
        <div className={styles.page}>
            <img src={person} alt="" />
        </div>
        </>
    )
}