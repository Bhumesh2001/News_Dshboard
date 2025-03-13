import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NewsFeed from "../pages/NewsFeed";
import Preferences from "../pages/Preferences";
import SavedArticles from "../pages/SavedArticles";

export default function AppRoutes() {
    const [savedArticles, setSavedArticles] = useState([]);

    return (
        <Routes>
            <Route
                path="/news-feed"
                element={<NewsFeed savedArticles={savedArticles} setSavedArticles={setSavedArticles} />}
            />
            <Route
                path="/preferences"
                element={<Preferences />}
            />
            <Route
                path="/saved-articles"
                element={<SavedArticles savedArticles={savedArticles} />}
            />
        </Routes>
    );
};
