import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";

export default function Signup() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/news-feed");
    };

    return (
        <Container className="signup-container d-flex justify-content-center align-items-center vh-100">
            <Card className="signup-card p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control className="custom-input" type="text" placeholder="Enter your full name" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="custom-input" type="email" placeholder="Enter your email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="custom-input" type="password" placeholder="Enter your password" required />
                        </Form.Group>
                        <Button className="w-100 signup-btn fw-bold" variant="primary" onClick={handleSignup}>Sign Up</Button>
                    </Form>
                    <p className="mt-3 text-center">
                        Already have an account?
                        <span className="text-primary text-link" onClick={() => navigate("/login")}> Login</span>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};
