import { Navbar as BootstrapNavbar, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <Row>
            <Col className="p-0">
                <BootstrapNavbar bg="dark" variant="dark" className="navbar-custom d-flex justify-content-between px-3 m-2 rounded">
                    <BootstrapNavbar.Brand onClick={() => navigate("/news-feed")} style={{ cursor: "pointer" }}>
                        News Dashboard
                    </BootstrapNavbar.Brand>
                    <Button variant="danger" onClick={() => navigate("/login")}>Logout</Button>
                </BootstrapNavbar>
            </Col>
        </Row>
    );
};
