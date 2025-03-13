import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/styles.css";

export default function App() {
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
                                <AppRoutes />
                                {/* <Footer /> */}
                            </Col>
                        </Row>
                    </Container>
                } />
            </Routes>
        </Router>
    );
};
