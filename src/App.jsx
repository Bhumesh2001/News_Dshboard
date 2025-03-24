import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewsFeed from "./pages/NewsFeed";
import Preferences from "./pages/Preferences";
import SavedArticles from "./pages/SavedArticles";
import { useState } from "react";
import { useAuthenticationStatus } from "@nhost/react"; // Import Nhost authentication hook
import "./styles/styles.css";

// Protected Route Component
function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuthenticationStatus();

    if (isLoading) {
        return <p className="text-center my-5">Checking authentication...</p>;
    }

    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function App() {
    const [savedArticles, setSavedArticles] = useState([]);

    return (
        <Router>
            <Routes>
                {/* Default Route Redirects to Login */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route
                    path="/*"
                    element={
                        <ProtectedRoute>
                            <Container fluid>
                                <Row>
                                    <Col xl={2} sm={0} className="sidebar">
                                        <Sidebar />
                                    </Col>
                                    <Col xl={10} sm={12} className="content">
                                        <Navbar />
                                        <Routes>
                                            <Route
                                                path="/news-feed"
                                                element={<NewsFeed savedArticles={savedArticles} setSavedArticles={setSavedArticles} />}
                                            />
                                            <Route path="/preferences" element={<Preferences />} />
                                            <Route path="/saved-articles" element={<SavedArticles savedArticles={savedArticles} />} />
                                        </Routes>
                                    </Col>
                                </Row>
                            </Container>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};
