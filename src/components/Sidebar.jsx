import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className=" d-flex flex-column align-items-center">
            <div className="sidebar-header text-center mb-1">
                <img src="/breking_news.jpg" alt="Logo"
                    className="sidebar-logo mb-2 img-fluid"
                    style={{ width: "300px", height: "50px" }}
                />
            </div>
            <Nav className="flex-column w-100">
                <Nav.Link as={Link} to="/news-feed" className="sidebar-link">📰 News Feed</Nav.Link>
                <Nav.Link as={Link} to="/saved-articles" className="sidebar-link">🔖 Saved Articles</Nav.Link>
                <Nav.Link as={Link} to="/preferences" className="sidebar-link">⚙️ Preferences</Nav.Link>
            </Nav>
        </div>
    );
};