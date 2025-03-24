import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useSignInEmailPassword, useAuthenticationStatus } from "@nhost/react";

export default function Login() {
    const navigate = useNavigate();
    const { signInEmailPassword, isLoading, error } = useSignInEmailPassword();
    const { isAuthenticated } = useAuthenticationStatus(); // Check authentication status

    // State for form inputs
    const [form, setForm] = useState({ email: "", password: "" });

    // If user is already logged in, navigate to news-feed
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/news-feed");
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await signInEmailPassword(form.email, form.password);
        if (response.error) {
            console.error("Login failed:", response.error.message);
            // alert(response.error.message);
            return;
        }

        if (!response.session) {
            console.error("Login failed: No session found");
            // alert('Login failed: No session found');
            return;
        }

        navigate("/news-feed"); // Redirect after successful login
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <Alert variant="danger">{error.message}</Alert>}
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                className="custom-input"
                                placeholder="Enter your email"
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                className="custom-input"
                                placeholder="Enter your password"
                                required
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                        </Form.Group>
                        <Button className="w-100 fw-bold" type="submit" variant="primary" disabled={isLoading}>
                            {isLoading ? "Logging in..." : "Login"}
                        </Button>
                    </Form>
                    <p className="mt-3 text-center">
                        Don't have an account?
                        <span
                            className="text-primary text-link"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/signup")}> Sign Up
                        </span>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};
