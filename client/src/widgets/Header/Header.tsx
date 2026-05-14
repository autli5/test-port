import { useEffect, useRef, useState } from "react";
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

    const [user, setUser] = useState<any>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const profileRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();

    }, []);

    // CLOSE DROPDOWN OUTSIDE CLICK
    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {

            if (
                profileRef.current &&
                !profileRef.current.contains(e.target as Node)
            ) {
                setIsProfileMenuOpen(false);
            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    // LOGIN
    const handleLogin = async () => {

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            setIsModalOpen(false);

            setEmail("");
            setPassword("");

        } catch (err: any) {

            console.log("LOGIN ERROR:", err.message);

        }

    };

    // REGISTER
    const handleRegister = async () => {

        try {

            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            setIsModalOpen(false);

            setEmail("");
            setPassword("");

        } catch (err: any) {

            console.log("REGISTER ERROR:", err.message);

        }

    };

    // LOGOUT
    const handleLogout = async () => {

        await signOut(auth);

        setIsProfileMenuOpen(false);

    };

    const displayName =
        user?.displayName ||
        user?.email?.split("@")[0];

    return (
        <header className={styles.header}>

            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.left}>
                    <Link to="/">
                        <h1>Autli</h1>
                    </Link>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>

                    {/* NOTIFICATIONS */}
                    <div className={styles.push}>
                        <img
                            src={notifications}
                            alt="notifications"
                        />
                    </div>

                    {/* USER */}
                    {user ? (

                        <div
                            className={styles.profileWrapper}
                            ref={profileRef}
                        >

                            <div
                                className={styles.profile}
                                onClick={() =>
                                    setIsProfileMenuOpen(
                                        !isProfileMenuOpen
                                    )
                                }
                            >

                                <p>
                                    Hey, {displayName}
                                </p>

                                <img
                                    src={avatar}
                                    alt="avatar"
                                />

                            </div>

                            {/* DROPDOWN */}
                            <div
                                className={`${styles.profileDropdown} ${
                                    isProfileMenuOpen
                                        ? styles.profileDropdownActive
                                        : ""
                                }`}
                            >

                                <Link
                                    to="/profile"
                                    className={styles.dropdownItem}
                                >
                                    Профиль
                                </Link>

                                <Link
                                    to="/settings"
                                    className={styles.dropdownItem}
                                >
                                    Настройки
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className={styles.logoutDropdown}
                                >
                                    Logout
                                </button>

                            </div>

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
                            {isLoginMode
                                ? "Login"
                                : "Register"}
                        </h2>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                        <button
                            onClick={
                                isLoginMode
                                    ? handleLogin
                                    : handleRegister
                            }
                        >
                            {isLoginMode
                                ? "Login"
                                : "Register"}
                        </button>

                        <p
                            onClick={() =>
                                setIsLoginMode(!isLoginMode)
                            }
                        >
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