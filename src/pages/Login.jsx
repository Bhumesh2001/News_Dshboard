import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/news-feed");
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" className="custom-input" placeholder="Enter your email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" className="custom-input" placeholder="Enter your password" required />
                        </Form.Group>
                        <Button className="w-100 fw-bold" type="submit" variant="primary" onClick={handleLogin}>Login</Button>
                    </Form>
                    <p className="mt-3 text-center">
                        Don't have an account?
                        <span className="text-primary text-link" style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}> Sign Up</span>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};
