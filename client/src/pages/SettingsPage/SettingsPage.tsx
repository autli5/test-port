import { useState } from "react";

import styles from "../../styles/SettingsPage/SettingsPage.module.css";

const SettingsPage = () => {

    const [darkMode, setDarkMode] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [animations, setAnimations] = useState(true);

    return (
        <div className={styles.page}>

            <div className={styles.settingsCard}>

                {/* HEADER */}
                <div className={styles.header}>

                    <div>
                        <span className={styles.badge}>
                            SETTINGS
                        </span>

                        <h1>
                            Настройки
                        </h1>

                        <p>
                            Управляй интерфейсом, уведомлениями
                            и поведением приложения.
                        </p>
                    </div>

                </div>

                {/* SETTINGS LIST */}
                <div className={styles.settingsList}>

                    {/* DARK MODE */}
                    <div className={styles.settingItem}>

                        <div>
                            <h3>Dark Mode</h3>

                            <p>
                                Включить темную тему интерфейса
                            </p>
                        </div>

                        <button
                            className={`${styles.switch} ${darkMode ? styles.active : ""}`}
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            <span></span>
                        </button>

                    </div>

                    {/* NOTIFICATIONS */}
                    <div className={styles.settingItem}>

                        <div>
                            <h3>Notifications</h3>

                            <p>
                                Получать уведомления о новых событиях
                            </p>
                        </div>

                        <button
                            className={`${styles.switch} ${notifications ? styles.active : ""}`}
                            onClick={() => setNotifications(!notifications)}
                        >
                            <span></span>
                        </button>

                    </div>

                    {/* ANIMATIONS */}
                    <div className={styles.settingItem}>

                        <div>
                            <h3>Animations</h3>

                            <p>
                                Использовать плавные анимации интерфейса
                            </p>
                        </div>

                        <button
                            className={`${styles.switch} ${animations ? styles.active : ""}`}
                            onClick={() => setAnimations(!animations)}
                        >
                            <span></span>
                        </button>

                    </div>

                </div>

                {/* SAVE */}
                <button className={styles.saveBtn}>
                    Сохранить настройки
                </button>

            </div>

        </div>
    );
};

export default SettingsPage;