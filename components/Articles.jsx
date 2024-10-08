/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchArticles } from "@/functions/SpaceFlightApi";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const isClient = typeof window !== "undefined";
  const isMobile =
    isClient &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  useEffect(() => {
    async function fetchData() {
      const articleData = await fetchArticles(page);
      setArticles((prevArticles) => [...prevArticles, ...articleData]);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      (!isMobile &&
        window.innerHeight + window.pageYOffset >=
          document.documentElement.offsetHeight) ||
      (isMobile &&
        window.innerHeight + window.pageYOffset + 100 >=
          document.documentElement.offsetHeight)
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div key={articles.id} className="articles none">
      <h3>Space News Articles</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h4>{article.title}</h4>
            <p className="summary">{article.summary}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More...
            </a>
            <img
              className="image-container"
              src={article.image_url}
              alt={article.title}
            />
            <div className="article-additional-details">
              <div className="published-at">
                <p> Published at:</p>
                <span>{new Date(article.published_at).toLocaleString()}</span>
              </div>
              <div className="updated-at">
                <p>Updated at:</p>
                <span>{new Date(article.updated_at).toLocaleString()}</span>
              </div>
              <div className="news-site">
                <p>News Site:</p>
                <span>{article.news_site}</span>
              </div>
              <div className="featured">
                <p>Featured:</p>
                <span>{article.featured ? "Yes" : "No"}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Articles;
