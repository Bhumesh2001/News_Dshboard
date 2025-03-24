import { Navbar as BootstrapNavbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "@nhost/react";

export default function Navbar() {
    const navigate = useNavigate();
    const { signOut } = useSignOut();

    const handleLogout = () => {
        signOut(); // Logs out the user
        navigate("/login");
    };

    return (
        <BootstrapNavbar bg="dark" variant="dark" className="d-flex justify-content-between px-3 m-2 rounded">
            <BootstrapNavbar.Brand onClick={() => navigate("/news-feed")} style={{ cursor: "pointer" }}>
                News Dashboard
            </BootstrapNavbar.Brand>
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </BootstrapNavbar>
    );
};
