import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useSignUpEmailPassword } from "@nhost/react";

export default function Signup() {
    const navigate = useNavigate();
    const { signUpEmailPassword, isLoading, error } = useSignUpEmailPassword();

    // State to handle form inputs
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    // Function to handle signup
    const handleSignup = async (e) => {
        e.preventDefault();
        const { session, error } = await signUpEmailPassword(form.email, form.password);

        if (!error) {
            navigate("/news-feed"); // Redirect after successful signup
        }
    };

    return (
        <Container className="signup-container d-flex justify-content-center align-items-center vh-100">
            <Card className="signup-card p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error.message}</Alert>}
                    <Form onSubmit={handleSignup}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                className="custom-input"
                                type="text"
                                placeholder="Enter your full name"
                                required
                                value={form.fullName}
                                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                className="custom-input"
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className="custom-input"
                                type="password"
                                placeholder="Enter your password"
                                required
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                        </Form.Group>
                        <Button className="w-100 signup-btn fw-bold"
                            variant="primary" type="submit"
                            disabled={isLoading}>
                            {isLoading ? "Signing Up..." : "Sign Up"}
                        </Button>
                    </Form>
                    <p className="mt-3 text-center">
                        Already have an account?
                        <span
                            className="text-primary text-link"
                            onClick={() => navigate("/login")}> Login
                        </span>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};
