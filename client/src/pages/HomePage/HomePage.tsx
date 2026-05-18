import { useState } from 'react';
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import SplitText from "../../components/SplitText/SplitText";

import styles from "../../styles/HomePage/HomePage.module.css";

import house from "../../assets/house.svg";
import about from "../../assets/about.svg";

export const HomePage = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const navItems = [
        { icon: house, label: 'Home' },
        { icon: about, label: 'About' },
    ];

    const goToProjects = () => {
        window.location.href = "/projects";
    };

    return (
        <>
            {/* SIDEBAR */}
            <div className={styles.container}>

                <div className={styles.navigation}>

                    <ul>
                        {navItems.map((item, index) => (

                            <li
                                key={index}
                                className={
                                    activeIndex === index
                                        ? styles.active
                                        : ''
                                }
                                onClick={() => setActiveIndex(index)}
                            >

                                <img
                                    src={item.icon}
                                    alt={item.label}
                                />

                            </li>

                        ))}
                    </ul>

                </div>

            </div>

            {/* CONTENT */}
            <div className={styles.welcome}>

                {/* =========================================
                    HOME
                ========================================= */}
                {activeIndex === 0 && (
                    <>

                        {/* HERO */}
                        <div className={styles.introBlock}>

                            <span className={styles.statusBadge}>
                                Доступен для проектов
                            </span>

                            <SplitText
                                text="Веб разработчик"
                                className={styles.introTitle}
                                splitType="chars"
                                delay={50}
                                duration={1.2}
                                ease="power3.out"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                textAlign="left"
                            />

                            <SplitText
                                text="Создаю современные, быстрые и адаптивные веб-решения. Превращаю идеи в интерактивный цифровой продукт с вниманием к деталям и UX."
                                className={styles.introDesc}
                                splitType="words"
                                delay={20}
                                duration={0.8}
                                ease="power2.out"
                                from={{ opacity: 0, y: 10 }}
                                to={{ opacity: 1, y: 0 }}
                            />

                            <div className={styles.introActions}>

                                <Link
                                    to="/projects"
                                    className={`${styles.btn} ${styles.btnPrimary}`}
                                >
                                    Смотреть работы
                                </Link>

                                <Link
                                    to="/contact"
                                    className={`${styles.btn} ${styles.btnSecondary}`}
                                >
                                    Связаться
                                </Link>

                            </div>

                        </div>

                        {/* PROJECT */}
                        <div className={styles.project}>

                            <div className={styles.projectHeader}>

                                <span className={styles.projectLabel}>
                                    Последний проект
                                </span>

                                <div className={styles.projectHeaderRight}>

                                    <span className={styles.projectStatus}>
                                        LIVE
                                    </span>

                                    <button
                                        className={styles.projectGoBtn}
                                        onClick={goToProjects}
                                    >
                                        →
                                    </button>

                                </div>

                            </div>

                            <div className={styles.projectContent}>

                                <div className={styles.projectInfo}>

                                    <SplitText
                                        text="Portfolio Website"
                                        className={styles.projectTitle}
                                        splitType="chars"
                                        delay={40}
                                        duration={1}
                                        ease="power3.out"
                                        from={{ opacity: 0, y: 30 }}
                                        to={{ opacity: 1, y: 0 }}
                                        textAlign="left"
                                    />

                                    <p className={styles.projectDesc}>
                                        Современное портфолио для web developer
                                        с минималистичным интерфейсом,
                                        анимациями и адаптивным дизайном.
                                    </p>

                                    <div className={styles.projectTags}>

                                        <span>React</span>
                                        <span>CSS Modules</span>
                                        <span>Responsive</span>

                                    </div>

                                    <div className={styles.projectButtons}>

                                        <Link
                                            to="/projects"
                                            className={styles.viewBtn}
                                        >
                                            Смотреть
                                        </Link>

                                        <Link
                                            to="/projects"
                                            className={styles.codeBtn}
                                        >
                                            GitHub
                                        </Link>

                                    </div>

                                </div>

                                {/* PREVIEW */}
                                <div className={styles.projectPreview}>

                                    <div className={styles.mockup}>

                                        <div className={styles.mockupTop}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>

                                        <div className={styles.mockupScreen}>

                                            <div className={styles.fakeNavbar}></div>

                                            <div className={styles.fakeHero}>

                                                <div className={styles.fakeTitle}></div>

                                                <div className={styles.fakeText}></div>

                                                <div className={styles.fakeTextSmall}></div>

                                                <div className={styles.fakeButtons}>
                                                    <div></div>
                                                    <div></div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </>
                )}

                {/* =========================================
                    ABOUT
                ========================================= */}
                {activeIndex === 1 && (

                    <div className={styles.aboutHero}>

                        {/* GLOW */}
                        <div className={styles.aboutGlowOne}></div>
                        <div className={styles.aboutGlowTwo}></div>

                        {/* FLOATING BADGES */}
                        <motion.div
                            className={`${styles.aboutFloating} ${styles.aboutFloat1}`}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 4, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            React
                        </motion.div>

                        <motion.div
                            className={`${styles.aboutFloating} ${styles.aboutFloat2}`}
                            animate={{
                                y: [0, 18, 0],
                                rotate: [0, -6, 0],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            TypeScript
                        </motion.div>

                        <motion.div
                            className={`${styles.aboutFloating} ${styles.aboutFloat3}`}
                            animate={{
                                y: [0, -15, 0],
                                x: [0, 10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            Vite
                        </motion.div>

                        {/* MAIN CARD */}
                        <motion.div
                            className={styles.aboutMain}
                            initial={{
                                opacity: 0,
                                y: 40
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                        >

                            <span className={styles.aboutMini}>
                                ОБО МНЕ
                            </span>

                            <SplitText
                                text="Создаю современные веб-интерфейсы."
                                className={styles.aboutBigTitle}
                                splitType="words"
                                delay={35}
                                duration={1}
                                ease="power3.out"
                                from={{ opacity: 0, y: 50 }}
                                to={{ opacity: 1, y: 0 }}
                            />

                            <motion.p
                                className={styles.aboutDescription}
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.8
                                }}
                            >
                                Я frontend разрабьотчик,
                                создающий современные интерфейсы,
                                премиум UX и быстрые веб-приложения
                                с акцентом на motion дизайн,
                                performance и user experience.
                            </motion.p>

                            {/* STATS */}
                            <div className={styles.aboutStats}>

                                <motion.div
                                    className={styles.aboutStatCard}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03
                                    }}
                                >

                                    <h2>10+</h2>

                                    <span>
                                        Лет опыта
                                    </span>

                                </motion.div>

                                <motion.div
                                    className={styles.aboutStatCard}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03
                                    }}
                                >

                                    <h2>20+</h2>

                                    <span>
                                        Проектов
                                    </span>

                                </motion.div>


                            </div>

                        </motion.div>

                        {/* ORBIT */}
                        <div className={styles.aboutOrbit}></div>

                        {/* BACK TEXT */}
                        <span className={styles.aboutBackText}>
                            КРЕАТИВ
                        </span>

                    </div>

                )}
            </div>

            {/* VISUAL SIDE */}
            <div className={styles.visualSide}>

                <span className={styles.bigText}>
                    РАЗРАБ
                </span>

                <span className={`${styles.floatTag} ${styles.tag1}`}>
                    UI/UX
                </span>

                <span className={`${styles.floatTag} ${styles.tag2}`}>
                    ВЕБ
                </span>

                <span className={`${styles.floatTag} ${styles.tag3}`}>
                    ПОРТФОЛИО
                </span>

            </div>
        </>
    );
};