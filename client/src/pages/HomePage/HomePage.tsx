import { useState } from 'react';
import { Link } from "react-router-dom";

import SplitText from "../../components/SplitText/SplitText";

import styles from "../../styles/HomePage/HomePage.module.css";

import house from "../../assets/house.svg";
import about from "../../assets/about.svg";
import projects from "../../assets/projects.svg";

export const HomePage = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const navItems = [
        { icon: house, label: 'Home' },
        { icon: about, label: 'About' },
        { icon: projects, label: 'Projects' },
    ];

    const goToProjects = () => {
        window.location.href = "/projects";
    };

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

                {/* HERO */}
                <div className={styles.introBlock}>

                    <span className={styles.statusBadge}>
                        Доступен для проектов
                    </span>

                    {/* 🔥 SPLIT TITLE */}
                    <SplitText
                        text="Web Developer"
                        className={styles.introTitle}
                        splitType="chars"
                        delay={50}
                        duration={1.2}
                        ease="power3.out"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        textAlign="left"
                    />

                    {/* 🔥 SPLIT DESCRIPTION */}
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

                {/* PROJECT BLOCK */}
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
                                Современное портфолио для web developer с минималистичным интерфейсом, анимациями и адаптивным дизайном.
                            </p>

                            <div className={styles.projectTags}>
                                <span>React</span>
                                <span>CSS Modules</span>
                                <span>Responsive</span>
                            </div>

                            <div className={styles.projectButtons}>
                                <Link to="/projects" className={styles.viewBtn}>
                                    Смотреть
                                </Link>

                                <Link to="/projects" className={styles.codeBtn}>
                                    GitHub
                                </Link>
                            </div>

                        </div>

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
            </div>

            {/* SIDE VISUAL */}
            <div className={styles.visualSide}>
                <span className={styles.bigText}>DEVELOPER</span>

                <span className={`${styles.floatTag} ${styles.tag1}`}>UI/UX</span>
                <span className={`${styles.floatTag} ${styles.tag2}`}>WEB</span>
                <span className={`${styles.floatTag} ${styles.tag3}`}>PORTFOLIO</span>
            </div>

        </>
    );
};