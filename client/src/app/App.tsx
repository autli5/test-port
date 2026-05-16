import "../styles/global.css";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Header from "../widgets/Header/Header";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

import { HomePage } from "../pages/HomePage/HomePage";
import { ProjectPage } from "../pages/ProjectPage/ProjectPage";

import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";

function App() {

    return (
        <div className="site siteContainer">

            <BrowserRouter>

                <Header />

                <Routes>

                    <Route
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/projects"
                        element={<ProjectPage />}
                    />

                    {/* PROTECTED PROFILE */}
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <ProfilePage />
                            </ProtectedRoute>
                        }
                    />

                    {/* PROTECTED SETTINGS */}
                    <Route
                        path="/settings"
                        element={
                            <ProtectedRoute>
                                <SettingsPage />
                            </ProtectedRoute>
                        }
                    />

                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;