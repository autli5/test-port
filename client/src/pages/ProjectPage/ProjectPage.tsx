import styles from "../../styles/ProjectPage/ProjectPage.module.css";
import { Link } from "react-router-dom";

export const ProjectPage = () => {
    const projects = [
        {
            title: "Portfolio Website",
            desc: "Modern developer portfolio with animations and responsive layout.",
            tech: ["React", "CSS Modules", "Responsive"],
            status: "Live",
            link: "/projects/portfolio",
            code: "https://github.com/autli5/portfolio",
        },
    ];

    return (
        <div className={styles.page}>
            {/* GRID */}
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        
                        <div className={styles.cardHeader}>
                            <span className={styles.status}>{project.status}</span>
                        </div>

                        <h2 className={styles.cardTitle}>{project.title}</h2>

                        <p className={styles.cardDesc}>{project.desc}</p>

                        <div className={styles.tech}>
                            {project.tech.map((t, i) => (
                                <span key={i}>{t}</span>
                            ))}
                        </div>

                        <div className={styles.actions}>
                            <Link to={project.link} className={styles.viewBtn}>
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