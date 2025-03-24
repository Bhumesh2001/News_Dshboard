import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/styles.css";
import { useState } from "react";
import NewsFeed from "./pages/NewsFeed";
import Preferences from "./pages/Preferences";
import SavedArticles from "./pages/SavedArticles";

export default function App() {
        const [savedArticles, setSavedArticles] = useState([]);
    
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={
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
                                    <Route
                                        path="/preferences"
                                        element={<Preferences />}
                                    />
                                    <Route
                                        path="/saved-articles"
                                        element={<SavedArticles savedArticles={savedArticles} />}
                                    />
                                </Routes>
                            </Col>
                        </Row>
                    </Container>
                } />
            </Routes>
        </Router>
    );
};
