import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";

import { auth } from "../../firebase";

import styles from "../../styles/Header/Header.module.css";
import avatar from "../../assets/avatar.jpeg";
import notifications from "../../assets/notifications.svg";

const Header = () => {

    const [user, setUser] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsModalOpen(false);
            setEmail("");
            setPassword("");
        } catch (err) {
            console.log("LOGIN ERROR:", err.message);
        }
    };

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setIsModalOpen(false);
            setEmail("");
            setPassword("");
        } catch (err) {
            console.log("REGISTER ERROR:", err.message);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
    };

    const displayName =
        user?.displayName ||
        user?.email?.split("@")[0];

    return (
        <header className={styles.header}>

            <div className={styles.container}>

                <div className={styles.left}>
                    <Link to="/">
                        <h1>Autli</h1>
                    </Link>
                </div>

                <div className={styles.right}>

                    <div className={styles.push}>
                        <img src={notifications} alt="notifications" />
                    </div>

                    {user ? (
                        <div className={styles.profile}>

                            <p>Hey, {displayName}</p>

                            <img src={avatar} alt="avatar" />

                            <button
                                onClick={handleLogout}
                                className={styles.logoutBtn}
                            >
                                Logout
                            </button>

                        </div>
                    ) : (
                        <button
                            className={styles.loginButton}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Войти
                        </button>
                    )}

                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <h2>
                            {isLoginMode ? "Login" : "Register"}
                        </h2>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            onClick={
                                isLoginMode
                                    ? handleLogin
                                    : handleRegister
                            }
                        >
                            {isLoginMode ? "Login" : "Register"}
                        </button>

                        <p onClick={() => setIsLoginMode(!isLoginMode)}>
                            {isLoginMode
                                ? "Create account"
                                : "Already have account?"}
                        </p>

                    </div>
                </div>
            )}

        </header>
    );
};

export default Header;