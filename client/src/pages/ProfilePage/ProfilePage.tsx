import { useEffect, useState } from "react";

import { auth } from "../../firebase";

import {
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    updatePassword
} from "firebase/auth";

import styles from "../../styles/ProfilePage/ProfilePage.module.css";

import avatar from "../../assets/avatar.jpeg";

const ProfilePage = () => {

    const [user, setUser] = useState<any>(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [success, setSuccess] = useState("");

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            if (currentUser) {
                setUser(currentUser);

                setName(
                    currentUser.displayName ||
                    currentUser.email?.split("@")[0] ||
                    ""
                );

                setEmail(currentUser.email || "");
            }

        });

        return () => unsubscribe();

    }, []);

    const handleSave = async () => {

        if (!auth.currentUser) return;

        try {

            await updateProfile(auth.currentUser, {
                displayName: name
            });

            if (email !== auth.currentUser.email) {
                await updateEmail(auth.currentUser, email);
            }

            if (password.length > 0) {
                await updatePassword(auth.currentUser, password);
            }

            setSuccess("Профиль успешно обновлен");

            setTimeout(() => {
                setSuccess("");
            }, 3000);

        } catch (err: any) {
            console.log(err.message);
        }

    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {

        if (e.key === "Enter") {
            handleSave();
        }

    };

    return (
        <div className={styles.page}>

            <div className={styles.profileCard}>

                <div className={styles.top}>

                    <img
                        src={avatar}
                        alt="avatar"
                    />

                    <div>
                        <h1>{name}</h1>
                        <p>{email}</p>
                    </div>

                </div>

                <div className={styles.form}>

                    <div className={styles.inputGroup}>
                        <label>Username</label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Email</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>New Password</label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <button
                        className={styles.saveBtn}
                        onClick={handleSave}
                    >
                        Сохранить
                    </button>

                    {success && (
                        <span className={styles.success}>
                            {success}
                        </span>
                    )}

                </div>

            </div>

        </div>
    );
};

export default ProfilePage;