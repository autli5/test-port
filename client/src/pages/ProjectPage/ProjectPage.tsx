import styles from "../../styles/ProjectPage/ProjectPage.module.css";
import { Link } from "react-router-dom";

import { projects } from "../../entities/project/project.data";

export const ProjectPage = () => {

    return (
        <div className={styles.page}>

            {/* GRID */}
            <div className={styles.grid}>

                {projects.map((project) => (

                    <div
                        key={project.id}
                        className={styles.card}
                    >

                        <div className={styles.cardHeader}>

                            <span className={styles.status}>
                                {project.status}
                            </span>

                        </div>

                        <h2 className={styles.cardTitle}>
                            {project.title}
                        </h2>

                        <p className={styles.cardDesc}>
                            {project.desc}
                        </p>

                        <div className={styles.tech}>

                            {project.tech.map((t, i) => (

                                <span key={i}>
                                    {t}
                                </span>

                            ))}

                        </div>

                        <div className={styles.actions}>

                            <Link
                                to={project.link}
                                className={styles.viewBtn}
                            >
                                Подробнее
                            </Link>

                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.codeBtn}
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};