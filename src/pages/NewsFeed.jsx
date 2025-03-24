import { useState } from "react";
import { useAuthenticationStatus } from "@nhost/react";
import { Navigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const dummyNews = [
    {
        id: 1,
        title: "Breaking News: Market Hits Record Highs",
        description: "Stock markets surged to record highs today, with major indices reporting significant gains...",
        image: "/news1.jpg",
        date: "March 13, 2025",
    },
    {
        id: 2,
        title: "Tech Giant Unveils New AI Tool",
        description: "A major tech company has just introduced a revolutionary AI tool aimed at improving productivity...",
        image: "/news2.jpg",
        date: "March 12, 2025",
    },
    {
        id: 3,
        title: "Global Warming Effects Intensify",
        description: "Scientists report an alarming increase in global temperatures, urging immediate climate action...",
        image: "/news3.jpg",
        date: "March 11, 2025",
    }
];

export default function NewsFeed({ savedArticles = [], setSavedArticles }) {
    const { isAuthenticated, isLoading } = useAuthenticationStatus();
    const [readArticles, setReadArticles] = useState([]);

    if (isLoading) {
        return <p className="text-center my-5">Checking authentication...</p>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    const markAsRead = (id) => {
        setReadArticles([...readArticles, id]);
    };

    const saveArticle = (news) => {
        if (!savedArticles.some((article) => article.id === news.id)) {
            setSavedArticles([...savedArticles, news]);
        };
    };

    return (
        <div className="news-container">
            <h2 className="text-center my-4">📰 Latest News</h2>
            <div className="news-scrollable">
                {dummyNews.map((news) => (
                    <Card key={news.id} className="shadow-sm news-card mb-4">
                        <Card.Img variant="top" src={news.image} alt={news.title} className="news-image" />
                        <Card.Body>
                            <Card.Title>{news.title}</Card.Title>
                            <Card.Text className="text-muted small">{news.date}</Card.Text>
                            <Card.Text>{news.description}</Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button
                                    variant="success"
                                    size="sm"
                                    disabled={readArticles.includes(news.id)}
                                    onClick={() => markAsRead(news.id)}
                                >
                                    {readArticles.includes(news.id) ? "Read" : "Mark as Read"}
                                </Button>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    onClick={() => saveArticle(news)}
                                >
                                    {savedArticles.some((article) => article.id === news.id) ? "Saved" : "Save"}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};
