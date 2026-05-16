import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import {
    onAuthStateChanged
} from "firebase/auth";

import { auth } from "../../firebase";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({
    children
}: ProtectedRouteProps) => {

    const [user, setUser] = useState<any>(undefined);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            auth,
            (currentUser) => {
                setUser(currentUser || null);
            }
        );

        return () => unsubscribe();

    }, []);

    // loading
    if (user === undefined) {
        return null;
    }

    // not authorized
    if (!user) {
        return (
            <Navigate
                to="/"
                replace
            />
        );
    }

    return children;
};

export default ProtectedRoute;