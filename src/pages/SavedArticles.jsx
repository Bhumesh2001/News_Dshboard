import { Card } from "react-bootstrap";

export default function SavedArticles({ savedArticles = [] }) {
    return (
        <div className="news-container">
            <h2 className="text-center my-4">🔖 Saved Articles</h2>
            <div className="news-scrollable">
                {savedArticles.length === 0 ? (
                    <p className="text-center">No saved articles yet.</p>
                ) : (
                    savedArticles.map((news) => (
                        <Card key={news.id} className="shadow-sm news-card mb-4">
                            <Card.Img variant="top" src={news.image} alt={news.title} className="news-image" />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text className="text-muted small">{news.date}</Card.Text>
                                <Card.Text>{news.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};
